import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "../../components/Layout";
import { usePageMeta } from "../../hooks/usePageMeta";
import PortfolioCTA from "../../components/PortfolioCTA";
import ProjectCredits from "../../components/ProjectCredits";

// ── Brand colors ──────────────────────────────────────────────────────────────
const GREEN = "#94c11f";
const ORANGE = "#f39200";

// ── Assets ────────────────────────────────────────────────────────────────────
const IMG_HERO = "/portfolio/villageWays/hero.png";
const IMG_BROCHURE_1 = "/portfolio/villageWays/Brochure01.png";
const IMG_BROCHURE_2 = "/portfolio/villageWays/Brochure02.png";
const IMG_BROCHURE_3 = "/portfolio/villageWays/Brochure03.png";
const IMG_BROCHURE_4 = "/portfolio/villageWays/Brochure04.png";
const IMG_CALENDAR_1 = "/portfolio/villageWays/Calendar01.png";
const IMG_CALENDAR_2 = "/portfolio/villageWays/Calendar02.png";
const IMG_CALENDAR_3 = "/portfolio/villageWays/Calendar03.png";
// const IMG_AVATAR_1    = "https://www.figma.com/api/mcp/asset/54c5f089-05db-4a19-ae8d-f0dd651ac9b0";
// const IMG_AVATAR_2    = "https://www.figma.com/api/mcp/asset/7da9599d-a629-4a50-886e-93f244f4e953";
// const IMG_AVATAR_3    = "https://www.figma.com/api/mcp/asset/ec490c9d-dc1d-49a2-b459-12421b3e04a2";

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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6 text-[#D60000]">
      {children}
    </h3>
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
export default function VillageWays() {
  usePageMeta({
    title: "Village Ways — Capacity Building · Studio 1947",
    description:
      "How Studio 1947 evolved from a print design vendor into a strategic field consulting partner for Village Ways — executing grassroots digital literacy workshops in Bali Island, Sunderbans.",
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

          <div className="w-full h-[60vh] md:h-[80vh] bg-white flex items-center justify-center overflow-hidden">
            <img
              src={IMG_HERO}
              alt="Village Ways logo"
              className="h-full w-full object-contain p-12 md:p-24"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 md:pb-14">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">
                Capacity Building
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
              Village Ways
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
              When social enterprises, eco-tourism organizations, and global
              impact funds look for a consultancy partner, they aren't scanning
              portfolios for slick tech graphics or trendy typography. They look
              for an agency with deep empathy, tactical field research
              capabilities, and the unique ability to turn human capital into
              localized economic growth.
            </Body>
            <Body className="">
              Since initiating our partnership with Village Ways — an
              organization globally recognized for pioneer community-owned
              tourism projects — our role has evolved from a traditional design
              vendor into a Strategic Field Consulting Partner. This case study
              details how we moved from high-quality print production into a
              hands-on, field-level intervention in Bali Island, Sunderbans,
              designed to bridge the digital literacy gap and empower rural
              homestay operators to own their narratives.
            </Body>
          </section>

          <Divider />

          {/* ── Context & Overarching Strategy ────────────────────────────── */}
          <section className="pb-6">
            <SectionHeading className="mb-6">
              Context &amp; Overarching Strategy
            </SectionHeading>

            <SubHeading>The Mission</SubHeading>
            <Body className="mb-12 ">
              Village Ways works to sustain traditional rural communities by
              developing low-impact, community-owned tourism modules. By keeping
              ownership completely in the hands of village committees, they
              create sustainable income alternatives that preserve cultural
              landscapes and protect ecological ecosystems.
            </Body>

            <SubHeading>The Evolution of Our Engagement</SubHeading>
            <Body className="mb-6 ">
              Our initial collaboration began with establishing visual trust
              through traditional creative channels:
            </Body>
            <SectionLabel>
              The Portfolio Carousel Asset (Print Media Tiers)
            </SectionLabel>
            <Body className="mb-10 ">
              We crafted premium, tactile print brochures and community-themed
              calendars. These assets were engineered to translate raw rural
              imagery into high-end editorial layouts suitable for international
              travelers exploring sustainable tourism options.
            </Body>

            {/* Brochure gallery */}
            <div className="bg-white border border-gray-100 overflow-hidden mb-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  IMG_BROCHURE_1,
                  IMG_BROCHURE_2,
                  IMG_BROCHURE_3,
                  IMG_BROCHURE_4,
                ].map((src, i) => (
                  <div key={i} className="overflow-hidden aspect-[3/4]">
                    <img
                      src={src}
                      alt={`Village Ways brochure page ${i + 1}`}
                      className="w-full h-full object-cover cursor-zoom-in hover:scale-[1.03] transition-transform duration-300"
                      loading="lazy"
                      onClick={() => zoom(src)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-400 font-semibold mb-10">
              Brochure for Village Ways
            </p>

            {/* Calendar gallery */}
            <div className="bg-white border border-gray-100 overflow-hidden mb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {[IMG_CALENDAR_1, IMG_CALENDAR_2, IMG_CALENDAR_3].map(
                  (src, i) => (
                    <div key={i} className="overflow-hidden aspect-[3/4]">
                      <img
                        src={src}
                        alt={`Village Ways calendar ${i + 1}`}
                        className="w-full h-full object-cover cursor-zoom-in hover:scale-[1.03] transition-transform duration-300"
                        loading="lazy"
                        onClick={() => zoom(src)}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
            <p className="text-center text-gray-400 font-semibold">
              Calendar for Village Ways
            </p>
            <Body className="mt-5 mb-0  ">
              However, true community empowerment cannot be achieved through
              static print materials distributed in city centers. To
              future-proof the local economy, the community members themselves
              needed the skills to access modern digital marketplaces. On April
              1st, 2026, our agency deployed directly to the field in Bali
              Island, Sunderbans, to execute a comprehensive, human-centric
              capacity-building program.
            </Body>
          </section>

          <Divider />

          {/* ── Field Audit ───────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Uncovering the Human Barriers: The Grassroots Field Audit
            </SectionHeading>

            <Body className="mb-10 ">
              In tier-4 rural landscapes, introducing social media tools
              requires understanding unique cultural anxieties. Many design
              agencies make the mistake of handing over complex digital manuals
              that create frustration. Through a structured diagnostic
              discussion on-site, we uncovered the real psychological and
              technical bottlenecks holding the local community back:
            </Body>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Social Anxiety & Fear of Judgment",
                  body: "A deep hesitation regarding public exposure and low confidence when interacting in open digital spaces.",
                },
                {
                  title: "Production Nervousness",
                  body: "High levels of performance anxiety when asked to speak or record directly on camera.",
                },
                {
                  title: "Linguistic Isolation",
                  body: "Language barriers deeply impacted day-to-day business interactions, especially for local tour guides and homestay operators trying to communicate value to urban travelers.",
                },
                {
                  title: "Technical Deficit",
                  body: "Limited baseline knowledge of creative digital apps, software structures, and content algorithms.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-3xl border border-gray-100 p-8 flex flex-col gap-4"
                >
                  <h3 className="text-xl font-bold text-[#D60000] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* ── Strategic Intervention ────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Strategic Intervention: Low-Friction Digital Frameworks
            </SectionHeading>

            <Body className="mb-12 ">
              To dismantle these barriers, we flipped the script on traditional
              social media production. We engineered three low-friction,
              high-empathy creative workflows tailored specifically to varying
              levels of digital literacy.
            </Body>

            <SubHeading>
              A. Camera-Free Content Architectures (Voiceover Visuals)
            </SubHeading>
            <Body className="mb-10 ">
              We stripped away the pressure of being on camera. Participants
              were taught to shoot clean, steady footage of their environment
              while utilizing authentic, local voiceovers over the top. This
              completely removed personal anxiety while preserving raw,
              documentary-style storytelling.
            </Body>

            <SubHeading>
              The &ldquo;Story-First&rdquo; Composition Standard
            </SubHeading>
            <Body className="mb-10 ">
              Rather than worrying about hyper-edited video layouts, we
              established a simpler metric: One Compelling Local Story + One
              Striking Photo = A Perfect Social Asset. This shifted focus from
              technical software mastery back to their natural strength: deep
              oral traditions and local knowledge.
            </Body>

            <SubHeading>
              The Collaborative Account Model (Shared Community Ownership)
            </SubHeading>
            <Body className="">
              To completely eliminate the ongoing pressure of personal profile
              management, we designed a unified, collective community profile.
              Managed together as a team, this shared hub distributed the
              responsibility of creation, built internal trust, and fostered
              long-term community alignment.
            </Body>
          </section>

          <Divider />

          {/* ── Workshop Architecture ─────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              The Workshop Architecture: Deconstructing the 4-Phase System
            </SectionHeading>

            <Body className="mb-10 ">
              The workshop layer was strictly engineered into sequential,
              low-pressure modules designed to ease participants gently into
              open digital creation:
            </Body>

            {/* Workshop phase cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                {
                  title: "Low-Pressure Introductions",
                  body: "Dissolve initial hesitation. Participants introduced themselves in a relaxed, warm environment without any mention of technology or smartphones.",
                },
                {
                  title: "Tactical Group Storytelling",
                  body: "Discover latent talents. Groups selected a locally visible fruit or a handkerchief they stitched themselves to build a spontaneous verbal narrative.",
                },
                {
                  title: "Reflection & Individual Mapping",
                  body: "Capture raw personal context. Attendees mapped out specific activities they personally enjoy, recalling single memorable moments tied to their craft.",
                },
                {
                  title: "Boundary Auditing",
                  body: "Surface hidden fears. A structured open floor to explicitly diagnose and map what explicitly prevents them from maintaining a digital footprint.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-3xl border border-gray-100 p-8 flex flex-col gap-4"
                >
                  <h3 className="text-xl font-bold text-[#D60000] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            <SubHeading>The Discovery of Latent Talents</SubHeading>
            <Body className="mb-6 ">
              The activity-based exercises revealed an extraordinary reservoir
              of natural creative capability among the villagers of Bali,
              Rangabelia, and Bijaynagar:
            </Body>
            <SectionLabel>
              Natural Storytellers &amp; Photographers
            </SectionLabel>
            <Body className="mb-6 ">
              Participants displayed an immediate, organic instinct for framing,
              capturing context, and spinning highly compelling narratives
              around everyday village assets such as mapping the profound
              medicinal benefits, culinary uses, and cultural roles of the
              native local banana (Kachkala).
            </Body>
            {/* 4-module card */}
            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-4 lg:divide-x divide-y lg:divide-y-0 divide-gray-100">
                {[
                  {
                    mod: "Module A",
                    lines: ["INTRODUCTION", "TO SOCIAL MEDIA", "PLATFORMS"],
                  },
                  {
                    mod: "Module B",
                    lines: ["STORYTELLING", "TO POST", "CREATION"],
                  },
                  {
                    mod: "Module C",
                    lines: ["STORYTELLING", "TO REEL", "CREATION"],
                  },
                  {
                    mod: "Module D",
                    lines: [
                      "UNDERSTANDING",
                      "BASIC METRICS",
                      "OF SOCIAL MEDIA",
                    ],
                  },
                ].map(({ mod, lines }, i) => (
                  <div key={i} className="p-6 lg:p-8 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-7 h-7 lg:w-8 lg:h-8 rounded-sm shrink-0"
                        style={{ backgroundColor: GREEN }}
                      />
                      {i < 4 && (
                        <div className="flex flex-1 items-center">
                          <div
                            className="flex-1 h-[2px]"
                            style={{ backgroundColor: GREEN }}
                          />
                          <svg
                            width="10"
                            height="14"
                            viewBox="0 0 10 14"
                            fill="none"
                            className="shrink-0"
                          >
                            <path
                              d="M1 1L9 7L1 13"
                              stroke={GREEN}
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 font-semibold text-sm lg:text-base uppercase tracking-widest mb-1">
                      {mod}
                    </p>
                    <p
                      className="whitespace-pre-line font-extrabold text-xl lg:text-2xl xl:text-3xl uppercase leading-tight"
                      style={{ color: GREEN }}
                    >
                      {lines.join("\n")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Body className="mb-8 ">
              Every cohort participant was selected via rigorous diagnostic
              profiling based on specific skill tracking to ensure highly
              concentrated peer-to-peer mentoring on-site, including leaders
              like Debaprasad Baidya, Jaya Mukherjee, and Animesh Mondal.
            </Body>
          </section>

          <Divider />

          {/* ── Future Scope ──────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Future Scope: Engineering the Rural Digital Economy
            </SectionHeading>

            <Body className="mb-10 ">
              To demonstrate our strategic value as long-term consultants, we
              delivered an extensive, system-level product and strategy
              blueprint designed to be deployed progressively over future
              phases:
            </Body>

            {/* <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden mb-10">
              <img
                src={IMG_FUTURE_SCOPE}
                alt="Future Scope — Village Ways rural digital economy roadmap"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_FUTURE_SCOPE)}
              />
            </div> */}

            {/* 3×3 future scope grid — flat grid so each row shares height */}
            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3">
                {[
                  {
                    num: "1",
                    label: "Branding of\nSundari Sundarbans",
                    time: "3-4 WEEKS",
                  },
                  {
                    num: "4",
                    label: "Social Media\nMarketing",
                    time: "Yearly commitment",
                  },
                  {
                    num: "7",
                    label: "Responsive\nWebsite",
                    time: "8-10 WEEKS",
                  },
                  {
                    num: "2",
                    label: "WhatsApp Marketplace",
                    time: "3-4 WEEKS",
                  },
                  {
                    num: "5",
                    label: "Detailed Brochure\n& Guide Profiles",
                    time: "3-4 WEEKS",
                  },
                  {
                    num: "8",
                    label: "Initial Brand\nStrategy",
                    time: "3-4 WEEKS",
                  },
                  {
                    num: "3",
                    label: "Map for Toto\n+ Homestays",
                    time: "3-4 WEEKS",
                  },
                  {
                    num: "6",
                    label: "All in One\nMobile Application",
                    time: "40 WEEKS",
                  },
                  {
                    num: "9",
                    label: "Toolkit Design\nfor Guides",
                    time: "3-4 WEEKS",
                  },
                ].map(({ num, label, time }, i) => (
                  <div
                    key={num}
                    className={[
                      "p-6 md:p-8 flex items-start gap-5",
                      i % 3 !== 2 ? "sm:border-r border-gray-100" : "",
                      i < 6
                        ? "border-b border-gray-100"
                        : i < 8
                          ? "border-b border-gray-100 sm:border-b-0"
                          : "",
                    ].join(" ")}
                  >
                    <span
                      className="text-5xl md:text-6xl font-extrabold leading-none shrink-0"
                      style={{ color: GREEN }}
                    >
                      {num}
                    </span>
                    <div className="pt-1">
                      <p
                        className="font-semibold text-sm md:text-base uppercase leading-snug whitespace-pre-line"
                        style={{ color: ORANGE }}
                      >
                        {label}
                      </p>
                      <p className="text-gray-300 font-semibold text-xs uppercase mt-1">
                        {time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* ── Consultancy Value Summary ──────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Consultancy Value Summary: Building Sustainable Human Capital
            </SectionHeading>
            <Body className="mb-6 ">
              Through this engagement with Village Ways, we demonstrated that
              true design innovation is measured by human impact, local agency,
              and structural legacy. By combining professional print asset
              curation with rigorous field-level literacy workshops, we moved a
              vulnerable ecosystem away from dependency into total communication
              autonomy.
            </Body>
            <Body className="">
              This project serves as a definitive case study proving to future
              social funds, government panels, and international NGOs that our
              agency doesn't just hand over aesthetic files — we build
              self-sustaining digital engines that preserve local heritage,
              enrich human capital, and directly fuel local economic growth.
            </Body>
          </section>

          <Divider />

          {/* ── Credits ─────────────────────────────────────────────────── */}
          <ProjectCredits 
            client="Village Ways"
            accentColor="#94c11f"
            roles={[
              { role: "Direction", members: "Rabi, Pinaki" },
              { role: "Brochure", members: "Rabi" },
              { role: "Calendar", members: "Rabi, Zahid, Anudyia" }
            ]}
          />

          {/* ── CTA ─────────────────────────────────────────────────────────── */}
          <PortfolioCTA />
        </div>
      </article>
    </Layout>
  );
}
