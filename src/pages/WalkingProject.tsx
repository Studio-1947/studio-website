import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const WalkingProject: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-32 pb-24 transition-colors duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/collabs" className="inline-flex items-center text-yellow-600 dark:text-yellow-500 hover:text-yellow-700 dark:hover:text-yellow-400 font-medium mb-12 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Collaborations
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Content Column */}
            <div>
              <div className="w-24 h-24 rounded-full bg-yellow-50 dark:bg-gray-800 flex items-center justify-center p-4 border border-yellow-200 dark:border-gray-700 shadow-sm mb-8">
                <img src="/collabs/walkingproject.png" alt="Walking Project Logo" className="max-w-full max-h-full object-contain" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight mb-2 tracking-tight">
                Walking Project
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-500 mb-8">
                Mumbai
              </h2>
              
              <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-10"></div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mission</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed border-l-4 border-yellow-400 pl-4 py-1">
                  A citizen-led initiative dedicated to making Mumbai a safe, inclusive, and highly walkable city by advocating for better pedestrian infrastructure.
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Impact</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  We completely overhauled their digital ecosystem. By designing an intuitive, mobile-first platform with a clean UI/UX, we streamlined their volunteer onboarding and civic reporting—equipping them with the tech foundation to scale their real-world advocacy.
                </p>
              </div>

              <a 
                href="http://www.walkingproject.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-yellow-400 hover:bg-gray-800 dark:hover:bg-yellow-300 text-white dark:text-gray-900 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Visit walkingproject.org
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Visual Column */}
            <div className="sticky top-32">
              <div className="absolute inset-0 bg-yellow-400 rounded-[3rem] transform rotate-3 scale-105 -z-10 shadow-xl"></div>
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 bg-white">
                <div className="p-8 pb-0">
                  <img src="/collabs/walkingproject.png" alt="Walking Project Logo" className="h-8 mb-8" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop" 
                  alt="Rural landscape mapping" 
                  className="w-full h-auto object-cover aspect-[4/5] md:aspect-auto"
                />
              </div>
              {/* Skyline silhouette accent overlay (abstract representation) */}
              <div className="absolute bottom-[-20px] left-0 w-full h-32 bg-[url('/mumbai-skyline-silhouette.png')] bg-repeat-x bg-bottom opacity-20 pointer-events-none z-20"></div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WalkingProject;
