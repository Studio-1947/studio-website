import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

// ── Figma Assets (7-day hosted URLs — swap with permanent assets) ─────────────
const IMG_HERO       = 'https://www.figma.com/api/mcp/asset/dc00f9e8-f215-4994-a613-e6a9a1fca6c3';
const IMG_SLIDES     = 'https://www.figma.com/api/mcp/asset/a025b919-d633-4734-916e-05edec2bb384';
const IMG_CLEARSPACE = 'https://www.figma.com/api/mcp/asset/177afb62-0a8f-46aa-8109-ffe86cc7b52d';
const IMG_LOGO_RULES = 'https://www.figma.com/api/mcp/asset/0ffe8d49-1e2e-4a84-867f-973e52c466cc';
const IMG_TYPOGRAPHY = 'https://www.figma.com/api/mcp/asset/a073308e-93be-4e08-8b09-34c3f6ea1e1d';
const IMG_SCRIPTS    = 'https://www.figma.com/api/mcp/asset/243156ee-fa3b-4cd6-9a8e-098def6ca1bc';
const IMG_DASHBOARD  = 'https://www.figma.com/api/mcp/asset/5411f67b-4ec1-40a5-b74a-f6c06df30a1a';
const IMG_SUBLOGOS   = 'https://www.figma.com/api/mcp/asset/ce5d7df5-48d6-428b-8d57-298d436c0a0a';
const IMG_MATERIALS  = 'https://www.figma.com/api/mcp/asset/92e8606f-a7e3-4aa5-95c5-24fe89da7118';
const IMG_COBRANDING = 'https://www.figma.com/api/mcp/asset/e575dc80-cef5-4eca-9527-9065a7e700ff';

const RED = '#D80000';

// ── Shared primitives ─────────────────────────────────────────────────────────
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border"
      style={{ borderColor: RED, color: RED }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color: RED }}>
      {children}
    </p>
  );
}

