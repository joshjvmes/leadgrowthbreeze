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

export const useContactForm = (id) => useQuery({
    queryKey: ['contactForm', id],
    queryFn: async () => {
        const result = await fromSupabase(supabase.from('contact_submissions').select('*').eq('id', id).single());
        if (result.error && result.error.includes("relation \"public.contact_submissions\" does not exist")) {
            toast.error('The contact_submissions table does not exist in the database. Please create it first.');
            return { error: 'Table does not exist' };
        }
        return result;
    },
});

export const useContactForms = () => useQuery({
    queryKey: ['contactForms'],
    queryFn: async () => {
        const result = await fromSupabase(supabase.from('contact_submissions').select('*'));
        if (result.error && result.error.includes("relation \"public.contact_submissions\" does not exist")) {
            toast.error('The contact_submissions table does not exist in the database. Please create it first.');
            return { data: [], error: 'Table does not exist' };
        }
        return result;
    },
    retry: false,
});

export const useAddContactForm = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (newContactForm) => {
            const result = await fromSupabase(supabase.from('contact_submissions').insert([newContactForm]));
            if (result.error && result.error.includes("relation \"public.contact_submissions\" does not exist")) {
                toast.error('The contact_submissions table does not exist in the database. Please create it first.');
                return { error: 'Table does not exist' };
            }
            return result;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contactForms'] });
        },
    });
};