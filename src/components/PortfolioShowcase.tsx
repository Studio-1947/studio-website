import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const IMG_REMODEL_UN    = '/portfolio/remodelUN/hero.svg';
const IMG_FERMY_LAB     = '/portfolio/fermylab/Physical Retail Packaging.png';
const IMG_RAJKAMAL      = '/portfolio/rajkamal/hero.svg';
const IMG_AWCH          = '/portfolio/awch/hero.png';
const IMG_LOCAL_FUTURES = '/portfolio/localFutures/hero.png';
const IMG_VILLAGE_WAYS  = '/portfolio/villageWays/hero.png';

const PROJECTS = [
  {
    slug: '/portfoliov2/remodel-un',
    title: 'ReModel UN',
    subtitle: 'Brand Identity & Visual System',
    tags: ['Brand Strategy', 'Identity Design', 'UI/UX', 'Motion'],
    image: IMG_REMODEL_UN,
    accent: '#00E357',
    tagBreakAt: 2,
  },
  {
    slug: '/portfoliov2/fermy-lab',
    title: 'Fermy Lab',
    subtitle: 'Master Brand Architecture & Omnichannel System',
    tags: ['Brand Strategy', 'Packaging Design', 'UI System', 'OOH'],
    image: IMG_FERMY_LAB,
    accent: '#3E843E',
  },
  {
    slug: '/portfoliov2/rajkamal-prakashan',
    title: 'Rajkamal Prakashan',
    subtitle: 'Brand Governance, Enterprise Digital & Omnichannel Event Execution',
    tags: ['Brand Strategy', 'Brand Governance', 'Enterprise Digital', 'Omnichannel'],
    image: IMG_RAJKAMAL,
    accent: '#D80000',
  },
  {
    slug: '/portfoliov2/awch',
    title: 'AWCH',
    subtitle: 'Avishkar Women & Children Hospital — Brand, Digital & Social System',
    tags: ['Brand Strategy', 'Visual Identity', 'Digital Platform', 'Social Media'],
    image: IMG_AWCH,
    accent: '#BF0076',
  },
  {
    slug: '/portfoliov2/local-futures',
    title: 'Local Futures',
    subtitle: 'Graphics Localization for Hindi-Language Documentary Short',
    tags: ['Graphics Localization', 'Motion Graphics', 'Devanagari', 'Hindi'],
    image: IMG_LOCAL_FUTURES,
    accent: '#1c8aaa',
  },
  {
    slug: '/portfoliov2/village-ways',
    title: 'Village Ways',
    subtitle: 'Capacity Building & Community Visual Communication System',
    tags: ['Brand Strategy', 'Print Design', 'Social Media', 'Capacity Building'],
    image: IMG_VILLAGE_WAYS,
    accent: '#94c11f',
  },
];

const GAP = 24; // gap-6 in px

export default function PortfolioShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const update = () => {
      setVisibleCount(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, PROJECTS.length - visibleCount);

  // Recalculate translation whenever index or visible count changes
  useEffect(() => {
    setActiveIndex(i => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (!trackRef.current) return;
    const card = trackRef.current.firstElementChild as HTMLElement | null;
    if (!card) return;
    setTranslateX(-activeIndex * (card.offsetWidth + GAP));
  }, [activeIndex, visibleCount]);

  // Recalculate on resize
  useEffect(() => {
    const recalc = () => {
      if (!trackRef.current) return;
      const card = trackRef.current.firstElementChild as HTMLElement | null;
      if (!card) return;
      setTranslateX(-activeIndex * (card.offsetWidth + GAP));
    };
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [activeIndex]);

  const go = (dir: 'prev' | 'next') => {
    setActiveIndex(i =>
      dir === 'next' ? Math.min(i + 1, maxIndex) : Math.max(i - 1, 0),
    );
  };

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < maxIndex;

  return (
    <section id="works" className="bg-[#F7F5F2] py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D60000] mb-4">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-[0.95] tracking-tight">
              Our Work
            </h2>
          </div>
          <Link
            to="/portfoliov2"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:opacity-80 active:scale-95 transition-all select-none shrink-0"
          >
            View All
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {PROJECTS.map((project, i) => (
              <Link
                key={project.slug}
                to={project.slug}
                className="group flex-none w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] flex flex-col overflow-hidden rounded-2xl bg-white border border-black/[0.06] shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, idx) => (
                      <>
                        {'tagBreakAt' in project && idx === project.tagBreakAt && (
                          <div key="break" className="w-full" />
                        )}
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide border"
                          style={{ borderColor: project.accent, color: project.accent }}
                        >
                          {tag}
                        </span>
                      </>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black text-[#1A1A1A] leading-tight tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm font-light leading-relaxed flex-1">
                    {project.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-5">
                    <span
                      className="text-xs font-bold tracking-wide"
                      style={{ color: project.accent }}
                    >
                      View Case Study
                    </span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: project.accent }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mt-10">
          <button
            onClick={() => go('prev')}
            disabled={!canPrev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed select-none"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all select-none ${
                  activeIndex === i ? 'w-8 bg-gray-900' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go('next')}
            disabled={!canNext}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed select-none"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