function SectionHeading({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <h2
      className={`font-black text-[#1A1A1A] leading-tight tracking-tight ${
        large ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl'
      }`}
    >
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed font-light">
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-t border-black/[0.08] my-14 md:my-20" />;
}

function ImageCard({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-black/[0.06] bg-[#F9F9F9] ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto" />
    </div>
  );
}

interface CardData { title: string; body: string }

function TwoColCards({ cards }: { cards: [CardData, CardData] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((card) => (
        <div key={card.title} className="bg-white border border-black/[0.08] rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-bold mb-4" style={{ color: RED }}>{card.title}</h3>
          <p className="text-[#1A1A1A] text-base leading-relaxed">{card.body}</p>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RajkamalPrakashan() {
  usePageMeta({
    title: 'Rajkamal Prakashan — Studio 1947',
    description:
      'How Studio 1947 rebuilt the brand infrastructure of India\'s largest Hindi literary publisher — brand governance, enterprise digital product, and nation-wide event execution.',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-[#F7F5F2] min-h-screen">

        {/* ── Back button ── */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-6">
          <Link
            to="/portfoliov2"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Work
          </Link>
        </div>

        {/* ── Hero ── */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-14">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={IMG_HERO}
              alt="Rajkamal Prakashan — brand identity in context"
              loading="eager"
              decoding="async"
              className="w-full h-[320px] md:h-[460px] object-cover"
            />
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 pb-24">

          {/* Project header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <Tag>Brand Strategy</Tag>
              <Tag>Brand Governance</Tag>
              <Tag>Enterprise Digital</Tag>
              <Tag>Omnichannel Execution</Tag>
            </div>
            <h1
              className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-8"
              style={{ color: '#1A1A1A' }}
            >
              Rajkamal<br />Prakashan
            </h1>
            <div className="flex flex-col gap-5">
              <Body>
                When an enterprise-level cultural institution with six decades of legacy and a catalogue of over 50,000 titles reaches out for help, the scope of work extends far beyond pixels.
              </Body>
              <Body>
                Since September 2025, our agency has embedded itself inside the operational structure of Rajkamal Prakashan—India's largest Hindi literary publisher—functioning not as a vendor, but as a strategic brand and technology partner.
              </Body>
              <Body>
                Here is the strategic breakdown of how we are rebuilding the brand infrastructure of a national institution.
              </Body>
            </div>
          </div>

          <Divider />

          {/* ── Engagement Model ── */}
          <div className="mb-10">
            <SectionLabel>The Engagement</SectionLabel>
            <SectionHeading large>
              From Pixel Hand-offs to High-Pressure Business Advisory
            </SectionHeading>
          </div>

          <div className="mb-8">
            <Tag>The Corporate Challenge</Tag>
          </div>

          <div className="flex flex-col gap-4 mb-10">
            <Body>
              Rajkamal Prakashan operates at an immense scale. With a content library running into tens of thousands of titles, a dedicated mascot beloved across India's literary community, and a heritage stretching back to 1947, the brand had accrued decades of visual inconsistency that was actively eroding its market position.
            </Body>
            <Body>
              When we initiated our deep-dive audit phase, two critical failure points became immediately apparent.
            </Body>
          </div>

          <TwoColCards
            cards={[
              {
                title: 'Visual Fragmentation',
                body: 'The core identity was suffering from inconsistent logo configurations, arbitrary color substitutions, and erratic event-based branding shifts.',
              },
              {
                title: 'Algorithmic Disconnect',
                body: 'In modern digital marketplaces, algorithms classify brands based on consistent pattern recognition—color ratios, layout grids, and visual rhythm. The rapid changes across various campaigns were resetting algorithmic learning loops, directly choking organic digital reach and eroding long-term brand equity.',
              },
            ]}
          />

          <div className="mt-12 mb-4">
            <SectionLabel>The Strategic Shift</SectionLabel>
          </div>
          <Body>
            We shifted Rajkamal's operational model from reactive design execution to proactive brand governance—establishing enforceable standards that could survive vendor turnover, personnel changes, and the chaos of high-pressure live events.
          </Body>

          <Divider />

          {/* ── Brand Governance ── */}
          <div className="mb-8">
            <SectionLabel>Brand Governance</SectionLabel>
            <SectionHeading>The Consolidated Logo Laws</SectionHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              To eliminate execution discrepancies across 50+ years of accumulated creative assets, we authored a comprehensive, enforceable brand governance framework — condensing every logo configuration rule, color application law, and typography mandate into a single operational document.
            </Body>
            <Body>
              The brand guideline spans clear space requirements, favicon usage, multi-script logo family specifications, and sister-brand co-existence rules — all anchored in production-ready specifications.
            </Body>
          </div>

          <ImageCard src={IMG_SLIDES} alt="Rajkamal Prakashan Brand Guideline Slides" className="mb-8" />

          <div className="mb-8">
            <SectionLabel>Logo Clearspace</SectionLabel>
            <Body>
              Every Rajkamal logo variant is governed by a 50px clearspace on all four sides — ensuring the identity retains visual breathing room across every application, from app icons to 40-foot event backdrops.
            </Body>
          </div>

          <ImageCard src={IMG_CLEARSPACE} alt="Rajkamal logo clearspace diagram" className="mb-4" />
          <ImageCard src={IMG_LOGO_RULES} alt="Rajkamal logo misuse rules" />

          <Divider />

          {/* ── Typography ── */}
          <div className="mb-8">
            <SectionLabel>The Typography System</SectionLabel>
            <SectionHeading>Noto Sans — A Pan-Indic Engine</SectionHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              Operating a major publishing house across a linguistically diverse market demands a typeface with exceptional script coverage. We instituted Noto Sans as the universal communication typeface — a system that handles Hindi, Bengali, Gujarati, Gurmukhi, Telugu, Tamil, and Kannada with perfectly matching visual weights.
            </Body>
          </div>

          <ImageCard src={IMG_TYPOGRAPHY} alt="Noto Sans typography specimen — all weights" className="mb-8" />

          <div className="flex flex-col gap-4 mb-10">
            <Body>
              We restructured Rajkamal's universal communications around the Noto Sans engine—a typeface that supports over 500 languages and every major Indic script at perfectly calibrated visual weights. This single decision resolved years of cross-regional typographic inconsistency.
            </Body>
          </div>

          <ImageCard src={IMG_SCRIPTS} alt="Rajkamal name in Devanagari, Bengali, Gujarati, Telugu, and Malayalam" className="mb-10" />

          <TwoColCards
            cards={[
              {
                title: 'Visual Consistency',
                body: 'We guaranteed that whether a reader engages with an ad in Mumbai, a book jacket in Delhi, or a banner in Jaipur, the visual rhythm and typographic voice feel completely uniform.',
              },
              {
                title: 'Operational Efficiency',
                body: 'We completely removed enterprise software font licensing fees and font-delivery errors across external development teams and regional printing houses.',
              },
            ]}
          />

          <Divider />

          {/* ── Digital Transformation ── */}
          <div className="mb-8">
            <SectionLabel>Digital Transformation</SectionLabel>
            <SectionHeading>Enterprise Application Design</SectionHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              As a consulting partner, our job is to solve problems before they become crises. Inside Rajkamal's operations, two systemic inefficiencies were creating compounding overhead that no amount of creative execution could fix.
            </Body>
          </div>

          <TwoColCards
            cards={[
              {
                title: 'Manual Accounting Overhead',
                body: 'Revenue data, royalty calculations, and inventory figures were managed across disconnected spreadsheets — creating reconciliation delays, audit risk, and an inability to surface real-time business intelligence.',
              },
              {
                title: 'Zero Centralized Operational Transparency',
                body: 'With no unified platform, senior leadership had no single source of truth for the organisation\'s operational health — decisions were made on lagged, fragmentary data from multiple siloed departments.',
              },
            ]}
          />

          <div className="mt-12 mb-6">
            <SectionLabel>The Solution</SectionLabel>
            <SectionHeading>A Unified Enterprise Management Platform</SectionHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              To remove this operational friction, we designed a custom, high-fidelity enterprise management platform — BookWorm — built to give Rajkamal's leadership real-time visibility across every operational dimension.
            </Body>
          </div>

          <ImageCard src={IMG_DASHBOARD} alt="BookWorm enterprise dashboard — Rajkamal Prakashan" className="mb-8" />

          <div className="mb-4">
            <Tag>The Business Impact for Executives</Tag>
          </div>
          <Body>
            By translating fragmented tables of numbers into an executive-level, at-a-glance operations dashboard, we gave decision-makers the ability to act on accurate, live data — eliminating the reconciliation lag that was costing Rajkamal measurable revenue and hours of administrative overhead per week.
          </Body>

          <Divider />

          {/* ── Omnichannel / Events ── */}
          <div className="mb-8">
            <SectionLabel>Omnichannel Execution</SectionLabel>
            <SectionHeading large>
              Nation-Wide Event Execution Under Live-Fire Conditions
            </SectionHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              A brand identity system must remain absolutely pristine under live-fire conditions. Rajkamal runs multiple concurrent national literary festivals — each requiring its own sub-brand identity that co-exists coherently with the master brand.
            </Body>
          </div>

          <div className="mb-6">
            <Tag>Unified Sub-Brand Hierarchy</Tag>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              We structured a clear sub-branding architecture that placed the master brand at the apex of every event identity—maintaining coherence across Kitab Desh, Kitab Tera, Kitab Utsav, and Stri Varsh — four distinct festival identities that share a visual language without cannibalising one another.
            </Body>
          </div>

          <ImageCard src={IMG_SUBLOGOS} alt="Rajkamal event sub-brand logos — Kitab Desh, Kitab Tera, Kitab Utsav, Stri Varsh" className="mb-12" />

          <div className="mb-6">
            <Tag>Environmental Material Optimization</Tag>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              We designed scalable retail assets, premium canvas promotional merchandise, and branded merchandise systems that translate the visual identity onto physical touchpoints with zero fidelity loss — from artisanal tote bags to premium branded mugs distributed at national festival venues.
            </Body>
          </div>

          <ImageCard src={IMG_MATERIALS} alt="Rajkamal Kitab Desh branded tote bag and mug" className="mb-12" />

          <div className="mb-6">
            <Tag>Bulletproof Quality Assurance</Tag>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              By providing production-ready layout templates, co-branding governance documents, and print-specification files, we eliminated execution variance at the vendor level—ensuring every output, from a 6×4 flex banner to a 40-foot stage backdrop, matched the master guidelines to the pixel.
            </Body>
          </div>

          <ImageCard src={IMG_COBRANDING} alt="Rajkamal Prakashan and Pratham Books co-branding clearspace governance" />

          <Divider />

          {/* ── Commercial Value ── */}
          <div className="mb-8">
            <SectionLabel>Commercial Value Summary</SectionLabel>
            <SectionHeading>Building Scalable Brand Capital</SectionHeading>
          </div>
          <div className="flex flex-col gap-5 mb-0">
            <Body>
              Through this strategic consulting engagement, we proved that premium design is an operational asset — not a cost centre. The brand governance frameworks, the enterprise technology design, and the omnichannel event execution systems we delivered are not static deliverables. They are living operational infrastructure that compounds in value as the organisation scales.
            </Body>
            <Body>
              Every rupee invested in systematic brand governance — clearspace laws, typeface standardisation, sub-brand hierarchy — translates directly into reduced vendor rework costs, faster campaign execution, stronger algorithmic brand recognition, and measurably higher audience trust across every literary festival Rajkamal runs.
            </Body>
          </div>

          <Divider />

          {/* ── CTA ── */}
          <div className="rounded-2xl overflow-hidden border border-black/[0.06] bg-white p-10 md:p-14">
            <p
              className="text-3xl md:text-5xl font-black leading-tight mb-10"
              style={{ color: RED }}
            >
              Building a future-proof brand system or launching a complex digital product?
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-talk-modal'))}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide transition-opacity hover:opacity-90"
              style={{ background: RED }}
            >
              Let's Build a Sustainable System
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
}
