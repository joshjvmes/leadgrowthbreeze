import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/*
### Article

| name       | type     | format    | required |
|------------|----------|-----------|----------|
| id         | integer  | bigint    | true     |
| title      | string   | text      | true     |
| content    | string   | text      | true     |
| author_id  | integer  | bigint    | true     |
| created_at | string   | timestamp | true     |
| updated_at | string   | timestamp | true     |

Note: 
- 'id' is the Primary Key.
- 'created_at' and 'updated_at' have default values of now().
- 'author_id' is a foreign key referencing the 'id' column in the 'users' table.
*/

export const useArticle = (id) => useQuery({
    queryKey: ['article', id],
    queryFn: () => fromSupabase(supabase.from('Article').select('*').eq('id', id).single()),
});

export const useArticles = () => useQuery({
    queryKey: ['articles'],
    queryFn: () => fromSupabase(supabase.from('Article').select('*')),
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