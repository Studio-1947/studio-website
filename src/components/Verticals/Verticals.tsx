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
      className="relative border-b border-gray-200 bg-gray-50 py-24 lg:min-h-screen lg:flex lg:items-center dark:border-gray-800 dark:bg-[#0a0f1a]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Centered, Premium Introduction */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs lg:text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
            ● {eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-black text-gray-950 dark:text-white tracking-tighter leading-[1.05] mb-8">
            {heading}
          </h2>
          <p className="text-lg md:text-xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-3xl">
            {subheading}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-500 lg:h-[35rem] min-h-[22rem] flex flex-col items-center justify-center p-8 lg:p-12 text-center"
            >
              {/* Background image — stays fixed as the card grows */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out group-hover:scale-110 grayscale blur-[2px] lg:blur-0 lg:grayscale-0 brightness-[0.7]"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                aria-hidden="true"
              />

              {/* Full-card dark overlay for centered text legibility */}
              <div className="absolute inset-0 bg-black/50 dark:bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />
              
              {/* Subtle glass effect backdrop for the text block center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-full h-1/2 bg-white/5 dark:bg-black/20 backdrop-blur-md rounded-full blur-3xl" />
              </div>

              {/* Content — Vertically and Horizontally Centered */}
              <div className="relative z-10 flex flex-col items-center max-w-sm">
                {/* Visual accent marker */}
                <div className="w-12 h-1.5 bg-white/40 mb-8 rounded-full shadow-lg group-hover:w-20 group-hover:bg-white group-hover:shadow-[0_0_20px_white] transition-all duration-500" />
                
                <h3 className="text-2xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-6 [text-shadow:0_4px_12px_rgba(0,0,0,0.8)]">
                  {item.title}
                </h3>
                
                <p className="text-sm lg:text-lg text-white/90 leading-relaxed font-medium line-clamp-4 lg:line-clamp-none [text-shadow:0_2px_8px_rgba(0,0,0,1)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
