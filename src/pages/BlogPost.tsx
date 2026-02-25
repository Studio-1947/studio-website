import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { blogs } from '../data/blogData';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  if (!blog) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex flex-col items-center justify-center py-32 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <button 
            onClick={() => navigate('/blogs')}
            className="px-6 py-3 bg-royal-600 hover:bg-royal-700 text-white rounded-full font-semibold transition-colors"
          >
            Back to Journal
          </button>
        </div>
      </Layout>
    );
  }

  // Format the content string into paragraphs by splitting on newlines
  const paragraphs = blog.content.split('\n').filter(p => p.trim() !== '');

  return (
    <Layout>
      <article className="bg-white dark:bg-gray-900 pt-24 md:pt-32 pb-24 transition-colors duration-300 min-h-screen">
        
        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 text-center">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-royal-600 dark:text-royal-400 hover:text-royal-800 dark:hover:text-royal-300 font-medium mb-8 md:mb-12 transition-colors uppercase tracking-wider text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Journal
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm">
            <span className="text-gray-500 dark:text-gray-400 font-medium">
              {blog.date}
            </span>
            <span className="text-gray-400">•</span>
            {blog.language && blog.language !== 'English' && (
              <>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-semibold">
                  {blog.language}
                </span>
                <span className="text-gray-400">•</span>
              </>
            )}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              Written by <span className="text-royal-600 dark:text-royal-400">{blog.author}</span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            {blog.title}
          </h1>
        </header>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-7 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={blog.coverImage} 
              alt={blog.title}
              className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg md:prose-xl dark:prose-invert prose-royal mx-auto">
            {paragraphs.map((paragraph, idx) => {
              // Basic check for headers
              if (paragraph.startsWith('The Origins') || paragraph.startsWith('Conclusion:') || paragraph.length < 50 && paragraph.endsWith(':')) {
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                    {paragraph.replace(/^#+\s*/, '')}
                  </h2>
                );
              }
              
              // Basic check for lists
              if (paragraph.startsWith('●') || paragraph.startsWith('*')) {
                return (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                    {paragraph.substring(1).trim()}
                  </li>
                );
              }

              return (
                <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>
          
          {/* Share / Tags section (placeholder) */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-3">
              <span className="text-gray-500 font-medium">Tags:</span>
              <span className="text-royal-600 dark:text-royal-400 font-medium">Culture</span>
              <span className="text-royal-600 dark:text-royal-400 font-medium">Stories</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-500 font-medium">Share this article:</span>
              <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-royal-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
