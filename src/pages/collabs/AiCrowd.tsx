import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

const work = [
 {
 index: '01',
 title: 'Layout Design',
 description:
 'We designed the structural layout of AICrowd\'s platform interfaces — establishing information hierarchy, grid systems, and spatial logic that could scale across a rapidly growing suite of competition pages, leaderboards, and participant dashboards. The goal was clarity at density: surfaces that hold a lot of data without feeling overwhelming.',
 },
 {
 index: '02',
 title: 'Design System',
 description:
 'We built a foundational design system for AICrowd — a shared visual language covering typography, colour, spacing, component states, and interaction patterns. This gave the platform a consistent, recognisable identity while enabling fast, coherent UI development across the team. Every component was documented and built for reuse across multiple challenge contexts.',
 },
 {
 index: '03',
 title: 'Hackathon Posters',
 description:
 'For AICrowd\'s hackathons and open challenges, we created a series of event posters that communicated the scale and ambition of each competition. Each poster was designed to carry the technical rigour of the challenge while remaining visually compelling — fit for digital distribution across research communities, social media, and academic networks globally.',
 },
];

const AiCrowd: React.FC = () => {
 usePageMeta({
 title: 'AICrowd – Studio 1947',
 description:
 'Studio 1947\'s collaboration with AICrowd — layout design, design system, and hackathon posters for one of the world\'s leading open AI research platforms.',
 });

 useEffect(() => {
 window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
 }, []);

 return (
 <Layout>
 <div className="bg-white transition-colors duration-300 min-h-screen">

 {/* ── HERO ── */}
 <section className="pt-32 pb-20 md:pb-28">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

 <Link
 to="/"
 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors mb-16"
 >
 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
 </svg>
 Back to Home
 </Link>

 <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

 {/* Left — identity */}
 <div className="lg:col-span-5">
 <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center p-3 border border-red-100 mb-8">
 <img src="/collabs/aicrowd.png" alt="AICrowd" className="w-full h-full object-contain" />
 </div>

 <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-[#D60000] text-xs font-bold uppercase tracking-widest mb-6">
 Collaboration
 </span>

 <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-none tracking-tight mb-6">
 AI<br />Crowd
 </h1>

 <div className="w-12 h-1 bg-[#D60000] rounded-full mb-8" />

 <p className="text-xl md:text-2xl text-[#D60000] font-light leading-relaxed mb-6">
 Where the world's AI researchers compete, collaborate, and build.
 </p>

 <a
 href="http://www.aicrowd.com"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
 >
 aicrowd.com
 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
 </svg>
 </a>
 </div>

 {/* Right — intro text */}
 <div className="lg:col-span-7 lg:pt-4">
 <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
 <p>
 AICrowd is a global platform for open AI challenges, research competitions, and collaborative hackathons, connecting complex problems with the people equipped to solve them. With hundreds of competitions across fields like reinforcement learning, computer vision, and NLP, it brings together a highly skilled global research community.
 </p>
 <p>
 Positioned at the intersection of competition, research, and community, the platform demands precision in every detail. Our collaboration focused on shaping its visual and structural foundations which created systems that stay out of the way and let the work lead.
 </p>
 </div>
 </div>

 </div>
 </div>
 </section>

 {/* ── DIVIDER ── */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="border-t border-gray-100" />
 </div>

 {/* ── WORK ── */}
 <section className="py-20 md:py-28">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

 <div className="mb-16">
 <div className="w-12 h-1 bg-[#D60000] rounded-full mb-6" />
 <h2 className="text-3xl md:text-4xl font-black text-gray-900">
 What we did
 </h2>
 </div>

 <div className="space-y-0 divide-y divide-gray-100">
 {work.map((item) => (
 <div
 key={item.index}
 className="grid md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16 group"
 >
 {/* Index + title */}
 <div className="md:col-span-4 lg:col-span-3">
 <span className="text-xs font-black text-[#D60000] tracking-widest uppercase block mb-3">
 {item.index}
 </span>
 <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
 {item.title}
 </h3>
 </div>

 {/* Description */}
 <div className="md:col-span-8 lg:col-span-9 flex items-start">
 <p className="text-lg text-gray-600 leading-relaxed">
 {item.description}
 </p>
 </div>
 </div>
 ))}
 </div>

 </div>
 </section>

 {/* ── DIVIDER ── */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="border-t border-gray-100" />
 </div>

 {/* ── COLLAB CTA ── */}
 <section className="py-20 md:py-28">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
 See more of our work
 </p>
 <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
 Explore other<br />collaborations.
 </h2>
 </div>
 <div className="flex flex-wrap gap-4">
 <Link
 to="/collabs/walking-project"
 className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
 >
 Walking Project
 </Link>
 <Link
 to="/collabs/ecological-foundations"
 className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
 >
 Ecological Foundations
 </Link>
 <Link
 to="/collabs/mirikcollege"
 className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
 >
 Mirik College
 </Link>
 </div>
 </div>
 </div>
 </section>

 </div>
 </Layout>
 );
};

export default AiCrowd;
