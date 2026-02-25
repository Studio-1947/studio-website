import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const DataAnalysis: React.FC = () => {
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
            <div>
              <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 font-bold uppercase tracking-wider text-sm rounded-full inline-block mb-6">
                Data Platforms
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-8">
                Data Analysis Dashboards
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Transform your raw data into actionable insights. Intuitive, customizable visualization platforms providing real-time intelligence for smarter, faster business decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  Documentation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-[3rem] blur-2xl transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                alt="Data Dashboard" 
                className="relative rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full border border-gray-200/50 dark:border-gray-700/50"
              />
            </div>
          </div>

          <div className="py-16 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Dashboard Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Live Streaming Data', desc: 'Connect to websocket feeds or live databases to see metrics update completely in real-time without refreshing.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { title: 'Interactive Drill-downs', desc: 'Click into any chart sector to automatically filter all contextual views and drill deep into granular records.', icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' },
                { title: 'Automated Reports', desc: 'Schedule PDF and CSV reports to be automatically compiled and emailed to stakeholders securely.', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
              ].map((feature, idx) => (
                <div key={idx} className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
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

export default DataAnalysis;
