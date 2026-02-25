import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const Careers: React.FC = () => {
    
  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      {/* 
        HERO SECTION
        This section replicates the screenshot layout:
        - Full-bleed background image
        - Huge, bold text spanning multiple lines
        - Smaller CTA text underneath
        - "Join Us" label bottom-left
      */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-end bg-gray-900 border-b-8 border-royal-700">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" // Nature/agriculture expansive scene
            alt="Expansive landscape representing growth"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark gradient overlay to ensure white text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Container positioned at the bottom */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
            
            {/* The Main Huge Text */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-white tracking-tighter leading-[0.9] mb-12 max-w-5xl">
              Build the next era <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-400 to-indigo-400">of the web with us.</span>
            </h1>

            {/* Sub-text and CTA Container */}
            <div className="max-w-4xl border-t border-white/20 pt-8 mt-12">
               <p className="text-lg md:text-2xl text-white font-medium leading-tight mb-8">
                 We are always looking for exceptional designers, engineers, and strategists. If you don't see an open role, convince us we need you.
               </p>
               
               {/* <a 
                 href="https://docs.google.com/forms/d/e/1FAIpQLSedpUsfmmY12ooR1NJLEh18d1MGXRu5H6nh2YufE2GGZeMdmw/viewform"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center text-white text-lg font-bold hover:text-royal-400 transition-colors group"
               >
                 <span className="relative flex h-2 w-2 mr-3 mt-1">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-royal-500"></span>
                 </span>
                 Join Us
                 <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </a> */}
            </div>

        </div>
      </section>

      {/* 
        NO OPEN ROLES MESSAGE SECTION
        As requested, a section directly below explaining there are no immediate openings, 
        but leaving the door open via the form.
      */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <span className="inline-block p-4 bg-gray-50 dark:bg-gray-800 rounded-full mb-8 text-gray-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                No active openings right now.
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                Our team is currently at capacity, but we are always eager to connect with exceptional talent. If you believe your craft belongs here, we'd love to hear from you anyway.
            </p>

            <a 
                 href="https://docs.google.com/forms/d/e/1FAIpQLSedpUsfmmY12ooR1NJLEh18d1MGXRu5H6nh2YufE2GGZeMdmw/viewform"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-royal-700 rounded-full hover:bg-royal-600 focus:ring-4 focus:ring-royal-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
                Introduce Yourself via Form
            </a>
            <p className="mt-6 text-sm text-gray-500 font-medium">Link opens Microsoft Forms in a new tab.</p>
        </div>
      </section>

    </Layout>
  );
};

export default Careers;
