import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const SocialMedia: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-32 pb-24 transition-colors duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/products" className="inline-flex items-center text-royal-600 dark:text-royal-400 font-semibold mb-12 hover:text-royal-800 transition-colors uppercase tracking-wider text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-rose-500/20 to-orange-500/20 rounded-[3rem] blur-2xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" 
                alt="Social Media Dashboard" 
                className="relative rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full border border-gray-200/50 dark:border-gray-700/50"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="px-4 py-1.5 bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 font-bold uppercase tracking-wider text-sm rounded-full inline-block mb-6">
                Marketing Tech
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-8">
                Social Media Dashboards
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                A unified interface to monitor global brand presence, track cross-platform engagement, and derive behavioral analysis from your campaigns.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-rose-600 text-white rounded-full font-bold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/30">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  Documentation
                </button>
              </div>
            </div>
          </div>

          <div className="py-16 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Engagement Tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Unified Inbox', desc: 'Consolidate messages, tags, and reviews from IG, Twitter, and LinkedIn into a single manageable feed.', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { title: 'Sentiment Analysis', desc: 'Automatically classify audience reactions and comments with AI to gauge true product perception.', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { title: 'Campaign Tracking', desc: 'Correlate spends to conversions accurately using deep-linked UTM parameters and tracking pixels.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' }
              ].map((feature, idx) => (
                <div key={idx} className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/50 rounded-xl flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default SocialMedia;
