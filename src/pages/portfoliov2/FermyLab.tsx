import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

// ── Figma Assets (7-day hosted URLs — swap with permanent assets) ─────────────
const IMG_HERO        = 'https://www.figma.com/api/mcp/asset/5503c723-07af-4b5e-98f9-39b2419c9b50';
const IMG_CONTEXT     = 'https://www.figma.com/api/mcp/asset/7231301b-ca4e-410b-ad64-473998e98ae5';
const IMG_ARCH        = 'https://www.figma.com/api/mcp/asset/7c55267a-b722-4743-9e91-576542d48871';
const IMG_CLR_PRIMARY = 'https://www.figma.com/api/mcp/asset/d8ffcdef-1582-450a-a3a0-e6fcd4a4e09a';
const IMG_CLR_SECOND  = 'https://www.figma.com/api/mcp/asset/5199f5f1-1820-44ac-8bbe-982b840f62f2';
const IMG_CLR_COMBO   = 'https://www.figma.com/api/mcp/asset/129706f9-eb1b-45ad-8f0e-9e5f932a7576';
const IMG_TYPE_LEFT   = 'https://www.figma.com/api/mcp/asset/7d684128-1e08-4612-9bd7-54e67dd1107b';
const IMG_TYPE_RIGHT  = 'https://www.figma.com/api/mcp/asset/545e5afe-96c9-4f4d-98a7-6298e6772701';
const IMG_LOGO_USAGE  = 'https://www.figma.com/api/mcp/asset/cac3a467-50c5-430b-91ee-3732d20c5498';
const IMG_CLEARSPACE  = 'https://www.figma.com/api/mcp/asset/8a1c95c4-0ddd-4480-bec4-4e1de9dec217';
const IMG_COBRANDING  = 'https://www.figma.com/api/mcp/asset/8cf1f1e3-4019-4f16-823c-fc9072c41169';
const IMG_PROHIBIT    = 'https://www.figma.com/api/mcp/asset/1b295ab1-434c-450f-8e28-62162648c45a';
const IMG_PACKAGING   = 'https://www.figma.com/api/mcp/asset/43b251bb-d0cb-45df-9d89-b9570d4ab267';
const IMG_DIGITAL     = 'https://www.figma.com/api/mcp/asset/35e94c14-c67e-4106-85ff-315ae13340dc';
const IMG_DELIVERY    = 'https://www.figma.com/api/mcp/asset/55819f16-c348-4007-9a5f-1c6abd7e45f2';
const IMG_OOH         = 'https://www.figma.com/api/mcp/asset/af4067ab-888a-496d-974a-69fca2522038';
const IMG_REALWORLD1  = 'https://www.figma.com/api/mcp/asset/35fb0108-a170-4f1c-b083-c7bc8b347630';
const IMG_REALWORLD2  = 'https://www.figma.com/api/mcp/asset/2527ae7f-2f02-461c-8577-31b92b29bb5c';
const IMG_COMMERCIAL  = 'https://www.figma.com/api/mcp/asset/cb1b0e3c-2825-46a3-9e96-76293220257f';
const IMG_VALUE_LEFT  = 'https://www.figma.com/api/mcp/asset/7549cd66-4d54-48f8-a4d7-2752a7e0d604';
const IMG_VALUE_RIGHT = 'https://www.figma.com/api/mcp/asset/73c76b4a-ab4e-4a25-a3f7-661a0d7e7865';
const IMG_CTA         = 'https://www.figma.com/api/mcp/asset/f79abfd3-ccbe-44ef-b05e-d8f13db13ad8';

// ── Shared primitives ─────────────────────────────────────────────────────────
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 tracking-wide">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-600 tracking-wide mb-6">
      {children}
    </span>
  );
}

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.05] text-gray-900 ${className}`}>
      {children}
    </h2>
  );
}

function Body({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-lg leading-relaxed text-gray-600 ${className}`}>
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-gray-100 my-16 md:my-24" />;
}

