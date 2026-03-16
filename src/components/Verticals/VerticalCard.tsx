import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VerticalCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function VerticalCard({ title, description, image, index }: VerticalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.set([titleRef.current, descRef.current], { y: 16, opacity: 0 });
    gsap.set(dividerRef.current, { scaleX: 0.45, transformOrigin: 'left center' });

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

    gsap.to(imageRef.current, {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to([titleRef.current, descRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.55,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.12,
      scrollTrigger: {
        trigger: card,
        start: 'top 86%',
        toggleActions: 'play none none none',
      },
    });

    const hoverTl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

    hoverTl
      .to(imageRef.current, { scale: 1.08, duration: 0.9 }, 0)
      .to(glowRef.current, { opacity: 1, duration: 0.45 }, 0)
      .to(titleRef.current, { y: -4, duration: 0.35 }, 0)
      .to(descRef.current, { y: -2, opacity: 0.96, duration: 0.35 }, 0.04)
      .to(dividerRef.current, { scaleX: 1, duration: 0.5 }, 0.06);

    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      hoverTl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className="vertical-card group relative flex min-h-[24rem] flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-gray-950 dark:hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] md:p-8"
      style={{ opacity: 0 }}
    >
      <img
        ref={imageRef}
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-[2.5s] ease-out group-hover:scale-105 dark:opacity-20"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/70 to-white dark:from-gray-950/20 dark:via-gray-950/75 dark:to-gray-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-royal-500/[0.03] via-transparent to-amber-400/[0.04] opacity-80 transition-opacity duration-500 group-hover:opacity-100 dark:from-royal-400/[0.06] dark:to-amber-200/[0.05]" />
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{ background: 'radial-gradient(120% 80% at 50% 100%, rgba(37, 99, 235, 0.16) 0%, rgba(37, 99, 235, 0) 60%)' }}
      />

      <div className="relative z-10 mt-auto px-1 pb-1 text-left">
        <div className="grid h-[14.25rem] grid-rows-[3.25rem,1fr,auto] md:h-[14.75rem] md:grid-rows-[3.5rem,1fr,auto]">
          <h3
            ref={titleRef}
            className="overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(1.45rem,1.15vw,1.7rem)] font-black leading-tight tracking-tight text-gray-900 dark:text-white"
          >
            {title}
          </h3>

          <p
            ref={descRef}
            className="overflow-hidden text-sm leading-relaxed text-gray-700 dark:text-gray-300 md:text-[0.95rem]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 6,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </p>

          <div ref={dividerRef} className="mt-6 h-px w-full bg-gradient-to-r from-royal-600/25 via-gray-300 to-transparent dark:from-royal-400/30 dark:via-white/10" />
        </div>
      </div>
    </div>
  );
}
