import React from 'react';

const TeamHubs: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Background radial gradient effect - subtle version for dark/light mode */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[20%] w-[70%] h-[70%] rounded-full bg-royal-700/5 dark:bg-royal-700/10 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[20%] w-[70%] h-[70%] rounded-full bg-royal-500/5 dark:bg-royal-500/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 font-sans">
          From the Hills to the Metropolis.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Studio 1947 is expanding its creative footprint.<br className="hidden md:block" />
          We are establishing new team hubs to bridge<br className="hidden md:block" />
          local talent with global opportunity.
        </p>

        <div className="pt-8 space-y-8">
          <p className="text-sm font-bold tracking-[0.2em] text-royal-700 dark:text-royal-500 uppercase">
            Coming Soon
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 md:text-xl font-semibold text-gray-800 dark:text-gray-200">
            <span>Kalimpong</span>
            <span>Palassey</span>
            <span>Jhargram</span>
            <span>Kolkata</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHubs;
