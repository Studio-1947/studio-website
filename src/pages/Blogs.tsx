import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { blogs } from '../data/blogData';

const Blogs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-32 pb-24 transition-colors duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-royal-600 dark:text-royal-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Thoughts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              Studio 1947<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-indigo-600 dark:from-royal-400 dark:to-indigo-400">
                Journal
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light">
              Explorations, essays, and stories from our team. We write about design, culture, technology, and the intersections between them.
            </p>
          </div>

          {/* Featured Blog (The first one) */}
          {blogs.length > 0 && (
            <div className="mb-16 md:mb-24 relative group">
              <Link to={`/blogs/${blogs[0].slug}`} className="block h-full relative rounded-3xl overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 md:aspect-h-7 lg:aspect-h-6">
                  <img
                    src={blogs[0].coverImage}
                    alt={blogs[0].title}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-royal-600/20 text-royal-300 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase border border-royal-500/30">
                      Featured
                    </span>
                    <span className="text-gray-300 text-sm font-medium">{blogs[0].date}</span>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <span className="hidden sm:inline text-gray-300 text-sm">{blogs[0].author}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 line-clamp-2 leading-tight">
                    {blogs[0].title}
                  </h2>
                  <p className="text-gray-300 md:text-lg mb-6 line-clamp-2 md:line-clamp-3 max-w-3xl">
                    {blogs[0].excerpt}
                  </p>
                  <span className="inline-flex items-center text-royal-400 font-semibold group-hover:text-royal-300 transition-colors">
                    Read Article
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Blog Grid (The rest) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {blogs.slice(1).map((blog) => (
              <article key={blog.slug} className="group flex flex-col h-full">
                <Link to={`/blogs/${blog.slug}`} className="block relative rounded-2xl overflow-hidden mb-6 shadow-md shadow-gray-200 dark:shadow-none aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {blog.language && blog.language !== 'English' && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                        {blog.language}
                      </span>
                    </div>
                  )}
                </Link>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <time dateTime={blog.date}>{blog.date}</time>
                    <span>•</span>
                    <span>{blog.author}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-royal-600 dark:group-hover:text-royal-400 transition-colors">
                    <Link to={`/blogs/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-1">
                    {blog.excerpt}
                  </p>
                  <Link 
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center text-sm font-bold text-royal-600 dark:text-royal-400 group-hover:text-royal-700 dark:group-hover:text-royal-300"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
