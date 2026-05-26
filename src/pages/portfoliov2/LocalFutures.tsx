import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "../../components/Layout";
import { usePageMeta } from "../../hooks/usePageMeta";
import PortfolioCTA from "../../components/PortfolioCTA";

// ── Assets ────────────────────────────────────────────────────────────────────
const IMG_HERO = "/portfolio/localFutures/hero.png";
const IMG_TYPOGRAPHY = "/portfolio/localFutures/typography.png";
// const IMG_AVATAR_1 =
//   "https://www.figma.com/api/mcp/asset/4bac3682-f020-4d15-a9da-49058a93166a";
// const IMG_AVATAR_2 =
//   "https://www.figma.com/api/mcp/asset/e7aac243-dce2-4113-8889-c31ca00e548b";
// const IMG_AVATAR_3 =
//   "https://www.figma.com/api/mcp/asset/4f1cc270-d505-4fe6-8319-c443673db5d9";

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

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-bold mb-4 text-primary">{children}</h3>;
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
        className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function LocalFutures() {
  usePageMeta({
    title: "Local Futures — Graphics Localization · Studio 1947",
    description:
      "How Studio 1947 partnered with Local Futures to execute complete graphics localization for their Hindi-language documentary short — translating motion graphics, infographics, and on-screen callouts into Devanagari.",
  });

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const zoom = (src: string) => setLightboxSrc(src);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <Layout>
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
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
            alt="Local Futures — Trade Gone Mad documentary"
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
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
              Local Futures
            </h1>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Divider />

          {/* ── Created by ────────────────────────────────────────────────── */}
          {/* <div className="pb-6 md:pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-base font-medium text-gray-700">
                Created by:
              </span>
              {[
                { img: IMG_AVATAR_1, name: "User Name" },
                { img: IMG_AVATAR_2, name: "User Name" },
                { img: IMG_AVATAR_3, name: "User Name" },
              ].map((person, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-100 shadow-sm"
                >
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-8 h-8 rounded-full object-cover shrink-0"
                  />
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    {person.name}
                  </span>
                </div>
              ))}
            </div>
          </div> */}

          <Divider />

          {/* ── Intro ─────────────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <Body className="mb-6 ">
              When an international non-profit or global think tank seeks a
              creative partner, they aren't looking for a simple translation
              service. They require high-level design consultants who understand
              multilingual visual systems, information architecture, and
              cultural localization. The challenge is to take dense, global
              macroeconomic data and translate it into a visual language that
              feels urgent, clear, and approachably native to regional
              communities.
            </Body>
            <Body className="">
              This case study demonstrates how we partnered with Local Futures,
              a pioneer of the international economic localization movement, to
              execute complete Graphics Localization for their high-impact
              documentary short:{" "}
              <span className="font-medium text-gray-900">
                "अंतरराष्ट्रीय व्यापार का पागलपन — Trade Gone Mad"
              </span>
              .
            </Body>
          </section>

          <Divider />

          {/* ── Strategic Context ─────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Strategic Context &amp; The Global-Local Divide
            </SectionHeading>

            <SubHeading>The Client Profile</SubHeading>
            <Body className="mb-12">
              Local Futures is a globally recognized organization dedicated to
              renewing ecological health and human well-being by shifting away
              from corporate globalization toward localized, community-driven
              economies. Their educational media tools are distributed globally
              to influence international policymakers, activists, and grassroots
              leaders.
            </Body>

            <SubHeading>
              The Problem: When Subtitles Aren&rsquo;t Enough
            </SubHeading>
            <Body className="mb-6">
              To introduce their core advocacy into India's massive
              Hindi-speaking demographic, simple text subtitling at the bottom
              of the screen was insufficient. In fast-paced video production,
              complex infographics, data charts, and on-screen text callouts
              must be read instantly.
            </Body>
            <Body className="mb-12 ">
              If the motion graphics remain in English while subtitles run
              below, the viewer faces severe cognitive splitting — trying to
              decode English graphs while reading Hindi translation
              simultaneously. This friction dilutes the emotional weight and
              clarity of the message.
            </Body>

            <div>
              <SubHeading>The Creative Brief</SubHeading>
              <Body>
                Our agency was tasked with auditing, dismantling, and completely
                re-engineering the video's dynamic on-screen graphics into
                Hindi. The goal was to build a seamless, digital-first native
                experience that commands immediate authority and drives local
                awareness across Tier-2 and Tier-3 regional landscapes in India.
              </Body>
            </div>
          </section>

          <Divider />

          {/* ── Typographic Framework ─────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Typographic &amp; Visual Localization Framework
            </SectionHeading>

            <Body className="mb-12 ">
              Translating text inside motion graphics requires deep layout
              discipline. Unlike static document translation, video graphics
              must account for fixed timeframes, strict screen safe-zones, and
              the expansion properties of regional scripts.
            </Body>

            <SubHeading>
              Typographic Strategy: Engineering Flawless Readability
            </SubHeading>
            <Body className="mb-10">
              We implemented a highly disciplined, clean, modern Devanagari
              sans-serif typeface for all on-screen callouts.
            </Body>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_TYPOGRAPHY}
                alt="Noto Sans Devanagari — typeface weight system"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_TYPOGRAPHY)}
              />
            </div>
          </section>

          <Divider />

          {/* ── Operational Value Summary ──────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Operational &amp; Systemic Value Summary
            </SectionHeading>
            <Body className="mb-6 ">
              By delivering a complete, production-ready localized graphic
              system rather than loose text translations, we provided Local
              Futures with an enterprise-grade advocacy asset.
            </Body>
            <Body className="">
              The resulting video successfully bridges the communication gap
              between high-level international economic discourse and regional
              ground-level reality. It positions Local Futures to effectively
              mobilize communities, break down social and environmental divides,
              and advocate for democratic, localized economic frameworks across
              India.
            </Body>
          </section>

          {/* ── Video ───────────────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <div className="relative w-full rounded-3xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Q1ZPIWBs45A?si=KwCN_-KOnIzzOUJQ"
                title="YouTube video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>

          <Divider />

          {/* ── CTA ─────────────────────────────────────────────────────────── */}
          <PortfolioCTA />
        </div>
      </article>
    </Layout>
  );
}
