import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "../../components/Layout";
import { usePageMeta } from "../../hooks/usePageMeta";
import PortfolioCTA from "../../components/PortfolioCTA";

// ── Local assets (public/portfolio/rejkamal/) ─────────────────────────────────
const IMG_HERO = "/portfolio/rajkamal/hero.svg";
const IMG_SLIDES = "/portfolio/rajkamal/Brand Governance01.png";
const IMG_CLEARSPACE = "/portfolio/rajkamal/Brand Governance02.png";
const IMG_LOGO_RULES = "/portfolio/rajkamal/Brand Governance03.png";
const IMG_TYPOGRAPHY = "/portfolio/rajkamal/typographysystem.png";
const IMG_TYPOGRAPHY_FONT = "/portfolio/rajkamal/typographysystemfont.png";
const IMG_SCRIPTS = "/portfolio/rajkamal/The Strategic Shift.png";
const IMG_DASHBOARD = "/portfolio/rajkamal/the solution.png";
const IMG_SUBLOGOS =
  "/portfolio/rajkamal/High-Pressure Omnichannel Scaling.png";
const IMG_MATERIALS =
  "/portfolio/rajkamal/Environmental Material Optimization.png";
const IMG_COBRANDING = "/portfolio/rajkamal/Bulletproof Quality Assurance.png";

