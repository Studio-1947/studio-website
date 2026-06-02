import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "../../components/Layout";
import { usePageMeta } from "../../hooks/usePageMeta";
import PortfolioCTA from "../../components/PortfolioCTA";
import ProjectCredits from "../../components/ProjectCredits";

// ── Assets ────────────────────────────────────────────────────────────────────
const IMG_HERO = "/portfolio/awch/hero.png";
const IMG_ARCH = "/portfolio/awch/Parent-Brand Architecture.png";
const IMG_TYPO = "/portfolio/awch/Typographyfont.png";
const IMG_WEB = "/portfolio/awch/Simplified Information Architecture.png";
const IMG_APPT = "/portfolio/awch/Frictionless Appointment UX.png";
const IMG_SOCIAL_1 = "/portfolio/awch/Instant Recall01.png";
const IMG_SOCIAL_2 = "/portfolio/awch/Instant Recall02.jpg";
const IMG_SOCIAL_3 = "/portfolio/awch/Instant Recall03.jpg";

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
export default function Awch() {
  usePageMeta({
    title: "AWCH — Avishkar Women & Children Hospital · Studio 1947",
    description:
      "How Studio 1947 established AWCH as a modern, premier multispeciality medical institution in Asansol — brand strategy, visual identity, digital platform, and omnichannel social media system.",
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
      <article className="portfolio-page bg-[#fafafa] min-h-screen">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <div className="relative">
          <Link
            to="/portfolio"
            className="absolute top-6 left-6 z-[60] flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#D60000] rounded-full shadow-lg hover:bg-[#B80000] transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </Link>
          <img
            src={IMG_HERO}
            alt="AWCH — Avishkar Women & Children Hospital, Asansol"
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
                Visual Identity
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">
                Digital Platform
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">
                Social Media
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
              Avishkar
              <br />
              Hospital
            </h1>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Divider />

          {/* ── Intro ─────────────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <Body className="mb-6">
              When healthcare founders and hospital executives evaluate a
              creative partner, they look for design that does more than
              decorate a space. They seek an agency that can build deep
              institutional trust, shift consumer behavior, and engineer
              digital-first touchpoints that simplify patient care.
            </Body>
            <Body>
              This case study demonstrates how we established{" "}
              <strong className="text-primary">
                AWCH (Avishkar Women &amp; Children Hospital)
              </strong>{" "}
              as a modern, premier multispeciality medical institution in
              Asansol. By shifting regional perceptions and eliminating digital
              friction, we built a comprehensive communication ecosystem focused
              on authority, accessibility, and community impact.
            </Body>
          </section>

          <Divider />

          {/* ── Strategic Context ─────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Strategic Context & The Regional Trust Gap
            </SectionHeading>

            <div className="">
              <SectionLabel>The Mission</SectionLabel>
              <Body className="">
                <strong className="text-primary">
                  Avishkar Women &amp; Children Hospital (AWCH)
                </strong>{" "}
                was envisioned as a state-of-the-art multispeciality hospital
                bringing world-class medical infrastructure directly to families
                in Asansol. The institution is dedicated to delivering highly
                specialized, compassionate care, completely removing the need
                for artificial operational shortcuts in the patient experience.
              </Body>
            </div>

            <div className="mt-10">
              <SectionLabel>The Challenge</SectionLabel>
            </div>
            <Body className="mb-6">
              Healthcare brands in Tier-2 cities face a unique psychological
              hurdle: a systemic lack of digital trust and fragmented
              institutional communication. Historically, many families in
              Asansol would undergo the emotional and financial strain of
              traveling all the way to Kolkata for critical treatments. This
              flight wasn't due to a lack of local medical infrastructure, but a
              lack of visual confidence and awareness in local brands.
            </Body>
            <Body className="mb-10 max-w-4xl">
              Our core strategic challenge was to bridge this confidence gap.
              The identity needed to balance:
            </Body>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Emotional Warmth",
                  body: "Reassuring anxious patients and protective parents.",
                },
                {
                  title: "Clinical Authority",
                  body: "Commanding absolute medical professionalism.",
                },
                {
                  title: "Cultural Familiarity",
                  body: "Ensuring the visual environment felt approachably native rather than intimidatingly corporate.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-3xl border border-gray-100 p-8"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* ── Brand Architecture ────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Parent-Brand Architecture
            </SectionHeading>

            <Body className="mb-10 max-w-4xl">
              To protect the institution from future design debt, we built an
              adaptable visual architecture. AWCH serves as the primary master
              identity under which specific wings (such as Pediatrics,
              Gynecology, and Emergency Care) operate. This cohesive blueprint
              ensures that as the hospital expands its departments, every new
              facility instantly inherits established brand equity, saving
              long-term promotional costs.
            </Body>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_ARCH}
                alt="AWCH master brand logo — Avishkar Women & Children Hospital"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_ARCH)}
              />
            </div>
          </section>

          <Divider />

          {/* ── Visual Direction ──────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Visual Direction & Design Tokens{" "}
            </SectionHeading>
            <h3 className="text-xl font-bold mb-4 text-primary">
              Breaking the "Sterile Blue" Cliché{" "}
            </h3>
            <Body className="mb-10 max-w-4xl">
              Standard corporate healthcare branding is crowded with cold,
              high-saturation blues that feel clinical and detached. To
              instantly differentiate AWCH on a regional scale, we engineered a
              distinct, high-contrast palette:
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl">
              <div
                className="relative p-8 md:p-10 flex flex-col justify-between min-h-[280px]"
                style={{
                  background:
                    "linear-gradient(135deg, #d4006b 0%, #7a003d 100%)",
                }}
              >
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                <p className="relative text-white text-base md:text-lg leading-relaxed">
                  Intentionally selected to evoke care, empathy, and deep
                  compassion. This tone establishes an immediate psychological
                  connection with women-centric and pediatric care while
                  bringing human warmth into an industry often seen as sterile.
                </p>
                <div className="relative mt-8 flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-xl">Primary</p>
                    <p className="text-white/60 text-sm">Care Pink</p>
                  </div>
                  <p className="text-white/60 text-sm font-mono">#BF0076</p>
                </div>
              </div>
              <div
                className="relative p-8 md:p-10 flex flex-col justify-between min-h-[280px]"
                style={{
                  background:
                    "linear-gradient(135deg, #3a3a3a 0%, #000000 100%)",
                }}
              >
                <div className="hidden md:block absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                <p className="relative text-white text-base md:text-lg leading-relaxed">
                  Sophisticated supporting tones were introduced to frame the
                  primary care colors. These anchors maintain a clean, academic
                  weight, ensuring the system functions perfectly across formal
                  hospital environments, digital software, and print media.
                </p>
                <div className="relative mt-8 flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-xl">Secondary</p>
                    <p className="text-white/60 text-sm">Neutral</p>
                  </div>
                  <p className="text-white/60 text-sm font-mono">#000000</p>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* ── Typography ────────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Typography: Accessible and Stress-Free Readability{" "}
            </SectionHeading>
            <Body className="mb-10 max-w-4xl">
              In high-stress medical environments, the typeface must serve as an
              invisible, high-performance tool for fast reading.
            </Body>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
              <img
                src={IMG_TYPO}
                alt="Inter typeface — all weights across the AWCH brand system"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_TYPO)}
              />
            </div>
          </section>

          <Divider />

          {/* ── Omnichannel ───────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Omnichannel System Application{" "}
            </SectionHeading>
            <Body className="mb-8 md:mb-16 max-w-4xl">
              To demonstrate the system's ability to seamlessly connect with
              patients across every phase of their healthcare journey, we
              activated the visual assets across key physical and digital
              channels:
            </Body>

            <SectionLabel>The Friction-Free Web Experience</SectionLabel>
            <Body className="mb-8 md:mb-16 max-w-4xl">
              The desktop and mobile web platforms were designed as
              trust-building tools rather than static information walls.
            </Body>

            {/* Web experience */}

            <h3 className="text-xl font-bold mb-4 text-primary">
              Simplified Information Architecture
            </h3>
            <Body className="mb-10 max-w-4xl">
              Healthcare data is structured into highly scannable layouts,
              enabling anxious users to find doctors, key medical departments,
              and emergency contact details within seconds.
            </Body>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-10">
              <img
                src={IMG_WEB}
                alt="AWCH website — Expert Women and Children Healthcare in Asansol"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_WEB)}
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-primary">
              Frictionless Appointment UX
            </h3>
            <Body className="mb-10 max-w-4xl">
              We designed a clean, intuitive booking flow that removes
              unnecessary steps. This digital pathway builds immediate brand
              credibility and helps reduce long dependency lines at physical
              hospital reception desks.
            </Body>
            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-10">
              <img
                src={IMG_APPT}
                alt="AWCH appointment booking — Schedule Your Visit at AWCH"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_APPT)}
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-primary">
              Accessibility-First UI
            </h3>
            <Body className="mb-10 max-w-4xl">
              By pairing clean typography with generous breathing space, the
              layout minimizes cognitive load, making the digital experience
              effortless for users of varying ages and digital literacy levels.
            </Body>

            <div className="mb-4">
              <SectionLabel>The Social Media Awareness Engine</SectionLabel>
            </div>
            <Body className="mb-10">
              Social platforms serve as the primary vehicle for building local
              awareness in Asansol.
            </Body>

            <h3 className="text-xl font-bold mb-4 text-primary">
              Template Scaling
            </h3>

            <Body className="mb-10 max-w-4xl">
              We engineered modular graphic templates that maintain a strict
              visual style, recognizable brand colors, and bold typography
              hierarchy across all health-education posts.
            </Body>

            {/* Social */}

            <h3 className="text-xl font-bold mb-4 text-primary">
              Instant Recall
            </h3>
            <Body className="mb-10">
              This systematic structure ensures that every piece of digital
              content is immediately recognizable in a crowded social feed as an
              authoritative, caring message from the AWCH ecosystem.
            </Body>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {[
                { src: IMG_SOCIAL_1, alt: "AWCH social media post 1" },
                { src: IMG_SOCIAL_2, alt: "AWCH social media post 2" },
                { src: IMG_SOCIAL_3, alt: "AWCH social media post 3" },
              ].map(({ src, alt }) => (
                <div
                  key={src}
                  className="-mx-6 lg:mx-0 rounded-none lg:rounded-3xl overflow-hidden"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover block cursor-zoom-in"
                    loading="lazy"
                    onClick={() => zoom(src)}
                  />
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* ── Credits ─────────────────────────────────────────────────── */}
          <ProjectCredits 
            client="Avishkar"
            accentColor="#004A99"
            roles={[
              { role: "Creative Direction", members: "Rabi, Soumajit" },
              { role: "Design", members: "Zahid, Nikhil Subba" },
              { role: "Content", members: "Nadia, Sweety" },
              { role: "Website Design & Development", members: "Soumajit, Santam" },
              { role: "Video", members: "Ahmed, Nikhil Subba" }
            ]}
          />

          {/* ── CTA ─────────────────────────────────────────────────────────── */}
          <PortfolioCTA />
        </div>
      </article>
    </Layout>
  );
}
