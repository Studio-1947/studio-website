import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function AiCrowdBadge() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Layout>
            <div className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen selection:bg-[#66fcf1] selection:text-[#0b0c10] pb-32 font-mono overflow-x-hidden">

                {/* Navigation */}
                <div className="pt-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
                    <a
                        href="/#works"
                        className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase hover:text-[#66fcf1] transition-colors duration-300"
                    >
                        <span className="w-8 h-[1px] bg-[#c5c6c7] group-hover:bg-[#66fcf1] mr-4 transition-colors duration-300"></span>
                        Back to Works
                    </a>
                </div>

                {/* Hero Section - Technical & Scalable Aesthetic */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mt-20 mb-32 relative">
                    <div className="grid lg:grid-cols-12 gap-12 items-end relative z-10">
                        <div className="lg:col-span-12">

                            {/* Tech-driven Header */}
                            <div className="mb-16 relative border-l-4 border-[#45a29e] pl-8">
                                <p className="text-xs tracking-[0.3em] font-sans font-bold text-[#66fcf1] uppercase mb-6">User Engagement & Gamification</p>
                                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-sans font-black tracking-tighter leading-[0.9] text-white">
                                    AIcrowd<br />
                                    <span className="text-[#45a29e]">Badge</span> System
                                </h1>
                            </div>

                            <div className="grid lg:grid-cols-12 gap-12 relative mt-16 items-start">

                                {/* Digital Details / Credits */}
                                <div className="lg:col-span-4 flex flex-col gap-12 order-2 lg:order-1">
                                    <div className="bg-[#1f2833]/50 p-6 border border-[#45a29e]/30 backdrop-blur-sm">
                                        <p className="text-xl md:text-2xl font-sans text-white leading-relaxed font-light mb-8">
                                            A Design System for 75K+ Members
                                        </p>

                                        <div className="flex flex-col gap-6 text-xs tracking-[0.1em] uppercase text-[#c5c6c7]">
                                            <div>
                                                <span className="block text-[#66fcf1] font-bold mb-1 font-sans">Concept & Design</span>
                                                Rabi, Mohanty and Team
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden lg:block">
                                        <img
                                            src="/ourworks/aicrowd/n614aIAEi8yPnghIf52sLqbKo.avif"
                                            alt="AIcrowd Elements"
                                            className="w-full object-cover filter brightness-110 sepia-[0.2] hue-rotate-180"
                                            fetchPriority="high"
                                            decoding="async"
                                        />
                                    </div>
                                </div>

                                {/* Main Hero Image */}
                                <div className="lg:col-span-8 relative group order-1 lg:order-2">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#66fcf1]/20 to-[#45a29e]/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <div className="relative border border-[#45a29e]/30 bg-[#0b0c10] p-2 z-10">
                                        <img
                                            src="/ourworks/aicrowd/YL8EEMm31Gc7z7de7vP6fNJ6CY.avif"
                                            alt="AIcrowd Badge System Cover"
                                            className="w-full aspect-[16/10] object-cover filter contrast-125"
                                            fetchPriority="high"
                                            decoding="async"
                                        />
                                        <div className="absolute top-6 right-6 flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Narrative Section - Engaging the Community */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32 border-t border-[#45a29e]/20 pt-24 mt-24">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black uppercase tracking-tighter text-white leading-[1] mb-8">
                                Rewarding <span className="text-[#66fcf1]">Contributions</span>
                            </h2>
                            <div className="space-y-6 text-lg text-[#c5c6c7] leading-relaxed font-sans font-light">
                                <p>
                                    Rabi designed an extensive badge and reward system for AIcrowd, a global platform that brings together data science experts and enthusiasts to collaboratively solve real-world problems through challenges.
                                </p>
                                <p>
                                    This design system enhances user engagement by visually representing achievements, engaging community participation, and rewarding contributions.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 aspect-[21/9] bg-[#1f2833] border border-[#45a29e]/20 overflow-hidden relative group">
                                <img src="/ourworks/aicrowd/4bLh3aTJSURzfsz8Ls9DYGpl0c.avif" alt="Badge UI Details" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100" loading="lazy" decoding="async" />
                            </div>
                            <div className="aspect-square bg-[#1f2833] border border-[#45a29e]/20 overflow-hidden group">
                                <img src="/ourworks/aicrowd/MjH8FgzGwGhw9oWJwlqS0cn8I.avif" alt="Badges Set 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" decoding="async" />
                            </div>
                            <div className="aspect-square bg-[#1f2833] border border-[#45a29e]/20 overflow-hidden group">
                                <img src="/ourworks/aicrowd/b5p1TCtFeK7Iwk3twP8Y2BQ.avif" alt="Badges Set 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Structure & Scalability Emphasizer */}
                <section className="bg-[#1f2833] text-white py-32 px-6 lg:px-12 border-y border-[#45a29e]/20">
                    <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-[#66fcf1] font-mono tracking-widest text-sm uppercase mb-6">SYSTEM_SCALABLE: TRUE</p>
                            <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tighter leading-tight mb-8">
                                Ensuring clarity, consistency, and aesthetic appeal across AIcrowd’s growing ecosystem.
                            </h2>
                            <div className="w-full h-1 bg-gradient-to-r from-[#66fcf1] to-transparent"></div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#0b0c10] opacity-50 z-10 mix-blend-color"></div>
                            <img src="/ourworks/aicrowd/thumbnail.avif" alt="AIcrowd Thumbnail Summary" className="w-full relative z-0 border border-[#45a29e]/30 shadow-2xl" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
