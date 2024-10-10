import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) {
        console.error('Supabase error:', error);
        return { error };
    }
    return { data };
};

export const useArticle = (id) => useQuery({
    queryKey: ['article', id],
    queryFn: async () => {
        const result = await fromSupabase(supabase.from('Article').select('*').eq('id', id).single());
        if (result.error && result.error.code === '42P01') {
            return { error: 'Table does not exist' };
        }
        return result;
    },
});

export const useArticles = () => useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
        const result = await fromSupabase(supabase.from('Article').select('*'));
        if (result.error && result.error.code === '42P01') {
            return { error: 'Table does not exist' };
        }
        return result;
    },
    retry: false,
});

export const useAddArticle = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newArticle) => fromSupabase(supabase.from('Article').insert([newArticle])),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['articles'] });
        },
    });
};

export const useUpdateArticle = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('Article').update(updateData).eq('id', id)),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['articles'] });
            queryClient.invalidateQueries({ queryKey: ['article', variables.id] });
        },
    });
};

export const useDeleteArticle = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('Article').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['articles'] });
        },
    });
};