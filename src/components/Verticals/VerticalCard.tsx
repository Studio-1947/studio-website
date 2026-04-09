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
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      gsap.set([titleRef.current, descRef.current], { y: 16, opacity: 0 });
      gsap.set(dividerRef.current, {
        scaleX: 0.45,
        transformOrigin: "left center",
      });

      gsap.fromTo(
        card,
        { y: 70, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.13,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.to(imageRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to([titleRef.current, descRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.12,
        scrollTrigger: {
          trigger: card,
          start: "top 86%",
          toggleActions: "play none none none",
        },
      });

      const hoverTl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      hoverTl
        .to(imageRef.current, { scale: 1.03, duration: 0.9 }, 0)
        .to(glowRef.current, { opacity: 1, duration: 0.45 }, 0)
        .to(titleRef.current, { y: -4, duration: 0.35 }, 0)
        .to(descRef.current, { y: -2, duration: 0.35 }, 0.04)
        .to(dividerRef.current, { scaleX: 1, duration: 0.5 }, 0.06);

      const handleMouseEnter = () => hoverTl.play();
      const handleMouseLeave = () => hoverTl.reverse();
      const handleFocusIn = () => hoverTl.play();
      const handleFocusOut = () => hoverTl.reverse();

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
      card.addEventListener("focusin", handleFocusIn);
      card.addEventListener("focusout", handleFocusOut);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
        card.removeEventListener("focusin", handleFocusIn);
        card.removeEventListener("focusout", handleFocusOut);
        hoverTl.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === card) {
            trigger.kill();
          }
        });
      };
    },
    { scope: cardRef },
  );

  return (
    <div
      ref={cardRef}
      data-tone={tone}
      className={`vertical-card group relative overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-slate-900 shadow-[0_20px_60px_-36px_rgba(2,6,23,0.7)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_-34px_rgba(2,6,23,0.82)] dark:border-white/7 ${featured ? "min-h-[31rem]" : "min-h-[19rem]"} ${className}`}
      style={{ opacity: 0 }}
    >
      <div
        ref={imageRef}
        className="absolute inset-[-6%] scale-110 bg-cover bg-center bg-no-repeat blur-[2.5px] transition-transform duration-[2.5s] ease-out group-hover:scale-[1.14]"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-900/26 dark:from-slate-950/96 dark:via-slate-950/56 dark:to-slate-900/28" />
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 62%)",
        }}
      />

      <div className="relative z-10 flex h-full items-end p-4 text-left sm:p-5 md:p-6 lg:p-7">
        <div
          className={`w-full rounded-[1.25rem] border border-white/10 bg-black/22 p-5 text-white shadow-[0_16px_40px_-26px_rgba(2,6,23,0.85)] backdrop-blur-sm sm:p-6 ${featured ? "space-y-5 max-w-xl" : "space-y-4 max-w-md"}`}
        >
          <h3
            ref={titleRef}
            className={`overflow-hidden text-ellipsis whitespace-nowrap font-black leading-tight tracking-tight text-white ${featured ? "text-[clamp(1.7rem,2vw,2.4rem)]" : "text-[clamp(1.35rem,1.5vw,1.8rem)]"}`}
          >
            {title}
          </h3>

          <p
            ref={descRef}
            className={`overflow-hidden text-sm leading-relaxed text-white/82 ${featured ? "md:text-[1rem]" : "md:text-[0.95rem]"}`}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: featured ? 5 : 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </p>

          <div
            ref={dividerRef}
            className="h-px w-full origin-left scale-x-100 bg-gradient-to-r from-white/30 via-white/12 to-transparent"
          />

          <div className="pt-1">
            <a
              href={ctaHref}
              aria-label={`${ctaLabel} - ${title}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-white/92 transition-all duration-300 hover:border-white/70 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/85 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              {ctaLabel}
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
