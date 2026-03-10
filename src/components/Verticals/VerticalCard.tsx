import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VerticalCardProps {
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  image: string;
  index: number;
}

export default function VerticalCard({ title, description, linkText, image, index }: VerticalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRevealRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    // Set initial states
    gsap.set(textRevealRef.current, { y: 18, opacity: 0 });
    gsap.set(arrowRef.current, { x: 0 });
    gsap.set(overlayRef.current, { opacity: 0 });

    // Staggered entrance
    gsap.fromTo(
      card,
      { y: 70, opacity: 0, scale: 0.97 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.13,
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Hover timeline
    const hoverTl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

    hoverTl
      .to(imageRef.current, { scale: 1.07, duration: 0.7 }, 0)
      .to(overlayRef.current, { opacity: 1, duration: 0.4 }, 0)
      .to(tagRef.current, { y: -4, duration: 0.3 }, 0)
      .to(textRevealRef.current, { y: 0, opacity: 1, duration: 0.45 }, 0.08)
      .to(arrowRef.current, { x: 5, duration: 0.35 }, 0.1);

    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      hoverTl.kill();
    };
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden cursor-pointer transform-gpu will-change-transform"
      style={{ opacity: 0, aspectRatio: '3 / 4' }}
    >
      {/* Image */}
      <img
        ref={imageRef}
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
      />

      {/* Permanent bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

      {/* Hover overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/20 pointer-events-none"
      />

      {/* Tag */}
      <div className="absolute top-5 left-5">
        <span
          ref={tagRef}
          className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold tracking-widest uppercase transform-gpu"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/*
        Title anchor — absolutely pinned to the bottom.
        The description is absolutely positioned ABOVE this anchor
        so it never affects the title's vertical position.
      */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-7">

        {/* Description + CTA — floats above the title, out of flow */}
        <div
          ref={textRevealRef}
          className="absolute bottom-full left-0 right-0 px-6 pb-4 pt-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transform-gpu will-change-transform"
        >
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-sm tracking-wide">
              {linkText}
            </span>
            <span
              ref={arrowRef}
              className="text-white text-base transform-gpu will-change-transform"
            >
              →
            </span>
          </div>
        </div>

        {/* Title — always at the same height */}
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          {title}
        </h3>

      </div>
    </div>
  );
}
