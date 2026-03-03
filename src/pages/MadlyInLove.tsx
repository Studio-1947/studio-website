import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function MadlyInLove() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Layout>
            <div className="bg-[#050505] text-[#f4eee0] min-h-screen selection:bg-red-800 selection:text-white pb-32 font-sans overflow-x-hidden">
                {/* Navigation */}
                <div className="pt-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
                    <a
                        href="/#works"
                        className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase hover:text-red-500 transition-colors duration-300 relative z-20"
                    >
                        <span className="w-8 h-[1px] bg-red-900 group-hover:bg-red-500 mr-4 transition-colors duration-300"></span>
                        Back to Works
                    </a>
                </div>

                {/* Hero Section - Theatrical & Dramatic */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mt-20 mb-32 relative">
                    <div className="grid lg:grid-cols-12 gap-12 items-end relative z-10">
                        <div className="lg:col-span-9 mix-blend-difference">
                            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic tracking-tight text-[#f4eee0] leading-[0.8] mb-8">
                                Madly <br />
                                <span className="font-sans not-italic text-red-600 uppercase font-black tracking-tighter mix-blend-screen">In Love</span>
                            </h1>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row gap-8 justify-between items-start border-t border-[#f4eee0]/20 pt-8">
                        <div className="max-w-2xl">
                            <p className="text-xl md:text-2xl font-light text-[#f4eee0]/80 leading-relaxed font-serif">
                                An evocative Bharatanatyam performance by Himanshu Srivastava, where classical aesthetics meet modern design sensibility.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 text-xs tracking-[0.15em] uppercase text-[#f4eee0]/60 w-full md:w-auto shrink-0 border-l border-[#f4eee0]/20 pl-8">
                            <div>
                                <span className="block text-red-600 font-bold mb-1">Creative Direction</span>
                                Rabi & Suanya Aiyar
                            </div>
                            <div>
                                <span className="block text-red-600 font-bold mb-1">Poster Design</span>
                                Zahid & Pragya
                            </div>
                            <div>
                                <span className="block text-red-600 font-bold mb-1">Animation</span>
                                Ahmad
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cinematic Gallery Intro */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32">
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="aspect-[3/4] overflow-hidden group border border-[#f4eee0]/10">
                            <img
                                src="/ourworks/madlyinnlove/ipvB14FUL1Psg3qurXUWWoYv6HU.webp"
                                alt="Madly In Love Visual"
                                className="w-full h-full object-cover transform duration-[2s] group-hover:scale-110 grayscale hover:grayscale-0 transition-all"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="bg-red-900/20 border border-red-900/30 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 -translate-y-1/2 translate-x-1/2"></div>
                            <h2 className="text-3xl md:text-5xl font-serif italic mb-8 relative z-10 text-white">Visual Identity<br />From the Ground Up</h2>
                            <p className="text-[#f4eee0]/80 text-lg leading-relaxed relative z-10 font-light">
                                For 'Madly in Love,' Studio 1947 crafted a compelling visual identity from the ground up. We designed the entire event branding, blending classical aesthetics with a modern design sensibility. From typography to color palette, imagery to layout, every element was carefully curated to reflect the passion and timelessness of Kalidasa’s narratives.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Large Bleed Image Section */}
                <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden mb-32 border-y border-[#f4eee0]/10">
                    <img
                        src="/ourworks/madlyinnlove/Uqzbd6p675J6UrZZlv6rVtM3u8.avif"
                        alt="Himanshu Srivastava Poster"
                        className="w-full h-full object-cover object-center"
                        fetchPriority="high"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-6 z-10">
                        <p className="text-4xl md:text-6xl font-black uppercase text-white tracking-widest drop-shadow-xl">
                            TRADITION ×<br className="md:hidden" /> CONTEMPORARY
                        </p>
                    </div>
                </section>

                {/* Narrative Split */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-32">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="space-y-8 pl-0 lg:pl-16 border-l border-red-900/30">
                                <div>
                                    <h3 className="text-red-600 text-sm font-bold uppercase tracking-widest mb-4">The Challenge</h3>
                                    <p className="text-xl md:text-2xl font-serif italic text-[#f4eee0]/90 leading-relaxed">
                                        How do we visually capture the intensity of Kalidasa’s narratives for a modern audience?
                                    </p>
                                </div>
                                <div className="h-[1px] w-16 bg-[#f4eee0]/20"></div>
                                <div>
                                    <h3 className="text-red-600 text-sm font-bold uppercase tracking-widest mb-4">The Impact</h3>
                                    <p className="text-lg text-[#f4eee0]/70 leading-relaxed font-light">
                                        Our approach ensured a seamless fusion of tradition and contemporary appeal, making the event visually striking and culturally resonant. We didn't just design posters; we structured a visual language that spoke to the performance's emotional core.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-16">
                                <div className="aspect-[4/5] overflow-hidden border border-[#f4eee0]/10">
                                    <img src="/ourworks/madlyinnlove/LREzOS4KER5BFRcyL9pX9uHlTP0.avif" alt="Collateral 1" className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-700" loading="lazy" decoding="async" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-[4/5] overflow-hidden border border-[#f4eee0]/10">
                                    <img src="/ourworks/madlyinnlove/yC8GIvpdMIDsdEEvB1GuLsypf5k.webp" alt="Collateral 2" className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-700" loading="lazy" decoding="async" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Full Typography Detail Logo / Brand */}
                <section className="px-6 lg:px-12 max-w-[1600px] mx-auto pb-32 flex justify-center border-b border-[#f4eee0]/10">
                    <div className="max-w-4xl text-center">
                        <div className="w-32 h-32 mx-auto overflow-hidden rounded-full mb-12 border border-[#f4eee0]/20 p-2">
                            <img src="/ourworks/madlyinnlove/dMt5eiEJVxniY3eaSbdZ8MaegQ.avif" alt="Madly in Love Logo Detail" className="w-full h-full object-cover rounded-full mix-blend-lighten" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 bg-gradient-to-br from-[#f4eee0] to-red-600 bg-clip-text text-transparent">
                            CULTURALLY RESONANT.
                            <br />
                            VISUALLY STRIKING.
                        </h2>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
