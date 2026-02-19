import React from 'react';
import { aboutData } from '../../data/aboutData';

const AboutContent: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-black text-gray-900 dark:text-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="sticky top-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight whitespace-pre-line">
              {aboutData.missionHeading}
            </h2>
            <div className="h-1 w-24 bg-amber-600 mt-8"></div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-600 dark:text-gray-300">
            {aboutData.missionStatement.map((paragraph, index) => (
              <p key={index} className="first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-white first-letter:mr-3 float-left">
                {paragraph}
              </p>
            ))}
            
            <div className="pt-12">
               <p className="text-2xl font-medium italic text-gray-900 dark:text-white border-l-4 border-amber-600 pl-6">
                 {aboutData.closingStatement}
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
