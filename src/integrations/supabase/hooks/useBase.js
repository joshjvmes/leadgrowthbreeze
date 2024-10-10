import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/*
### Base

| name       | type                     | format    | required |
|------------|--------------------------|-----------|----------|
| id         | integer                  | bigint    | true     |
| created_at | string                   | timestamp | true     |

Note: 
- 'id' is the Primary Key.
- 'created_at' has a default value of now().

No foreign key relationships are defined for this table.
*/

export const useBase = (id) => useQuery({
    queryKey: ['base', id],
    queryFn: () => fromSupabase(supabase.from('Base').select('*').eq('id', id).single()),
});

export const useBases = () => useQuery({
    queryKey: ['bases'],
    queryFn: () => fromSupabase(supabase.from('Base').select('*')),
});

export const useAddBase = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newBase) => fromSupabase(supabase.from('Base').insert([newBase])),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bases'] });
        },
    });
};

export const useUpdateBase = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('Base').update(updateData).eq('id', id)),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['bases'] });
            queryClient.invalidateQueries({ queryKey: ['base', variables.id] });
        },
    });
};

export const useDeleteBase = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('Base').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bases'] });
        },
    });
};