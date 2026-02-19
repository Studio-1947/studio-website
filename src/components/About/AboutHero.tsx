import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '../../data/aboutData';


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
            
            {/* 1. "We are" + Line */}
            <div className="flex flex-col justify-end items-center md:items-end text-center md:text-right md:row-start-1 md:col-start-1 md:self-end">
                  <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 dark:text-white tracking-tighter leading-none mb-4 md:mb-6 transition-colors duration-300">
                      We are
                  </span>
                  <div className="hidden md:block h-1 w-24 bg-amber-600 ml-auto mr-0"></div>
                  <div className="md:hidden h-1 w-24 bg-amber-600 mx-auto"></div>
            </div>

            {/* 2. "Studio 1947" (Hollow Effect) - Middle on Mobile, Right Column on Desktop */}
            <div className="flex flex-col justify-center mix-blend-normal md:mix-blend-screen md:row-start-1 md:row-span-2 md:col-start-2"> 
                <h1 
                ref={textRef}
                className="text-[18vw] md:text-[13vw] leading-[0.8] font-black text-transparent bg-clip-text bg-white bg-opacity-90 tracking-tighter select-none text-center md:text-left"
                style={{ 
                    WebkitTextStroke: '1px rgba(128,128,128,0.5)', 
                    backgroundImage: 'url(/aboutus/About_us_hero.jpeg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',  
                    backgroundAttachment: 'fixed', 
                    WebkitBackgroundClip: 'text',
                }}
                >
                  {['Studio', '1947'].map((word, i) => (
                        <span 
                          key={i} 
                          className={`block ${word === '1947' ? 'text-[28vw] md:text-[22vw] -mt-4 md:-mt-8 leading-[0.75]' : ''}`}
                        >
                          {word}
                        </span>
                    ))}
                </h1>
            </div>

            {/* 3. Tagline - Last on Mobile, Bottom Left on Desktop */}
             <div className="flex flex-col justify-start items-center md:items-end text-center md:text-right md:row-start-2 md:col-start-1 md:self-start">
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium tracking-[0.2em] uppercase max-w-md mx-auto md:mx-0 transition-colors duration-300 md:mt-6">
                    Rooted in Wisdom<span className="mx-3 text-amber-600 block sm:inline my-2 sm:my-0">•</span>Designed for the Future
                  </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
