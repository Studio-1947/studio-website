import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useState } from 'react';

import { solutionsData as solutions } from '../data/solutionsData';
import ContactModal from '../components/ContactModal';

const Solutions: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-950 pt-32 pb-24 transition-colors duration-300 min-h-screen relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="fixed top-0 left-0 w-full h-[600px] bg-gradient-to-b from-royal-900/5 to-transparent pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-5xl mx-auto mb-20 md:mb-32 pt-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-royal-50 text-royal-700 dark:bg-royal-900/30 dark:text-royal-300 font-bold tracking-widest uppercase text-sm mb-6 border border-royal-200 dark:border-royal-800 shadow-sm">
              What We Do
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-4 md:mb-6">
              SOLUTIONS<br />
              <span className="text-royal-600 dark:text-royal-400 inline-block mt-2">
                THAT SCALE.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
              We bring strategy, design, and engineering together to solve your most complex challenges.
            </p>
          </div>

          {/* Apple-Style Structured Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-32 md:mt-12 w-full max-w-7xl mx-auto">
            {solutions.map((solution, idx) => {
              
              // If we have an odd number of items, the last item spans both columns perfectly.
              // This fixes any orphaned layout holes in the 2-column grid.
              const isFullWidthOnTablet = solutions.length % 2 !== 0 && idx === solutions.length - 1;

              return (
                <div 
                  key={idx}
                  className={`group relative flex flex-col border border-gray-200 dark:border-white/10 rounded-[2rem] lg:rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden transition-all duration-500 hover:shadow-2xl dark:hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] hover:-translate-y-1 ${isFullWidthOnTablet ? 'md:col-span-2' : 'col-span-1'}`}
                >
                  
                  {/* Creative Photography Background */}
                  <div className="absolute inset-0 z-0 bg-gray-50 dark:bg-gray-950">
                    <img 
                      src={solution.bgImage} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20 mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-[3s] ease-out"
                    />
                    {/* Gradient fade to ensure perfect text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white dark:from-gray-950/40 dark:via-gray-950/90 dark:to-gray-950"></div>
                    
                    {/* Elegant color tint wash based on the specific solution's brand color */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-[0.03] dark:opacity-[0.05] mix-blend-multiply dark:mix-blend-screen group-hover:opacity-10 transition-opacity duration-700`}></div>
                  </div>

                  {/* Consistent Context Box (Icon + Title) */}
                  <div className="flex flex-col h-full relative z-10">
                    
                    {/* Minimal, Perfectly Consistent Icon Block */}
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center text-royal-600 dark:text-royal-400 mb-8 md:mb-12 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out">
                      <div className="w-8 h-8">
                        {solution.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                      {solution.title}
                    </h2>
                    
                    {/* Description pushed to bottom to fill the box structural space */}
                    <div className="mt-auto pt-4 md:pt-8">
                      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed relative z-10">
                        {solution.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section (Enhanced) */}
          <div className="mt-16 relative rounded-[3rem] overflow-hidden shadow-2xl group border border-gray-200 dark:border-royal-500/20">
            {/* Adaptive gradient base for light and dark modes */}
            <div className="absolute inset-0 bg-gradient-to-br from-royal-50 via-indigo-50 to-white dark:from-gray-900 dark:via-royal-950 dark:to-black z-0 transition-colors duration-500"></div>
            
            {/* Subtly animated background image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-[0.05] dark:opacity-10 mix-blend-overlay z-0 transform group-hover:scale-110 group-hover:opacity-10 dark:group-hover:opacity-20 transition-all duration-1000"></div>
            
            {/* Animated Glow in CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[40rem] h-[40rem] bg-royal-500/10 dark:bg-royal-500/20 blur-[100px] rounded-full pointer-events-none z-0 group-hover:bg-royal-500/20 dark:group-hover:bg-royal-500/40 transition-colors duration-1000"></div>

            <div className="relative z-10 px-8 py-24 md:p-32 text-center flex flex-col items-center justify-center">
              {/* Optional glowing icon top */}
              <div className="w-20 h-20 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center mb-10 backdrop-blur-md border border-gray-200 dark:border-white/20 shadow-xl dark:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] transition-shadow duration-700">
                <svg className="w-10 h-10 text-royal-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight transition-colors duration-500">
                Ready to scale faster?
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-royal-100/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed transition-colors duration-500">
                Let's discuss how our integrated solutions can bridge the gap between where you are and where you want to be.
              </p>
              
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="group/btn relative overflow-hidden px-12 py-5 bg-royal-600 text-white dark:bg-royal-500 dark:text-royal-900 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] flex items-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start a Conversation
                  <svg className="w-6 h-6 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                {/* Inner button hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-royal-700 to-royal-600 dark:from-royal-50 dark:to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-0"></div>
              </button>
            </div>
          </div>

        </div>
      </div>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </Layout>
  );
};

export default Solutions;
