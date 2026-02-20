import React from 'react';

const CeoVoice: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
            
          {/* Quote Icon or Decorative Element */}
          <div className="mb-8 flex justify-center">
            <svg 
              className="h-12 w-12 text-royal-600 dark:text-royal-400 opacity-50" 
              fill="currentColor" 
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-10">
            A Word from Our CEO
          </h2>

          <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 italic mb-12 relative z-10">
            "Inspired by the spirit of free thinking, we bridge the gaps in digital development to uplift communities. 
            We integrate social impact into every project, using empathetic design and data to support capacity building. 
            Whether working with AI companies or social entrepreneurs, we craft solutions that are effective, helpful, and truly inclusive."
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-y-4">
             {/* Signature Placeholder - Adjust text color/font as desired to mimic a signature, or replace with an img tag later */}
             <div className="mb-2">
                 {/* This creates a space for a signature. User can replace the 'font-serif italic' text with an actual image file later. */}
                 <span className="font-serif italic text-4xl text-gray-800 dark:text-gray-200 opacity-80 select-none block transform -rotate-2">
                    Rabi . रबि . রবি
                 </span>
             </div>
             
             <div className="text-base font-semibold text-gray-900 dark:text-white">
                Rabi . रबि . রবি
             </div>
             <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Founder & CEO
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CeoVoice;
