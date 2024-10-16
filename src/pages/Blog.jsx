import React from 'react';
import { Link } from 'react-router-dom';
import { useArticles } from '../integrations/supabase';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const { data: articles, isLoading, error } = useArticles();

  if (isLoading) return <div className="text-center py-8">Loading articles...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading articles: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center font-poppins">Our Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles?.data?.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-xl p-6 text-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-[#0097FD]">{article.title}</h2>
              <p className="mb-4">{article.content && article.content.substring(0, 150)}...</p>
              <Link to={`/blog/${article.id}`}>
                <Button className="bg-[#E51010] hover:bg-[#0097FD] text-white">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;