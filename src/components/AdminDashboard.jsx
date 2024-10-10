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
      <ul>
        {data.map((item) => (
          <li key={item.id} className="mb-2">
            {entityName === 'articles' ? (
              <>{item.title}</>
            ) : (
              <>{item.name} - {item.email}: {item.message}</>
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
        {renderContent(articles, articlesLoading, articlesError, 'articles')}
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Form Submissions</h2>
        {renderContent(contactForms, contactFormsLoading, contactFormsError, 'contact submissions')}
      </div>
    </div>
  );
};

export default AdminDashboard;