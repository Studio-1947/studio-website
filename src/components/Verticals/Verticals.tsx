import { motion } from "framer-motion";
import VerticalCard from "./VerticalCard";
import { verticalsSectionData } from "../../data/verticalsData";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";

/**
 * Bento-grid column spans per card id:
 *
 *  Desktop (5 cols):
 *    [  Products (3)  ] [ Collabs (2) ]
 *    [ Solutions (2) ] [  Initiatives (3)  ]
 *
 *  Tablet (2 cols): Products & Initiatives span full width, others half.
 */
const BENTO: Record<string, string> = {
  products:       "sm:col-span-2 lg:col-span-3",
  collaborations: "sm:col-span-1 lg:col-span-2",
  solutions:      "sm:col-span-1 lg:col-span-2",
  initiatives:    "sm:col-span-2 lg:col-span-3",
};

export default function Verticals() {
  const { eyebrow, heading, description, cards } = verticalsSectionData;

  return (
    <section
      id="verticals"
      className="relative overflow-hidden bg-[#06060e] py-24 lg:py-36"
    >
      <BackgroundRippleEffect />
      
      {/* Ambient purple glow at the top */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_40%_at_50%_-5%,rgba(88,28,255,0.18),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ─────────────────────────────────────── */}
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            {eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mb-6 text-4xl font-black leading-[1.05] tracking-tighter text-white md:text-6xl lg:text-7xl"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl"
          >
            {description}
          </motion.p>
        </div>

        {/* ── Bento Grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {cards.map((card, i) => (
            <VerticalCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              index={i}
              featured={card.featured}
              tone={card.tone}
              ctaLabel={card.ctaLabel}
              ctaHref={card.ctaHref}
              className={BENTO[card.id] ?? ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
