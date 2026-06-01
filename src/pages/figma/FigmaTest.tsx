import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { ArrowLeft } from 'lucide-react';

// ── Figma MCP asset URLs (~7-day TTL) ─────────────────────────────────────────
const CTA_GRAPHIC = 'https://www.figma.com/api/mcp/asset/15476f4e-e865-428b-96e1-c2ae06744145';

// ── Base path ─────────────────────────────────────────────────────────────────
const B = '/ourworks/remodelUN';

// ── Identity assets ───────────────────────────────────────────────────────────
const LOGO    = `${B}/Logo.svg`;
const BG      = `${B}/bg.svg`;

// ── Logo anatomy / variable engine ───────────────────────────────────────────
const FRAME19 = `${B}/Frame 19.svg`;          // full logo architecture diagram
const GRP1586 = `${B}/Group 1586.svg`;        // variable icon A
const GRP1587 = `${B}/Group 1587.svg`;        // variable icon B
const GRP1588 = `${B}/Group 1588.svg`;        // variable icon C
const GRP1589 = `${B}/Group 1589.svg`;        // variable icon D
const GRP1591 = `${B}/Group 1591.svg`;        // clearspace bracket marks
const GRP1592 = `${B}/Group 1592.svg`;        // re-loop element

// ── UN Chat Bubble ────────────────────────────────────────────────────────────
const UN_BUBBLE = `${B}/the un chat bubble.svg`;

// ── Multi-platform / applications ─────────────────────────────────────────────
const VIDEO_TIER1  = `${B}/The_Video_Broadcast_Tier.svg`;
const VIDEO_TIER2  = `${B}/The_Video_Broadcast_Tier2.svg`;
const VIDEO_TIER3  = `${B}/The_Video_Broadcast_Tier3.svg`;
const THUMBNAILS   = `${B}/The_Human-First_Podcast_Thumbnail_System.svg`;

// ── Usage rules ───────────────────────────────────────────────────────────────
const CLEARSPACE   = `${B}/The_Proportional_Clearspace_Standard.svg`;
const COBRANDING   = `${B}/Co-Branding & Partnership Dynamics.svg`;
const LOGO_LAW     = `${B}/Logo Law 101.svg`;

// ── Atoms ─────────────────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center border border-[#e0ddd8] rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777]">
            {children}
        </span>
    );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
    return (
        <div className="flex items-center gap-4 mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#bbb]">{index}</span>
            <span className="flex-1 h-px bg-[#e0ddd8]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#bbb]">{label}</span>
        </div>
    );
}

function ChapterPill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center bg-[#fff4f4] border border-[#ffd6d6] rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#d60000]">
            {children}
        </span>
    );
}

function MetaItem({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#aaa] font-semibold mb-1.5">{label}</p>
            <p className="text-sm font-semibold text-[#111]">{value}</p>
        </div>
    );
}

function Body({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <p className={`text-[17px] text-[#555] leading-[1.75] ${className ?? ''}`}>
            {children}
        </p>
    );
}

