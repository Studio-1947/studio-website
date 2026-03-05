import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { blogs } from '../../data/blogData';
import { Share2 } from 'lucide-react';
import { toast } from 'sonner';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.slug === slug);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy link: ', err);
      }
    }
  };

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
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-7 rounded-3xl overflow-hidden shadow-2xl relative">
            {blog.coverImage === '/logo.svg' ? (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-royal-600 to-indigo-800 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-white/20 text-7xl md:text-8xl mb-6 block">✧</span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-widest uppercase">
                  Studio 1947
                </span>
                <span className="text-royal-200 text-xl md:text-2xl font-light tracking-widest uppercase mt-4">
                  Blogs
                </span>
              </div>
            ) : (
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
              />
            )}
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
              <button
                onClick={handleShare}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-royal-600 hover:text-white transition-colors"
                title="Share article"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
