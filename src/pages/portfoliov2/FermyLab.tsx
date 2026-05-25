import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "../../components/Layout";
import { usePageMeta } from "../../hooks/usePageMeta";

// ── Local assets (public/portfolio/fermylab/) ─────────────────────────────────
const IMG_HERO =
  "https://www.figma.com/api/mcp/asset/5503c723-07af-4b5e-98f9-39b2419c9b50"; // pending
const IMG_CONTEXT =
  "https://www.figma.com/api/mcp/asset/7231301b-ca4e-410b-ad64-473998e98ae5"; // pending
const IMG_ARCH = "/portfolio/fermylab/parent-Brand_architect.png";
const IMG_CLR_COMBO =
  "https://www.figma.com/api/mcp/asset/129706f9-eb1b-45ad-8f0e-9e5f932a7576"; // pending
const IMG_TYPE_LEFT = "/portfolio/fermylab/The-Horizontal-Lockup.png";
const IMG_TYPE_RIGHT = "/portfolio/fermylab/The-Master-Badge-Lockup.png";
const IMG_LOGO_USAGE =
  "/portfolio/fermylab/the-logo-usage&visualgovernance.png";
const IMG_CLEARSPACE = "/portfolio/fermylab/The 1-Challah Clearspace Rule.png";
const IMG_COBRANDING =
  "/portfolio/fermylab/Partner Co-Branding Safety Margin.png";
const IMG_PROHIBIT = "/portfolio/fermylab/Absolute Production Prohibitions.png";
const IMG_FAVICONS = "/portfolio/fermylab/Responsive Favicons.png";
const IMG_PACKAGING = "/portfolio/fermylab/Physical Retail Packaging.png";
const IMG_DIGITAL = "/portfolio/fermylab/The Digital Flagship Experience.png";
const IMG_DELIVERY = "/portfolio/fermylab/Delivery App Optimization.png";
const IMG_OOH = "/portfolio/fermylab/Out-of-Home Highway Billboards.png";
const IMG_REALWORLD1 = "/portfolio/fermylab/Real-World Experience-left.png";
const IMG_REALWORLD2 = "/portfolio/fermylab/Real-World Experience-right.png";
const IMG_COMMERCIAL =
  "https://www.figma.com/api/mcp/asset/cb1b0e3c-2825-46a3-9e96-76293220257f"; // pending
const IMG_VALUE_LEFT =
  "https://www.figma.com/api/mcp/asset/7549cd66-4d54-48f8-a4d7-2752a7e0d604"; // pending
const IMG_VALUE_RIGHT =
  "https://www.figma.com/api/mcp/asset/73c76b4a-ab4e-4a25-a3f7-661a0d7e7865"; // pending
const IMG_CTA =
  "https://www.figma.com/api/mcp/asset/f79abfd3-ccbe-44ef-b05e-d8f13db13ad8"; // pending

// ── Shared primitives ─────────────────────────────────────────────────────────
function SectionLabel({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide mb-6 ${
        light ? "text-white/80" : "bg-[#FFF4F4] text-[#D60000]"
      }`}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.05] text-gray-900 ${className}`}
    >
      {children}
    </h2>
  );
}

