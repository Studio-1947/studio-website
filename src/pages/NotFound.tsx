import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Infinite slow rotation for the wheel
    gsap.to(wheelRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    // Entrance animation
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(textRef.current?.children || [], {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#F8F9FA] dark:bg-[#121212] flex flex-col items-center justify-center px-4 overflow-hidden relative"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* The 404 Display */}
        <div className="flex items-center justify-center gap-2 md:gap-6 mb-8 select-none">
          <span className="text-[120px] md:text-[200px] font-black text-gray-900 dark:text-white leading-none tracking-tighter">
            4
          </span>
          
          <div className="w-[100px] md:w-[160px] h-[100px] md:h-[160px] flex items-center justify-center">
            <img 
              ref={wheelRef}
              src="/studiologo.png" 
              alt="0" 
              className="w-full h-full object-contain drop-shadow-2xl dark:invert"
            />
          </div>
          
          <span className="text-[120px] md:text-[200px] font-black text-gray-900 dark:text-white leading-none tracking-tighter">
            4
          </span>
        </div>

        {/* Text Content */}
        <div ref={textRef} className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-md text-lg mb-10">
            It looks like this wheel spun a bit too far. The page you're looking for doesn't exist or has been moved.
          </p>

          <Link 
            to="/" 
            className="group flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-xl shadow-gray-900/10 dark:shadow-white/10"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
