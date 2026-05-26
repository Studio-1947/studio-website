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
  ctaLabel: string;
  ctaHref: string;
}

const PRIMARY = "#D60000";

export default function VerticalCard({
  title,
  description,
  image,
  index,
  ctaLabel,
  ctaHref,
}: VerticalCardProps) {
  const cardRef    = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const accent = PRIMARY;

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });

      gsap.fromTo(
        card,
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.75, ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
        },
      );

      gsap.to(dividerRef.current, {
        scaleX: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 86%", toggleActions: "play none none none" },
      });

      return () => {
        ScrollTrigger.getAll().forEach((tr) => { if (tr.trigger === card) tr.kill(); });
      };
    },
    { scope: cardRef },
  );

  return (
    <div
      ref={cardRef}

      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ opacity: 0 }}
    >
      {/* Image */}
      <div className="overflow-hidden flex-shrink-0 aspect-[4/3] bg-gray-50">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        {/* Accent dot + title */}
        <div className="mb-3 flex items-center gap-2.5">
          <span
            className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
            style={{ background: accent }}
          />
          <h3 className="text-[clamp(1.2rem,1.5vw,1.5rem)] font-bold leading-tight tracking-tight text-gray-900">
            {title}
          </h3>
        </div>

        {/* Accent divider */}
        <div
          ref={dividerRef}
          className="mb-4 h-[1px] w-full origin-left rounded-full"
          style={{ background: `linear-gradient(to right, ${accent}70, transparent)` }}
        />

        {/* Description */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        {/* CTA */}
        <a
          href={ctaHref}
          aria-label={`${ctaLabel} — ${title}`}
          className="group/cta inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200"
          style={{ color: accent }}
        >
          {ctaLabel}
          <svg
            className="h-3 w-3 flex-shrink-0 transition-transform duration-200 group-hover/cta:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
