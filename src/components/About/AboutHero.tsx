import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const AboutHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    // Parallax effect for the background text
    gsap.to(text, {
      y: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Background Layer - Large Vertical Text */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start overflow-hidden pointer-events-none select-none z-0">
         <span className="text-[25vw] md:text-[20vh] leading-none font-bold text-gray-200 dark:text-white/5 origin-center -rotate-90 md:translate-x-[-20%] whitespace-nowrap transition-colors duration-300">
           ABOUT
         </span>
      </div>

       {/* Main Content Container - Grid Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-20 md:py-0">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-12 items-center h-full auto-rows-min md:auto-rows-fr">
            
            {/* Left Column: "We are", Line, and Tagline */}
            <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right h-full pr-0 md:pr-10">
                  <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 dark:text-white tracking-tighter leading-none mb-4 md:mb-6 transition-colors duration-300">
                      We are
                  </span>
                  <div className="h-1 w-24 bg-royal-700 mx-auto md:ml-auto md:mr-0 mb-6 md:mb-8"></div>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-sm mx-auto md:mx-0 transition-colors duration-300 leading-relaxed">
                    We craft ideas that live in the now and evolve with what’s next
                  </p>
            </div>

            {/* Right Column: "Studio 1947" */}
            <div className="flex flex-col justify-center mix-blend-normal md:mix-blend-screen items-center md:items-start relative z-10"> 
                <h1 
                ref={textRef}
                className="text-[18vw] md:text-[11vw] leading-[0.85] font-black text-transparent bg-clip-text bg-white bg-opacity-90 tracking-tighter select-none text-center md:text-left drop-shadow-2xl"
                style={{ 
                    WebkitTextStroke: '1px rgba(128,128,128,0.5)', 
                    backgroundImage: 'url(/aboutus/About_us_hero.jpeg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',  
                    backgroundAttachment: 'fixed', 
                    WebkitBackgroundClip: 'text',
                    filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))'
                }}
                >
                  {['Studio', '1947'].map((word, i) => (
                        <span 
                          key={i} 
                          className={`block ${word === '1947' ? 'text-[28vw] md:text-[18vw] -mt-2 md:-mt-4 leading-[0.8]' : ''}`}
                        >
                          {word}
                        </span>
                    ))}
                </h1>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
