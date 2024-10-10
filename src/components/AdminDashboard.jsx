import React, { useState } from 'react';
import { useArticles, useAddArticle, useUpdateArticle, useDeleteArticle, useContactForms } from '../integrations/supabase';

const AdminDashboard = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { data: articles, isLoading: articlesLoading, error: articlesError } = useArticles();
  const { data: contactForms, isLoading: contactFormsLoading, error: contactFormsError } = useContactForms();
  const addArticle = useAddArticle();
  const updateArticle = useUpdateArticle();
  const deleteArticle = useDeleteArticle();

  const handleAddArticle = (event) => {
    event.preventDefault();
    const newArticle = {
      title: event.target.title.value,
      content: event.target.content.value,
      author_id: 1, // Replace with actual author ID
    };
    addArticle.mutate(newArticle);
  };

  const handleUpdateArticle = (event) => {
    event.preventDefault();
    const updatedArticle = {
      id: selectedArticle.id,
      title: event.target.title.value,
      content: event.target.content.value,
    };
    updateArticle.mutate(updatedArticle);
  };

  const handleDeleteArticle = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteArticle.mutate(id);
    }
  };

  if (articlesLoading || contactFormsLoading) return <div>Loading...</div>;
  if (articlesError) return <div>Error loading articles: {articlesError.message}</div>;
  if (contactFormsError) return <div>Error loading contact forms: {contactFormsError.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Articles</h2>
        <form onSubmit={selectedArticle ? handleUpdateArticle : handleAddArticle} className="mb-4">
          <input type="text" name="title" placeholder="Title" defaultValue={selectedArticle?.title} className="border p-2 mr-2" />
          <textarea name="content" placeholder="Content" defaultValue={selectedArticle?.content} className="border p-2 mr-2" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {selectedArticle ? 'Update Article' : 'Add Article'}
          </button>
        </form>
        <ul>
          {articles?.map((article) => (
            <li key={article.id} className="mb-2">
              {article.title}
              <button onClick={() => setSelectedArticle(article)} className="ml-2 bg-yellow-500 text-white p-1 rounded">Edit</button>
              <button onClick={() => handleDeleteArticle(article.id)} className="ml-2 bg-red-500 text-white p-1 rounded">Delete</button>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Form Submissions</h2>
        <ul>
          {contactForms?.map((form) => (
            <li key={form.id} className="mb-2">
              {form.name} - {form.email}: {form.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;