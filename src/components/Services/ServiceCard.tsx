import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  bgImage?: string;
  icon?: ReactNode;
  iconBg?: string;
  iconColor?: string;
}

export default function ServiceCard({ title, description, bgImage, icon, iconBg, iconColor }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(glowRef.current, {
        x: x - 400,
        y: y - 400,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      });

      gsap.to(shineRef.current, {
        x: x - 300,
        y: y - 300,
        opacity: 0.15,
        duration: 0.2,
        ease: "none"
      });
    };

    const handleMouseLeave = () => {
      gsap.to([glowRef.current, shineRef.current], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: cardRef });

  return (
    <div 
      ref={cardRef}
      className="relative min-w-[300px] md:min-w-[350px] lg:min-w-[calc((100%-3rem)/3)] lg:w-[calc((100%-3rem)/3)] bg-[#F8F9FA] dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-[32px] overflow-hidden snap-start group transition-colors duration-500 hover:border-gray-300 dark:hover:border-gray-600"
    >
      {/* BACKGROUND IMAGE WITH OVERLAY */}
      {bgImage && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent dark:from-[#121212] dark:via-[#121212]/80" />
        </div>
      )}

      {/* GLOW EFFECT BEHIND */}
      <div 
        ref={glowRef}
        className="pointer-events-none absolute left-0 top-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_50%)] opacity-0 z-0"
      />
      
      {/* SHINE EFFECT ON TOP */}
      <div 
        ref={shineRef}
        className="pointer-events-none absolute left-0 top-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_50%)] mix-blend-overlay opacity-0 z-20"
      />

      {/* CONTENT INNER CONTAINER */}
      <div className="relative z-10 w-full h-[450px] p-8 flex flex-col justify-between">
        {/* Top Header Section */}
        <div className="flex justify-between items-start">
          {icon ? (
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg || 'bg-white dark:bg-[#1A1A1A]'} ${iconColor || 'text-gray-900'} shadow-sm border border-gray-100 dark:border-gray-800 transform group-hover:scale-110 transition-transform duration-500`}>
              {icon}
            </div>
          ) : (
            <div className="text-3xl font-black tracking-tighter text-gray-900 dark:text-white">
              W.
            </div>
          )}
          
          {/* Arrow top right */}
          {/* <div className="w-12 h-12 rounded-[14px] bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 -rotate-45 group-hover:rotate-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </div> */}
        </div>

        {/* Typographic Title Area matching the poster look */}
        <div className="flex flex-col justify-end text-left z-10 space-y-4">
          <div>
            <h3 className="text-3xl lg:text-[40px] font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">
              {title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium tracking-wide uppercase mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
              {description}
            </p>
          </div>

          <div className="h-[2px] w-12 bg-gray-300 dark:bg-gray-700 mt-2 mb-2 group-hover:w-full group-hover:bg-blue-600/50 transition-all duration-700 ease-out"></div>
        </div>
      </div>
    </div>
  );
}
