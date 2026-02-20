import React from 'react';
import { aboutData } from '../../data/aboutData';

const AboutContent: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-12 md:py-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Heading */}
          <div className="self-center">
            <span className="block text-royal-700 dark:text-royal-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white mb-6">
              {aboutData.missionHeading}
            </h2>
            <div className="h-1.5 w-24 bg-royal-700 dark:bg-royal-500 rounded-full"></div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none font-light leading-relaxed">
                {aboutData.missionStatement.map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0 text-lg md:text-xl leading-relaxed">
                    {paragraph}
                </p>
                ))}
            </div>
            
            <div className="pt-6">
               <blockquote className="relative pl-6 border-l-4 border-royal-700 dark:border-royal-500">
                 <p className="text-xl md:text-2xl font-serif italic text-gray-800 dark:text-gray-200 leading-normal">
                   "{aboutData.closingStatement}"
                 </p>
               </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
