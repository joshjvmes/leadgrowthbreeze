import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';
import { toast } from 'sonner';

const fromSupabase = async (query) => {
    try {
        const { data, error } = await query;
        if (error) {
            console.error('Supabase error:', error);
            return { error: error.message };
        }
        return { data };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: 'An unexpected error occurred' };
    }
};

export const useArticle = (slug) => {
    const queryClient = useQueryClient();

    return useQuery({
        queryKey: ['article', slug],
        queryFn: async () => {
            try {
                const result = await fromSupabase(supabase.from('Articles').select('*').eq('url', slug).single());
                if (result.error) {
                    console.error('Error fetching article:', result.error);
                    toast.error('Error fetching article. Please try again.');
                    return { error: result.error };
                }

                // Fetch similar articles
                const similarArticles = await fromSupabase(
                    supabase.from('Articles')
                        .select('id, title, url')
                        .neq('url', slug)
                        .limit(3)
                );

                return { 
                    article: result.data,
                    similarArticles: similarArticles.data || []
                };
            } catch (error) {
                console.error('CORS or network error:', error);
                toast.error('Network error. Please check your connection and try again.');
                return { error: 'Network error' };
            }
        },
    });
};

export const useArticles = () => useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
        const result = await fromSupabase(supabase.from('Articles').select('*'));
        if (result.error) {
            if (result.error.includes("relation \"public.Articles\" does not exist")) {
                toast.error('The Articles table does not exist in the database. Please create it first.');
                return { data: [], error: 'Table does not exist' };
            }
            console.log('Error fetching articles:', result.error);
            return { error: result.error };
        }
        return result;
    },
    retry: false,
});

export const useAddArticle = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newArticle) => fromSupabase(supabase.from('Articles').insert([newArticle])),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['articles'] });
        },
    });
};

export const useUpdateArticle = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('Articles').update(updateData).eq('id', id)),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['articles'] });
            queryClient.invalidateQueries({ queryKey: ['article', variables.id] });
        },
    });
};

export const useDeleteArticle = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('Articles').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['articles'] });
        },
    });
};
