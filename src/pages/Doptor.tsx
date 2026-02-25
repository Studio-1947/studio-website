import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Doptor: React.FC = () => {
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
              <span className="px-4 py-1.5 bg-royal-100 text-royal-700 dark:bg-royal-900/30 dark:text-royal-300 font-bold uppercase tracking-wider text-sm rounded-full inline-block mb-6">
                Enterprise Suite
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-8">
                Doptor
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                A comprehensive management system designed to streamline internal operations, manage teams effectively, and enhance productivity across departments.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-royal-600 text-white rounded-full font-bold hover:bg-royal-700 transition-colors shadow-lg shadow-royal-600/30">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  Documentation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-royalblue-500/20 to-indigo-500/20 rounded-[3rem] blur-2xl transform -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" 
                alt="Doptor Dashboard" 
                className="relative rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full border border-gray-200/50 dark:border-gray-700/50"
              />
            </div>
          </div>

          <div className="py-16 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Key Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Workflow Automation', desc: 'Automate repetitive tasks and approval chains to save hundreds of management hours.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { title: 'Resource Allocation', desc: 'Smart algorithms to allocate the right resources to the right projects autonomously.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
                { title: 'Secure Infrastructure', desc: 'Enterprise-grade security ensuring your internal communications and files remain encrypted.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }
              ].map((feature, idx) => (
                <div key={idx} className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-royal-100 dark:bg-royal-900/50 rounded-xl flex items-center justify-center text-royal-600 dark:text-royal-400 mb-6">
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

export default Doptor;
