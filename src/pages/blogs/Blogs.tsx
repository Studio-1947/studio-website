import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { blogs } from '../../data/blogData';
import { usePageMeta } from '../../hooks/usePageMeta';
import { CardContainer, CardBody, CardItem } from '../../components/ui/3d-card';

const Blogs: React.FC = () => {
  usePageMeta({ 
    title: 'Journal – Studio 1947', 
    description: 'Explorations, essays, and stories from the Studio 1947 team on design, culture, technology, and where they intersect.' 
  });
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      {/* 1. Full Screen Hero Cover */}
      <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Full Screen Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1.5s]"
          style={{ backgroundImage: "url('/blogs/blog_hero.png')" }}
        />
        {/* Subtle dark overlay for premium high contrast readability */}
        <div className="absolute inset-0 bg-black/40 z-1" />

        {/* Center Aligned Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 select-none pt-12">
          <span className="text-[#FFEAEA] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 block opacity-95">
            Our Thoughts
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6">
            Studio 1947<br />
            <span className="text-[#D80000]">
              Journal
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#FFFAFA]/85 font-light leading-relaxed max-w-2xl mx-auto">
            Explorations, essays, and stories from our team. We write about design, culture, technology, and the intersections between them.
          </p>
        </div>
      </div>

      {/* 2. Blog Grid Container */}
      <div className="bg-[#F7F5F2] py-24 sm:py-32 transition-colors duration-300 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Blog Grid (Rendering all blogs directly) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {blogs.map((blog) => (
              <CardContainer key={blog.slug} className="w-full h-full" containerClassName="w-full h-full py-4">
                <CardBody className="bg-white border border-black/[0.05] w-full h-full rounded-2xl p-6 group/card flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardItem translateZ="100" className="w-full">
                    <Link to={`/blogs/${blog.slug}`} className="block relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                      {blog.coverImage === '/logo.svg' ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D80000] to-[#8F0000] flex flex-col items-center justify-center p-6 text-center">
                          <span className="text-white/30 text-6xl mb-4 block">✧</span>
                          <span className="text-xl font-black text-white tracking-widest uppercase">Studio 1947</span>
                          <span className="text-[#FFD6D6] text-sm font-light tracking-widest uppercase mt-2">Blogs</span>
                        </div>
                      ) : (
                        <img
                          src={blog.coverImage}
                          alt={blog.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover/card:scale-[1.03] transition-transform duration-500"
                        />
                      )}
                      {blog.language && (
                        <div className="absolute top-3 right-3 z-10">
                          <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                            {blog.language === 'Hindi' 
                              ? 'Hindi/हिंदी' 
                              : blog.language === 'Nepali' 
                                ? 'Nepali/नेपाली' 
                                : blog.language}
                          </span>
                        </div>
                      )}
                    </Link>
                  </CardItem>

                  <CardItem translateZ="50" className="w-full mt-5">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mb-2 font-medium">
                      <time dateTime={blog.date}>{blog.date}</time>
                      <span>•</span>
                      <span>{blog.author}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-2 group-hover/card:text-[#D80000] transition-colors leading-snug">
                      <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                  </CardItem>

                  <CardItem translateZ="60" as="p" className="w-full text-gray-500 text-sm mt-3 line-clamp-3 flex-1 leading-relaxed">
                    {blog.excerpt}
                  </CardItem>

                  <div className="flex justify-end items-center mt-6">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to={`/blogs/${blog.slug}`}
                      className="px-5 py-2.5 rounded-full bg-[#383649] text-white text-xs font-bold hover:bg-[#D80000] transition-colors duration-300 active:scale-95"
                    >
                      Read More →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
