import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

// ── Figma Assets (7-day hosted URLs — swap with permanent assets) ─────────────
const IMG_HERO    = 'https://www.figma.com/api/mcp/asset/b0e048c8-3803-4e2b-a26b-d4f7e5017776';
const IMG_ARCH    = 'https://www.figma.com/api/mcp/asset/bf69629d-b2d8-40d0-bf2a-5e924c9de89a';
const IMG_COLOR   = 'https://www.figma.com/api/mcp/asset/21d9c4bc-bdbe-4b02-8928-743c8964b4fc';
const IMG_TYPO    = 'https://www.figma.com/api/mcp/asset/02d30260-7f9c-44c6-af08-56b0913c2348';
const IMG_WEB     = 'https://www.figma.com/api/mcp/asset/6e205b23-772e-4146-bec1-64ab99d77d81';
const IMG_APPT    = 'https://www.figma.com/api/mcp/asset/9c5596a9-8b0b-49a2-97a7-72578906c3aa';
const IMG_SOCIAL  = 'https://www.figma.com/api/mcp/asset/eb40c4b3-40f1-437b-8db2-65c555e8819d';

const PINK = '#BF0076';
const RED  = '#D60000';

// ── Shared primitives ─────────────────────────────────────────────────────────
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase border"
      style={{ borderColor: RED, color: RED, background: '#FFF4F4' }}
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: PINK }}>
      {children}
    </h3>
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

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Awch() {
  usePageMeta({
    title: 'AWCH — Avishkar Women & Children Hospital · Studio 1947',
    description:
      'How Studio 1947 established AWCH as a modern, premier multispeciality medical institution in Asansol — brand strategy, visual identity, digital platform, and omnichannel social media system.',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="portfoliov2-page bg-[#F7F5F2] min-h-screen">

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
              alt="AWCH — Avishkar Women & Children Hospital, Asansol"
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
              <Tag>Visual Identity</Tag>
              <Tag>Digital Platform</Tag>
              <Tag>Social Media</Tag>
            </div>
            <h1
              className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-8"
              style={{ color: '#1A1A1A' }}
            >
              Avishkar<br />Hospital
            </h1>
            <div className="flex flex-col gap-5">
              <Body>
                When healthcare founders and hospital executives evaluate a creative partner, they look for design that does more than decorate a space. They seek an agency that can build deep institutional trust, shift consumer behavior, and engineer digital-first touchpoints that simplify patient care.
              </Body>
              <Body>
                This case study demonstrates how we established{' '}
                <strong style={{ color: PINK }}>AWCH (Avishkar Women & Children Hospital)</strong>{' '}
                as a modern, premier multispeciality medical institution in Asansol. By shifting regional perceptions and eliminating digital friction, we built a comprehensive communication ecosystem focused on authority, accessibility, and community impact.
              </Body>
            </div>
          </div>

          <Divider />

          {/* ── Strategic Context ── */}
          <div className="mb-8">
            <SectionLabel>Strategic Context</SectionLabel>
            <SectionHeading large>The Regional Trust Gap</SectionHeading>
          </div>

          <div className="mb-6">
            <Tag>The Mission</Tag>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              <strong style={{ color: PINK }}>Avishkar Women & Children Hospital (AWCH)</strong>{' '}
              was envisioned as a state-of-the-art multispeciality hospital bringing world-class medical infrastructure directly to families in Asansol. The institution is dedicated to delivering highly specialized, compassionate care, completely removing the need for artificial operational shortcuts in the patient experience.
            </Body>
          </div>

          <div className="mb-6">
            <Tag>The Challenge</Tag>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              Healthcare brands in Tier-2 cities face a unique psychological hurdle: a systemic lack of digital trust and fragmented institutional communication. Historically, many families in Asansol would undergo the emotional and financial strain of traveling all the way to Kolkata for critical treatments. This flight wasn't due to a lack of local medical infrastructure, but a lack of visual confidence and awareness in local brands.
            </Body>
            <Body>
              Our core strategic challenge was to bridge this confidence gap. The identity needed to balance:
            </Body>
          </div>

          {/* 3-col challenge cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-0">
            {[
              {
                title: 'Emotional Warmth',
                body: 'Reassuring anxious patients and protective parents.',
              },
              {
                title: 'Clinical Authority',
                body: 'Commanding absolute medical professionalism.',
              },
              {
                title: 'Cultural Familiarity',
                body: 'Ensuring the visual environment felt approachably native rather than intimidatingly corporate.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-black/[0.08] rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4" style={{ color: PINK }}>{card.title}</h3>
                <p className="text-[#1A1A1A] text-base leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <Divider />

          {/* ── Parent-Brand Architecture ── */}
          <div className="mb-8">
            <SectionLabel>Brand Architecture</SectionLabel>
            <SectionHeading>Parent-Brand Architecture</SectionHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              To protect the institution from future design debt, we built an adaptable visual architecture. AWCH serves as the primary master identity under which specific wings — such as Pediatrics, Gynecology, and Emergency Care — operate. This cohesive blueprint ensures that as the hospital expands its departments, every new facility instantly inherits established brand equity, saving long-term promotional costs.
            </Body>
          </div>

          <ImageCard src={IMG_ARCH} alt="AWCH master brand logo — Avishkar Women & Children Hospital" />

          <Divider />

          {/* ── Visual Direction ── */}
          <div className="mb-8">
            <SectionLabel>Visual Direction & Design Tokens</SectionLabel>
            <SectionHeading>Breaking the "Sterile Blue" Cliché</SectionHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              Standard corporate healthcare branding is crowded with cold, high-saturation blues that feel clinical and detached. To instantly differentiate AWCH on a regional scale, we engineered a distinct, high-contrast palette — intentionally selected to evoke care, empathy, and deep compassion while bringing human warmth into an industry often seen as sterile.
            </Body>
          </div>

          <ImageCard src={IMG_COLOR} alt="AWCH color system — Care Pink #BF0076 and Neutral Black" />

          <Divider />

          {/* ── Typography ── */}
          <div className="mb-8">
            <SectionLabel>Typography</SectionLabel>
            <SectionHeading>Accessible and Stress-Free Readability</SectionHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              In high-stress medical environments, the typeface must serve as an invisible, high-performance tool for fast reading. We selected Inter across all five weights — providing unmatched legibility on both digital screens and printed hospital collateral while maintaining the clean, academic weight the institution demands.
            </Body>
          </div>

          <ImageCard src={IMG_TYPO} alt="Inter typeface — all weights across the AWCH brand system" />

          <Divider />

          {/* ── Omnichannel ── */}
          <div className="mb-8">
            <SectionLabel>Omnichannel System</SectionLabel>
            <SectionHeading large>Connecting Patients Across Every Touchpoint</SectionHeading>
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <Body>
              To demonstrate the system's ability to seamlessly connect with patients across every phase of their healthcare journey, we activated the visual assets across key physical and digital channels.
            </Body>
          </div>

          {/* Sub-section: Web */}
          <div className="mb-4">
            <Tag>The Friction-Free Web Experience</Tag>
          </div>
          <div className="mb-6">
            <SubHeading>Simplified Information Architecture</SubHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              The desktop and mobile web platforms were designed as trust-building tools rather than static information walls. Healthcare data is structured into highly scannable layouts, enabling anxious users to find doctors, key medical departments, and emergency contact details within seconds.
            </Body>
          </div>

          <ImageCard src={IMG_WEB} alt="AWCH website — Expert Women and Children Healthcare in Asansol" className="mb-12" />

          <div className="mb-6">
            <SubHeading>Frictionless Appointment UX</SubHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              We designed a clean, intuitive booking flow that removes unnecessary steps. This digital pathway builds immediate brand credibility and helps reduce long dependency lines at physical hospital reception desks.
            </Body>
          </div>

          <ImageCard src={IMG_APPT} alt="AWCH appointment booking — Schedule Your Visit at AWCH" className="mb-12" />

          <div className="mb-4">
            <SubHeading>Accessibility-First UI</SubHeading>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            <Body>
              By pairing clean typography with generous breathing space, the layout minimizes cognitive load, making the digital experience effortless for users of varying ages and digital literacy levels.
            </Body>
          </div>

          <div className="mb-4">
            <SubHeading>Template Scaling</SubHeading>
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <Body>
              We engineered modular graphic templates that maintain a strict visual style, recognizable brand colors, and bold typography hierarchy across all health-education posts.
            </Body>
          </div>

          {/* Sub-section: Social */}
          <div className="mb-6">
            <Tag>The Social Media Awareness Engine</Tag>
          </div>
          <div className="mb-4">
            <SubHeading>Instant Recall</SubHeading>
          </div>
          <div className="flex flex-col gap-4 mb-10">
            <Body>
              Social platforms serve as the primary vehicle for building local awareness in Asansol. This systematic structure ensures that every piece of digital content is immediately recognizable in a crowded social feed as an authoritative, caring message from the AWCH ecosystem.
            </Body>
          </div>

          <ImageCard src={IMG_SOCIAL} alt="AWCH social media posts — health tips, hiring, and pregnancy guidance" />

          <Divider />

          {/* ── CTA ── */}
          <div className="rounded-2xl overflow-hidden border border-black/[0.06] bg-white p-10 md:p-14">
            <p
              className="text-3xl md:text-5xl font-semibold leading-tight mb-10"
              style={{ color: PINK }}
            >
              Building a future-proof brand system or launching a complex digital product?
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-talk-modal'))}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide transition-opacity hover:opacity-90"
              style={{ background: PINK }}
            >
              Let's Build a Sustainable System
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
}
