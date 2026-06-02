import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const IMG_REMODEL_UN    = '/portfolio/remodelUN/hero.svg';
const IMG_FERMY_LAB     = '/portfolio/fermylab/Physical Retail Packaging.png';
const IMG_RAJKAMAL      = '/portfolio/rajkamal/hero.svg';
const IMG_AWCH          = '/portfolio/awch/hero.png';
const IMG_LOCAL_FUTURES = '/portfolio/localFutures/hero.png';
const IMG_VILLAGE_WAYS  = '/portfolio/villageWays/hero.png';
const IMG_AI_CROWD      = '/portfolio/aiCrowd/hero.svg';

const PROJECTS = [
  {
    slug: '/portfolio/ai-crowd',
    title: 'AI Crowd',
    subtitle: 'Capacity Building & Visual Communication',
    tags: ['Science', 'Communication', 'Visualisation'],
    image: IMG_AI_CROWD,
    accent: '#D60000',
  },
  {
    slug: '/portfolio/remodel-un',
    title: 'ReModel UN',
    subtitle: 'Brand Identity & Visual System',
    tags: ['Brand Strategy', 'Identity Design', 'UI/UX', 'Motion'],
    image: IMG_REMODEL_UN,
    accent: '#00E357',
    tagBreakAt: 2,
  },
  {
    slug: '/portfolio/fermy-lab',
    title: 'Fermy Lab',
    subtitle: 'Master Brand Architecture & Omnichannel System',
    tags: ['Brand Strategy', 'Packaging Design', 'UI System', 'OOH'],
    image: IMG_FERMY_LAB,
    accent: '#3E843E',
  },
  {
    slug: '/portfolio/rajkamal-prakashan',
    title: 'Rajkamal Prakashan',
    subtitle: 'Brand Governance, Enterprise Digital & Omnichannel Event Execution',
    tags: ['Brand Strategy', 'Brand Governance', 'Enterprise Digital', 'Omnichannel'],
    image: IMG_RAJKAMAL,
    accent: '#D80000',
  },
  {
    slug: '/portfolio/awch',
    title: 'AWCH',
    subtitle: 'Avishkar Women & Children Hospital — Brand, Digital & Social System',
    tags: ['Brand Strategy', 'Visual Identity', 'Digital Platform', 'Social Media'],
    image: IMG_AWCH,
    accent: '#BF0076',
  },
  {
    slug: '/portfolio/local-futures',
    title: 'Local Futures',
    subtitle: 'Graphics Localization for Hindi-Language Documentary Short',
    tags: ['Graphics Localization', 'Motion Graphics', 'Devanagari', 'Hindi'],
    image: IMG_LOCAL_FUTURES,
    accent: '#1c8aaa',
  },
  {
    slug: '/portfolio/village-ways',
    title: 'Village Ways',
    subtitle: 'Capacity Building & Community Visual Communication System',
    tags: ['Brand Strategy', 'Print Design', 'Social Media', 'Capacity Building'],
    image: IMG_VILLAGE_WAYS,
    accent: '#94c11f',
  },
];

export default function PortfolioShowcase() {
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
            to="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:opacity-80 active:scale-95 transition-all select-none shrink-0"
          >
            View All
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid of 3 by 2 (on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 6).map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: (i % 3) * 0.12, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
            >
              <Link
                to={project.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-black/[0.06] shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={i < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, idx) => (
                      <div key={tag} className="flex items-center">
                        {'tagBreakAt' in project && idx === project.tagBreakAt && (
                          <div className="w-full h-0" />
                        )}
                        <span
                          className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide border"
                          style={{ borderColor: project.accent, color: project.accent }}
                        >
                          {tag}
                        </span>
                      </div>
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
                      View Portfolio
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
