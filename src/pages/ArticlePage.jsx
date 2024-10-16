import React from 'react';
import { useParams } from 'react-router-dom';
import { useArticle } from '../integrations/supabase';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ArticlePage = () => {
  const { id } = useParams();
  const { data: article, isLoading, error } = useArticle(id);

  if (isLoading) return <div className="text-center py-8">Loading article...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading article: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white py-16">
      <div className="container mx-auto px-4">
        <Link to="/blog" className="text-white hover:text-[#E51010] mb-4 inline-block">
          <Button variant="outline">&larr; Back to Blog</Button>
        </Link>
        <article className="bg-white text-gray-800 rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <div className="prose max-w-none">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;