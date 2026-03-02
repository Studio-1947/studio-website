import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function RemodelUn() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Layout>
            <div className="bg-[#e9fb54] text-[#111111] min-h-screen selection:bg-[#111111] selection:text-[#e9fb54] pb-32 font-sans overflow-x-hidden">

                {/* Navigation */}
                <div className="pt-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
                    <a
                        href="/#works"
                        className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase hover:text-[#333333] transition-colors duration-300"
                    >
                        <span className="w-8 h-[1px] bg-[#111111] group-hover:bg-[#333333] mr-4 transition-colors duration-300"></span>
                        Back to Works
                    </a>
                </div>

                {/* Hero Section - Podcast / Digital Aesthetic */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mt-20 mb-32 relative">
                    <div className="grid lg:grid-cols-12 gap-12 items-end relative z-10">
                        <div className="lg:col-span-12">

                            {/* Asymmetric Typography Header */}
                            <div className="mb-8 relative border-b-4 border-[#111111] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
                                <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-sans font-black tracking-tighter leading-[0.8] text-[#111111] uppercase">
                                    reModel<br />
                                    <span className="text-transparent border-text" style={{ WebkitTextStroke: '3px #111111' }}>UN</span>
                                </h1>

                                <div className="flex flex-col gap-6 text-xs tracking-[0.15em] uppercase text-[#111111]/80 max-w-[200px] text-right font-bold">
                                    <div>
                                        <span className="block text-[#111111] opacity-50 mb-1">Creative Direction</span>
                                        Rabi
                                    </div>
                                    <div>
                                        <span className="block text-[#111111] opacity-50 mb-1">Layout Design</span>
                                        Zahid & Pragya
                                    </div>
                                    <div>
                                        <span className="block text-[#111111] opacity-50 mb-1">Content</span>
                                        Sneha (AIcrowd Team)
                                    </div>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-12 gap-8 relative mt-16">
                                {/* Left Abstract Content */}
                                <div className="lg:col-span-5 flex flex-col justify-between">
                                    <p className="text-2xl md:text-3xl font-bold text-[#111111] leading-tight mb-16 tracking-tight">
                                        A podcast initiative bringing together thought leaders from UN-affiliated organisations who are working to improve the world.
                                    </p>

                                    <div className="w-48 h-48 rounded-full border-4 border-[#111111] p-2 flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-[#111111] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
                                        <span className="text-xs font-black uppercase tracking-widest text-[#111111] group-hover:text-[#e9fb54] relative z-10 transition-colors duration-500 text-center px-4">
                                            Visual Identity & Brand Strategy
                                        </span>
                                    </div>
                                </div>

                                {/* Main Podcast Image Cover */}
                                <div className="lg:col-span-7 relative group border-4 border-[#111111] bg-white p-4">
                                    <img
                                        src="/ourworks/remodelun/u4g7j6kU7tS3wR9qL2vN5xM8yP.avif"
                                        alt="reModelUN Podcast Context"
                                        className="w-full object-cover filter contrast-125 sepia-[0.1]"
                                        fetchPriority="high"
                                        decoding="async"
                                    />
                                    <div className="absolute -bottom-6 -left-6 bg-[#111111] text-[#e9fb54] px-6 py-3 font-mono text-sm font-bold tracking-widest uppercase">
                                        Vol. 01
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Actionable Conversation */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32 border-t-8 border-[#111111] pt-16 mt-32">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111111] leading-[0.9] mb-12">
                                Actionable, <br />
                                AI-Driven <br />
                                <span className="text-transparent border-text" style={{ WebkitTextStroke: '2px #111111' }}>Solutions</span>
                            </h2>
                            <div className="aspect-square bg-white border-2 border-[#111111] p-4 group">
                                <img src="/ourworks/remodelun/KjwzzwsWhV6hARRXQdCcxPJc8.avif" alt="Podcast Element" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" decoding="async" />
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="space-y-6 text-xl md:text-2xl text-[#111111]/90 leading-relaxed font-medium">
                                <p>
                                    Through engaging conversations, the podcast delves into the challenges they face and explores actionable, AI-driven solutions.
                                </p>
                                <p>
                                    Each episode features a guest from a globally recognised organisation working on social good, alongside co-hosts François Grey and Sharada Mohanty, who guide discussions on the intentional and ethical integration of AI for meaningful impact.
                                </p>
                            </div>

                            <div className="bg-[#111111] text-[#e9fb54] p-8 md:p-12 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlOWZiNTQiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] mix-blend-overlay"></div>
                                <p className="relative z-10 text-lg md:text-xl font-light leading-relaxed">
                                    Aimed at a global audience, reModelUN not only educates in an engaging, conversational style- but also inspires action. Listeners gain insights into global challenges, discover ways to get involved, and leave each episode equipped with tools and resources to drive real change.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Cohesive Identity Gallery Sections */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32">
                    <div className="w-full border-4 border-[#111111] bg-white relative p-4 lg:p-12 mb-16">
                        <div className="absolute top-0 right-0 bg-[#e9fb54] border-b-4 border-l-4 border-[#111111] px-6 py-2 font-black uppercase tracking-widest text-sm z-20">
                            BRAND GUIDELINES
                        </div>
                        <img src="/ourworks/remodelun/AoQZtFEqIqO8ptUbhMLYKw39IY.avif" alt="Brand Guidelines Detail" className="w-full relative z-10 object-cover filter contrast-125" />
                    </div>

                    <div className="w-full bg-[#111111] relative p-4 lg:p-12 overflow-hidden">
                        <div className="absolute top-0 left-0 text-[#e9fb54] px-6 py-4 font-black uppercase tracking-[0.2em] text-sm z-20 mix-blend-difference">
                            VISUAL IDENTITY
                        </div>
                        {/* Using the last image for visual identity emphasis */}
                        <img src="/ourworks/remodelun/z0nYNiWawGbUVcyVkbYBx0entxw.avif" alt="Visual Identity Application" className="w-full relative z-10 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </section>

                {/* Footer Concept Callout */}
                <section className="bg-transparent text-[#111111] pb-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
                    <div className="border-t-4 border-[#111111] pt-16">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8 leading-[1.1] max-w-4xl">
                            We created the branding and design guidelines for reModelUN,
                        </h2>
                        <p className="text-xl md:text-3xl font-bold text-[#111111]/70 leading-relaxed max-w-4xl">
                            Ensuring a cohesive visual identity that makes AI-driven discussions on global challenges engaging and accessible.
                        </p>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
