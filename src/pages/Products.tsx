import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const products = [
  {
    name: 'Doptor',
    slug: 'doptor',
    description: 'A comprehensive management system designed to streamline internal operations and enhance productivity across departments.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tag: 'Enterprise'
  },
  {
    name: 'Aangan',
    slug: 'angan',
    description: 'Our next-generation ERP solution tailored for holistic resource planning, from supply chain to human resources.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    tag: 'ERP System'
  },
  {
    name: 'Data Analysis Dashboards',
    slug: 'data-analysis',
    description: 'Transform your raw data into actionable insights with our interactive, real-time data visualization platforms.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    tag: 'Analytics'
  },
  {
    name: 'Social Media Dashboards',
    slug: 'social-media',
    description: 'Monitor your brand presence, track engagement, and analyze cross-platform statistics in one unified interface.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    tag: 'Marketing'
  }
];

const Products: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-32 pb-24 transition-colors duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <span className="text-royal-600 dark:text-royal-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              Digital<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-indigo-600 dark:from-royal-400 dark:to-indigo-400">
                Products & Platforms
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
              We build scalable, robust software solutions tailored to solve complex challenges. Explore our suite of enterprise products.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product) => (
              <Link 
                key={product.slug} 
                to={`/products/${product.slug}`}
                className="group flex flex-col bg-gray-50 dark:bg-gray-800/50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:-translate-y-2 relative"
              >
                <div className="aspect-w-16 aspect-h-10 w-full overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Tag overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/30">
                      {product.tag}
                    </span>
                  </div>
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-6 left-6 z-10 w-12 h-12 bg-royal-600 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-royal-600 dark:group-hover:text-royal-400 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 flex-1 text-lg">
                    {product.description}
                  </p>
                  
                  <div className="inline-flex items-center text-royal-600 dark:text-royal-400 font-bold group-hover:text-royal-700 dark:group-hover:text-royal-300 transition-colors">
                    Explore Platform
                    <div className="w-8 h-8 ml-3 rounded-full bg-royal-100 dark:bg-royal-900/50 flex items-center justify-center group-hover:bg-royal-600 group-hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 md:mt-32 bg-royal-600 dark:bg-royal-900/40 rounded-3xl p-8 md:p-16 text-center shadow-xl border border-royal-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 w-full max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Product?</h3>
              <p className="text-royal-100 dark:text-gray-300 text-lg mb-8">
                We design and build bespoke platforms tailored exactly to your organizational needs.
              </p>
              <Link to="/about" className="inline-block px-8 py-4 bg-white text-royal-600 hover:bg-gray-50 rounded-full font-bold transition-transform hover:scale-105 shadow-lg">
                Get in touch with our team
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Products;
