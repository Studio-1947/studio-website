import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

const IMG_REMODEL_UN    = '/portfolio/remodelUN/hero.svg';
const IMG_FERMY_LAB     = '/portfolio/fermylab/Physical Retail Packaging.png';
const IMG_RAJKAMAL      = '/portfolio/rajkamal/hero.svg';
const IMG_AWCH          = '/portfolio/awch/hero.png';
const IMG_LOCAL_FUTURES = '/portfolio/localFutures/hero.png';
const IMG_VILLAGE_WAYS  = '/portfolio/villageWays/hero.png';
const IMG_AI_CROWD      = '/portfolio/aiCrowd/hero.svg';

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    slug: '/portfoliov2/ai-crowd',
    title: 'AI Crowd',
    subtitle: 'Capacity Building & Visual Communication',
    tags: ['Science', 'Communication', 'Visualisation'],
    image: IMG_AI_CROWD,
    accent: '#D60000',
  },
  {
    slug: '/portfoliov2/remodel-un',
    title: 'ReModel UN',
    subtitle: 'Brand Identity & Visual System',
    tags: ['Brand Strategy', 'Identity Design', 'UI/UX', 'Motion'],
    image: IMG_REMODEL_UN,
    accent: '#00E357',
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

export default function PortfolioV2() {
  usePageMeta({
    title: 'Portfolio – Studio 1947',
    description: 'A new generation of Studio 1947 case studies — brand identities, visual systems, and omnichannel design.',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="portfolio-page min-h-screen bg-[#F7F5F2] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Header */}
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D60000] mb-4">
              Selected Work
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-[0.95] tracking-tight mb-6">
              Our Work
            </h1>
            <p className="text-lg text-[#6B6B6B] max-w-xl font-light leading-relaxed">
              Brand identities, visual systems, and experience design built for organisations
              that shape culture and communities.
            </p>
          </div>

          {/* Project list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {PROJECTS.map((project, i) => (
              <Link
                key={project.slug}
                to={project.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-black/[0.06] shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                {/* Image panel */}
                <div className="relative w-full aspect-[16/10] overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Content panel */}
                <div className="flex flex-col justify-between p-8 sm:p-10 flex-1">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border"
                          style={{ borderColor: project.accent, color: project.accent }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] leading-tight tracking-tight mb-3">
                      {project.title}
                    </h2>
                    <p className="text-[#6B6B6B] text-base font-light leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-8">
                    <span
                      className="text-sm font-bold tracking-wide transition-colors duration-300"
                      style={{ color: project.accent }}
                    >
                      View Case Study
                    </span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

          {/* Footer note */}
          <p className="mt-16 text-center text-sm text-[#9B9B9B]">
            More case studies coming soon.
          </p>
        </div>
      </div>
    </Layout>
  );
}
