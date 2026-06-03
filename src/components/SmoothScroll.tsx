import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with standard default configuration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger updates
    lenis.on('scroll', ScrollTrigger.update);

    // Integrate with GSAP ticker for frame-rate synchronization
    const rafUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafUpdate);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafUpdate);
      lenisRef.current = null;
    };
  }, [pathname]);

  return <>{children}</>;
}