function Caption({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[12px] text-[#aaa] mt-3 tracking-wide text-center">
            {children}
        </p>
    );
}

function RuleCard({ title, body }: { title: string; body: string }) {
    return (
        <div className="border border-[#ebebeb] bg-white rounded-2xl p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d60000] mb-3">The {title}</p>
            <Body>{body}</Body>
        </div>
    );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function FigmaTest() {
    return (
        <Layout>
            <div className="bg-[#f7f6f3] text-[#111] font-sans overflow-x-hidden selection:bg-[#d60000] selection:text-white">

                {/* ── Back nav ─────────────────────────────────────────────── */}
                <div className="pt-28 px-8 lg:px-20 max-w-[1440px] mx-auto">
                    <Link
                        to="/portfolio/remodel-un"
                        className="inline-flex items-center gap-3 group w-fit"
                    >
                        <span className="w-9 h-9 border border-[#ddd] rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-[#111] group-hover:border-[#111]">
                            <ArrowLeft className="w-4 h-4 text-[#555] group-hover:text-white transition-colors duration-200" />
                        </span>
                        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#999] group-hover:text-[#111] transition-colors duration-200">
                            All Works
                        </span>
                    </Link>
                </div>

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <header className="px-8 lg:px-20 max-w-[1440px] mx-auto pt-14 pb-16">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#aaa] font-semibold mb-10">
                        Brand Identity &amp; Visual System
                    </p>

                    <h1 className="text-[clamp(72px,11.5vw,165px)] font-black tracking-[-0.04em] leading-[0.85] mb-12">
                        Re<span className="text-[#d60000]">Model</span>
                        <br />
                        <span className="text-[#293c53]">UN</span>
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-14">
                        {['Brand Strategy', 'Visual Identity', 'Color System', 'Typography', 'UI / UX'].map((t) => (
                            <Tag key={t}>{t}</Tag>
                        ))}
                    </div>

                    <div className="border-t border-[#e0ddd8] pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <MetaItem label="Client"  value="ReModelUN" />
                        <MetaItem label="Studio"  value="Studio 1947" />
                        <MetaItem label="Year"    value="2023" />
                        <MetaItem label="Scope"   value="Complete Visual Identity" />
                    </div>
                </header>

                {/* ── Full-width logo banner ────────────────────────────────── */}
                <div className="px-8 lg:px-20 max-w-[1440px] mx-auto">
                    <div
                        className="relative rounded-[28px] overflow-hidden flex items-center justify-center"
                        style={{ aspectRatio: '1572 / 467' }}
                    >
                        <img
                            src={BG}
                            alt=""
                            aria-hidden
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <img
                            src={LOGO}
                            alt="ReModelUN Logo"
                            className="relative z-10 max-h-[52%] max-w-[58%] object-contain drop-shadow-md"
                        />
                    </div>
                    <Caption>
                        ReModelUN — Primary Mastermark on Brand Canvas
                    </Caption>
                </div>

                {/* ═══════════════════════════════════════════════════════════ */}
                {/* SECTION 01 — THE BRIEF                                     */}
                {/* ═══════════════════════════════════════════════════════════ */}
                <section className="px-8 lg:px-20 max-w-[1440px] mx-auto py-24">
                    <SectionLabel index="01" label="The Brief" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-[#111] mb-8">
                                Context &amp; The Challenge
                            </h2>
                            <Body>
                                ReModelUN is a high-profile podcast initiative featuring global thought leaders from UN-affiliated groups discussing ethical, AI-driven solutions for social good.
                            </Body>
                            <Body className="mt-5">
                                The brand needed an identity system that felt authoritative enough for international diplomats, yet agile enough to match cutting-edge AI discourse — a "sustainable framework" capable of spawning future conferences and scholarships without breaking core brand equity.
                            </Body>
                        </div>

                        {/* Core Problem callout */}
                        <div className="bg-white border border-[#ebebeb] rounded-2xl p-8 md:p-10 self-center">
                            <div className="w-10 h-10 bg-[#fff0f0] rounded-full flex items-center justify-center mb-6">
                                <span className="text-[#d60000] font-black text-lg">!</span>
                            </div>
                            <p className="text-[11px] uppercase tracking-[0.25em] text-[#d60000] font-bold mb-4">
                                Core Problem
                            </p>
                            <p className="text-[22px] font-semibold text-[#111] leading-[1.35] tracking-tight">
                                Authoritative enough for diplomats. Agile enough for AI.
                            </p>
                            <div className="mt-6 pt-6 border-t border-[#f0f0f0]">
                                <Body>
                                    The challenge was to create one framework that could serve international institutions, podcast audiences, and future product extensions — all without losing brand integrity.
                                </Body>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════ */}
                {/* SECTION 02 — BRAND ARCHITECTURE                             */}
                {/* ═══════════════════════════════════════════════════════════ */}
                <section className="px-8 lg:px-20 max-w-[1440px] mx-auto pb-24">
                    <SectionLabel index="02" label="Brand Architecture" />

                    <h2 className="text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-[#111] mb-4">
                        Brand Strategy &amp;<br />Visual Architecture
                    </h2>
                    <Body className="max-w-2xl mb-14">
                        Every element of the ReModelUN logo system is intentional — a self-contained, adaptable framework engineered for longevity.
                    </Body>

                    {/* 2-col: logo diagram + variable icons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Left — full logo anatomy diagram */}
                        <div className="bg-[#293c53] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center p-10">
                            <img src={FRAME19} alt="Logo architecture diagram" loading="lazy" className="w-full h-full object-contain" />
                        </div>
                        {/* Right — variable engine icons */}
                        <div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden aspect-[4/3] grid grid-cols-2 gap-4 p-8">
                            {[GRP1586, GRP1587, GRP1588, GRP1589].map((src, i) => (
                                <div key={i} className="bg-[#f7f6f3] rounded-xl flex items-center justify-center p-4">
                                    <img src={src} alt={`Variable engine icon ${i + 1}`} loading="lazy" className="max-h-16 max-w-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Architecture sub-sections */}
                    <div className="space-y-20 mt-20">

                        {/* re Loop */}
                        <div>
                            <ChapterPill>The "re" Loop — Continuous Iteration</ChapterPill>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
                                <div className="bg-[#f7f6f3] rounded-2xl border border-[#ebebeb] overflow-hidden aspect-[4/3] order-2 lg:order-1 flex items-center justify-center p-10">
                                    <img src={GRP1592} alt="The re loop element" loading="lazy" className="max-h-[70%] max-w-[70%] object-contain" />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-5 leading-snug">
                                        AI is an iterative process, not a destination.
                                    </h3>
                                    <Body>
                                        The 're' loop represents continuous remodeling, adaptation, and forward momentum. By framing this within an intentional, self-contained cycle, the visual language mirrors the podcast's core theme: endlessly auditing, rethinking, and improving global systems through technology.
                                    </Body>
                                </div>
                            </div>
                        </div>

                        {/* Center Core */}
                        <div>
                            <ChapterPill>The Center Core — The Variable Engine</ChapterPill>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-5 leading-snug">
                                        One slot. Infinite applications.
                                    </h3>
                                    <Body>
                                        The center icon acts as a functional bridge — and a variable container. The microphone anchors the flagship brand in audio, but the slot is designed to be swapped: a podium for conferences, a cap for scholarships, an icon for digital products.
                                    </Body>
                                    <Body className="mt-5">
                                        The core wordmark adapts without losing structural integrity across every sister venture.
                                    </Body>
                                </div>
                                {/* Variable icon grid */}
                                <div className="bg-white rounded-2xl border border-[#ebebeb] aspect-[4/3] grid grid-cols-3 gap-3 p-6">
                                    {[GRP1586, GRP1587, GRP1588, GRP1589, GRP1591, GRP1592].map((src, i) => (
                                        <div key={i} className="bg-[#f7f6f3] rounded-xl flex items-center justify-center p-3">
                                            <img src={src} alt={`Icon variant ${i + 1}`} loading="lazy" className="max-h-12 max-w-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* UN Chat Bubble */}
                        <div>
                            <ChapterPill>The "UN" Chat Bubble — Diplomatic Dialogue</ChapterPill>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
                                <div className="bg-[#293c53] rounded-2xl aspect-[4/3] order-2 lg:order-1 overflow-hidden flex items-center justify-center p-8">
                                    <img src={UN_BUBBLE} alt="UN Chat Bubble terminal" loading="lazy" className="w-full h-full object-contain" />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-5 leading-snug">
                                        Global change happens through conversation.
                                    </h3>
                                    <Body>
                                        The 'UN' terminal is deliberately shaped as a speech bubble — emphasizing dialogue, cross-border collaboration, and human-first storytelling. It anchors the institutional authority of UN-affiliated organizations into a warm, approachable, and highly communicative digital asset.
                                    </Body>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════ */}
                {/* SECTION 03 — COLOR SYSTEM  (dark)                          */}
                {/* ═══════════════════════════════════════════════════════════ */}
                <section className="bg-[#111] text-white py-24 px-8 lg:px-20">
                    <div className="max-w-[1440px] mx-auto">
                        <SectionLabel index="03" label="Color System" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 items-end">
                            <h2 className="text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-white">
                                A palette built<br />for two worlds.
                            </h2>
                            <Body className="text-white/60">
                                The identity must respect the gravity and prestige of international diplomacy while capturing the electric, rapidly changing landscape of artificial intelligence. Two colors. Engineered to bridge both worlds without compromise.
                            </Body>
                        </div>

                        {/* Swatch pair */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {/* Dark Cyan */}
                            <div className="bg-[#293c53] rounded-2xl p-10 md:p-12 flex flex-col justify-between min-h-[360px]">
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-[#293c53] border-2 border-white/20 mb-6" />
                                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold mb-2">Primary</p>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">Dark Cyan</h3>
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/10 flex justify-between items-end">
                                    <Body className="text-white/60 max-w-xs">
                                        Institutional authority. Deep wisdom. The structural foundation of the entire brand environment.
                                    </Body>
                                    <p className="font-mono text-white/20 text-xl font-bold shrink-0 ml-4">#293C53</p>
                                </div>
                            </div>

                            {/* Fresh Lime */}
                            <div className="bg-[#00E357] rounded-2xl p-10 md:p-12 flex flex-col justify-between min-h-[360px]">
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-[#00E357] border-2 border-black/10 mb-6" />
                                    <p className="text-[11px] uppercase tracking-[0.25em] text-black/40 font-bold mb-2">Secondary</p>
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#111] leading-tight">Fresh Lime</h3>
                                </div>
                                <div className="mt-10 pt-8 border-t border-black/10 flex justify-between items-end">
                                    <Body className="text-black/60 max-w-xs">
                                        The spark of AI. Digital efficiency. A deliberate disruption that keeps the brand alive and modern.
                                    </Body>
                                    <p className="font-mono text-black/20 text-xl font-bold shrink-0 ml-4">#00E357</p>
                                </div>
                            </div>
                        </div>

                        {/* Split in-use display */}
                        <div className="rounded-2xl overflow-hidden mt-4" style={{ aspectRatio: '16 / 5' }}>
                            <div className="grid grid-cols-2 h-full">
                                <div className="bg-[#293c53] flex flex-col justify-end p-8 md:p-12">
                                    <p className="text-white/30 text-xs uppercase tracking-widest mb-2">80% presence</p>
                                    <p className="text-white font-bold text-xl md:text-2xl">Foundation &amp; Authority</p>
                                </div>
                                <div className="bg-[#00E357] flex flex-col justify-end p-8 md:p-12">
                                    <p className="text-black/30 text-xs uppercase tracking-widest mb-2">20% impact</p>
                                    <p className="text-[#111] font-bold text-xl md:text-2xl">Action &amp; Energy</p>
                                </div>
                            </div>
                        </div>

                        {/* Two rationale cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="border border-white/10 rounded-2xl p-8">
                                <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold mb-4">Color Choice — Primary</p>
                                <h4 className="text-lg font-bold text-white mb-4">Institutional Authority &amp; Grounded Trust</h4>
                                <Body className="text-white/50">
                                    Dark Cyan is an intentional departure from traditional corporate blues. This deep, muted tone introduces sophisticated, academic weight — signaling deep wisdom, research-backed integrity, and the calm composure required when tackling massive global challenges.
                                </Body>
                            </div>
                            <div className="border border-white/10 rounded-2xl p-8">
                                <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold mb-4">Color Choice — Secondary</p>
                                <h4 className="text-lg font-bold text-white mb-4">AI Innovation &amp; Bias toward Action</h4>
                                <Body className="text-white/50">
                                    Fresh Lime is the technological solution to Dark Cyan's institutional weight. Injected as a deliberate disruption, it pulls the user's eye to interactive UI components, actionable resources, and critical insights — the platform never feels stagnant.
                                </Body>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════ */}
                {/* SECTION 04 — TYPOGRAPHY                                    */}
                {/* ═══════════════════════════════════════════════════════════ */}
                <section className="px-8 lg:px-20 max-w-[1440px] mx-auto py-24">
                    <SectionLabel index="04" label="Typography" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-[#111]">
                            The Typography<br />System
                        </h2>
                        <div className="space-y-4">
                            <Body>
                                When a brand handles dense, academic global challenges alongside fast-evolving AI discourse, the typeface cannot afford to be decorative. It must serve as an invisible, high-performance vehicle for ideas.
                            </Body>
                            <Body>
                                By selecting Roboto from the open-source Google Font Library, the brand scales across the globe without licensing friction, missing font errors, or recurring seat-cost liabilities.
                            </Body>
                        </div>
                    </div>

                    {/* Typeface specimen */}
                    <div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden">
                        {[
                            { label: 'Light',    weight: 300 },
                            { label: 'Regular',  weight: 400 },
                            { label: 'Medium',   weight: 500 },
                            { label: 'Semibold', weight: 600 },
                            { label: 'Bold',     weight: 700 },
                        ].map(({ label, weight }, i, arr) => (
                            <div
                                key={label}
                                className={`flex items-center justify-between px-8 py-6 ${i < arr.length - 1 ? 'border-b border-[#f0f0f0]' : ''}`}
                            >
                                <span
                                    className="text-5xl md:text-7xl text-[#111] leading-none"
                                    style={{ fontFamily: 'Roboto, sans-serif', fontWeight: weight }}
                                >
                                    Roboto
                                </span>
                                <span className="text-sm text-[#ccc] font-light shrink-0 ml-4">{label}</span>
                            </div>
                        ))}
                    </div>

                    <Caption>Roboto — neo-grotesque, geometric. Open-source via Google Fonts.</Caption>
                </section>

                {/* ═══════════════════════════════════════════════════════════ */}
                {/* SECTION 05 — MULTI-PLATFORM APPLICATIONS                  */}
                {/* ═══════════════════════════════════════════════════════════ */}
                <section className="px-8 lg:px-20 max-w-[1440px] mx-auto pb-24">
                    <SectionLabel index="05" label="Applications" />

                    <h2 className="text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-[#111] mb-4">
                        Multi-Platform<br />UI/UX Experience
                    </h2>
                    <Body className="max-w-2xl mb-16">
                        A robust identity must effortlessly transition across diverse digital ecosystems. We mapped the system across video production, audio players, and streaming platforms — building an accessible, human-first experience for a global audience.
                    </Body>

                    {/* Video Broadcast Tier */}
                    <div className="mb-16">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-[#aaa] font-bold mb-6">Chapter 5.1</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-6">The Video Broadcast Tier</h3>

                        <div className="bg-white rounded-2xl overflow-hidden mb-4">
                            <img src={VIDEO_TIER1} alt="Video broadcast UI layer" loading="lazy" className="w-full h-auto" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-white rounded-2xl overflow-hidden">
                                <img src={VIDEO_TIER2} alt="Video broadcast tier 2" loading="lazy" className="w-full h-auto" />
                            </div>
                            <div className="bg-white rounded-2xl overflow-hidden">
                                <img src={VIDEO_TIER3} alt="Video broadcast tier 3" loading="lazy" className="w-full h-auto" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <RuleCard
                                title="Component"
                                body="Streamlined, high-contrast video overlay templates designed for multi-host and guest configurations."
                            />
                            <RuleCard
                                title="UX Challenge"
                                body="Video backgrounds are unpredictable. Overlays must command legibility regardless of the speaker's lighting, studio framing, or background complexity."
                            />
                            <RuleCard
                                title="Solution"
                                body="A pill-shaped, dual-toned frame in brand colors. Circular photo frames, Fresh Lime name containers, and dark designation flags — all scalable."
                            />
                        </div>
                    </div>

                    {/* Pull quote */}
                    <div className="bg-[#293c53] rounded-2xl px-8 py-10 md:px-16 md:py-14 mb-16 text-center">
                        <p className="text-white/40 text-xs uppercase tracking-[0.3em] font-bold mb-4">Design Principle</p>
                        <p className="text-white text-2xl md:text-3xl font-semibold max-w-3xl mx-auto leading-snug">
                            "Keep it bold, keep it clear, so every voice is heard, every idea shines, and every insight sparks action."
                        </p>
                    </div>

                    {/* Podcast Thumbnail System */}
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-[#aaa] font-bold mb-6">Chapter 5.2</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-6">
                            The Human-First Podcast Thumbnail System
                        </h3>

                        <div className="bg-white rounded-2xl overflow-hidden mb-4">
                            <img src={THUMBNAILS} alt="Podcast thumbnail system" loading="lazy" className="w-full h-auto" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <RuleCard
                                title="Component"
                                body="A modular, scalable cover art and thumbnail system engineered for Spotify, Apple Podcasts, and Google Podcasts."
                            />
                            <RuleCard
                                title="UX Challenge"
                                body="In competitive audio streaming, cover art must disrupt a user's scroll in under a second while maintaining brand consistency across episodes."
                            />
                            <RuleCard
                                title="Solution"
                                body="A square thumbnail layout prioritizing high-resolution guest photography blended into the background — a clean, typographic surface layered on top."
                            />
                        </div>

                        <Body className="max-w-3xl">
                            By delivering a standardized layout template rather than loose one-off graphics, we equipped the team with a plug-and-play production engine — scalable indefinitely, consistent universally.
                        </Body>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════ */}
                {/* SECTION 06 — DESIGN PHILOSOPHY / USAGE RULES              */}
                {/* ═══════════════════════════════════════════════════════════ */}
                <section className="bg-white py-24 px-8 lg:px-20">
                    <div className="max-w-[1440px] mx-auto">
                        <SectionLabel index="06" label="Design Philosophy" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 items-end">
                            <h2 className="text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-[#111]">
                                An enterprise-grade<br />asset framework.
                            </h2>
                            <Body>
                                A visual identity is only as durable as its real-world implementation. We established a strict framework of asset governance to ensure ReModelUN commands an authoritative, uniform presence across every touchpoint — internal teams, development hubs, and international event organizers.
                            </Body>
                        </div>

                        {/* Clearspace */}
                        <div className="mb-16">
                            <ChapterPill>The Proportional Clearspace Standard</ChapterPill>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#111] mb-4">Defined by the mark itself.</h3>
                                    <Body className="mb-4">
                                        The minimum clearspace perimeter equals exactly "1 mic distance" — calculated dynamically from the height of the internal microphone graphic. The safety boundary scales flawlessly whether the logo is on a massive event banner or a small smartphone interface.
                                    </Body>
                                    <div className="bg-[#f7f6f3] rounded-xl p-5 border border-[#ebebeb]">
                                        <p className="text-[11px] uppercase tracking-widest text-[#aaa] font-bold mb-2">Standard</p>
                                        <p className="text-base font-semibold text-[#111]">1× mic height on all four sides</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden">
                                    <img src={CLEARSPACE} alt="Clearspace standard diagram" loading="lazy" className="w-full h-auto" />
                                </div>
                            </div>
                            <Caption>Respect the clearspace. Respect the breathing space.</Caption>
                        </div>

                        {/* Co-Branding */}
                        <div className="mb-16">
                            <ChapterPill>Co-Branding &amp; Partnership Dynamics</ChapterPill>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 items-center">
                                <div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden order-2 lg:order-1">
                                    <img src={COBRANDING} alt="Co-branding and partnership dynamics" loading="lazy" className="w-full h-auto" />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <h3 className="text-2xl font-bold text-[#111] mb-4">The 2-mic rule for partners.</h3>
                                    <Body className="mb-4">
                                        When locking up alongside corporate stakeholders or media affiliates, a 2-mic buffer is mandatory — double the standard clearspace. This guarantees ReModelUN shares the stage equitably while fully preserving its independent structural authority.
                                    </Body>
                                    <div className="bg-[#f7f6f3] rounded-xl p-5 border border-[#ebebeb]">
                                        <p className="text-[11px] uppercase tracking-widest text-[#aaa] font-bold mb-2">Co-Brand Standard</p>
                                        <p className="text-base font-semibold text-[#111]">2× mic height on all four sides</p>
                                    </div>
                                </div>
                            </div>
                            <Caption>Social distance still required — keep a 2 mic distance even with the closest partner.</Caption>
                        </div>

                        {/* Logo Law 101 */}
                        <div>
                            <ChapterPill>Logo Law 101</ChapterPill>
                            <div className="mt-8 mb-6">
                                <h3 className="text-2xl font-bold text-[#111] mb-4">No guesswork. No exceptions.</h3>
                                <Body className="max-w-2xl">
                                    We codified a definitive matrix of visual violations — constraining common layout mistakes and insulating the identity from arbitrary modification. Not graphic artwork; an enterprise-grade brand asset utility.
                                </Body>
                            </div>

                            <div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden mb-4">
                                <img src={LOGO_LAW} alt="Logo law 101 violation grid" loading="lazy" className="w-full h-auto" />
                            </div>
                            <Caption>The reModelUN logo isn't just a symbol — it's a statement. Keep it clear, crisp, and confidently placed.</Caption>

                            {/* Do / Don't mini grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                                {[
                                    'Stick to brand colours',
                                    'Respect the clearspace',
                                    'Maintain proportions',
                                    'Use on approved backgrounds',
                                ].map((rule) => (
                                    <div key={rule} className="border border-[#eaeaea] rounded-xl p-4 bg-white text-center">
                                        <span className="block text-[#00E357] text-lg font-bold mb-2">✓</span>
                                        <p className="text-xs text-[#555] leading-snug">{rule}</p>
                                    </div>
                                ))}
                                {[
                                    'Rotate or flip the logo',
                                    'Squeeze or distort',
                                    'Add shadows or textures',
                                    'Place on busy images',
                                ].map((rule) => (
                                    <div key={rule} className="border border-[#eaeaea] rounded-xl p-4 bg-white text-center">
                                        <span className="block text-[#d60000] text-lg font-bold mb-2">✗</span>
                                        <p className="text-xs text-[#555] leading-snug">{rule}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════ */}
                {/* CTA                                                         */}
                {/* ═══════════════════════════════════════════════════════════ */}
                <div className="px-8 lg:px-20 max-w-[1440px] mx-auto py-16">
                    <div className="relative bg-white rounded-[28px] border border-[#ebebeb] overflow-hidden min-h-[380px] flex flex-col justify-between p-10 md:p-16">
                        {/* Text */}
                        <div className="relative z-10 max-w-xl">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#aaa] font-bold mb-6">Ready to collaborate?</p>
                            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.0] text-[#d60000] mb-10">
                                Building a<br />future-proof<br />brand system?
                            </h2>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 bg-[#d60000] text-white rounded-full px-8 py-4 font-semibold text-[15px] transition-opacity hover:opacity-90"
                            >
                                Let's Build a Sustainable System
                                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                    <ArrowLeft className="w-3 h-3 rotate-180" />
                                </span>
                            </Link>
                        </div>

                        {/* Decorative Studio 1947 graphic */}
                        <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden pointer-events-none">
                            <img
                                src={CTA_GRAPHIC}
                                alt=""
                                aria-hidden
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-full object-contain opacity-80"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}
