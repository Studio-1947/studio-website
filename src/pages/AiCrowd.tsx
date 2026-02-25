import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const AiCrowd: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-32 pb-24 transition-colors duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/collabs" className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 font-medium mb-12 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Collaborations
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Content Column */}
            <div>
              <div className="w-24 h-24 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center p-4 border border-blue-100 dark:border-gray-700 shadow-sm mb-8">
                <img src="/collabs/aicrowd.png" alt="Ai Crowd Logo" className="max-w-full max-h-full object-contain" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6">
                Ai Crowd
              </h1>
              
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8"></div>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Data models trained and verified, fueling open-source intelligence and democratizing AI for grassroots problems.
              </p>
              
              <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 mb-12">
                <p>
                  Partnering with Ai Crowd, we leverage global crowdsourcing communities to solve complex, real-world data science challenges. This collaboration enables the rapid development and validation of sophisticated AI models.
                </p>
                <p>
                  By fostering open-source and ethical AI, we aim to bridge the tech gap, bringing advanced computational solutions to grassroots initiatives that urgently require scalable intelligence.
                </p>
              </div>

              <a 
                href="http://www.aicrowd.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                Visit aicrowd.com
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Visual Column */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-[3rem] transform -rotate-3 scale-105 -z-10"></div>
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop" 
                  alt="AI network nodes" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AiCrowd;
