import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';
import ProjectCredits from '../../components/ProjectCredits';

const work = [
 {
 index: '01',
 title: 'Website Design & Development',
 description:
 "We're designing the digital home for the Forum for Responsible Living — a platform that carries the depth of a movement while staying open and accessible. Conceived as a creative commons, it connects ideas, people, and projects through a design language that is rooted, regenerative, and inviting to a diverse community.",
 },
];

const EcologicalFoundations: React.FC = () => {
 usePageMeta({
 title: 'Ecological Foundations – Studio 1947',
 description:
 'Studio 1947\'s collaboration with Ecological Foundations and the Forum for Responsible Living — building the digital platform for a movement redefining purpose-led progress.',
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
 <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center p-3 border border-emerald-100 mb-8">
 <img src="/collabs/ecologicalfoundation.png" alt="Ecological Foundations" className="w-full h-full object-contain" />
 </div>

 <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-6">
 Collaboration
 </span>

 <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-none tracking-tight mb-6">
 Ecological<br />Foundations
 </h1>

 <div className="w-12 h-1 bg-emerald-600 rounded-full mb-8" />

 <p className="text-xl md:text-2xl text-emerald-600 font-light leading-relaxed mb-6">
 This is where purpose takes roots.
 </p>

 <a
 href="http://www.fes.org.in"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
 >
 fes.org.in
 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
 </svg>
 </a>
 </div>

 {/* Right — intro text */}
 <div className="lg:col-span-7 lg:pt-4">
 <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
 <p>
 Ecological Foundations works at the intersection of conservation science, community practice, and systemic change. Their programmes span habitat restoration, ecological research, and building the human networks that make long-term environmental stewardship possible.
 </p>
 <p>
 Within that work, they are incubating the Forum for Responsible Living — a movement and platform that brings together designers, technologists, researchers, and practitioners who believe that progress should be measured not by accumulation but by collective impact and regenerative outcomes.
 </p>
 <p>
 Our collaboration centres on building the digital infrastructure for that vision.
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

 {/* ── FRL PULLQUOTE ── */}
 <section className="py-20 md:py-28">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-12 gap-8">
 <div className="lg:col-span-4">
 <div className="w-12 h-1 bg-emerald-600 rounded-full mb-6" />
 <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
 Forum for Responsible Living
 </p>
 </div>
 <div className="lg:col-span-8">
 <blockquote className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed border-l-4 border-emerald-500 pl-8">
 "A vibrant ecosystem of thinkers, makers, and doers who prioritise purpose over prestige. A creative commons where designers, technologists, researchers, and visionaries unite to craft ideas and solutions that enrich communities, revive ecosystems, and redefine the meaning of progress."
 </blockquote>
 <p className="mt-8 text-lg text-gray-600 leading-relaxed">
 FRL is not simply a platform. It is a movement that asks a foundational question: what if growth were measured not by wealth alone, but by what we collectively regenerate? The website we are building is designed to carry that question forward — to be a space where the people who take it seriously can find each other, share their work, and build together.
 </p>
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
 <div className="w-12 h-1 bg-emerald-600 rounded-full mb-6" />
 <h2 className="text-3xl md:text-4xl font-black text-gray-900">
 Building what's next
 </h2>
 </div>

 <div className="space-y-0 divide-y divide-gray-100">
 {work.map((item) => (
 <div
 key={item.index}
 className="grid md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16"
 >
 <div className="md:col-span-4 lg:col-span-3">
 <span className="text-xs font-black text-emerald-500 tracking-widest uppercase block mb-3">
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

 {/* ── CREDITS ── */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
 <ProjectCredits 
  client="FES India"
  accentColor="#059669"
  roles={[
  { role: "Creative Direction", members: "Rabi" },
  { role: "Brochure Cover", members: "Rabi, Zahid, Manvi" },
  { role: "Brochures Layout & Design", members: "Soumajit, Anudyia" }
  ]}
 />
 </div>

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
 AIcrowd
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

export default EcologicalFoundations;
