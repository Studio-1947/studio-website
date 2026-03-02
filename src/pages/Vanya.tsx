import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function Vanya() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Layout>
            <div className="bg-[#fcfbf9] text-[#1c2321] min-h-screen selection:bg-[#5e695b] selection:text-white pb-32 font-sans overflow-x-hidden">

                {/* Navigation */}
                <div className="pt-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
                    <a
                        href="/#works"
                        className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase hover:text-[#5e695b] transition-colors duration-300"
                    >
                        <span className="w-8 h-[1px] bg-[#1c2321] group-hover:bg-[#5e695b] mr-4 transition-colors duration-300"></span>
                        Back to Works
                    </a>
                </div>

                {/* Hero Section - Natural / Organic Aesthetic */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mt-20 mb-32 relative">
                    <div className="grid lg:grid-cols-12 gap-12 items-end relative z-10">
                        <div className="lg:col-span-12">

                            {/* Asymmetric Typography Header */}
                            <div className="mb-16 relative border-t-2 border-[#1c2321] pt-12 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-12">
                                <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif tracking-tighter leading-[0.8] text-[#1c2321]">
                                    <span className="italic font-light">Vanya</span><br />
                                    <span className="font-sans font-black uppercase text-4xl md:text-6xl lg:text-7xl tracking-tighter text-[#5e695b]">
                                        Branding &<br />Packaging
                                    </span>
                                </h1>

                                <div className="flex flex-col gap-6 text-xs tracking-[0.15em] uppercase text-[#1c2321]/80 max-w-xs md:text-right font-medium">
                                    <div>
                                        <span className="block text-[#5e695b] font-bold mb-1">Creative</span>
                                        Rabi & Som
                                    </div>
                                    <div>
                                        <span className="block text-[#5e695b] font-bold mb-1">Poster</span>
                                        Zahid & Pragya
                                    </div>
                                    <div>
                                        <span className="block text-[#5e695b] font-bold mb-1">Animation</span>
                                        Ahmad
                                    </div>
                                    <div>
                                        <span className="block text-[#5e695b] font-bold mb-1">Content</span>
                                        Nadia & Subhayu
                                    </div>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-12 gap-8 relative mt-16">
                                {/* Left Imagery */}
                                <div className="lg:col-span-5 flex flex-col gap-8">
                                    <div className="aspect-[4/5] bg-[#eef0ec] p-4 shadow-xl border border-[#1c2321]/10">
                                        <img
                                            src="/ourworks/vanya/8wSCLTwrVNNabGPfCCioL5I08oY.avif"
                                            alt="Vanya Packaging 1"
                                            className="w-full h-full object-cover filter contrast-125"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="hidden lg:block p-8 border border-[#1c2321]/10 bg-white">
                                        <p className="text-xl font-serif italic text-[#1c2321]/70 leading-relaxed">
                                            UI Screens & Digital Packaging for an organic ecosystem.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Main Hero Image */}
                                <div className="lg:col-span-7 relative group">
                                    <div className="relative border border-[#1c2321]/10 bg-white p-4 z-10 shadow-2xl transform lg:rotate-1 group-hover:rotate-0 transition-transform duration-700">
                                        <img
                                            src="/ourworks/vanya/thumbnail.avif"
                                            alt="Vanya UI Screens"
                                            className="w-full aspect-square md:aspect-[4/3] object-cover filter sepia-[0.1] contrast-110"
                                            fetchPriority="high"
                                            decoding="async"
                                        />
                                        <div className="absolute top-0 right-0 p-4">
                                            <div className="w-16 h-16 rounded-full border border-[#1c2321] flex items-center justify-center bg-[#fcfbf9] transform rotate-12 group-hover:-rotate-12 transition-transform duration-500">
                                                <span className="text-[10px] font-bold tracking-widest uppercase">UI/UX</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Floating Screens Gallery */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32 border-t border-[#1c2321]/10 pt-24 mt-24 relative">
                    {/* Typographic Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center overflow-hidden mix-blend-multiply opacity-5 pointer-events-none z-0">
                        <span className="text-[15rem] font-black font-sans uppercase tracking-tighter">VANYA</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10 items-center">
                        <div className="aspect-[3/4] bg-white p-2 border border-[#1c2321]/10 shadow-xl transform hover:-translate-y-8 transition-transform duration-500">
                            <img src="/ourworks/vanya/AVr8vccYBOZFm3oFwrUyxXNQEY.avif" alt="Vanya Screen 1" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                        </div>

                        <div className="aspect-square bg-white p-2 border border-[#1c2321]/10 shadow-2xl transform md:translate-y-16 hover:translate-y-8 transition-transform duration-500 z-20">
                            <img src="/ourworks/vanya/AKJs5p2xSyvyl6Ts40KJG2lo.webp" alt="Vanya Screen 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" decoding="async" />
                        </div>

                        <div className="aspect-[3/4] bg-white p-2 border border-[#1c2321]/10 shadow-xl transform hover:-translate-y-8 transition-transform duration-500">
                            <img src="/ourworks/vanya/1jC1wN5spcg8afKqjDEqvqMiA.webp" alt="Vanya Details" className="w-full h-full object-cover filter contrast-125" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
