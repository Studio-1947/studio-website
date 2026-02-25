import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const EcologicalFoundations: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-32 pb-24 transition-colors duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/collabs" className="inline-flex items-center text-emerald-600 dark:text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 font-medium mb-12 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Collaborations
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Content Column */}
            <div>
              <div className="w-24 h-24 rounded-full bg-emerald-50 dark:bg-gray-800 flex items-center justify-center p-4 border border-emerald-100 dark:border-gray-700 shadow-sm mb-8">
                <img src="/collabs/ecologicalfoundation.png" alt="Ecological Foundations Logo" className="max-w-full max-h-full object-contain" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6">
                Ecological Foundations
              </h1>
              
              <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mb-8"></div>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Conservation drives executed, integrating spatial data and communication to restore local ecologies.
              </p>
              
              <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 mb-12">
                <p>
                  Our work with Ecological Foundations (FES) focuses on the intersection of environmental conservation and data-driven communication. We visualize complex ecological footprints, translating environmental science into actionable, community-driven conservation strategies.
                </p>
                <p>
                  Together, we have been able to map sensitive habitats, facilitate educational outreach, and directly assist in localized efforts to protect and restore critical ecological zones across the country.
                </p>
              </div>

              <a 
                href="http://www.fes.org.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1"
              >
                Visit fes.org.in
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Visual Column */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-green-600/20 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop" 
                  alt="Forest conservation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EcologicalFoundations;
