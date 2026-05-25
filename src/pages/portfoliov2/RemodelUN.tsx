import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

// ── Figma Assets ──────────────────────────────────────────────────────────────
// Note: Figma-hosted URLs expire after 7 days — swap with permanent assets
const IMG_HERO        = 'https://www.figma.com/api/mcp/asset/cbd571fc-30da-443b-88da-1ed7bf04e0af';
const IMG_LOGO_DARK   = 'https://www.figma.com/api/mcp/asset/9c103714-5373-4d47-bad2-5aecc350d38e';
const IMG_LOGO_MORPH  = 'https://www.figma.com/api/mcp/asset/d040a475-201b-4740-99be-12ad053b3cab';
const IMG_CORE_PROB   = 'https://www.figma.com/api/mcp/asset/492093b5-4528-454c-92f9-535450b98056';
const IMG_CENTER_CORE = 'https://www.figma.com/api/mcp/asset/f8ae3025-97f4-45b0-a2c0-984624208f97';
const IMG_UN_BUBBLE   = 'https://www.figma.com/api/mcp/asset/00f6e20e-c3d9-4193-aa92-43cda99baadb';
const IMG_VIDEO_UI    = 'https://www.figma.com/api/mcp/asset/4e6a708c-240b-44e5-a217-a9bd2e657aa2';
const IMG_PODCAST     = 'https://www.figma.com/api/mcp/asset/07020ab5-c99c-404a-991c-4d8f82a6ed98';
const IMG_CLEARSPACE  = 'https://www.figma.com/api/mcp/asset/43a7db67-a77d-4d37-a7f7-2457f041e52b';
const IMG_COBRANDING  = 'https://www.figma.com/api/mcp/asset/bf512f98-3827-4d85-8442-62b00096cea0';
const IMG_LOGO_LAW    = 'https://www.figma.com/api/mcp/asset/6be252ab-9a27-406a-ba1c-a25f104f3eef';
const IMG_CTA_GRAPHIC = 'https://www.figma.com/api/mcp/asset/8600e852-5c71-423c-86f0-554ddf2db349';

// ── Small reusable bits ───────────────────────────────────────────────────────
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 tracking-wide">
      {children}
    </span>
  );
}

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center px-5 py-2.5 rounded-full border text-sm font-semibold tracking-wide mb-6 ${
        light
          ? 'border-white/20 text-white/80'
          : 'border-gray-200 bg-white text-gray-600'
      }`}
    >
      {children}
    </span>
  );
}

function SectionHeading({ children, light, className = '' }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <h2 className={`text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.05] ${light ? 'text-white' : 'text-gray-900'} ${className}`}>
      {children}
    </h2>
  );
}

function Body({ children, light, className = '' }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <p className={`text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-gray-600'} ${className}`}>
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-gray-100 my-16 md:my-24" />;
}

