import React from 'react';
import { useArticles, useContactForms } from '../integrations/supabase';

const AdminDashboard = () => {
  const { data: articles, isLoading: articlesLoading, error: articlesError } = useArticles();
  const { data: contactForms, isLoading: contactFormsLoading, error: contactFormsError } = useContactForms();

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
              <>{item.title}</>
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
        {renderContent(articles?.data, articlesLoading, articles?.error || articlesError, 'articles')}
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Form Submissions</h2>
        {renderContent(contactForms?.data, contactFormsLoading, contactForms?.error || contactFormsError, 'contact submissions')}
      </div>
    </div>
  );
};

export default AdminDashboard;