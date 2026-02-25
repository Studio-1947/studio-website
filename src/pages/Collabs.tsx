import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const collabs = [
  {
    name: 'Walking Project',
    slug: 'walking-project',
    url: 'www.walkingproject.org',
    description: 'Miles mapped and communities engaged across rural regions to gather authentic ground-level qualitative insights.',
    logo: '/collabs/walkingproject.png',
    theme: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50',
    textLight: 'text-orange-600',
    darkBg: 'dark:bg-orange-900/20',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Ai Crowd',
    slug: 'ai-crowd',
    url: 'www.aicrowd.com',
    description: 'Data models trained and verified, fueling open-source intelligence and democratizing AI for grassroots problems.',
    logo: '/collabs/aicrowd.png',
    theme: 'from-blue-600 to-indigo-600',
    bgLight: 'bg-blue-50',
    textLight: 'text-blue-600',
    darkBg: 'dark:bg-blue-900/20',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Ecological Foundations',
    slug: 'ecological-foundations',
    url: 'www.fes.org.in',
    description: 'Conservation drives executed, integrating spatial data and communication to restore local ecologies.',
    logo: '/collabs/ecologicalfoundation.png',
    theme: 'from-emerald-500 to-green-600',
    bgLight: 'bg-emerald-50',
    textLight: 'text-emerald-600',
    darkBg: 'dark:bg-emerald-900/20',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop'
  }
];

const Collabs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-32 pb-24 transition-colors duration-300 min-h-screen relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-royal-900/10 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
            <span className="inline-block py-1.5 px-4 rounded-full bg-royal-100 text-royal-700 dark:bg-royal-900/30 dark:text-royal-300 font-bold tracking-widest uppercase text-sm mb-6 border border-royal-200 dark:border-royal-800">
              Partnerships
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-8">
              Collaborations<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 via-indigo-500 to-emerald-500 dark:from-royal-400 dark:via-indigo-400 dark:to-emerald-400">
                Better together.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              We collaborate with NGOs and other businesses who aim for local impact with greater minds.
            </p>
          </div>

          {/* Collaborations List */}
          <div className="space-y-12 lg:space-y-16">
            {collabs.map((collab, idx) => (
              <Link 
                key={idx} 
                to={`/collabs/${collab.slug}`}
                className="group block relative bg-white dark:bg-gray-800/40 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
              >
                {/* Background Hover Element */}
                <div className={`absolute inset-0 bg-gradient-to-r ${collab.theme} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
                  
                  {/* Logo Column */}
                  <div className="md:col-span-3 flex justify-center md:justify-start">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-6 border border-gray-200 dark:border-gray-700 shadow-inner group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={collab.logo} 
                        alt={`${collab.name} logo`} 
                        className="max-w-full max-h-full object-contain filter drop-shadow-md"
                      />
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="md:col-span-9 flex flex-col justify-center text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                        {collab.name}
                      </h2>
                      <span className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-royal-600 transition-colors">
                        {collab.url}
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                    
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl">
                      {collab.description}
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start">
                      <span className={`inline-flex items-center font-bold px-6 py-3 rounded-full ${collab.bgLight} ${collab.textLight} ${collab.darkBg} transition-all duration-300 group-hover:pr-4`}>
                        Explore Collaboration
                        <div className="w-8 h-8 ml-3 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </span>
                    </div>
                  </div>

                </div>
                
                {/* Visual Line at the bottom */}
                <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${collab.theme} transition-all duration-700 group-hover:w-full`}></div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Collabs;