// ── Three-column card grid (Component / UX Challenge / Solution) ──────────────
interface ThreeColProps {
  component: string;
  challenge: string;
  solution: string;
}
function ThreeColCards({ component, challenge, solution }: ThreeColProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {[
        { label: 'The Component', text: component },
        { label: 'The UX Challenge', text: challenge },
        { label: 'The Solution', text: solution },
      ].map(({ label, text }) => (
        <div key={label} className="bg-white rounded-3xl border border-gray-100 p-8">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">{label}</p>
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RemodelUN() {
  usePageMeta({
    title: 'Remodel UN – Portfolio – Studio 1947',
    description: 'Brand strategy and visual identity system for ReModelUN — a high-profile AI podcast initiative featuring global UN-affiliated thought leaders.',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <article className="bg-[#fafafa] min-h-screen">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <div className="relative">
          <Link
            to="/ourworks"
            className="absolute top-6 left-6 z-10 flex items-center justify-center w-14 h-14 bg-[#D60000] rounded-full shadow-lg hover:bg-[#B80000] transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <img
            src={IMG_HERO}
            alt="Remodel UN — conference stage"
            className="w-full h-[56vh] md:h-[72vh] object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* ── Project Header ────────────────────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <section className="pt-14 pb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight leading-none mb-8">
              Remodel UN
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <Tag>Brand Strategy</Tag>
              <Tag>Visual Identity System</Tag>
            </div>
            <p className="text-gray-500 text-sm font-medium mb-2">Created by</p>
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {['Santaa', 'Reece', 'Brototi'].map((name) => (
                <span
                  key={name}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-medium text-gray-700"
                >
                  <span className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0" />
                  {name}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-xl leading-relaxed max-w-4xl">
              ReModelUN is a high-profile podcast initiative featuring global thought leaders from UN-affiliated groups discussing ethical, AI-driven solutions for social good.
            </p>
          </section>

          <Divider />

          {/* ── Context & The Challenge ───────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionLabel>The Mission</SectionLabel>
            <SectionHeading className="mb-6">Context &amp; The Challenge</SectionHeading>
            <Body className="max-w-4xl mb-12">
              ReModelUN is a high-profile podcast initiative featuring global thought leaders from UN-affiliated groups discussing ethical, AI-driven solutions for social good.
            </Body>

            {/* Core Problem card */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-100">
              <img
                src={IMG_CORE_PROB}
                alt="Core Problem — Brand strategy challenge"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-10 bg-white rounded-3xl border border-gray-100 p-8 md:p-12">
              <SectionLabel>Core Problem</SectionLabel>
              <Body className="max-w-4xl">
                The brand needed an identity system that felt authoritative enough for international diplomats, yet agile enough to match cutting-edge AI discourse. It required a &quot;sustainable framework&quot; to spawn future conferences and scholarships seamlessly without breaking core brand equity.
              </Body>
            </div>
          </section>

          <Divider />

          {/* ── Brand Strategy & Visual Architecture ──────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionHeading className="mb-14">Brand Strategy &amp; Visual Architecture</SectionHeading>

            {/* Sub-section: The "re" Loop */}
            <div className="mb-4">
              <SectionLabel>The &quot;re&quot; Loop — Continuous Iteration</SectionLabel>
            </div>

            {/* Two logo panels side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="rounded-3xl overflow-hidden border border-gray-100 aspect-[5/4]">
                <img
                  src={IMG_LOGO_DARK}
                  alt="ReModelUN logo on dark background"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-3xl overflow-hidden border border-gray-100 aspect-[5/4]">
                <img
                  src={IMG_LOGO_MORPH}
                  alt="ReModelUN logo morphology and structure"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <Body className="max-w-4xl mb-16">
              AI is not a static destination, it is an iterative process. The &apos;re&apos; loop represents continuous remodeling, adaptation, and forward momentum. By framing this within an intentional, self-contained cycle, the visual language mirrors the podcast&apos;s core theme: endlessly auditing, rethinking, and improving global systems through technology.
            </Body>

            {/* Sub-section: The Center Core */}
            <div className="mb-4">
              <SectionLabel>The Center Core — The Variable Engine</SectionLabel>
            </div>
            <div className="rounded-3xl overflow-hidden border border-gray-100 mb-8">
              <img
                src={IMG_CENTER_CORE}
                alt="The Center Core — variable engine logo concept"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <Body className="max-w-4xl mb-16">
              The center of the logo acts as the functional bridge. For the flagship brand, the microphone icon anchors the mark firmly in the audio and broadcasting space. However, this slot is designed as a variable container. By making the icon interchangeable, the architecture allows the core wordmark to adapt dynamically for sister ventures — shifting to a podium for conferences or a cap for scholarships — without losing its structural integrity.
            </Body>

            {/* Sub-section: The "UN" Chat Bubble */}
            <div className="mb-4">
              <SectionLabel>The &quot;UN&quot; Chat Bubble — Diplomatic Dialogue</SectionLabel>
            </div>
            <div className="rounded-3xl overflow-hidden border border-gray-100 mb-8">
              <img
                src={IMG_UN_BUBBLE}
                alt="The UN chat bubble — diplomatic dialogue logo element"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <Body className="max-w-4xl">
              Global change doesn&apos;t happen in a vacuum — it happens through conversation. The &apos;UN&apos; terminal is deliberately shaped as a speech bubble to emphasize dialogue, cross-border collaboration, and human-first storytelling. It anchors the institutional authority of UN-affiliated organizations into a warm, approachable, and highly communicative digital asset.
            </Body>
          </section>

          <Divider />

          {/* ── Color Theory ──────────────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionHeading className="mb-6">Color Theory</SectionHeading>
            <Body className="max-w-4xl mb-12">
              The identity system for ReModelUN operates at a unique crossroads: it must respect the gravity and prestige of international diplomacy while capturing the electric, rapidly changing landscape of artificial intelligence. The palette is a deliberate, high-contrast pairing engineered to bridge these two worlds seamlessly.
            </Body>

            {/* Two color swatches side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Primary — Dark Cyan */}
              <div className="bg-[#293C53] rounded-3xl p-8 aspect-[4/3] flex flex-col justify-end">
                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-2">
                    <span className="text-white text-3xl font-bold">Primary</span>
                    <span className="text-white/20 text-3xl font-mono font-bold">#293C53</span>
                  </div>
                  <span className="text-white/60 text-sm">Dark Cyan</span>
                </div>
              </div>
              {/* Secondary — Fresh Lime */}
              <div className="bg-[#00E357] rounded-3xl p-8 aspect-[4/3] flex flex-col justify-end">
                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-2">
                    <span className="text-[#003f18] text-3xl font-bold">Secondary</span>
                    <span className="text-[#003f18]/20 text-3xl font-mono font-bold">#00E357</span>
                  </div>
                  <span className="text-[#003f18]/60 text-sm">Fresh Lime</span>
                </div>
              </div>
            </div>

            {/* Primary explanation */}
            <div className="mb-4">
              <SectionLabel>Primary Color</SectionLabel>
            </div>
            <div className="bg-[#293C53] rounded-3xl p-8 md:p-12 mb-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold max-w-xl leading-tight">
                  Institutional Authority &amp; Grounded Trust
                </h3>
                <span className="text-white/20 text-lg font-semibold whitespace-nowrap">Color Choice</span>
              </div>
              <Body light>
                Dark Cyan serves as the structural foundation of the entire brand environment. It is an intentional departure from the traditional, high-saturation corporate blues typically associated with global bureaucracies. Instead, this deep, muted tone introduces a sophisticated, academic weight. It signals deep wisdom, research-backed integrity, and the calm composure required when tackling massive global challenges. By utilizing this as our primary backdrop tone, we establish immediate credibility with UN-affiliated thought leaders and global organizations.
              </Body>
            </div>

            {/* Secondary explanation */}
            <div className="mb-4">
              <SectionLabel>Secondary Color</SectionLabel>
            </div>
            <div className="bg-[#00E357] rounded-3xl p-8 md:p-12 mb-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <h3 className="text-[#003f18] text-2xl md:text-3xl font-bold max-w-xl leading-tight">
                  AI Innovation &amp; Bias toward Action
                </h3>
                <span className="text-[#003f18]/30 text-lg font-semibold whitespace-nowrap">Color Choice</span>
              </div>
              <p className="text-[#003f18]/80 text-lg leading-relaxed">
                If Dark Cyan represents the institutional problem, Fresh Lime is the technological solution. This color is injected into the design system to represent the spark of artificial intelligence, digital efficiency, and forward-looking optimism. It acts as a deliberate disruption against the deep primary base, pulling the user&apos;s eye to interactive UI components, actionable resources, and critical insights. It ensures the platform never feels stagnant or overly bureaucratic — it feels alive, modern, and driven by high-energy innovation.
              </p>
            </div>

            {/* Chromatic Harmony */}
            <div className="mb-4">
              <SectionLabel>Chromatic Harmony in Digital Layouts</SectionLabel>
            </div>
            <Body className="max-w-4xl mb-8">
              When these two colors meet, they create a highly scannable visual hierarchy perfect for premium, dark-mode user interfaces.
            </Body>

            {/* Split harmony card */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-gray-100 mb-6">
              <div className="bg-[#293C53] p-8 md:p-12 flex flex-col justify-between">
                <p className="text-white text-xl md:text-2xl font-bold leading-tight mb-8">
                  Establishes visual stability and high-contrast readability for body text and system structures.
                </p>
                <div>
                  <div className="flex items-end justify-between mb-1">
                    <span className="text-white font-bold text-lg">Primary</span>
                    <span className="text-white/20 font-mono text-lg">#293C53</span>
                  </div>
                  <span className="text-white/50 text-sm">Dark Cyan</span>
                </div>
              </div>
              <div className="bg-[#00E357] p-8 md:p-12 flex flex-col justify-between">
                <p className="text-[#003f18] text-xl md:text-2xl font-bold leading-tight mb-8">
                  Serves as the high-visibility callout for active states, key data metrics, and dynamic branding nodes.
                </p>
                <div>
                  <div className="flex items-end justify-between mb-1">
                    <span className="text-[#003f18] font-bold text-lg">Secondary</span>
                    <span className="text-[#003f18]/20 font-mono text-lg">#00E357</span>
                  </div>
                  <span className="text-[#003f18]/50 text-sm">Fresh Lime</span>
                </div>
              </div>
            </div>

            <Body className="max-w-4xl">
              By maintaining a strict ratio where the deep canvas of Dark Cyan dominates 80% of the brand space and Fresh Lime strikes intensely at 20%, the brand successfully commands authority while remaining undeniably tech-forward.
            </Body>
          </section>

          <Divider />

          {/* ── Typography System ─────────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionHeading className="mb-4">The Typography System</SectionHeading>
            <p className="text-[#D60000] font-semibold text-lg mb-12 max-w-3xl">
              Legible both in Print and Digital Space, ensuring a seamless visual transition across every possible medium.
            </p>

            <Body className="max-w-4xl mb-4">
              When a brand handles dense, highly academic global challenges alongside fast-evolving artificial intelligence discourse, the typeface cannot afford to be decorative or distracting. It must serve as an invisible, high-performance vehicle for ideas.
            </Body>
            <Body className="max-w-4xl mb-10">
              We anchored the entire brand ecosystem to <strong>Roboto</strong>. Chosen for its neo-grotesque, geometric discipline, Roboto features friendly, open curves that make highly technical content feel accessible and easy to digest. By selecting a variable type system globally available in the open-source Google Font Library, we eliminated licensing friction for ReModelUN entirely.
            </Body>

            {/* Roboto specimen card */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-[#eaeaea]">
              {/* Left — specimen */}
              <div className="bg-white p-10 flex flex-col justify-center overflow-hidden relative">
                {['', '', '', '', ''].map((_, i) => (
                  <p
                    key={i}
                    className="font-sans font-semibold leading-none select-none"
                    style={{
                      fontSize: 'clamp(3rem, 10vw, 8rem)',
                      color: i === 2 ? '#293C53' : 'rgba(0,0,0,0.05)',
                    }}
                  >
                    Roboto
                  </p>
                ))}
              </div>
              {/* Right — weights */}
              <div className="bg-[#293C53] p-10 flex flex-col justify-center gap-5">
                {[
                  { label: 'Light', weight: 'font-light' },
                  { label: 'Regular', weight: 'font-normal' },
                  { label: 'Medium', weight: 'font-medium' },
                  { label: 'Semibold', weight: 'font-semibold' },
                  { label: 'Bold', weight: 'font-bold' },
                ].map(({ label, weight }) => (
                  <span key={label} className={`text-[#00E357] text-2xl md:text-3xl ${weight} font-sans`}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* ── Multi-Platform UI/UX ──────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionLabel>Extending the System Across Digital Realities</SectionLabel>
            <SectionHeading className="mb-6">Multi-Platform UI/UX Experience</SectionHeading>
            <Body className="max-w-4xl mb-16">
              A robust brand identity must effortlessly transition across diverse digital ecosystems without fracturing its core message. For ReModelUN, the UI/UX architecture translates static brand guidelines into dynamic, highly functional touchpoints — mapping the system across video production, dedicated audio players, and micro-screen environments.
            </Body>

            {/* Video Broadcast Tier */}
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">The Video Broadcast Tier</h3>
            <ThreeColCards
              component="Streamlined, high-contrast video overlay templates designed for multi-host and guest configurations."
              challenge="Video backgrounds are inherently unpredictable. Overlays must command immediate legibility regardless of the speaker's lighting, studio framing, or background complexity."
              solution="We created a pill-shaped, dual-toned frame using the brand's color palette. The speaker's photo is in a circular frame, with a Fresh Lime container for their name. Dark-toned flags categorize their designation and topic, like 'AI & Sustainability.'"
            />
            <div className="rounded-3xl overflow-hidden border border-gray-100 mt-6 mb-4">
              <img
                src={IMG_VIDEO_UI}
                alt="Video broadcast UI — ReModelUN lower-third overlay system"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-center text-[#D60000] font-semibold text-lg py-6 max-w-3xl mx-auto">
              Keep it bold, keep it clear, so every voice is heard, every idea shines, and every insight sparks action!
            </p>

            {/* Podcast Thumbnail System */}
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 mt-10">The Human-First Podcast Thumbnail System</h3>
            <ThreeColCards
              component="A modular, highly scalable cover art and thumbnail template system engineered for major global audio streaming platforms (Spotify, Apple Podcasts, Google Podcasts)."
              challenge="In competitive audio streaming, cover art must disrupt a user's scroll in under a second. The challenge was to create a template that maintains brand consistency while differentiating episodes and highlighting guests."
              solution="This asset system uses a square thumbnail layout as a premium card. It prioritizes high-resolution guest photography over abstract graphics, blending the speaker's portrait into the background for a clean surface for text."
            />
            <div className="rounded-3xl overflow-hidden border border-gray-100 mt-6 mb-4">
              <img
                src={IMG_PODCAST}
                alt="Podcast thumbnail system — cover art templates"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-center text-[#D60000] font-semibold text-lg py-6 max-w-3xl mx-auto">
              Faces tell stories — human-first designs make every conversation feel personal and every voice truly heard.
            </p>
          </section>

          <Divider />

          {/* ── Design Governance ─────────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionHeading className="mb-6">Design Governance</SectionHeading>
            <Body className="max-w-4xl mb-16">
              A visual identity system is only as durable as its real-world implementation. When corporate assets are distributed across internal marketing teams, development hubs, and international event organizers, they face the risk of visual dilution. This section demonstrates our commitment to technical precision.
            </Body>

            {/* Clearspace */}
            <div className="mb-4">
              <SectionLabel>The Proportional Clearspace Standard</SectionLabel>
            </div>
            <Body className="max-w-4xl mb-8">
              To safeguard the mastermark&apos;s visual prominence, it must always be protected from surrounding text, layout margins, and competing graphics. We defined the absolute minimum clearspace perimeter as exactly equal to a &quot;1 mic distance,&quot; calculated dynamically from the height of the internal microphone graphic.
            </Body>
            <div className="rounded-3xl overflow-hidden border border-gray-100 mb-4">
              <img
                src={IMG_CLEARSPACE}
                alt="Proportional clearspace standard diagram"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-center italic text-gray-500 text-lg py-4 mb-12">
              Respect the clear space, respect breathing space.
            </p>
            <Body className="max-w-4xl mb-16">
              By binding the breathing room proportionally to an internal element of the logo itself, we ensure that the safety boundary scales flawlessly — maintaining brand integrity whether the logo is rendered on a massive event banner or a small smartphone interface.
            </Body>

            {/* Co-Branding */}
            <div className="mb-4">
              <SectionLabel>Co-Branding &amp; Partnership Dynamics</SectionLabel>
            </div>
            <Body className="max-w-4xl mb-8">
              High-profile global initiatives naturally demand collaborative co-branding layouts. When locking up the mastermark alongside close corporate stakeholders or media affiliates such as Sony, stricter spatial boundaries must be strictly enforced.
            </Body>
            <div className="rounded-3xl overflow-hidden border border-gray-100 mb-4">
              <img
                src={IMG_COBRANDING}
                alt="Co-branding and partnership dynamics"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-center italic text-gray-500 text-lg py-4 mb-8">
              Social distance still required: keep a 2 mic distance even with the closest partner.
            </p>
            <Body className="max-w-4xl mb-16">
              By doubling the standard safety padding threshold to a 2-mic buffer for partner integrations, we protect the logo from crowding — guaranteeing that ReModelUN shares the stage with global entities equitably while fully preserving its independent structural authority.
            </Body>

            {/* Logo Law 101 */}
            <div className="mb-4">
              <SectionLabel>Logo Law 101</SectionLabel>
            </div>
            <Body className="max-w-4xl mb-8">
              To completely eliminate guesswork for production and engineering teams, we codified a definitive matrix of visual violations. These constraints prevent common layout mistakes and insulate the identity from arbitrary modification.
            </Body>
            <div className="rounded-3xl overflow-hidden border border-gray-100 mb-4">
              <img
                src={IMG_LOGO_LAW}
                alt="Logo Law 101 — prohibited usage violations"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-center italic text-gray-500 text-lg py-4 mb-8">
              The reModelUN logo isn&apos;t just a symbol, it&apos;s a statement. Keep it clear, crisp, and confidently placed.
            </p>
            <Body className="max-w-4xl">
              By explicitly defining these implementation laws, we show prospective clients that we don&apos;t just deliver loose graphic artwork — we hand over a highly disciplined, enterprise-grade brand asset utility. This meticulous attention to technical precision proves that our design frameworks are engineered to withstand real-world production demands.
            </Body>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white">
              {/* Right graphic */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-end overflow-hidden pointer-events-none">
                <img
                  src={IMG_CTA_GRAPHIC}
                  alt=""
                  aria-hidden
                  className="h-full object-cover object-left opacity-100"
                />
              </div>

              {/* Left content */}
              <div className="relative z-10 p-10 md:p-16 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-[#D60000] leading-tight mb-10">
                  Building a future-proof brand system or launching a complex digital product?
                </h2>
                <button
                  onClick={() => {
                    const event = new CustomEvent('open-talk-modal');
                    window.dispatchEvent(event);
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#D60000] text-white rounded-full font-bold text-lg hover:bg-[#B80000] transition-colors"
                >
                  Let&apos;s Build a Sustainable System
                </button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
