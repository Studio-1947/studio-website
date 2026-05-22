import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { PROJECTS } from '../../data/projects';
import { ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

const AllWorks: React.FC = () => {
 usePageMeta({
 title: 'Our Work – Studio 1947',
 description: 'A full collection of Studio 1947 projects — brand identities, event branding, digital design, and more.',
 });

 useEffect(() => {
 window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
 }, []);

 return (
 <Layout>
 <div className="bg-white min-h-screen pt-32 pb-24">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

 {/* Back link */}
 <Link
 to="/#works"
 className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-12 group text-sm font-medium"
 >
 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
 Back to Home
 </Link>

 {/* Header */}
 <div className="mb-16">
 <span className="inline-block py-1 px-3 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs font-semibold tracking-wide uppercase mb-4">
 ● All Projects
 </span>
 <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">
 Built For Impact
 </h1>
 <p className="text-gray-500 text-lg mt-4 max-w-2xl leading-relaxed">
 Every project we take on is rooted in purpose — here's the full collection of our work.
 </p>
 </div>

 {/* Grid — items-start prevents last orphan card from stretching */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
 {PROJECTS.map((project, index) => (
 <Link
 key={index}
 to={project.link}
 className="flex flex-col gap-4 group cursor-pointer self-start"
 >
 {/* Image */}
 <div className={`aspect-[4/3] w-full ${project.color} ${project.imageContainerClass ?? ''} rounded-2xl relative overflow-hidden`}>
 <img
 src={project.image}
 alt={project.client}
 loading="lazy"
 decoding="async"
 className={`${project.imageClass ?? 'w-full h-full object-cover'} transition-transform duration-500 ${project.disableHoverZoom ? '' : 'group-hover:scale-105'}`}
 />
 </div>

 {/* Details */}
 <div className="flex flex-col gap-1 px-1">
 <span className="font-bold text-gray-900 text-base leading-snug group-hover:text-royal-600 transition-colors">
 {project.client}
 </span>
 <span className="text-gray-400 text-sm leading-snug">
 {project.category}
 </span>
 </div>
 </Link>
 ))}
 </div>

 </div>
 </div>
 </Layout>
 );
};

export default AllWorks;