function ImageCard({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-3xl overflow-hidden border border-gray-100 ${className}`}>
      <img src={src} alt={alt} className="w-full object-cover" loading="lazy" decoding="async" />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function FermyLab() {
  usePageMeta({
    title: 'Fermy Lab – Portfolio – Studio 1947',
    description: 'Brand identity, packaging design, and omnichannel UI system for Fermy Lab — an innovative fermented food brand bridging traditional Indian culinary wisdom with modern design.',
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
            to="/portfoliov2"
            className="absolute top-6 left-6 z-10 flex items-center justify-center w-14 h-14 bg-[#D60000] rounded-full shadow-lg hover:bg-[#B80000] transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <img
            src={IMG_HERO}
            alt="Fermy Lab — brand identity hero"
            className="w-full h-[56vh] md:h-[72vh] object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          {/* ── Project Header ──────────────────────────────────────────── */}
          <section className="pt-14 pb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight leading-none mb-8">
              Fermy Lab
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <Tag>Brand Strategy</Tag>
              <Tag>Master Brand Architecture</Tag>
              <Tag>Packaging Design</Tag>
              <Tag>Omnichannel UI System</Tag>
            </div>
            <p className="text-gray-500 text-sm font-medium mb-2">Created by</p>
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {['Santaa', 'Reece', 'Brototi'].map((name) => (
                <span key={name} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-medium text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0" />
                  {name}
                </span>
              ))}
            </div>
            <Body className="max-w-4xl">
              Fermy Lab is an innovative food brand that creates premium products using slow, natural fermentation methods. The brand seamlessly bridges traditional Indian culinary wisdom with time-tested techniques sourced from diverse cultures around the world.
            </Body>
          </section>

          <Divider />

          {/* ── Context & The Challenge ──────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionLabel>The Mission</SectionLabel>
            <SectionHeading className="mb-6">Context &amp; The Challenge</SectionHeading>
            <Body className="max-w-4xl mb-12">
              This case study breaks down how we transformed the foundational values of Fermy Lab into a highly polished, scalable identity system engineered for real-world business growth. The brand's core identity operates at a distinct crossroads: balancing deep tradition with modern thinking, local roots with global ideas, and natural patience with scientific rigor. To visually express this balance, we anchored the branding in a concept of &ldquo;calm confidence.&rdquo;
            </Body>
            <ImageCard src={IMG_CONTEXT} alt="Context and challenge — Fermy Lab brand foundation" />
          </section>

          <Divider />

          {/* ── Parent-Brand Architecture ────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionLabel>Master Brand Architecture</SectionLabel>
            <SectionHeading className="mb-6">Parent-Brand Architecture</SectionHeading>
            <Body className="max-w-4xl mb-12">
              The identity system was engineered as a flexible master architecture — a single, cohesive visual language capable of spanning multiple product lines and brand extensions without losing its core equity. Every element was designed with scalability and sub-brand portability in mind.
            </Body>
            <ImageCard src={IMG_ARCH} alt="Parent-brand architecture — master badge and lockup system" />
          </section>

          <Divider />

          {/* ── Color & Typography Systems ───────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionLabel>The Palette</SectionLabel>
            <SectionHeading className="mb-6">Color &amp; Typography Systems</SectionHeading>
            <Body className="max-w-4xl mb-12">
              The palette is a deliberate pairing rooted in the sensory world of fermentation — the living green of cultures and the warm ochre of baked craft. Together, they establish a visual identity that feels simultaneously organic and confident.
            </Body>

            {/* Color swatches */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="rounded-3xl overflow-hidden border border-gray-100">
                <img src={IMG_CLR_PRIMARY} alt="Primary color — Deep Green #3E843E" className="w-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-3xl overflow-hidden border border-gray-100">
                <img src={IMG_CLR_SECOND} alt="Secondary color — Golden Ochre #E59739" className="w-full object-cover" loading="lazy" />
              </div>
            </div>

            {/* Live-coded color swatches for reference */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-[#3E843E] rounded-3xl p-8 aspect-[4/3] flex flex-col justify-end">
                <div className="flex items-end justify-between mb-2">
                  <span className="text-white text-3xl font-bold">Primary</span>
                  <span className="text-white/20 text-2xl font-mono font-bold">#3E843E</span>
                </div>
                <span className="text-white/60 text-sm">Deep Green — natural fermentation cycles, organic balance, trust.</span>
              </div>
              <div className="bg-[#E59739] rounded-3xl p-8 aspect-[4/3] flex flex-col justify-end">
                <div className="flex items-end justify-between mb-2">
                  <span className="text-white text-3xl font-bold">Secondary</span>
                  <span className="text-white/20 text-2xl font-mono font-bold">#E59739</span>
                </div>
                <span className="text-white/60 text-sm">Golden Ochre — warm oven-baked goodness, human-crafted culinary expertise.</span>
              </div>
            </div>

            {/* Color combination */}
            <ImageCard src={IMG_CLR_COMBO} alt="Chromatic harmony — color combination in layout" className="mb-12" />

            {/* Typography */}
            <SectionLabel>Typography</SectionLabel>
            <Body className="max-w-4xl mb-8">
              Two typefaces anchor the system. <strong>Space Grotesk</strong> leads structural headlines, packaging titles, and technical system signage with geometric authority. <strong>Just Sans</strong> carries narrative brand copy, back-of-label explanations, and ingredient lists with approachable warmth.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden border border-gray-100">
                <img src={IMG_TYPE_LEFT} alt="Space Grotesk — headline typeface specimen" className="w-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-3xl overflow-hidden border border-gray-100">
                <img src={IMG_TYPE_RIGHT} alt="Just Sans — body typeface specimen" className="w-full object-cover" loading="lazy" />
              </div>
            </div>
          </section>

          <Divider />

          {/* ── Logo Usage & Visual Governance ──────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionLabel>The Master Badge Lockup</SectionLabel>
            <SectionHeading className="mb-6">Logo Usage &amp; Visual Governance</SectionHeading>
            <Body className="max-w-4xl mb-10">
              The mastermark is an engineered system — not a loose graphic. Every lockup, spacing rule, and application guideline exists to protect the brand's authority across every surface it appears on.
            </Body>
            <ImageCard src={IMG_LOGO_USAGE} alt="Logo usage and lockup system" className="mb-10" />

            {/* Clearspace */}
            <SectionLabel>The 1-Challah Clearspace Rule</SectionLabel>
            <Body className="max-w-4xl mb-8">
              The clearspace boundary is dynamically calculated from the height of the signature Challah graphic within the badge — ensuring the mark breathes consistently whether it appears on a 5mm stamp or a 5-metre banner.
            </Body>
            <ImageCard src={IMG_CLEARSPACE} alt="1-Challah clearspace rule diagram" className="mb-10" />

            {/* Co-branding */}
            <SectionLabel>Partner Co-Branding Safety Margin</SectionLabel>
            <Body className="max-w-4xl mb-8">
              Partner lockups require a doubled clearspace threshold — protecting Fermy Lab's visual independence even when sharing space with major retail or media partners.
            </Body>
            <ImageCard src={IMG_COBRANDING} alt="Partner co-branding safety margin" />
          </section>

          <Divider />

          {/* ── Absolute Production Prohibitions ────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionLabel>Logo Law 101</SectionLabel>
            <SectionHeading className="mb-6">Absolute Production Prohibitions</SectionHeading>
            <Body className="max-w-4xl mb-10">
              A codified matrix of visual violations eliminates guesswork for production teams, packaging suppliers, and retail partners. These are the non-negotiable constraints that keep the brand pristine across every touchpoint.
            </Body>
            <ImageCard src={IMG_PROHIBIT} alt="Absolute production prohibitions — logo violation matrix" />
          </section>

          <Divider />

          {/* ── Omnichannel System Application ──────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionLabel>Omnichannel UI System</SectionLabel>
            <SectionHeading className="mb-6">Omnichannel System Application</SectionHeading>
            <Body className="max-w-4xl mb-14">
              A brand identity is only as strong as its real-world execution. The Fermy Lab system was stress-tested across every channel — from physical retail shelves to digital storefronts, delivery platforms, highway billboards, and experiential activations.
            </Body>

            {/* Physical Retail Packaging */}
            <div className="mb-4">
              <SectionLabel>Physical Retail Packaging</SectionLabel>
            </div>
            <Body className="max-w-4xl mb-8">
              Premium packaging designed to stand out on retail shelves while communicating the brand's commitment to slow, natural processes. Every label element earns its place.
            </Body>
            <ImageCard src={IMG_PACKAGING} alt="Physical retail packaging design" className="mb-14" />

            {/* Digital Flagship */}
            <div className="mb-4">
              <SectionLabel>The Digital Flagship Experience</SectionLabel>
            </div>
            <Body className="max-w-4xl mb-8">
              The brand's digital storefront translates the tactile richness of fermentation into an immersive e-commerce experience — dark, confident, and ingredient-forward.
            </Body>
            <ImageCard src={IMG_DIGITAL} alt="Digital flagship experience — e-commerce UI" className="mb-14" />

            {/* Delivery App */}
            <div className="mb-4">
              <SectionLabel>Delivery App Optimization</SectionLabel>
            </div>
            <Body className="max-w-4xl mb-8">
              Quick-commerce and delivery platforms demand a compressed visual language. The system was optimised for small-screen, high-scroll environments without sacrificing brand equity.
            </Body>
            <ImageCard src={IMG_DELIVERY} alt="Delivery app optimization — Swiggy/Zomato UI" className="mb-14" />

            {/* OOH */}
            <div className="mb-4">
              <SectionLabel>Out-of-Home Highway Billboards</SectionLabel>
            </div>
            <p className="text-center text-[#3E843E] font-bold text-2xl md:text-3xl italic py-4 mb-8 max-w-3xl mx-auto">
              &ldquo;No shortcuts. Just fermentation.&rdquo;
            </p>
            <Body className="max-w-4xl mb-8">
              The billboard system strips the brand down to its most powerful elements — the tagline, the mark, and the palette. At highway speeds, only the essential survives.
            </Body>
            <ImageCard src={IMG_OOH} alt="Out-of-home highway billboard design" className="mb-14" />

            {/* Real-world experience */}
            <div className="mb-4">
              <SectionLabel>Real-World Experience</SectionLabel>
            </div>
            <Body className="max-w-4xl mb-8">
              Physical brand touchpoints — retail environments, pop-up installations, and experiential activations — bring the identity into three-dimensional space.
            </Body>
            <ImageCard src={IMG_REALWORLD1} alt="Real-world brand experience — retail environment" className="mb-6" />
            <ImageCard src={IMG_REALWORLD2} alt="Real-world brand experience — activation" />
          </section>

          <Divider />

          {/* ── Commercial Value Summary ──────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionLabel>Commercial Value Summary</SectionLabel>
            <SectionHeading className="mb-6">Commercial Value Summary</SectionHeading>
            <Body className="max-w-4xl mb-10">
              Every design decision in this system was made with Fermy Lab's long-term commercial ambitions in mind — from investor decks to retail shelf presence, from delivery thumbnail to highway billboard.
            </Body>
            <ImageCard src={IMG_COMMERCIAL} alt="Commercial value summary" className="mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden border border-gray-100">
                <img src={IMG_VALUE_LEFT} alt="Commercial value — left panel" className="w-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-3xl overflow-hidden border border-gray-100">
                <img src={IMG_VALUE_RIGHT} alt="Commercial value — right panel" className="w-full object-cover" loading="lazy" />
              </div>
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white">
              <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
                <img src={IMG_CTA} alt="" aria-hidden className="h-full object-cover object-left" />
              </div>
              <div className="relative z-10 p-10 md:p-16 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-[#D60000] leading-tight mb-10">
                  Building a future-proof brand system or launching a complex digital product?
                </h2>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-talk-modal'))}
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
