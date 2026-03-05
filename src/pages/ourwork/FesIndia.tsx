import { useEffect } from 'react';
import Layout from '../../components/Layout';

export default function FesIndia() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Layout>
            <div className="bg-[#f2f4f1] text-[#1a2d24] min-h-screen selection:bg-[#2b6043] selection:text-white pb-32 font-sans overflow-x-hidden">

                {/* Navigation */}
                <div className="pt-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
                    <a
                        href="/#works"
                        className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase hover:text-[#2b6043] transition-colors duration-300"
                    >
                        <span className="w-8 h-[1px] bg-[#1a2d24] group-hover:bg-[#2b6043] mr-4 transition-colors duration-300"></span>
                        Back to Works
                    </a>
                </div>

                {/* Hero Section - The Brochure Cover Concept */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mt-20 mb-20 relative">
                    <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
                        <div className="lg:col-span-12">
                            <div className="border border-[#1a2d24]/20 p-2 relative bg-white shadow-2xl transform lg:-rotate-1 lg:hover:rotate-0 transition-transform duration-700">
                                <div className="absolute -top-4 -left-4 w-8 h-8 flex items-center justify-center border border-[#1a2d24]/20 bg-[#f2f4f1] rounded-full z-20">
                                    <span className="w-2 h-2 rounded-full bg-[#2b6043]"></span>
                                </div>

                                <div className="grid lg:grid-cols-2 relative overflow-hidden bg-[#e0e5dd]">
                                    {/* Left Abstract Content */}
                                    <div className="p-8 md:p-16 flex flex-col justify-between">
                                        <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#2b6043] mb-12">FES India</p>

                                        <div>
                                            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif tracking-tight leading-[0.9] mb-8 text-[#1a2d24]">
                                                Energy <br />
                                                <span className="italic text-[#2b6043]">Transition</span><br />
                                                Meet
                                            </h1>
                                            <p className="text-xl md:text-2xl font-light text-[#1a2d24]/70 leading-relaxed font-serif max-w-lg mb-12">
                                                Turning key EU-India policy discussions into an engaging, visually accessible printable coffee table brochure.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 border-t border-[#1a2d24]/10 pt-8 uppercase text-xs tracking-widest text-[#1a2d24]/60 font-bold">
                                            <div>
                                                <span className="block text-[#2b6043] mb-1">Creative Direction</span>
                                                Rabi
                                            </div>
                                            <div>
                                                <span className="block text-[#2b6043] mb-1">Layout Design</span>
                                                Zahid & Pragya
                                            </div>
                                            <div className="col-span-2 pt-4">
                                                <span className="block text-[#2b6043] mb-1">Content</span>
                                                FES Team
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Cover Image */}
                                    <div className="relative h-[600px] lg:h-auto border-l border-[#1a2d24]/10">
                                        <img
                                            src="/ourworks/fes/HbY8QB78WeboThLDVb55f1p7k.avif"
                                            alt="FES India Cover Design"
                                            className="w-full h-full object-cover filter contrast-125"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2b6043]/30 via-transparent to-transparent mix-blend-multiply"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data & Insights - Brutalist Grid Typography */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-[#1a2d24]/20 pb-8">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1a2d24] max-w-2xl leading-[0.85]">
                            Data, Insights, <br />
                            <span className="text-transparent border-text" style={{ WebkitTextStroke: '1px #1a2d24' }}>& Visuals</span>
                        </h2>
                        <p className="text-sm uppercase tracking-widest text-[#2b6043] font-bold mt-8 md:mt-0 text-right">
                            Synthesizing Complexity
                        </p>
                    </div>

                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-5 relative group">
                            <div className="aspect-[4/5] bg-white p-2 border border-[#1a2d24]/10 shadow-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                                <img src="/ourworks/fes/nrO33Jsspt5GXHIenu5HJFjlZAg.avif" alt="Data Spread" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </div>
                        <div className="md:col-span-6 md:col-start-7">
                            <div className="space-y-8 font-serif text-xl md:text-2xl text-[#1a2d24]/80 leading-relaxed font-light">
                                <p>
                                    Policy discussions on green energy transition are often locked in dense, unapproachable formats. Our goal was to break down these barriers.
                                </p>
                                <p>
                                    We designed a printable coffee table brochure for FES India that transforms hard data into a visual narrative. Structural elegance meets data journalism.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Layout Spreads Gallery - Staggered overlapping */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32 relative">
                    {/* Background decorative typography */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] flex justify-center overflow-hidden pointer-events-none opacity-[0.03] z-0">
                        <span className="text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap">EU-INDIA</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        <div className="mt-0 lg:mt-24 bg-white p-2 border border-[#1a2d24]/10 shadow-lg hover:-translate-y-4 transition-transform duration-500">
                            <img src="/ourworks/fes/oycYUeLHVrfBeeBNhMTxdqGXgP0.avif" alt="Brochure Internal 1" className="w-full aspect-square object-cover" />
                            <div className="p-4 border-t border-[#1a2d24]/5">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#2b6043]">Editorial Layout</p>
                            </div>
                        </div>

                        <div className="mt-0 bg-white p-2 border border-[#1a2d24]/10 shadow-lg hover:-translate-y-4 transition-transform duration-500 relative z-20 md:-ml-8 lg:-ml-0 md:mt-12 lg:-mt-12">
                            <img src="/ourworks/fes/2h8aq95xXDNKu2dQPiZCvqmU.avif" alt="Brochure Internal 2" className="w-full aspect-[4/5] object-cover" />
                            <div className="p-4 border-t border-[#1a2d24]/5">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#2b6043]">Data Visualization</p>
                            </div>
                        </div>

                        <div className="mt-0 lg:mt-32 bg-white p-2 border border-[#1a2d24]/10 shadow-lg hover:-translate-y-4 transition-transform duration-500 md:-ml-8 lg:-ml-0">
                            <img src="/ourworks/fes/gymhnyeWWlR1NpbuelxxU57cNI.avif" alt="Brochure Internal 3" className="w-full aspect-[4/3] object-cover" />
                            <div className="p-4 border-t border-[#1a2d24]/5">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#2b6043]">Section Dividers</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Concept Callout */}
                <section className="border-t border-[#1a2d24]/10 py-24 bg-[#e0e5dd]">
                    <div className="px-6 lg:px-12 max-w-[1600px] mx-auto text-center">
                        <span className="inline-block w-12 h-[2px] bg-[#2b6043] mb-8"></span>
                        <h2 className="text-2xl md:text-4xl font-serif italic text-[#1a2d24] max-w-3xl mx-auto leading-relaxed">
                            "Turning policy into an engaging, visually accessible format."
                        </h2>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
