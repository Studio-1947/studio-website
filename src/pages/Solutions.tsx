import React, { useEffect } from 'react';
import Layout from '../components/Layout';

import { solutionsData as solutions } from '../data/solutionsData';

const Solutions: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-32 pb-24 transition-colors duration-300 min-h-screen relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-royal-900/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[30%] left-[-10%] w-[30rem] h-[30rem] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
            <span className="inline-block py-1.5 px-4 rounded-full bg-royal-100 text-royal-700 dark:bg-royal-900/30 dark:text-royal-300 font-bold tracking-widest uppercase text-sm mb-6 border border-royal-200 dark:border-royal-800">
              What We Do
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-8">
              Solutions<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 via-indigo-500 to-emerald-500 dark:from-royal-400 dark:via-indigo-400 dark:to-emerald-400">
                You need to grow your business.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              We bring strategy, design, and engineering together to solve your most complex challenges and scale operations seamlessly.
            </p>
          </div>

          {/* Elevated Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] transform hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={solution.bgImage} 
                    alt={solution.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Default Dark Overlay */}
                  <div className="absolute inset-0 bg-gray-900/80 dark:bg-gray-950/80 transition-colors duration-500 group-hover:bg-gray-900/60"></div>
                  {/* Colored Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${solution.color} mix-blend-multiply opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                </div>
                
                {/* Content Layer */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 ${solution.iconBg} ${solution.iconColor} group-hover:text-white transition-colors duration-300 shadow-xl`}>
                      {solution.icon}
                    </div>
                    {/* Floating arrow that appears on hover */}
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/20">
                      <svg className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base opacity-80 group-hover:opacity-100 group-hover:text-white transition-all duration-300 group-hover:translate-x-2 delay-75">
                      {solution.description}
                    </p>
                  </div>
                </div>
                
                {/* Bottom Highlight Line */}
                <div className={`absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r ${solution.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20`}></div>
              </div>
            ))}
          </div>

          {/* CTA Section (Enhanced) */}
          <div className="mt-32 relative rounded-[3rem] overflow-hidden shadow-2xl group border border-gray-200 dark:border-royal-500/20">
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
              
              <a 
                href="https://forms.cloud.microsoft/r/bUGU0yzPSc" 
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Solutions;
