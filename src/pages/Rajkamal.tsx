import React, { useEffect } from 'react';
import Layout from '../components/Layout';

export default function Rajkamal() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Layout>
            <div className="bg-[#f8f5f0] text-[#2c1810] min-h-screen selection:bg-[#d94a38] selection:text-white pb-32 font-serif overflow-hidden">

                {/* Navigation */}
                <div className="pt-32 px-6 lg:px-12 max-w-[1600px] mx-auto font-sans">
                    <a
                        href="/#works"
                        className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase hover:text-[#d94a38] transition-colors duration-300 relative z-20"
                    >
                        <span className="w-8 h-[1px] bg-[#2c1810] group-hover:bg-[#d94a38] mr-4 transition-colors duration-300"></span>
                        Back to Works
                    </a>
                </div>

                {/* Hero Section - Literary Heritage Vibe */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mt-20 mb-32 relative">
                    <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">

                        <div className="lg:col-span-7 pr-0 lg:pr-16 relative">
                            {/* Asymmetric Typography Header */}
                            <div className="mb-16 relative z-20">
                                <p className="text-sm tracking-[0.3em] font-sans font-bold text-[#d94a38] uppercase mb-6">Kitab Utsav Identity</p>
                                <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-serif tracking-tight leading-[0.85] mb-8 text-[#2c1810]">
                                    Rajkamal <br />
                                    <span className="italic font-light text-[#2c1810] pr-8">Prakashan</span>
                                </h1>
                            </div>

                            {/* Right Overlay Image */}
                            <div className="block lg:absolute lg:top-16 lg:-right-32 w-full lg:w-[120%] aspect-video lg:aspect-[4/3] z-10 p-2 bg-white shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                                <img
                                    src="/ourworks/rajkamal/rajkamal_main.avif"
                                    alt="Kitab Utsav Branding"
                                    className="w-full aspect-square md:aspect-[4/3] object-cover"
                                    fetchPriority="high"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col justify-end pt-8 lg:pt-96 relative z-30">
                            <div className="bg-[#f8f5f0]/90 backdrop-blur-sm p-8 border border-[#2c1810]/10 shadow-xl mt-0 md:-mt-16 lg:mt-0 lg:-ml-16">
                                <p className="text-xl md:text-2xl font-light text-[#2c1810]/80 leading-relaxed font-serif mb-12">
                                    Bringing India's oldest Hindi publishing house festival to life through design, storytelling, and deep cultural understanding.
                                </p>

                                <div className="flex flex-col gap-6 text-xs tracking-[0.15em] uppercase text-[#2c1810]/70 border-l border-[#d94a38]/40 pl-8 font-sans">
                                    <div>
                                        <span className="block text-[#d94a38] font-bold mb-1">Creative Direction</span>
                                        Rabi
                                    </div>
                                    <div>
                                        <span className="block text-[#d94a38] font-bold mb-1">Layout Design</span>
                                        Zahid & Pragya
                                    </div>
                                    <div>
                                        <span className="block text-[#d94a38] font-bold mb-1">Content</span>
                                        Rajkamal Prakashan Team
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* The Festival Experience Gallery */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32 border-t border-[#2c1810]/10 pt-32">
                    <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4 sticky top-32">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#2c1810] leading-[0.9] mb-8 font-sans">
                                <span className="text-[#d94a38]">Visual</span><br /> Language
                            </h2>
                            <p className="text-xl text-[#2c1810]/70 leading-relaxed font-light mb-8">
                                From the first brainstorming session to the final execution, we crafted a distinct visual language that captured the festival’s essence.
                            </p>
                            <p className="text-xl text-[#2c1810]/70 leading-relaxed font-light">
                                A vibrant celebration of literature, ideas, and conversations.
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Collage Style Images */}
                            <div className="space-y-6">
                                <div className="aspect-[3/4] p-3 bg-white shadow-lg border border-[#2c1810]/5 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img src="/ourworks/rajkamal/0B2A0667.jpg" alt="Kitab Utsav Details" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                    <div className="mt-4 text-center">
                                        <span className="text-xs font-sans tracking-widest uppercase text-[#2c1810]/50 font-bold">Print Media</span>
                                    </div>
                                </div>
                                <div className="aspect-square p-2 bg-white shadow-lg border border-[#2c1810]/5 group">
                                    <img src="/client/rajkamal.jpeg" alt="Rajkamal Visual 2" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                    <div className="mt-4 text-center">
                                        <span className="text-xs font-sans tracking-widest uppercase text-[#d94a38] font-bold">Digital Campaign</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 sm:mt-24">
                                <div className="aspect-square p-2 bg-white shadow-lg border border-[#2c1810]/5 group">
                                    <img src="/ourworks/rajkamal/nx2kFu7e2jUtjqL0hMfZ1GboHE.avif" alt="Social Experience" className="w-full h-full object-cover filter contrast-125" />
                                    <div className="mt-4 text-center">
                                        <span className="text-xs font-sans tracking-widest uppercase text-[#d94a38] font-bold">Event Branding</span>
                                    </div>
                                </div>
                                <div className="aspect-[3/4] p-3 bg-white shadow-lg border border-[#2c1810]/5 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img src="/ourworks/rajkamal/8og1ocqRym1XngeAHLI54DHEkM.avif" alt="Literary Assets" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                    <div className="mt-4 text-center">
                                        <span className="text-xs font-sans tracking-widest uppercase text-[#2c1810]/50 font-bold">Tangible Assets</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact Message */}
                <section className="bg-[#2c1810] text-[#f8f5f0] py-32 px-6 lg:px-12 relative overflow-hidden">
                    {/* Abstract shape */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] border-[1px] border-[#d94a38]/20 rounded-full scale-150 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] border-[1px] border-[#d94a38]/20 rounded-full scale-150 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto relative z-10 text-center">
                        <span className="inline-block w-16 h-[2px] bg-[#d94a38] mb-12"></span>
                        <p className="text-2xl md:text-4xl lg:text-5xl font-light italic leading-relaxed mb-12">
                            "Through a strategic and immersive approach, we didn't just design an identity; we helped transform Kitab Utsav into a visually compelling, engaging, and unforgettable experience for book lovers."
                        </p>
                        <p className="text-lg md:text-xl font-sans tracking-widest uppercase text-[#d94a38] font-bold">
                            The Power of Creative Storytelling
                        </p>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
