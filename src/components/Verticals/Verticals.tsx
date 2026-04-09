import { useRef } from "react";
import { verticalsSectionData } from "../../data/verticalsData";

export interface VerticalItemInput {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkAction: (() => void) | string;
}

interface VerticalsProps {
  items?: VerticalItemInput[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
}

const defaultItems: VerticalItemInput[] = verticalsSectionData.cards.map(
  (card) => ({
    id: card.id,
    title: card.title,
    description: card.description,
    imageUrl: card.image,
    linkAction: card.ctaHref,
  }),
);

export default function Verticals({
  items = defaultItems,
  eyebrow = verticalsSectionData.eyebrow,
  heading = verticalsSectionData.heading,
  subheading = verticalsSectionData.description,
}: VerticalsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-gray-200 bg-gray-50 py-12 md:py-16 dark:border-gray-800 dark:bg-[#0a0f1a]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-300" />
            {eyebrow}
          </span>

          <h2 className="mt-4 text-[2rem] font-black leading-[0.95] tracking-[-0.03em] text-gray-950 dark:text-white sm:text-3xl">
            {heading}
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8">
            {subheading}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative min-h-[14rem] overflow-hidden rounded-lg text-left shadow-sm lg:min-h-[13rem]"
            >
              <div
                className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-[5px] grayscale contrast-150 brightness-90 saturate-0 transition-transform duration-500 group-hover:scale-[1.14]"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                aria-hidden="true"
              />

              <div
                className="absolute inset-0 opacity-35 mix-blend-screen"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 6px), repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 7px)",
                }}
                aria-hidden="true"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/98 via-slate-950/72 to-slate-900/48" />

              <div className="relative z-10 flex h-full items-start">
                <div className="w-full px-4 pt-4 sm:px-5 sm:pt-5">
                  <h3 className="min-h-[2.5rem] text-[clamp(1.4rem,5vw,1.95rem)] font-black leading-tight tracking-tight text-white line-clamp-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)] sm:text-[clamp(1.5rem,1.8vw,1.95rem)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-white/95 line-clamp-4 sm:text-[1.05rem] sm:leading-7 [text-shadow:0_1px_2px_rgba(0,0,0,0.65)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
