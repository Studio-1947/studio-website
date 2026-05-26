import { motion } from "framer-motion";
import VerticalCard from "./VerticalCard";
import { verticalsSectionData } from "../../data/verticalsData";

export default function Verticals() {
  const { eyebrow, heading, description, cards } = verticalsSectionData;

  return (
    <section
      id="verticals"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ─────────────────────────────────────── */}
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-500 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D60000]" />
            {eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mb-6 text-4xl font-black leading-[1.05] tracking-tighter text-gray-900 md:text-6xl lg:text-7xl"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            {description}
          </motion.p>
        </div>

        {/* ── Vertical Cards ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, i) => (
            <VerticalCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              index={i}
              ctaLabel={card.ctaLabel}
              ctaHref={card.ctaHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