// ── Shared primitives ─────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide mb-6 bg-[#FFF4F4] text-[#D60000]">
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
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-lg leading-relaxed text-gray-600 ${className}`}>
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-gray-100 my-8 md:my-12" />;
}

function Lightbox({
  src,
  onClose,
  whiteBg,
}: {
  src: string;
  onClose: () => void;
  whiteBg?: boolean;
}) {
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
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <img
        src={src}
        alt=""
        className={`max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl${whiteBg ? " bg-white p-6" : ""}`}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RajkamalPrakashan() {
  usePageMeta({
    title: "Rajkamal Prakashan — Studio 1947",
    description:
      "How Studio 1947 rebuilt the brand infrastructure of India's largest Hindi literary publisher — brand governance, enterprise digital product, and nation-wide event execution.",
  });

  const [lightboxSrc, setLightboxSrc] = useState<{
    src: string;
    whiteBg?: boolean;
  } | null>(null);
  const zoom = (src: string, whiteBg?: boolean) =>
    setLightboxSrc({ src, whiteBg });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <Layout>
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc.src}
          whiteBg={lightboxSrc.whiteBg}
          onClose={() => setLightboxSrc(null)}
        />
      )}
      <article className="portfoliov2-page bg-[#fafafa] min-h-screen">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
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
            alt="Rajkamal Prakashan — brand identity in context"
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
                Brand Governance
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">
                Enterprise Digital
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">
                Omnichannel Execution
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
              Rajkamal
              <br />
              Prakashan
            </h1>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Divider />

          {/* ── Intro ─────────────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <Body className="mb-6">
              When an enterprise-level cultural institution seeks a creative
              partner, they aren't looking for a typical vendor to change colors
              or make pretty layouts. They require high-level strategic
              consultants capable of managing immense operational pressure,
              auditing fragmented legacy structures, and engineering enterprise
              software that directly drives business decisions.
            </Body>
            <Body className="mb-6">
              Since September 2025, our agency has embedded inside{" "}
              <strong className="font-bold text-[#D60000]">
                Rajkamal Prakashan
              </strong>
              , the premier book publishing house in India, as their Strategic
              Design & Consulting Partner. Moving far beyond traditional graphic
              design, this partnership encompasses complete brand system
              governance, nationwide event marketing strategy, and complex
              internal product development.
            </Body>
            <Body>
              Here is the strategic breakdown of how we audited their legacy
              identity, stabilized their brand memory, and built a unified
              enterprise data ecosystem to future-proof their operations.
            </Body>
          </section>

          <Divider />

          {/* ── Engagement Model ──────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              The Engagement Model: From Pixel Hand-offs to High-Pressure
              Business Advisory{" "}
            </SectionHeading>

            <div className="">
              <SectionLabel>The Corporate Challenge</SectionLabel>
              <Body className="mb-6">
                <strong className="font-bold text-[#D60000]">
                  Rajkamal Prakashan
                </strong>{" "}
                operates at an immense scale. Managing a massive catalog of
                authors, historic works, and high-frequency print runs across
                multiple languages means the brand faces rapid production cycles
                daily. Over decades of organic growth, execution had
                decentralized.
              </Body>
              <Body className="max-w-4xl mb-5">
                When we initiated our deep-dive audit phase, we uncovered
                systemic visual friction:
              </Body>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-white rounded-3xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold mb-4 text-[#D60000]">
                  Visual Fragmentation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The core identity was suffering from inconsistent logo
                  configurations, arbitrary color substitutions, and erratic
                  event-based branding shifts.
                </p>
              </div>
              <div className="bg-white rounded-3xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold mb-4 text-[#D60000]">
                  Algorithmic Disconnect
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In modern digital marketplaces, algorithms classify brands
                  based on consistent pattern recognition—color ratios, layout
                  grids, and visual rhythm. The rapid changes across various
                  campaigns were resetting algorithmic learning loops, directly
                  choking organic digital reach and eroding long-term brand
                  equity.
                </p>
              </div>
            </div>

            <div className="mb-4">
              <SectionHeading className="mb-6">
                The Strategic Shift
              </SectionHeading>
            </div>
            <Body>
              We shifted Rajkamal’s operational model away from ad-hoc asset
              creation into a disciplined, system-driven framework. We
              engineered a comprehensive Brand Governance Utility. To validate
              this shift to Rajkamal's executive board, we delivered an
              analytical, behavioral-science benchmark study proving how iconic
              market leaders maintain value over decades by strictly holding
              their visual architecture completely stable.
            </Body>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mt-8">
              <img
                src={IMG_SCRIPTS}
                alt="The Strategic Shift"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_SCRIPTS)}
              />
            </div>
          </section>

          <Divider />

          {/* ── Brand Governance ──────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Brand Governance & The Consolidated Logo Laws{" "}
            </SectionHeading>
            <Body className="mb-6 max-w-4xl">
              To eliminate execution discrepancies by external printers,
              regional branch offices, and internal marketing teams, we codified
              a definitive matrix of logo parameters and structural
              prohibitions.
            </Body>

            <div className="mx-auto md:w-1/2 lg:w-1/3 rounded-none md:rounded-3xl overflow-hidden mb-10">
              <img
                src={IMG_SLIDES}
                alt="Rajkamal Prakashan Brand Guideline Slides"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_SLIDES, true)}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
              <div className="max-w-[180px] mx-auto w-full rounded-none md:rounded-3xl overflow-hidden flex items-center">
                <img
                  src={IMG_CLEARSPACE}
                  alt="Rajkamal logo clearspace diagram"
                  className="w-full h-full object-contain block cursor-zoom-in"
                  loading="lazy"
                  onClick={() => zoom(IMG_CLEARSPACE, true)}
                />
              </div>
              <div className="-mx-6 lg:mx-0 rounded-none overflow-hidden flex items-center mt-5">
                <img
                  src={IMG_LOGO_RULES}
                  alt="Rajkamal logo misuse rules"
                  className="w-full h-full object-contain block cursor-zoom-in"
                  loading="lazy"
                  onClick={() => zoom(IMG_LOGO_RULES, true)}
                />
              </div>
            </div>
          </section>

          <Divider />

          {/* ── Typography ────────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              The Typography System{" "}
            </SectionHeading>
            <Body className="mb-10 max-w-4xl">
              Operating a major publishing house across a linguistically diverse
              market like India presents a severe typographic challenge: how do
              you maintain a unified, recognizable corporate voice when your
              content is continuously rendering in completely different scripts?
            </Body>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-4">
              <img
                src={IMG_TYPOGRAPHY_FONT}
                alt="Typography system font specimen"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_TYPOGRAPHY_FONT)}
              />
            </div>

            <Body className="mb-10 max-w-4xl">
              We restructured Rajkamal’s universal communications around the
              Noto Sans engine. Noto Sans seamlessly handles regional scripts
              including Hindi, Bengali, Gujarati, Gurmukhi, Telugu, Tamil, and
              Kannada with perfectly matching visual weights.
            </Body>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-10">
              <img
                src={IMG_TYPOGRAPHY}
                alt="Noto Sans typography specimen — all weights"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_TYPOGRAPHY)}
              />
            </div>

            <Body className="mb-10 max-w-4xl">
              By unifying corporate communications under a highly disciplined,
              open-source font system, we accomplished two critical goals:
            </Body>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-3xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold mb-4 text-[#D60000]">
                  Visual Consistency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We guaranteed that whether a reader engages with an ad in
                  Mumbai, a book jacket in Delhi, or a banner in Jaipur, the
                  visual rhythm and typographic voice feel completely uniform.
                </p>
              </div>
              <div className="bg-white rounded-3xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold mb-4 text-[#D60000]">
                  Operational Efficiency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We completely removed enterprise software font licensing fees
                  and font-delivery errors across external development teams and
                  regional printing houses.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* ── Digital Transformation ────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Digital Transformation{" "}
            </SectionHeading>
            <Body className="mb-10 max-w-4xl">
              As a consulting partner, our job is to solve problems that
              directly impact the bottom line. Rajkamal's executive leadership
              faced two major operational roadblocks:
            </Body>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-white rounded-3xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold mb-4 text-[#D60000]">
                  Manual Accounting Overhead
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tracking high-volume, multi-channel book sales at major
                  nationwide literary festivals was heavily manual. It
                  introduced severe cash flow auditing friction and long delays
                  in tracking product performance records.
                </p>
              </div>
              <div className="bg-white rounded-3xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold mb-4 text-[#D60000]">
                  Zero Centralized Operational Transparency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  High-level leadership lacked a clean, high-fidelity visual
                  layout to analyze live data, causing long delays in
                  re-ordering printing runs, managing inventory storage levels,
                  and coordinating marketing campaigns.
                </p>
              </div>
            </div>

            <SectionHeading className="mb-6">
              The Solution: A Unified Enterprise Application Design{" "}
            </SectionHeading>
            <Body className="mb-10 max-w-4xl">
              To remove this operational friction, we designed a custom,
              high-fidelity enterprise management platform layer. This software
              aggregates critical business units Sales Lifecycles, Inventory
              Health, Vendor Orders, and Social Performance Channels into a
              single, secure database layer.
            </Body>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-10">
              <img
                src={IMG_DASHBOARD}
                alt="BookWorm enterprise dashboard — Rajkamal Prakashan"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_DASHBOARD)}
              />
            </div>

            <div className="mb-4">
              <SectionLabel>The Business Impact for Executives</SectionLabel>
            </div>
            <Body>
              By translating fragmented tables of numbers into clean, actionable
              visual data, we shifted executive workflows from reactive
              crisis-management to proactive growth strategy. Leadership can now
              spot an online sales spike instantly, check inventory counts
              across regional warehouses, flag low stock levels, and issue a
              print-run request before a title completely runs out.
            </Body>
          </section>

          <Divider />

          {/* ── Omnichannel / Events ──────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              High-Pressure Omnichannel Scaling: Nation-Wide Event
              Execution{" "}
            </SectionHeading>

            <Body className="mb-10 max-w-4xl">
              A brand identity system must remain absolutely pristine when
              scaled across high-traffic, real-world customer touchpoints. As
              part of our consulting role, we oversee the environmental and
              promotional design systems for Rajkamal's physical footprint at
              major national book fairs across metropolitan cultural hubs like
              Mumbai, Delhi, and Jaipur.
            </Body>

            <div className="mb-4">
              <SectionLabel>Unified Sub-Brand Hierarchy</SectionLabel>
            </div>
            <Body className="mb-10 max-w-4xl">
              We structured a clear sub-branding architecture under the parent
              company umbrella, mapping out consistent visual systems for
              sub-identities like Kitabdesh, Kitab Utsav, and Logo Family
              extensions.
            </Body>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-10">
              <img
                src={IMG_SUBLOGOS}
                alt="Rajkamal event sub-brand logos — Kitab Desh, Kitab Tera, Kitab Utsav, Stri Varsh"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_SUBLOGOS)}
              />
            </div>

            <div className="mb-4">
              <SectionLabel>Environmental Material Optimization</SectionLabel>
            </div>
            <Body className="mb-10 max-w-4xl">
              We designed scalable retail assets, premium canvas promotional
              merchandise (such as custom author tote bags), and high-visibility
              festival bunting styles.
            </Body>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-10">
              <img
                src={IMG_MATERIALS}
                alt="Rajkamal Kitab Desh branded tote bag and mug"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_MATERIALS)}
              />
            </div>

            <div className="mb-4">
              <SectionLabel>Bulletproof Quality Assurance</SectionLabel>
            </div>
            <Body className="mb-10 max-w-4xl">
              By providing production-ready layout templates and explicit
              clearspace governance sheets, we ensured local event vendors
              across different cities could deploy massive structural
              installations perfectly on time, with zero asset distortion or
              color inaccuracies.
            </Body>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_COBRANDING}
                alt="Rajkamal Prakashan and Pratham Books co-branding clearspace governance"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_COBRANDING)}
              />
            </div>
          </section>

          <Divider />

          {/* ── Commercial Value ──────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Commercial Value Summary: Building Scalable Brand Capital{" "}
            </SectionHeading>
            <Body className="mb-6">
              Through this strategic consulting engagement, we proved that
              premium design is an operational asset, not an afterthought. By
              combining strict brand system governance with high-utility
              enterprise software design, we equipped Rajkamal Prakashan with a
              powerful corporate utility.
            </Body>
            <Body>
              They now operate with a unified visual language across all
              regional scripts, complete control over their physical event
              footprints, and a centralized data ecosystem that eliminates
              tracking discrepancies and maximizes operational focus where it
              matters most.
            </Body>
          </section>

          {/* ── CTA ─────────────────────────────────────────────────────────── */}
          <PortfolioCTA />
        </div>
      </article>
    </Layout>
  );
}
