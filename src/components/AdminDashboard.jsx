import React, { useState } from 'react';
import { useArticles, useAddArticle, useUpdateArticle, useDeleteArticle, useContactForms } from '../integrations/supabase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { data: articles, isLoading: articlesLoading, error: articlesError } = useArticles();
  const { data: contactForms, isLoading: contactFormsLoading, error: contactFormsError } = useContactForms();
  const addArticle = useAddArticle();
  const updateArticle = useUpdateArticle();
  const deleteArticle = useDeleteArticle();

  const [editingArticle, setEditingArticle] = useState(null);
  const [newArticle, setNewArticle] = useState({ title: '', content: '' });
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleEditArticle = (article) => {
    setEditingArticle({ ...article });
  };

  const handleUpdateArticle = async () => {
    try {
      await updateArticle.mutateAsync(editingArticle);
      setEditingArticle(null);
      toast.success('Article updated successfully');
    } catch (error) {
      toast.error('Error updating article: ' + error.message);
    }
  };

  const handleDeleteArticle = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        await deleteArticle.mutateAsync(id);
        toast.success('Article deleted successfully');
      } catch (error) {
        toast.error('Error deleting article: ' + error.message);
      }
    }
  };

  const handleAddArticle = async () => {
    try {
      await addArticle.mutateAsync(newArticle);
      setNewArticle({ title: '', content: '' });
      setShowCreateForm(false);
      toast.success('Article added successfully');
    } catch (error) {
      toast.error('Error adding article: ' + error.message);
    }
  };

  const renderContent = (data, isLoading, error, entityName) => {
    if (isLoading) return <p>Loading {entityName}...</p>;
    if (error) {
      console.error(`Error loading ${entityName}:`, error);
      return <p>Error loading {entityName}. The table might not exist in the database.</p>;
    }
    if (!data || data.length === 0) return <p>No {entityName} found.</p>;

    return (
      <ul className="space-y-4">
        {data.map((item) => (
          <li key={item.id} className="bg-white p-4 rounded-lg shadow">
            {entityName === 'articles' ? (
              <>
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-2">{item.content && item.content.substring(0, 100)}...</p>
                <div className="mt-2 space-x-2">
                  <Button onClick={() => handleEditArticle(item)} className="bg-blue-500 hover:bg-blue-600">Edit</Button>
                  <Button onClick={() => handleDeleteArticle(item.id)} className="bg-red-500 hover:bg-red-600">Delete</Button>
                  <Link to={`/blog/${item.id}`} className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">View</Link>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.email}</p>
                <p className="mt-2">{item.message}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Articles</h2>
        <Button onClick={() => setShowCreateForm(!showCreateForm)} className="bg-green-500 hover:bg-green-600 mb-4">
          {showCreateForm ? 'Cancel' : 'Create New Article'}
        </Button>
        {showCreateForm && (
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Title"
              value={newArticle.title}
              onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
              className="mb-2"
            />
            <Textarea
              placeholder="Content"
              value={newArticle.content}
              onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
              className="mb-2"
            />
            <Button onClick={handleAddArticle} className="bg-blue-500 hover:bg-blue-600">Add Article</Button>
          </div>
        )}
        {renderContent(articles?.data, articlesLoading, articles?.error || articlesError, 'articles')}
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Form Submissions</h2>
        {renderContent(contactForms?.data, contactFormsLoading, contactForms?.error || contactFormsError, 'contact submissions')}
      </div>

      {editingArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Edit Article</h2>
            <Input
              type="text"
              value={editingArticle.title}
              onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
              className="mb-2"
            />
            <Textarea
              value={editingArticle.content}
              onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
              className="mb-2"
            />
            <div className="flex justify-end space-x-2">
              <Button onClick={() => setEditingArticle(null)} className="bg-gray-500 hover:bg-gray-600">Cancel</Button>
              <Button onClick={handleUpdateArticle} className="bg-blue-500 hover:bg-blue-600">Update</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
