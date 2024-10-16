import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/*
### Contact

| name       | type                     | format    | required |
|------------|--------------------------|-----------|----------|
| id         | integer                  | bigint    | true     |
| created_at | string                   | timestamp | true     |
| name       | string                   | text      | false    |
| email      | string                   | text      | false    |
| message    | string                   | text      | false    |

Note: 
- 'id' is the Primary Key.
- 'created_at' has a default value of now().

No foreign key relationships are defined for this table.
*/

export const useContact = (id) => useQuery({
    queryKey: ['contact', id],
    queryFn: () => fromSupabase(supabase.from('Contact').select('*').eq('id', id).single()),
});

export const useContactForms = () => useQuery({
    queryKey: ['contacts'],
    queryFn: () => fromSupabase(supabase.from('Contact').select('*')),
});

export const useAddContactForm = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newContact) => fromSupabase(supabase.from('Contact').insert([newContact])),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
        },
    });
};

export const useUpdateContact = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('Contact').update(updateData).eq('id', id)),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
            queryClient.invalidateQueries({ queryKey: ['contact', variables.id] });
        },
    });
};

export const useDeleteContact = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('Contact').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
        },
    });
};