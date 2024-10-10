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

export const useContactForm = (id) => useQuery({
    queryKey: ['contactForm', id],
    queryFn: async () => {
        const result = await fromSupabase(supabase.from('contact_submissions').select('*').eq('id', id).single());
        if (result.error && result.error.code === '42P01') {
            return { error: 'Table does not exist' };
        }
        return result;
    },
});

export const useContactForms = () => useQuery({
    queryKey: ['contactForms'],
    queryFn: async () => {
        const result = await fromSupabase(supabase.from('contact_submissions').select('*'));
        if (result.error && result.error.code === '42P01') {
            return { error: 'Table does not exist' };
        }
        return result;
    },
    retry: false,
});

export const useAddContactForm = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newContactForm) => fromSupabase(supabase.from('contact_submissions').insert([newContactForm])),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contactForms'] });
        },
    });
};