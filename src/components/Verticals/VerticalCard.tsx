import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface VerticalCardProps {
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

export default function VerticalCard({ title, description }: VerticalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    // Hover Animation Setup
    const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out", duration: 0.6 } });
    
    tl.to(card, {
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      borderColor: "rgba(59, 130, 246, 0.4)", // Blue tint border on hover
      duration: 0.4
    }, 0)
    .to(imageRef.current, {
      scale: 0.95,
      borderRadius: "24px",
      filter: "grayscale(0%) contrast(1.1)",
      duration: 0.5
    }, 0)
    .to(circleRef.current, {
      scale: 4,
      opacity: 0.05,
      duration: 0.5
    }, 0)
    .to(textRef.current, {
      y: -5,
      duration: 0.4
    }, 0.1);

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      tl.kill();
    };
  }, { scope: cardRef });

  const getGradientByTitle = () => {
    switch (title) {
      case 'Collaborations': return 'from-amber-100 to-orange-50 dark:from-amber-900/40 dark:to-orange-900/20';
      case 'Products': return 'from-blue-100 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/20';
      case 'Solutions': return 'from-emerald-100 to-teal-50 dark:from-emerald-900/40 dark:to-teal-900/20';
      case 'Initiatives': return 'from-purple-100 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/20';
      default: return 'from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900';
    }
  };

  const content = (
    <>
      {/* Visual Area */}
      <div 
        ref={imageRef}
        className={`w-full aspect-[4/3] rounded-xl flex items-center justify-center relative overflow-hidden mb-6 bg-gradient-to-br ${getGradientByTitle()} transform-gpu grayscale-[0.3]`}
      >
        {/* Animated Background Element */}
        <div 
          ref={circleRef}
          className="absolute w-32 h-32 rounded-full bg-black dark:bg-white opacity-0 blur-2xl transform-gpu"
        />
        
        <div className="text-4xl font-black text-gray-900/20 dark:text-white/20 tracking-tighter mix-blend-overlay">
          {title.substring(0, 2).toUpperCase()}
        </div>
      </div>

      {/* Text Content Area */}
      <div ref={textRef} className="flex flex-col flex-1 transform-gpu">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>
      </div>
    </>
  );

  const cardClasses = "relative bg-white dark:bg-[#121212] rounded-3xl p-6 md:p-8 h-full flex flex-col group border border-gray-100 dark:border-gray-800 transition-colors transform-gpu will-change-transform";

  // Removing link wrapper to remove default pointer and link behavior requested by user
  return (
    <div ref={cardRef} className={cardClasses}>
      {content}
    </div>
  );
}
