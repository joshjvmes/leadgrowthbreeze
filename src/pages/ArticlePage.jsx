import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useArticle } from '../integrations/supabase';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const ArticlePage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useArticle(slug);

  if (isLoading) return <div className="text-center py-8">Loading article...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading article: {error.message || error}</div>;
  if (!data?.article) return <div className="text-center py-8">Article not found</div>;

  const { article, similarArticles } = data;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white py-16">
      <div className="container mx-auto px-4">
        <Link to="/blog" className="inline-block mb-8">
          <Button variant="outline" className="bg-white text-[#0097FD] hover:bg-[#E51010] hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </Link>
        <article className="bg-white text-gray-800 rounded-lg shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">{article.subtitle}</h2>
          <p className="text-sm text-gray-500 mb-6">By {article.author}</p>
          <div className="prose max-w-none">
            {article.content && article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>

        {similarArticles && similarArticles.length > 0 && (
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Similar Articles</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {similarArticles.map((similarArticle) => (
                <Link 
                  key={similarArticle.id} 
                  to={`/blog/${similarArticle.url}`}
                  className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-[#0097FD]">{similarArticle.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;