import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message);
    }
    return data;
};

export const useContactForm = (id) => useQuery({
    queryKey: ['contactForm', id],
    queryFn: () => fromSupabase(supabase.from('contact_submissions').select('*').eq('id', id).single()),
});

export const useContactForms = () => useQuery({
    queryKey: ['contactForms'],
    queryFn: () => fromSupabase(supabase.from('contact_submissions').select('*')),
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
