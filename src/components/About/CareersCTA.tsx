import { Link } from 'react-router-dom';

const CareersCTA: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gray-900 transition-colors duration-300">
      
      {/* Background Deep Purple / Royal Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1A0B2E] to-gray-900 opacity-90"></div>
        <div className="absolute top-0 right-0 w-[50%] h-[100%] rounded-full bg-royal-700/20 blur-[150px] mix-blend-screen transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[100%] rounded-full bg-indigo-600/20 blur-[150px] mix-blend-screen transform -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
          Tomorrow takes shape <br className="hidden sm:block" />
          when today's craft listens to the past.
        </h2>
        
        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-4xl mb-12 font-medium">
          If our vision speaks to you, write to us, and we can co-create solutions where others only see complexity.
        </p>
        
        <Link 
          to="/careers"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-royal-700 rounded-full hover:bg-royal-600 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_rgba(168,85,247,0.5)] focus:outline-none focus:ring-4 focus:ring-royal-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <span>View Open Roles</span>
          <svg 
            className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

      </div>
    </section>
  );
};

export default CareersCTA;
