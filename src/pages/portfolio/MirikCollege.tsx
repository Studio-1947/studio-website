import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "../../components/Layout";
import { usePageMeta } from "../../hooks/usePageMeta";
import PortfolioCTA from "../../components/PortfolioCTA";
import ProjectCredits from "../../components/ProjectCredits";

// ── Assets (public/ourworks/mirikCollege/) ──────────────────────────────────────
const IMG_HERO = "/ourworks/mirikCollege/hero.avif";
const IMG_MAIN = "/ourworks/mirikCollege/sourini.avif";
const IMG_SITE_1 = "/ourworks/mirikCollege/3KguPnfKGnnn5Zholn8BgucID4.avif";
const IMG_SITE_2 = "/ourworks/mirikCollege/phugiri.avif";
const IMG_POST = "/ourworks/mirikCollege/FsYJCR9aKQUrBqCAK6Ub0uKk.avif";

// ── Small reusable bits ───────────────────────────────────────────────────────

function SectionLabel({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide mb-6 ${
        light ? "text-white/80" : "bg-[#FFF4F4] text-[#ff3b00]"
      }`}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  children,
  light,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.05] ${light ? "text-white" : "text-gray-900"} ${className}`}
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
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}

// ── Three-column card grid ──────────────
interface ThreeColProps {
  component: string;
  challenge: string;
  solution: string;
  labels?: [string, string, string];
}
function ThreeColCards({ component, challenge, solution, labels = ["The Component", "The UX Challenge", "The Solution"] }: ThreeColProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {[
        { label: labels[0], text: component },
        { label: labels[1], text: challenge },
        { label: labels[2], text: solution },
      ].map(({ label, text }) => (
        <div
          key={label}
          className="bg-white rounded-3xl border border-gray-100 p-8"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#ff3b00" }}
          >
            {label}
          </p>
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MirikCollegeV2() {
  usePageMeta({
    title: "Mirik College – Portfolio – Studio 1947",
    description:
      "Capacity Building through trainings beyond the Classroom. A collaboration between Studio 1947 and the Department of Geography at Mirik College.",
  });

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const zoom = (src: string) => setLightboxSrc(src);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <Layout>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
      <article className="portfolio-page bg-[#fafafa] min-h-screen">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <div className="relative">
          <Link
            to="/portfolio"
            className="absolute top-6 left-6 z-[60] flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#ff3b00] rounded-full shadow-lg hover:bg-[#d43100] transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </Link>
          <img
            src={IMG_HERO}
            alt="Mirik College fieldwork"
            className="w-full h-[60vh] md:h-[80vh] object-cover grayscale"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          {/* Title overlaid at bottom of hero */}
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 md:pb-14">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">Capacity Building</span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-white tracking-wide border border-white/20">Field Research</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
              Mirik College
            </h1>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Divider />

          {/* ── Context & The Vision ───────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              Context &amp; The Vision
            </SectionHeading>
            <SectionLabel>The Mission</SectionLabel>
            <Body className="mb-12">
              What happens when you take geography out of the textbook and drop it right in the middle of the hills of Darjeeling? Together with the Department of Geography at Mirik College, we designed a 60-hour intensive program that blended classroom learning, hands-on workshops, and fieldwork into one big cauldron.
            </Body>

            <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12">
              <SectionLabel>Core Problem</SectionLabel>
              <Body className="max-w-4xl">
                Instead of only hearing about livelihoods, communities, and human-nature relationships, students needed to experience them firsthand. The aim was simple:{" "}
                <strong className="font-bold text-[#ff3b00]">
                  learning should not stop at just notes and exams.
                </strong>{" "}
                It should move, ask questions, and sometimes feel uncomfortable in a good way. This approach helps students understand that geography is not abstract—it lives in people&apos;s homes, work, and everyday decisions.
              </Body>
            </div>
          </section>

          <Divider />

          {/* ── Project Structure & Learning Design ──────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6 md:mb-14">
              Project Structure &amp; Learning Design
            </SectionHeading>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden border-0 md:border border-gray-100 mb-8 grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={IMG_MAIN}
                alt="Mirik College Students"
                className="w-full object-cover cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_MAIN)}
              />
            </div>

            <Body className="mb-8 md:mb-16">
              The program was divided into three core components, each building on the previous one and guiding students from theory to practice. Just being a part of academic activity, practical training, and on-ground discovery, it was built around curiosity and experience.
            </Body>

            <h3
              className="text-2xl md:text-3xl font-black mb-6"
              style={{ color: "#ff3b00" }}
            >
              The 60-Hour Framework
            </h3>
            <ThreeColCards
              labels={["Classroom-Based Component (20 Hours)", "Interactive Workshop Component (20 Hours)", "Fieldwork Component (20 Hours)"]}
              component="The project began inside the classroom, where students were introduced to key ideas around livelihoods, settlement patterns, regional development, and human-environment relationships. These sessions helped students place tea gardens within a wider geographic and social context, preparing them to approach the field with both curiosity and sensitivity."
              challenge="Workshops jointly led by faculty members and the Studio 1947 team marked a shift from learning about research to learning how to do research. Students were trained in ethical field engagement, basic data collection, and creating an overall report. Discussions focused not only on what questions to ask, but also on how to ask them and why listening mattered as much as writing the answers."
              solution="Fieldwork formed the heart of the project. This was where concepts from the classroom met lived experience, and where students began to understand geography as something shaped by people's daily lives."
            />
          </section>

          <Divider />

          {/* ── Field Sites & Methodology ──────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">Field Sites &amp; Methodology</SectionHeading>
            <Body className="mb-12">
              The survey was conducted in Mandir Goan (Soureni) and Phuguri, two villages located within a short distance from Mirik. These sites were chosen to understand everyday life within tea plantation regions and to allow students to observe working and living conditions closely.
            </Body>

            {/* Two site images side by side */}
            <div className="-mx-6 md:mx-0 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 mb-10">
              <div className="rounded-none md:rounded-3xl overflow-hidden border-0 md:border border-gray-100 aspect-[4/3] relative group">
                <img
                  src={IMG_SITE_1}
                  alt="Mandir Goan (Soureni)"
                  className="w-full h-full object-cover cursor-zoom-in filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                  loading="lazy"
                  onClick={() => zoom(IMG_SITE_1)}
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Mandir Goan (Soureni)
                </div>
              </div>
              <div className="rounded-none md:rounded-3xl overflow-hidden border-0 md:border border-gray-100 aspect-[4/3] relative group">
                <img
                  src={IMG_SITE_2}
                  alt="Phuguri Village"
                  className="w-full h-full object-cover cursor-zoom-in filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                  loading="lazy"
                  onClick={() => zoom(IMG_SITE_2)}
                />
                <div className="absolute bottom-4 left-4 bg-[#ff3b00]/90 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Phuguri Village
                </div>
              </div>
            </div>

            <Body className="max-w-4xl">
              Students visited households directly, conducting face-to-face surveys to understand income sources, employment patterns, access to basic services, and household challenges. Walking from home to home, listening to personal accounts, and observing surroundings helped ground the survey data in real experiences.
            </Body>
          </section>

          <Divider />

          {/* ── Team Composition & Post-Fieldwork ──────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-8">
              Team Composition &amp; Post-Fieldwork
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12">
                <SectionLabel>The Team</SectionLabel>
                <ul className="space-y-6 mt-4">
                  <li className="flex gap-4 items-start">
                    <span className="text-[#ff3b00] font-bold">01</span>
                    <p className="text-gray-600 leading-relaxed text-sm">Five students from the Department of Geography, Mirik College.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-[#ff3b00] font-bold">02</span>
                    <p className="text-gray-600 leading-relaxed text-sm">One faculty member from Mirik College, providing academic guidance throughout.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-[#ff3b00] font-bold">03</span>
                    <p className="text-gray-600 leading-relaxed text-sm">Three members from Studio 1947, supporting research design, field coordination, and analysis.</p>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-500 italic">
                    This collaborative structure allowed students to learn within an academic framework while also being exposed to professional research practices and mentorship.
                  </p>
                </div>
              </div>

              <div>
                <SectionLabel>Post-Fieldwork Phase</SectionLabel>
                <Body className="mb-6">
                  Fieldwork did not mark the end of the learning process. After surveys were completed, students made weekly visits to the Studio 1947 office, where they worked closely with the team to reflect on their findings.
                </Body>
                <Body>
                  These 20 hours sessions focused on organizing survey responses, analysing the collected data, and discussing what the data revealed about livelihoods in the two villages. Students were guided through the process of turning raw information into structured and clear written reports. This phase closely resembled an internship experience, offering sustained mentorship and practical exposure beyond routine coursework.
                </Body>
              </div>
            </div>

            <div className="-mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={IMG_POST}
                alt="Post Fieldwork Analysis"
                className="w-full block cursor-zoom-in"
                loading="lazy"
                onClick={() => zoom(IMG_POST)}
              />
            </div>
          </section>

          <Divider />

          {/* ── Outcomes ────────────────────────────────────────────── */}
          <section className="pb-16 md:pb-24">
            <SectionHeading className="mb-6">Outcomes &amp; Learning Impact</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-[#ff3b00] bg-[#ff3b00] mb-6 shadow-xl">
              <div className="bg-[#ff3b00] p-8 md:p-12 flex flex-col justify-center text-white">
                <p className="text-xl md:text-2xl font-bold leading-tight mb-8">
                  The project resulted in a detailed, ground-level understanding of livelihood conditions, based entirely on primary data collected by the students.
                </p>
                <p className="text-white/80 font-medium leading-relaxed">
                  Beyond the research output, the process strengthened students' confidence in conducting fieldwork, engaging with communities respectfully, and connecting theory with observation. At the conclusion, all students received certificates issued by Studio 1947.
                </p>
              </div>
              <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-[#1A1A1A] text-xl md:text-2xl font-black uppercase mb-4 tracking-tight">Studio 1947 Perspective</h3>
                <div className="w-12 h-1 bg-[#ff3b00] mb-6"></div>
                <p className="text-[#1A1A1A] font-bold text-lg leading-snug mb-4">
                  Capacity building is a core focus of Studio 1947, and this collaboration showed how academic learning becomes stronger when paired with real-world engagement.
                </p>
                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                  Through a mix of classroom sessions, interactive workshops, and fieldwork, students developed practical research skills alongside theoretical understanding. More than a single study, the project strengthened student capacity while laying the foundation for future collaborations.
                </p>
              </div>
            </div>
          </section>

          {/* ── Credits ─────────────────────────────────────────────────── */}
          <ProjectCredits 
            client="Mirik College"
            accentColor="#ff3b00"
            roles={[
              { role: "Research Framework", members: "Rabi, Tanisha (Prof. Mirik College)" },
              { role: "Survey Coordination", members: "Subhendu, Anjali, Santam, Sweety, Nikhil Raj, Soumajit, Pralath Karki (Mirik College)" },
              { role: "Orientation", members: "Anushiya" },
              { role: "Research Paper", members: "Individual Students" },
              { role: "Certificate Design", members: "Nikhil Raj" }
            ]}
          />

          {/* ── CTA ─────────────────────────────────────────────────────────── */}
          <PortfolioCTA />
        </div>
      </article>
    </Layout>
  );
}
