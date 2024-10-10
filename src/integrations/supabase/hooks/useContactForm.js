import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/*
### ContactForm

| name       | type     | format    | required |
|------------|----------|-----------|----------|
| id         | integer  | bigint    | true     |
| name       | string   | text      | true     |
| email      | string   | text      | true     |
| message    | string   | text      | true     |
| created_at | string   | timestamp | true     |

Note: 
- 'id' is the Primary Key.
- 'created_at' has a default value of now().
*/

export const useContactForm = (id) => useQuery({
    queryKey: ['contactForm', id],
    queryFn: () => fromSupabase(supabase.from('ContactForm').select('*').eq('id', id).single()),
});

export const useContactForms = () => useQuery({
    queryKey: ['contactForms'],
    queryFn: () => fromSupabase(supabase.from('ContactForm').select('*')),
});

export const useAddContactForm = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newContactForm) => fromSupabase(supabase.from('ContactForm').insert([newContactForm])),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contactForms'] });
        },
    });
};