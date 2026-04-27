import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VerticalCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  featured?: boolean;
  className?: string;
  tone?: "royal" | "emerald" | "indigo" | "amber";
  ctaLabel: string;
  ctaHref: string;
}

const TONE = {
  royal:   { accent: "#8827ff", shadow: "rgba(136,39,255,0.4)",  gradient: "from-violet-950/85"  },
  emerald: { accent: "#10b981", shadow: "rgba(16,185,129,0.4)",  gradient: "from-emerald-950/85" },
  indigo:  { accent: "#6366f1", shadow: "rgba(99,102,241,0.4)",  gradient: "from-indigo-950/85"  },
  amber:   { accent: "#f59e0b", shadow: "rgba(245,158,11,0.4)",  gradient: "from-amber-950/85"   },
};

const NUMBERS = ["01", "02", "03", "04"];

export default function VerticalCard({
  title,
  description,
  image,
  index,
  featured = false,
  className = "",
  tone = "royal",
  ctaLabel,
  ctaHref,
}: VerticalCardProps) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef  = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const glowRef  = useRef<HTMLDivElement>(null);

  const t = TONE[tone];

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      gsap.set([titleRef.current, descRef.current], { y: 18, opacity: 0 });
      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });

      gsap.fromTo(
        card,
        { y: 70, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 1, ease: "power3.out",
          delay: index * 0.13,
          scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
        },
      );

      gsap.to(imageRef.current, {
        yPercent: 8, ease: "none",
        scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
      });

      gsap.to([titleRef.current, descRef.current], {
        y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: "power3.out", delay: 0.15,
        scrollTrigger: { trigger: card, start: "top 86%", toggleActions: "play none none none" },
      });

      gsap.to(dividerRef.current, {
        scaleX: 1, duration: 0.7, ease: "power3.out", delay: 0.1,
        scrollTrigger: { trigger: card, start: "top 86%", toggleActions: "play none none none" },
      });

      const hoverTl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
      hoverTl
        .to(imageRef.current, { scale: 1.05, duration: 0.9 }, 0)
        .to(glowRef.current,  { opacity: 1, duration: 0.45 }, 0)
        .to(titleRef.current, { y: -4, duration: 0.35 }, 0)
        .to(descRef.current,  { y: -2, duration: 0.35 }, 0.04);

      const onEnter = () => hoverTl.play();
      const onLeave = () => hoverTl.reverse();
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      card.addEventListener("focusin",    onEnter);
      card.addEventListener("focusout",   onLeave);

      return () => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
        card.removeEventListener("focusin",    onEnter);
        card.removeEventListener("focusout",   onLeave);
        hoverTl.kill();
        ScrollTrigger.getAll().forEach((tr) => { if (tr.trigger === card) tr.kill(); });
      };
    },
    { scope: cardRef },
  );

  return (
    <div
      ref={cardRef}
      data-tone={tone}
      className={`vertical-card group relative overflow-hidden rounded-[2rem] border border-white/8 bg-slate-950 shadow-[0_24px_64px_-28px_rgba(2,6,23,0.85)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_80px_-24px_rgba(2,6,23,0.95)] focus-within:outline-none ${featured ? "min-h-[38rem]" : "min-h-[26rem]"} ${className}`}
      style={{ opacity: 0 }}
    >
      {/* Background image with parallax and blur */}
      <div
        ref={imageRef}
        className="absolute inset-[-8%] scale-110 bg-cover bg-center bg-no-repeat blur-[6px] grayscale-[0.2] transition-all duration-[2s] ease-out group-hover:scale-[1.12] group-hover:blur-0 group-hover:grayscale-0"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      {/* Tone-tinted gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${t.gradient} via-slate-950/60 to-slate-900/10`} />

      {/* Tone glow on hover */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{ background: `radial-gradient(90% 55% at 50% 100%, ${t.shadow} 0%, transparent 70%)` }}
      />

      {/* Number badge */}
      <div className="absolute top-5 right-6 z-10 select-none font-black leading-none text-white/10 text-[4rem]">
        {NUMBERS[index]}
      </div>

      {/* Bottom content panel */}
      <div className="relative z-10 flex h-full items-end p-5 sm:p-6 lg:p-7">
        <div
          className="w-full space-y-4 rounded-2xl border border-white/10 p-5 backdrop-blur-md sm:p-6"
          style={{ background: "rgba(0,0,0,0.38)" }}
        >
          {/* Tone-colored accent divider */}
          <div
            ref={dividerRef}
            className="h-[2px] w-full origin-left rounded-full"
            style={{ background: `linear-gradient(to right, ${t.accent}, transparent)` }}
          />

          <h3
            ref={titleRef}
            className={`font-black leading-tight tracking-tight text-white ${
              featured
                ? "text-[clamp(1.8rem,2.4vw,2.5rem)]"
                : "text-[clamp(1.4rem,1.7vw,2rem)]"
            }`}
          >
            {title}
          </h3>

          <p
            ref={descRef}
            className="text-sm leading-relaxed text-white/70 sm:text-[0.95rem]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: featured ? 4 : 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </p>

          {/* CTA with tone accent */}
          <a
            href={ctaHref}
            aria-label={`${ctaLabel} — ${title}`}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:gap-3 hover:brightness-125"
            style={{
              background: `${t.accent}20`,
              border: `1px solid ${t.accent}50`,
              boxShadow: `0 0 18px 0 ${t.shadow}`,
            }}
          >
            {ctaLabel}
            <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
