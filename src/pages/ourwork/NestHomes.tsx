import { useEffect } from 'react';
import Layout from '../../components/Layout';

export default function NestHomes() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Layout>
            <div className="bg-[#1b1c1b] text-[#f2ede7] min-h-screen selection:bg-[#e07724] selection:text-[#1b1c1b] pb-32 font-sans overflow-x-hidden">

                {/* Navigation */}
                <div className="pt-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
                    <a
                        href="/#works"
                        className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase hover:text-[#e07724] transition-colors duration-300"
                    >
                        <span className="w-8 h-[1px] bg-[#f2ede7] group-hover:bg-[#e07724] mr-4 transition-colors duration-300"></span>
                        Back to Works
                    </a>
                </div>

                {/* Hero Section - The Hospitality & Adventure Vibe */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mt-20 mb-32 relative">
                    <div className="grid lg:grid-cols-12 gap-8 items-end relative z-10">
                        <div className="lg:col-span-12">

                            {/* Asymmetric Typography Header */}
                            <div className="mb-16 relative">
                                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-tighter leading-[0.8] mb-8 text-[#f2ede7] italic">
                                    Nest<br /> <span className="pl-0 md:pl-32 lg:pl-64 text-[#e07724] font-sans font-black not-italic uppercase tracking-tight">Homes</span>
                                </h1>
                                <p className="absolute top-0 right-0 max-w-sm text-lg md:text-2xl font-light text-[#f2ede7]/60 leading-relaxed font-serif text-right hidden lg:block border-b border-[#e07724] pb-4">
                                    Capturing the warmth of home while embracing the spirit of adventure.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-12 gap-12 relative">

                                {/* Image Grid Overlap */}
                                <div className="lg:col-span-8 relative h-[600px] md:h-[800px] group">
                                    <img
                                        src="/ourworks/nestHomes/tCaqOpo6QRvlwTuKBSQBr4UPXeE.avif"
                                        alt="Nest Homes Imagery"
                                        className="w-full h-full object-cover rounded-tr-[100px] rounded-bl-[100px] shadow-2xl filter brightness-90 group-hover:brightness-110 transition-all duration-700"
                                    />
                                    {/* Floating secondary image */}
                                    <div className="absolute -bottom-16 -right-8 w-64 h-64 md:w-96 md:h-96 border-8 border-[#1b1c1b] z-20 overflow-hidden rounded-full shadow-2xl hidden md:block">
                                        <img
                                            src="/ourworks/nestHomes/evDtpRa1yBIsonZPKO4zYZW8tM.avif"
                                            alt="Nest Homes Detail"
                                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Credits & Intro */}
                                <div className="lg:col-span-4 flex flex-col justify-end pb-8 lg:pb-32">
                                    <p className="text-lg text-[#f2ede7]/80 leading-relaxed font-light mb-16 lg:hidden">
                                        Capturing the warmth of home while embracing the spirit of adventure.
                                    </p>

                                    <div className="flex flex-col gap-6 text-xs tracking-[0.15em] uppercase text-[#f2ede7]/60 border-l border-[#e07724]/30 pl-8">
                                        <div>
                                            <span className="block text-[#e07724] font-bold mb-2">Concept & Design</span>
                                            Team Studio 1947
                                        </div>
                                        <div>
                                            <span className="block text-[#e07724] font-bold mb-2">Content</span>
                                            Team Nest Homes
                                        </div>
                                        <div className="pt-8">
                                            <p className="text-[#f2ede7] font-serif italic text-base lowercase tracking-normal">
                                                "A brand presence that feels as inviting as the journeys they offer."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Narrative & Branding Breakdown */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32 border-t border-[#f2ede7]/10 pt-32">
                    <div className="grid md:grid-cols-12 gap-16 items-start">
                        <div className="md:col-span-5 sticky top-32">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#e07724] leading-[0.9] mb-8">
                                Revitalizing <br />
                                <span className="text-transparent border-text" style={{ WebkitTextStroke: '1px #f2ede7' }}>Identity</span>
                            </h2>
                            <div className="space-y-8 font-serif text-xl md:text-2xl text-[#f2ede7]/80 leading-relaxed font-light">
                                <p>
                                    We had the exciting opportunity to revitalize Nest Homes, a Kolkata-based tourism company, with a fresh new visual identity and brand strategy.
                                </p>
                                <p>
                                    Our goal? To create a brand that truly reflects the essence of comfort, exploration, and heartfelt local hospitality.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-6 md:col-start-7 space-y-24">

                            {/* Visual Showcase 1 */}
                            <div className="space-y-6">
                                <p className="text-4xl font-serif italic text-[#e07724]">01.</p>
                                <div className="aspect-[4/3] w-full bg-[#2a2b2a] shadow-2xl rounded-tr-3xl rounded-bl-3xl overflow-hidden group">
                                    <img src="/ourworks/nestHomes/7GB5Yd30p7ypuwvHoVQOybQE.webp" alt="Brand Revitalization 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <p className="text-sm font-bold tracking-widest uppercase text-[#f2ede7]/50 pt-4">Redefining Visual Language</p>
                            </div>

                            {/* Visual Showcase 2 */}
                            <div className="space-y-6">
                                <p className="text-4xl font-serif italic text-[#e07724]">02.</p>
                                <div className="aspect-[4/5] w-full bg-[#2a2b2a] shadow-2xl rounded-tl-3xl rounded-br-3xl overflow-hidden group relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#e07724]/20 to-transparent z-10 mix-blend-overlay"></div>
                                    <img src="/ourworks/nestHomes/4M7vYlNEB3ymTeM8136nLf5j4.webp" alt="Brand Revitalization 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative z-0" />
                                </div>
                                <p className="text-sm font-bold tracking-widest uppercase text-[#f2ede7]/50 pt-4">Shaping the Strategy</p>
                            </div>

                            {/* Visual Showcase 3 */}
                            <div className="space-y-6">
                                <p className="text-4xl font-serif italic text-[#e07724]">03.</p>
                                <div className="aspect-video w-full bg-[#2a2b2a] shadow-2xl rounded-3xl overflow-hidden group">
                                    <img src="/ourworks/nestHomes/tlROyK1CutEn41iez3S9SsP86zs.avif" alt="Brand Revitalization 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <p className="text-sm font-bold tracking-widest uppercase text-[#f2ede7]/50 pt-4">modern travelers</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Footer Concept Callout */}
                <section className="bg-[#e07724] text-[#1b1c1b] py-32 px-6 lg:px-12 text-center relative overflow-hidden">
                    {/* Abstract shape */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 blur-3xl rounded-full bg-white scale-150 transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                            Whether it's a cozy stay or an immersive experience.
                        </h2>
                        <p className="text-xl md:text-2xl font-serif italic text-[#1b1c1b]/80">
                            Nest Homes now welcomes guests with a brand presence that feels as inviting as the journeys they offer.
                        </p>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
