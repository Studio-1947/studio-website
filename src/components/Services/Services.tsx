import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 md:py-32 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centralized, Premium Introduction */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-royal-50 dark:bg-royal-900/30 text-royal-700 dark:text-royal-300 text-sm font-bold tracking-widest uppercase mb-8 border border-royal-200 dark:border-royal-800 shadow-sm">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[1.1] mb-8">
            Comprehensive solutions for the modern digital landscape.
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-3xl mb-12">
            From performance marketing and cutting-edge web development to high-end photography and brand strategy, we provide everything your business needs to scale elegantly and efficiently.
          </p>
          
          {/* Apple-Style CTA */}
          <Link 
            to="/solutions"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-royal-500 bg-royal-600 dark:bg-royal-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] dark:text-white"
          >
            <span className="relative z-10 flex items-center gap-2 ">
              Explore All Solutions
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-royal-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

      </div>
    </section>
  );
}
