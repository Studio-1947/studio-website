import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { usePageMeta } from '../hooks/usePageMeta';

const Careers: React.FC = () => {
  usePageMeta({ title: 'Careers – Studio 1947', description: 'Join the Studio 1947 team. We are always looking for exceptional designers, engineers, and strategists who want to build with purpose.' });

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

      {/* OPEN ROLES SECTION */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-royal-600 dark:text-royal-400 mb-4">
              Open Positions
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-none mb-4">
              A few openings,<br />
              <span className="text-gray-400 dark:text-gray-600">right now.</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mt-6">
              We keep a tight-knit team, but these seats are open. Every role here shapes how we build, communicate, and create.
            </p>
          </div>

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 dark:border-gray-800">

            {/* Card 1: Content Creator */}
            <div className="group relative flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
              <div>
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-1 border border-royal-600 text-royal-600 dark:text-royal-400 dark:border-royal-400 mb-6">
                  Creative
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
                  Content Creator
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  You tell stories that stick. From long-form editorial to short-form social, you understand platform-native content and know how to make ideas land with the right audience.
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSedpUsfmmY12ooR1NJLEh18d1MGXRu5H6nh2YufE2GGZeMdmw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-royal-600 dark:group-hover:text-royal-400 transition-colors"
              >
                Apply for this role
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Card 2: Communication */}
            <div className="group relative flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
              <div>
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-1 border border-royal-600 text-royal-600 dark:text-royal-400 dark:border-royal-400 mb-6">
                  Strategy
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
                  Communication
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  You bridge the gap between what we build and how the world perceives it. Brand voice, client relations, PR, and outreach — you handle the words that represent us.
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSedpUsfmmY12ooR1NJLEh18d1MGXRu5H6nh2YufE2GGZeMdmw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-royal-600 dark:group-hover:text-royal-400 transition-colors"
              >
                Apply for this role
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Card 3: Graphics Designer */}
            <div className="group relative flex flex-col justify-between p-8 md:p-10 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
              <div>
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-1 border border-royal-600 text-royal-600 dark:text-royal-400 dark:border-royal-400 mb-6">
                  Design
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
                  Graphics Designer
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  Visual identity is your craft. You design with purpose — from brand assets and campaign visuals to motion and production-ready deliverables that make people stop scrolling.
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSedpUsfmmY12ooR1NJLEh18d1MGXRu5H6nh2YufE2GGZeMdmw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-royal-600 dark:group-hover:text-royal-400 transition-colors"
              >
                Apply for this role
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>

          {/* Fallback CTA for non-listed roles */}
          <div className="mt-12 pt-10 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">
              Don't see your role above? We're always eager to connect with exceptional talent. If your craft belongs here, we'd love to hear from you anyway.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSedpUsfmmY12ooR1NJLEh18d1MGXRu5H6nh2YufE2GGZeMdmw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center px-7 py-3 text-sm font-bold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-royal-700 dark:hover:bg-gray-700 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Introduce Yourself
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>

    </Layout>
  );
};

export default Careers;
