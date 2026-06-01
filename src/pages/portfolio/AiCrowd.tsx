import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "../../components/Layout";
import { usePageMeta } from "../../hooks/usePageMeta";
import PortfolioCTA from "../../components/PortfolioCTA";

const IMG_HERO = "/portfolio/aiCrowd/hero.svg";
const IMG_PHASE1_1 = "/portfolio/aiCrowd/Amazon_KDD_Cup_2024.svg";
const IMG_PHASE1_2 = "/portfolio/aiCrowd/ADDI — Alzheimer's_Detection_Challenge.svg";
const IMG_PHASE1_3 = "/portfolio/aiCrowd/Scene_Understanding_for_Autonomous_Drone_Delivery_(SUADD'23).svg";
const IMG_PHASE1_4 = "/portfolio/aiCrowd/Data_Purchasing_Challenge_2022.svg";
const IMG_PHASE1_5 = "/portfolio/aiCrowd/Multi-Agent BehaviorChallenge2022.svg";
const IMG_PHASE1_6 = "/portfolio/aiCrowd/NeurIPS2021-AWSDeepRacer—AIDrivingOlympicsChallenge.svg";
const IMG_PHASE1_7 = "/portfolio/aiCrowd/NeurIPS-2020-Procgen-Competition.svg";
const IMG_PHASE2_1 = "/portfolio/aiCrowd/Global Chess Challenge 2025.svg";
const IMG_PHASE2_2 = "/portfolio/aiCrowd/Commonsense Persona-Grounded Dialogue Challenge 2025.svg";
const IMG_PHASE2_3 = "/portfolio/aiCrowd/Meta CRAG Multi-Modal Challenge 2025.svg";
const IMG_PHASE2_4 = "/portfolio/aiCrowd/Sounding Video Generation (SVG) Challenge 2024.svg";

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
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
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
export default function AiCrowd() {
  usePageMeta({
    title: "AI Crowd – Portfolio – Studio 1947",
    description:
      "A deep-tech design methodology translating highly complex, multi-dimensional machine learning challenges for AI Crowd.",
  });

  const [lightboxSrc, setLightboxSrc] = useState<{
    src: string;
    whiteBg?: boolean;
  } | null>(null);
  const zoom = (src: string, whiteBg?: boolean) =>
    setLightboxSrc({ src, whiteBg });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
      <article className="portfolio-page bg-[#fafafa] min-h-screen">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
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
            alt="AI Crowd Hero"
            className="w-full h-[60vh] md:h-[80vh] object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 md:pb-14">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF4F4] text-[#D60000] backdrop-blur-sm text-xs font-semibold tracking-wide border border-[#FFE8E8]">
                Capacity Building
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-4">
              AI Crowd
            </h1>
            {/* <div className="flex items-center gap-2">
               <span className="text-white/80 font-medium">Created by:</span>
               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <div className="w-6 h-6 rounded-full bg-white/30 overflow-hidden">
                  </div>
                  <span className="text-sm text-white font-medium">User Name</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <div className="w-6 h-6 rounded-full bg-white/30 overflow-hidden">
                  </div>
                  <span className="text-sm text-white font-medium">User Name</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <div className="w-6 h-6 rounded-full bg-white/30 overflow-hidden">
                  </div>
                  <span className="text-sm text-white font-medium">User Name</span>
               </div>
            </div> */}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Divider />

          {/* ── Intro ─────────────────────────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <Body className="mb-6">
              When deep-tech platforms, artificial intelligence researchers, and enterprise data engines look for a creative collaborator, they don't look for a traditional graphic agency. They require a partner operating at the intersection of abstract mathematics, cognitive communication, and interactive data visualization. The challenge is immense: taking highly complex, multi-dimensional machine learning challenges and framing them so that the world’s elite data scientists can instantly grasp the problem, benchmark their models, and push the boundaries of science.
            </Body>
            <Body>
              Our partnership with AIcrowd represents the longest-standing technical design relationship in our company's history. Initiated years ago by our CEO, Rabiul Islam, prior to the formal inception of Studio 1947, this collaboration has evolved into a powerhouse framework. Together, we have shaped the visual identity and communication architecture for world-defining AI challenges hosted alongside premium institutions like NeurIPS, Meta, Amazon, and the KDD Cup.
            </Body>
          </section>

          <Divider />

          {/* ── The Core Triad ──────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-8">
              The Core Triad: <span className="text-[#D60000]">Science</span>, <span className="text-[#D60000]">Communication</span>, <span className="text-[#D60000]">Visualisation</span>
            </SectionHeading>
            
            <Body className="mb-10">
              To bridge the gap between complex algorithms and human understanding, our workflow relies on three rigid pillars:
            </Body>

            <div className="flex flex-col gap-10 mb-12">
               <div>
                  <SectionLabel>Science</SectionLabel>
                  <Body>
                     Immersing our team directly into the underlying mechanics of the challenge—whether it is reinforcement learning, multi-modal retrieval-augmented generation (RAG), or clinical biomedical telemetry.
                  </Body>
               </div>
               <div>
                  <SectionLabel>Communication</SectionLabel>
                  <Body>
                     Crafting clear information hierarchies and narrative frames that eliminate cognitive friction, helping global developer communities quickly comprehend scoring metrics and data parameters.
                  </Body>
               </div>
               <div>
                  <SectionLabel>Visualisation</SectionLabel>
                  <Body>
                     Engineering high-fidelity key visuals, dynamic leaderboard assets, and technical UI interfaces that translate dry mathematical formulas into rich, inspiring, and functional design languages.
                  </Body>
               </div>
            </div>
          </section>

          <Divider />

          {/* ── Phase 1 ────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              <span className="text-[#D60000]">Phase 1: The Legacy Era</span>
            </SectionHeading>
            <Body className="mb-12 max-w-4xl">
              Before Studio 1947 was formally structured, our CEO <strong className="text-[#D60000]">Rabiul Islam</strong> laid the groundwork for this deep-tech design methodology, spearheading individual consulting tracks for AIcrowd’s most critical enterprise benchmarks.
            </Body>

            {/* Amazon KDD Cup 2024 */}
            <div className="mb-16">
               <SectionLabel>Amazon KDD Cup 2024</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Benchmarking Large Language Models on their ability to handle complex, multi-task digital commerce environments (e.g., personalized shopping tracking, query intent understanding, and product recommendations).</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>We engineered a visual system that balanced Amazon’s corporate identity with a sophisticated, network-graph visual aesthetic. The artwork mapped out the multi-layered execution tracks of LLMs parsing data strings, visually transforming dry e-commerce data tracks into a compelling playground for global NLP engineering talent.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE1_1} alt="Amazon KDD Cup 2024" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE1_1)} />
               </div>
            </div>

            {/* ADDI */}
            <div className="mb-16">
               <SectionLabel>ADDI — Alzheimer's Detection Challenge</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Utilizing advanced data science pipelines to detect and track biomarkers for early-stage Alzheimer's disease in clinical medical trials.</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>Healthcare data requires absolute precision mixed with deep human empathy. We moved completely away from cold, sterile tech patterns, crafting an organic yet data-driven composition that focused on neural pathway connectivity and structural brain metrics. The interface prioritized crisp, readable typographic grids for medical researchers scanning complex rules.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE1_2} alt="ADDI — Alzheimer's Detection Challenge" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE1_2)} />
               </div>
            </div>

            {/* SUADD */}
            <div className="mb-16">
               <SectionLabel>Scene Understanding for Autonomous Drone Delivery (SUADD '23)</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Computer vision training models tasked with real-time semantic segmentation, depth estimation, and obstacle avoidance for flight routing.</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>We translated the concept of machine vision into the core key visual. By overlaying vibrant, vector tracking grids, bounding boxes, and pixel-level depth heatmaps over scenic aerial landscapes, the design immediately communicated the exact functional goal of the computer vision model to scanning developers.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE1_3} alt="Scene Understanding for Autonomous Drone Delivery" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE1_3)} />
               </div>
            </div>

            {/* Data Purchasing */}
            <div className="mb-16">
               <SectionLabel>Data Purchasing Challenge 2022</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Simulating automated algorithmic marketplaces where AI agents must dynamically evaluate, bid on, and acquire high-value datasets under budget constraints.</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>To visually ground a abstract conceptual marketplace, we built a sharp, structural system asset that mirrored algorithmic trading floors. Using clean geometric arrays and dark-mode data nodes, the identity projected an atmosphere of quantitative finance and data commoditization.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE1_4} alt="Data Purchasing Challenge 2022" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE1_4)} />
               </div>
            </div>

            {/* Multi-Agent Behavior */}
            <div className="mb-16">
               <SectionLabel>Multi-Agent Behavior Challenge 2022</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Mapping, predicting, and classifying the intricate social and physical trajectories of interacting multi-agent systems (e.g., automated tracking of neuroscience animal models or multi-robot swarms).</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>We designed a complex choreography of motion lines. By tracing intersecting path arrays and emergent behavioral clusters using distinctive brand neon color gradients, the key art visually decoded the science of tracking individual agent intents within a chaotic unified group.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE1_5} alt="Multi-Agent Behavior Challenge 2022" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE1_5)} />
               </div>
            </div>

            {/* NeurIPS AWS DeepRacer */}
            <div className="mb-16">
               <SectionLabel>NeurIPS 2021: AWS DeepRacer — AI Driving Olympics Challenge</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Advanced reinforcement learning models trained to navigate scale-model autonomous vehicles through unpredictable, high-speed physical racing tracks.</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>Merging AWS corporate branding with the high-octane world of competitive motorsport. The design system featured sharp velocity lines, technical track racing grids, and telemetry dashboard indicators that capture the intense, micro-second optimization required by autonomous driving agents.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE1_6} alt="AWS DeepRacer" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE1_6)} />
               </div>
            </div>

            {/* NeurIPS Procgen */}
            <div className="mb-16">
               <SectionLabel>NeurIPS 2020: Procgen Competition</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Evaluating the generalized reinforcement learning capabilities of AI agents inside procedurally generated 2D gaming environments.</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>We paid homage to classic 8-bit/16-bit retro developer environments, but elevated the aesthetic with clean, vector-based structural modularity. The visual design explicitly demonstrated how infinite, randomized gaming iterations spawn from fixed underlying algorithmic code rules, speaking directly to the gaming and ML research demographic.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE1_7} alt="Procgen Competition" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE1_7)} />
               </div>
            </div>
          </section>

          <Divider />

          {/* ── Phase 2 ────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6">
              <span className="text-[#D60000]">Phase 2: The Studio 1947 Era</span>
            </SectionHeading>
            <Body className="mb-12 max-w-4xl">
              Following the official launch of Studio 1947, our agency took full design ownership of AIcrowd's modern product track. We transitioned from standalone assets into building comprehensive, multi-layered visual ecosystems for next-generation machine learning sectors.
            </Body>

            {/* Global Chess Challenge 2025 */}
            <div className="mb-16">
               <SectionLabel>Global Chess Challenge 2025</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Deep-learning neural networks trained to evaluate non-traditional board structures, graph networks, and complex predictive game trees.</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>We completely re-imagined the traditional chessboard layout into a mathematical matrix field. By transforming physical chess pieces into hyper-minimalist, vector nodes projecting calculated path trajectories, the creative direction bridged timeless human strategy with modern AI processing depth.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE2_1} alt="Global Chess Challenge 2025" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE2_1)} />
               </div>
            </div>

            {/* Commonsense Persona-Grounded */}
            <div className="mb-16">
               <SectionLabel>Commonsense Persona-Grounded Dialogue Challenge 2025</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Forcing conversational NLP engines to maintain logical consistency, common-sense reasoning, and nuanced persona tracking over multi-turn dialogues.</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>Communicating human personality through code requires deep abstract layering. We engineered a compelling system mapping intersecting typographic thought clouds and semantic matching matrices, visualizing how an algorithm accurately weights context, empathy, and logic during interactive human-to-computer text generation.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE2_2} alt="Commonsense Persona-Grounded Dialogue Challenge 2025" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE2_2)} />
               </div>
            </div>

            {/* Meta CRAG Multi-Modal Challenge 2025 */}
            <div className="mb-16">
               <SectionLabel>Meta CRAG Multi-Modal Challenge 2025</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Elevating Retrieval-Augmented Generation (RAG) by challenging engineers to fuse real-time text web data with highly complex, multi-modal video, image, and speech inputs under Meta's technical guidelines.</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>Operating within strict institutional parameters, we built a premium, dark-mode visual framework representing data fusion. The system illustrates distinct, raw media formats dissolving into a single, high-performance structured retrieval pipeline, creating an elite visual presence that reflects Meta’s engineering standards.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE2_3} alt="Meta CRAG Multi-Modal Challenge 2025" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE2_3)} />
               </div>
            </div>

            {/* Sounding Video Generation */}
            <div className="mb-16">
               <SectionLabel>Sounding Video Generation (SVG) Challenge 2024</SectionLabel>
               <div className="flex flex-col gap-8 mb-8">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Technical Focus:</h3>
                     <Body>Generative models tasked with perfectly analyzing video feeds and generating corresponding, high-fidelity spatial audio waveforms that synchronize seamlessly with visual timelines.</Body>
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-[#D60000] mb-6">The Design Execution</h3>
                     <Body>A masterclass in cross-modal visualization. We built a stunning visual grid system that blended audio frequency spectrograms directly with cinematic video strip layouts. The design tracking explicitly mapped how sound waves emerge directly out of motion physics, presenting a beautiful, harmonious challenge interface for generative media researchers.</Body>
                  </div>
               </div>
               <div className="rounded-[30px] border border-[#EEE] bg-white pt-8 px-4 md:pt-[65px] md:px-[89px] overflow-hidden">
                  <img src={IMG_PHASE2_4} alt="Sounding Video Generation" className="w-full block cursor-zoom-in" loading="lazy" onClick={() => zoom(IMG_PHASE2_4)} />
               </div>
            </div>
          </section>

          <Divider />

          {/* ── The Strategic Studio Takeaway ──────────────────────────────────── */}
          <section className="pb-6 md:pb-8">
            <SectionHeading className="mb-6 text-[#D60000]">
              The Strategic Studio Takeaway
            </SectionHeading>

            <Body className="mb-10 max-w-4xl">
              Our decade-spanning engagement with AIcrowd highlights our ultimate competitive advantage: we speak deep-tech fluently. By completely avoiding generic, shallow tech templates, Studio 1947 delivers a rigorous, data-faithful visual architecture that respects the intelligence of the scientific community. We ensure that every challenge interface, dataset callout, and enterprise brand asset looks authoritative, inspiring, and ready to mobilize the world's finest algorithmic minds.
            </Body>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <PortfolioCTA />
        </div>
      </article>
    </Layout>
  );
}
