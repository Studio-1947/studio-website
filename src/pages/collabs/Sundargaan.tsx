import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

const EcologicalFoundations: React.FC = () => {
 usePageMeta({
 title: 'Sundargaan – Studio 1947',
 description:
 'Sundargaan — a digital archive and platform recognising the local artisans of the Sundarbans, preserving their craft and stories for generations to come.',
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
 <div className="w-20 h-20 rounded-2xl bg-amber-50 flex items-center justify-center p-3 border border-amber-100 mb-8">
 <img
 src="/logos/clientlogocolour/sundargaan_logo_col.svg"
 alt="Sundargaan"
 className="w-full h-full object-contain"
 />
 </div>

 <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-widest mb-6">
 Collaboration
 </span>

 <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-none tracking-tight mb-6">
 Sundar<br />gaan
 </h1>

 <div className="w-12 h-1 bg-amber-500 rounded-full mb-8" />

 <p className="text-xl md:text-2xl text-amber-600 font-light leading-relaxed">
 Rooted in the delta. Shaped by the tide.
 </p>
 </div>

 {/* Right — intro text */}
 <div className="lg:col-span-7 lg:pt-4">
 <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
 <p>
 Sunderbans appears as a land of quiet strength and living tradition. The mangrove roots rising from the soft, sloppy earth symbolize protection, endurance, and the courage to stand firm against storms. Reflecting their simple life and deep cultural roots, the ektara carries the gentle music of the people; they together express how small local businesses like fishing, honey gathering, and handicrafts grow naturally from the bond between nature and community.
 </p>
 <p>
 Sundargaan is a step toward rewriting that narrative — an initiative dedicated to recognising artists on their own terms, documenting their craft with the depth and dignity it deserves, and creating a living digital archive that ensures their work remains visible, discoverable, and enduring.
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

 {/* ── WHAT IT IS ── */}
 <section className="py-20 md:py-28">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-12 gap-8">
 <div className="lg:col-span-4">
 <div className="w-12 h-1 bg-amber-500 rounded-full mb-6" />
 <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
 What<br />Sundargaan is
 </h2>
 </div>
 <div className="lg:col-span-8 space-y-6 text-lg text-gray-600 leading-relaxed">
 <p>
 At its core, Sundargaan is a digital archive — a structured, carefully maintained repository of artisan profiles, craft documentation, process records, and cultural context. Each artisan in the archive is represented not as a product catalogue but as a practitioner with a biography, a lineage, a geography, and a body of work that can be explored in depth.
 </p>
 <p>
 The archive is designed to serve multiple audiences simultaneously: researchers and ethnographers who need rigorous documentation; cultural institutions and curators seeking to represent the Sundarbans in their programmes; buyers and collectors who want to understand the provenance and context of what they're acquiring; and the artisans and communities themselves, for whom the archive is also a form of recognition and record.
 </p>
 <p>
 Beyond preservation, Sundargaan is also a platform for visibility — a place where the work of Sundarbans artisans can be discovered by audiences who would never otherwise encounter it, and where the richness of the delta's creative culture can speak for itself.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* ── DIVIDER ── */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="border-t border-gray-100" />
 </div>

 {/* ── OUR ROLE ── */}
 <section className="py-20 md:py-28">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

 <div className="mb-16">
 <div className="w-12 h-1 bg-amber-500 rounded-full mb-6" />
 <h2 className="text-3xl md:text-4xl font-black text-gray-900">
 Our role
 </h2>
 </div>

 <div className="space-y-0 divide-y divide-gray-100">
 {[
 {
 index: '01',
 title: 'Brand Identity',
 description:
 'We shaped the visual identity for Sundargaan — a language rooted in the textures, colours, and forms of the Sundarbans itself. The identity needed to feel authentic to the delta while remaining legible and compelling across digital surfaces: the tide-marked earth tones, the layered organic forms, the quiet density of the mangrove edge.',
 },
 {
 index: '02',
 title: 'Platform Design & Development',
 description:
 'We are designing and building the Sundargaan digital platform — the archive interface, artisan profiles, craft documentation system, and discovery experience. The design challenge is significant: the platform must be rich enough to hold complex cultural information, simple enough for artisans with limited digital access to participate in, and beautiful enough to honour the work it documents.',
 },
 {
 index: '03',
 title: 'Documentation Framework',
 description:
 'We are developing the structural framework for how artisan profiles, craft processes, and cultural narratives are recorded and presented — defining the vocabulary, the metadata architecture, and the editorial approach that will govern how the archive grows over time and remains coherent as it scales.',
 },
 ].map((item) => (
 <div key={item.index} className="grid md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16">
 <div className="md:col-span-4 lg:col-span-3">
 <span className="text-xs font-black text-amber-500 tracking-widest uppercase block mb-3">
 {item.index}
 </span>
 <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
 {item.title}
 </h3>
 </div>
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
 to="/collabs/ai-crowd"
 className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
 >
 AICrowd
 </Link>
 <Link
 to="/collabs/ecological-foundations"
 className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
 >
 Ecological Foundations
 </Link>
 </div>
 </div>
 </div>
 </section>

 </div>
 </Layout>
 );
};

export default EcologicalFoundations;