function Body({
  children,
  light,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-lg leading-relaxed ${light ? "text-gray-300" : "text-gray-600"} ${className}`}
    >
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-gray-100 my-8 md:my-12" />;
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
      onClick={onClose}
    >
      <img
        src={src}
        alt=""
        className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function FermyLab() {
  usePageMeta({
    title: "Fermy Lab – Portfolio – Studio 1947",
    description:
      "Brand identity, packaging design, and omnichannel UI system for Fermy Lab — an innovative fermented food brand bridging traditional Indian culinary wisdom with modern design.",
  });

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const zoom = (src: string) => setLightboxSrc(src);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <Layout>
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
      <article className="portfoliov2-page bg-[#fafafa] min-h-screen">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <div className="relative">
          <Link
            to="/portfoliov2"
            className="absolute top-6 left-6 z-[60] flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#D60000] rounded-full shadow-lg hover:bg-[#B80000] transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </Link>
          <img
            src={IMG_HERO}
            alt="Fermy Lab — brand identity hero"
            className="w-full h-[60vh] md:h-[80vh] object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 md:pb-14">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">
                Brand Strategy
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">
                Master Brand Architecture
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">
                Packaging Design
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">
                Omnichannel UI System
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
              Fermy Lab
            </h1>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Divider />

          {/* ── Intro ─────────────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <Body className="mb-6">
              When food founders and consumer brands look for a creative agency,
              they aren't just looking for attractive graphics. They want to see
              a functional commercial system — one that establishes immediate
              credibility on a grocery shelf, commands attention on digital
              delivery platforms, and smoothly adapts as the company scales.
            </Body>
            <Body>
              This case study breaks down how we transformed the foundational
              values of <strong className="text-[#D60000]">Fermy Lab</strong>{" "}
              into a highly polished, scalable identity system engineered for
              real-world business growth.
            </Body>
          </section>

          <Divider />

          {/* ── Context & The Challenge ──────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Context &amp; The Challenge
            </SectionHeading>
            <SectionLabel>The Mission</SectionLabel>
            <Body className="mb-12 max-w-4xl">
              <strong className="text-[#D60000]">Fermy Lab</strong> is an
              innovative food brand that creates premium products using slow,
              natural fermentation methods. The brand seamlessly bridges
              traditional Indian culinary wisdom with time-tested techniques
              sourced from diverse cultures around the world. Their focus is on
              making food that is healthy, enjoyable, and environmentally
              responsible, completely refusing to rely on artificial
              preservation shortcuts.
            </Body>

            <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 mb-10">
              <SectionLabel>The Creative Challenge</SectionLabel>
              <Body className="max-w-4xl">
                The brand's core identity operates at a distinct crossroads:
                balancing deep tradition with modern thinking, local roots with
                global ideas, and natural patience with scientific rigor. To
                visually express this balance, we anchored the branding in a
                concept of &ldquo;calm confidence&rdquo;. The style is
                engineered to look systematically clean yet warm and
                handcrafted, proving to consumers that slow food can be
                professional, clean, and world-class.
              </Body>
            </div>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_CONTEXT}
                alt="Context and challenge — Fermy Lab brand foundation"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_CONTEXT)}
              />
            </div>
          </section>

          <Divider />

          {/* ── Parent-Brand Architecture ────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Parent-Brand Architecture
            </SectionHeading>
            <Body className="mb-12">
              To protect the client from future design costs, we built a
              "parent-child" visual system designed to accommodate future
              growth:
            </Body>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-10">
              <img
                src={IMG_ARCH}
                alt="Parent-brand architecture — master badge and lockup system"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_ARCH)}
              />
            </div>
            <Body className="max-w-4xl">
              <strong className="text-[#D60000]">Fermy Lab</strong> functions as
              the overarching master identity. Under this umbrella, the brand
              launches with two distinct product tracks: Breads and Condiments.
              Each individual item carries its own product line labeling, while
              the corporate master-mark retains prominent authority across the
              entire ecosystem. This allows the business to launch new items
              instantly without paying for a total brand redesign.
            </Body>
          </section>

          <Divider />

          {/* ── Color System ─────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Color & Typography Systems
            </SectionHeading>
            <SectionLabel>The Palette</SectionLabel>
            <Body className="mb-12">
              The color identity relies on a high-contrast pairing designed to
              command attention on store shelves:
            </Body>

            {/* Two color swatch cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#3E843E] rounded-3xl p-8 aspect-[4/3] flex flex-col justify-between">
                <p className="text-white text-2xl md:text-3xl font-bold leading-snug max-w-[85%]">
                  Represents natural fermentation cycles, organic balance, and
                  core safety and trust.
                </p>
                <div>
                  <div className="flex items-end justify-between mb-2">
                    <span className="text-white text-xl md:text-3xl font-bold">
                      Primary
                    </span>
                    <span className="text-white/20 text-base md:text-3xl font-mono font-bold">
                      #3E843E
                    </span>
                  </div>
                  <span className="text-white/60 text-sm">Deep Green</span>
                </div>
              </div>
              <div className="bg-[#E59739] rounded-3xl p-8 aspect-[4/3] flex flex-col justify-between">
                <p className="text-white text-2xl md:text-3xl font-bold leading-snug max-w-[85%]">
                  Evokes warm oven-baked goodness, rich raw nourishment, and
                  human-crafted culinary expertise.
                </p>
                <div>
                  <div className="flex items-end justify-between mb-2">
                    <span className="text-white text-xl md:text-3xl font-bold">
                      Secondary
                    </span>
                    <span className="text-white/20 text-base md:text-3xl font-mono font-bold">
                      #E59739
                    </span>
                  </div>
                  <span className="text-white/60 text-sm">Golden Ochre</span>
                </div>
              </div>
            </div>

            {/* Chromatic harmony */}
            <div className="mb-1">
              <SectionLabel>Typography</SectionLabel>
            </div>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_CLR_COMBO}
                alt="Chromatic harmony — color combination in layout"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_CLR_COMBO)}
              />
            </div>
          </section>

          <Divider />

          {/* Usage + Strategy cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl border border-gray-100 p-8">
              <h3
                className="text-2xl md:text-3xl font-black mb-6"
                style={{
                  color: "#3E843E",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Space Grotesk
              </h3>
              <SectionLabel>Usage</SectionLabel>
              <Body className="mb-8">
                Structural Headlines, Packaging Titles, and Technical System
                Signage.
              </Body>
              <SectionLabel>The Strategy</SectionLabel>
              <Body>
                Space Grotesk introduces a clean, disciplined geometric frame
                that reinforces the empirical, &ldquo;Lab&rdquo; aspect of the
                brand name. It maintains flawless sharpness across physical
                print packaging and digital screens. Because it is freely
                accessible in the open-source Google Font library, internal
                marketing teams can build matching assets globally without
                licensing friction.
              </Body>
            </div>
            <div className="bg-white rounded-3xl border border-gray-100 p-8">
              <h3
                className="text-2xl md:text-3xl font-black mb-6"
                style={{
                  color: "#E59739",
                  fontFamily: "'Just Sans', sans-serif",
                }}
              >
                Just Sans
              </h3>
              <SectionLabel>Usage</SectionLabel>
              <Body className="mb-8">
                Narrative Brand Copy, Back-of-Label Explanations, and Detailed
                Ingredient Lists.
              </Body>
              <SectionLabel>The Strategy</SectionLabel>
              <Body>
                To balance the technical look of the primary font, we paired it
                with Just Sans. This typeface introduces an endearing, modernist
                warmth and geometric legibility. It ensures that health labels
                and brand stories remain highly approachable and effortless for
                consumers to scan.
              </Body>
            </div>
          </div>

          <Divider />

          {/* ── Logo Usage & Visual Governance ──────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              The Logo Usage &amp; Visual Governance
            </SectionHeading>

            <Body className="mb-10">
              To ensure perfect consistency across entirely different physical
              labels and screen environments, all configurations, safety
              guidelines, and visual prohibitions are unified into a single
              technical standard.
            </Body>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_LOGO_USAGE}
                alt="Logo usage and lockup system"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_LOGO_USAGE)}
              />
            </div>

            {/* Master Badge Lockup */}
            <div className="mb-4 mt-10">
              <SectionLabel>The Master Badge Lockup</SectionLabel>
            </div>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden ">
              <img
                src={IMG_TYPE_RIGHT}
                alt="The Master Badge Lockup — Fermy Lab circular stamp"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_TYPE_RIGHT)}
              />
            </div>
            <Body className="-mt-[6%] md:-mt-[8%] mb-8 md:mb-16 max-w-4xl relative z-10">
              This layout serves as the primary seal of quality, beautifully
              integrating the brand name, core product ingredients, and service
              taglines into a circular stamp. It features an organic,
              illustrative wreath highlighting real ingredients: twisted challah
              bread, garlic bulbs, star anise, cloves, and chilis.
            </Body>

            {/* Horizontal Lockup */}
            <div className="mb-4 mt-10">
              <SectionLabel>The Horizontal Lockup</SectionLabel>
            </div>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_TYPE_LEFT}
                alt="The Horizontal Lockup"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_TYPE_LEFT)}
              />
            </div>
            <Body className="-mt-[6%] md:-mt-[8%] mb-8 md:mb-16 max-w-4xl relative z-10">
              Created specifically to guarantee high visibility within tight
              spatial restrictions, this inline variation seats the core
              wordmark directly above a streamlined row of ingredient icons.
            </Body>

            {/* Responsive Favicons */}
            <div className="mb-4 mt-10">
              <SectionLabel>Responsive Favicons</SectionLabel>
            </div>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_FAVICONS}
                alt="Responsive favicons"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_FAVICONS)}
              />
            </div>
            <Body className="-mt-[6%] md:-mt-[8%] mb-8 md:mb-16 max-w-4xl relative z-10">
              Simplified, high-contrast circular badges that isolate a single
              key icon, such as the mini bread loaf or an organic clove, keeping
              the identity sharp on micro-screens.
            </Body>

            {/* Clearspace */}
            <div className="mb-4">
              <SectionLabel>The 1-Challah Clearspace Rule</SectionLabel>
            </div>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_CLEARSPACE}
                alt="1-Challah clearspace rule diagram"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_CLEARSPACE)}
              />
            </div>
            <Body className="-mt-[6%] md:-mt-[8%] mb-8 md:mb-16 max-w-4xl relative z-10">
              To protect the mastermark from being crowded by copy or layout
              borders, it must always be insulated by a minimum safety border.
              This breathing room is defined as exactly equal to a "1 Challah
              distance," derived from the height of the internal twisted bread
              illustration.
            </Body>

            {/* Co-branding */}
            <div className="mb-4">
              <SectionLabel>Partner Co-Branding Safety Margin</SectionLabel>
            </div>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_COBRANDING}
                alt="Partner co-branding safety margin"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_COBRANDING)}
              />
            </div>
            <Body className="-mt-[6%] md:-mt-[8%] mb-8 max-w-4xl relative z-10">
              When co-branding alongside external distribution partners or
              legacy institutions—such as locking up next to historic entities
              like Amul—the system enforces a strict 1-Challah safety perimeter
              to protect FermyLab's independent authority.
            </Body>
            <p
              className="text-center font-semibold text-lg mb-8 md:mb-16 max-w-4xl"
              style={{ color: "#00000080", fontFamily: "Inter, sans-serif" }}
            >
              The FermyLab logo isn't just a symbol, it's a statement. Keep it
              clear, crisp, and confidently placed.
            </p>
          </section>

          <Divider />

          {/* ── Absolute Production Prohibitions ────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Absolute Production Prohibitions
            </SectionHeading>

            <Body className="mb-10">
              To eliminate any guesswork for third-party printers or internal
              developers, we codified an explicit checklist of system
              violations. Production environments are strictly prohibited from
              making the following adjustments:
            </Body>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-10">
              <img
                src={IMG_PROHIBIT}
                alt="Absolute production prohibitions — logo violation matrix"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_PROHIBIT)}
              />
            </div>
          </section>

          <Divider />

          {/* ── Omnichannel System Application ──────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-2">
              Omnichannel System Application
            </SectionHeading>

            <Body className="mb-8 md:mb-16">
              To demonstrate how the identity smoothly wins customers across
              physical markets and digital platforms, we activated the brand
              assets across key commercial touchpoints
            </Body>

            {/* Physical Retail Packaging */}
            <div className="mb-4">
              <SectionLabel>Physical Retail Packaging</SectionLabel>
            </div>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_PACKAGING}
                alt="Physical retail packaging design"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_PACKAGING)}
              />
            </div>
            <Body className="-mt-[6%] md:-mt-[8%] mb-8 md:mb-16 max-w-4xl relative z-10">
              Clean badge labels wrap seamlessly onto slow-aged condiment jars,
              creating an elegant, editorial appearance that commands attention
              on competitive retail shelves.
            </Body>

            {/* Digital Flagship */}
            <div className="mb-4">
              <SectionLabel>The Digital Flagship</SectionLabel>
            </div>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-14">
              <img
                src={IMG_DIGITAL}
                alt="Digital flagship experience — e-commerce UI"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_DIGITAL)}
              />
            </div>
            <Body className="-mt-[6%] md:-mt-[8%] mb-8 md:mb-16 max-w-4xl relative z-10">
              Clean badge labels wrap seamlessly onto slow-aged condiment jars,
              creating an elegant, editorial appearance that commands attention
              on competitive retail shelves.
            </Body>

            {/* Delivery App */}
            <div className="mb-4">
              <SectionLabel>Delivery App Optimization</SectionLabel>
            </div>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-14">
              <img
                src={IMG_DELIVERY}
                alt="Delivery app optimization — Swiggy/Zomato UI"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_DELIVERY)}
              />
            </div>
            <Body className="mb-8">
              The brand assets were optimized for dark-mode smartphone delivery
              interfaces. This ensures that when a consumer is quickly scrolling
              through restaurant choices, FermyLab’s product cards, metadata,
              and icons remain perfectly crisp and legible.
            </Body>

            {/* OOH */}
            <div className="mb-4">
              <SectionLabel>Out-of-Home Highway Billboards</SectionLabel>
            </div>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-14">
              <img
                src={IMG_OOH}
                alt="Out-of-home highway billboard design"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_OOH)}
              />
            </div>
            <Body className="mb-8">
              High-visibility commercial billboard layouts pair massive food
              photography with minimalist copy ("No shortcuts. Just
              fermentation.") to rapidly establish mainstream awareness.
            </Body>

            {/* Real-world experience */}
            <div className="mb-4">
              <SectionLabel>Real-World Experience</SectionLabel>
            </div>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-6">
              <img
                src={IMG_REALWORLD1}
                alt="Real-world brand experience — retail environment"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_REALWORLD1)}
              />
            </div>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_REALWORLD2}
                alt="Real-world brand experience — activation"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_REALWORLD2)}
              />
            </div>
          </section>

          <Divider />

          {/* ── Commercial Value Summary ──────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Commercial Value Summary
            </SectionHeading>

            <Body className="mb-10">
              By delivering a disciplined, complete brand utility rather than
              loose, disconnected graphic files, we equipped Fermy Lab with a
              high-performance system tool. The business is fully prepared to
              stand out on physical shelves, command digital interfaces, and
              launch entirely new sub-brands with absolute operational
              confidence and zero added design debt.
            </Body>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white">
              {/* Right graphic — hidden on mobile */}
              <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full items-center justify-end overflow-hidden pointer-events-none">
                <img
                  src="/portfolio/remodelUN/end_half_logo.svg"
                  alt=""
                  aria-hidden
                  className="h-full object-cover object-left opacity-100"
                />
              </div>
              {/* Left content */}
              <div className="relative z-10 p-10 md:p-16 max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#D60000] leading-tight mb-8 md:mb-10">
                  Building a future-proof brand system or launching a complex
                  digital product?
                </h2>
                <button
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open-talk-modal"))
                  }
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
