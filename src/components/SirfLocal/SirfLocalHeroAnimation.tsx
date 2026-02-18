import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGES = [
  '/sirfLocal/hero/1.png',
  '/sirfLocal/hero/2.png',
  '/sirfLocal/hero/3.png',
  '/sirfLocal/hero/4.png'
];

export default function SirfLocalHeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(() => {
    // Continuous timeline for cycle
    const timeline = gsap.timeline({ repeat: -1 });

    // Initial state setup
    imagesRef.current.forEach((img, i) => {
        if(img) {
            gsap.set(img, { 
                opacity: i === 0 ? 1 : 0, 
                scale: 1,
                zIndex: i === 0 ? 2 : 1 
            });
        }
    });
    
    // Cycle through images
    HERO_IMAGES.forEach((_, index) => {
        const currentImg = imagesRef.current[index];
        const nextIndex = (index + 1) % HERO_IMAGES.length;
        const nextImg = imagesRef.current[nextIndex];

        if (!currentImg || !nextImg) return;

        // "Play" phase: Scale up current image slightly (Ken Burns)
        // We start this concurrently with the hold phase
        timeline.to(currentImg, { scale: 1.1, duration: 6, ease: "linear" }, `start-${index}`);
        
        // Hold for 3s
        timeline.to({}, { duration: 3 }, `start-${index}`);

        // Transition phase: 
        // 1. Bring next image to top (z-index)
        // 2. Fade next image in
        // 3. Reset current image after fade
        
        timeline.call(() => {
            if (nextImg) nextImg.style.zIndex = "2";
            if (currentImg) currentImg.style.zIndex = "1";
        }, undefined, `transition-${index}`);

        timeline.fromTo(nextImg, 
            { opacity: 0, scale: 1 }, 
            { opacity: 1, duration: 1.5, ease: "power2.inOut" }, 
            `transition-${index}`
        );
        
        timeline.to(currentImg, { opacity: 0, duration: 1.5, ease: "power2.inOut" }, `transition-${index}`);
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {HERO_IMAGES.map((src, index) => (
        <img
          key={index}
          ref={(el) => { imagesRef.current[index] = el; }}
          src={src}
          alt={`SirfLocal Hero ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transformOrigin: "center center" }}
        />
      ))}
      
      {/* Cinematic Overlays */}
      {/* 1. Subtle blue/purple tint overlay for mood (low opacity) */}
      <div className="absolute inset-0 z-10 bg-blue-900/20 mix-blend-overlay pointer-events-none"></div>

      {/* 2. Gradient Vignette for focus */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>
      
      {/* 3. Strong bottom/left gradient for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/95 via-white/80 to-transparent dark:from-gray-950/95 dark:via-gray-950/80 dark:to-transparent pointer-events-none"></div>
      
      {/* 4. Extra bottom shade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none"></div>
    </div>
  );
}
