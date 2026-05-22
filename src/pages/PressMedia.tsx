import React from "react";
import { Link } from "react-router-dom";
import { Camera, ExternalLink, Newspaper, ArrowRight } from "lucide-react";
import Layout from "../components/Layout";
import { usePageMeta } from "../hooks/usePageMeta";
import { pressItems, eventItems } from "../data/pressMediaData";

const galleryPlaceholders = [
 {
 title: "Media Archive",
 caption:
 "Future photo sets will appear here. When clicked, each image can open into a swipeable lightbox view.",
 },
 {
 title: "Expedition Notes",
 caption:
 "Use this space for event albums, behind-the-scenes coverage, and press-ready visual assets.",
 },
 {
 title: "Coverage Highlights",
 caption:
 "As more media arrives, this section can evolve into an editorial image grid with keyboard navigation.",
 },
];

const PressMedia: React.FC = () => {
 usePageMeta({
 title: "Press & Media – Studio 1947",
 description:
 "Studio 1947 press coverage, event recaps, and a future-ready media gallery for articles, annual events, and trekking stories.",
 });

 return (
 <Layout>
 <div className="bg-white min-h-screen transition-colors duration-300">
 <section className="relative overflow-hidden pt-32 pb-12 md:pb-16 lg:pb-24">
 <div className="absolute inset-0 bg-gradient-to-b from-royal-50/70 via-white to-white" />
 <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.12),transparent_45%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_38%)]),transparent_45%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_38%)]" />

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
 {/* Left: Hero Content */}
 <div>
 <span className="inline-flex items-center gap-2 rounded-full border border-royal-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-royal-700 shadow-sm">
 Press & Media
 </span>

 <h1 className="mt-6 text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-black leading-[1] tracking-tight text-gray-950">
 Our Story, Told Through Press & Media
 </h1>

 <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-600 max-w-2xl">
 Featured in leading publications and shared across platforms.
 Discover our latest press coverage, event highlights, and
 behind-the-scenes expedition photography.
 </p>

 <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl lg:mt-12">
 <article>
 <p className="text-3xl md:text-4xl font-black text-royal-600">
 1
 </p>
 <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-gray-600">
 Featured Press
 </p>
 <p className="mt-1 text-xs leading-relaxed text-gray-500">
 In trusted publications
 </p>
 </article>
 <article>
 <p className="text-3xl md:text-4xl font-black text-emerald-600">
 Diverse
 </p>
 <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-gray-600">
 Event Coverage
 </p>
 <p className="mt-1 text-xs leading-relaxed text-gray-500">
 From launches to treks
 </p>
 </article>
 <article>
 <p className="text-3xl md:text-4xl font-black text-amber-600">
 30+
 </p>
 <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-gray-600">
 Archive Photos
 </p>
 <p className="mt-1 text-xs leading-relaxed text-gray-500">
 Growing expedition gallery
 </p>
 </article>
 </div>
 </div>

 {/* Right: Featured Press Card (visible on lg+) */}
 {pressItems.map((article) => (
 <a
 key={article.id}
 href={article.href}
 target="_blank"
 rel="noreferrer"
 className="hidden lg:block w-full max-w-xl lg:justify-self-center group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-royal-50/90 via-white to-white" />
 <div className="relative z-10 flex h-full flex-col p-8">
 <div className="flex items-center gap-3 text-royal-600">
 <Newspaper className="w-5 h-5" />
 <span className="text-sm font-semibold uppercase tracking-[0.2em]">
 Featured Press
 </span>
 </div>

 <h2 className="mt-5 text-2xl font-black leading-tight text-gray-950">
 {article.title}
 </h2>

 <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
 {article.source} · {article.date}
 </p>

 <p className="mt-5 flex-1 text-sm leading-relaxed text-gray-600">
 {article.summary}
 </p>

 <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-royal-700">
 Read article
 <ExternalLink className="w-4 h-4" />
 </span>
 </div>
 </a>
 ))}
 </div>
 </div>
 </section>

 {/* Mobile/Tablet: Featured Press Section */}
 <section className="py-6 md:py-10 lg:hidden">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid gap-6">
 {pressItems.map((article) => (
 <a
 key={article.id}
 href={article.href}
 target="_blank"
 rel="noreferrer"
 className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-royal-50/90 via-white to-white" />
 <div className="relative z-10 flex h-full flex-col">
 <div className="flex items-center gap-3 text-royal-600">
 <Newspaper className="w-5 h-5" />
 <span className="text-sm font-semibold uppercase tracking-[0.2em]">
 Featured Press
 </span>
 </div>

 <h2 className="mt-5 text-3xl md:text-4xl font-black leading-tight text-gray-950 max-w-3xl">
 {article.title}
 </h2>

 <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
 {article.source} · {article.date}
 </p>

 <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600">
 {article.summary}
 </p>

 <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-royal-700">
 Read article
 <ExternalLink className="w-4 h-4" />
 </span>
 </div>
 </a>
 ))}
 </div>
 </div>
 </section>

 <section className="py-6 md:py-10">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {eventItems.map((item) => {
 const Icon = item.icon;
 const hasMedia =
 item.images.length > 0 || item.coverage.length > 0;
 const cardClassName =
 "group relative block mb-6 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-royal-500/20";
 const ctaClassName = hasMedia
 ? "shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-900 shadow-sm flex gap-2 group-hover:border-royal-600 group-hover:bg-royal-600"
 : "shrink-0 items-center justify-center rounded-full border border-gray-300 bg-gray-100 px-5 py-3 text-sm font-bold text-gray-500 shadow-sm flex gap-2";
 const content = (
 <>
 <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white transition-colors group-hover:from-royal-50 group-hover:to-white" />
 <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-7 md:p-8">
 <div className="min-w-0">
 <div className="flex items-center gap-3 text-gray-500">
 <Icon className="w-5 h-5 shrink-0 text-royal-600 transition-transform duration-300 group-hover:scale-110" />
 <span className="text-sm font-semibold uppercase tracking-[0.2em]">
 {item.eyebrow}
 </span>
 </div>
 <h3 className="mt-4 text-2xl md:text-3xl font-black text-gray-950 transition-colors group-hover:text-royal-600">
 {item.title}
 </h3>
 <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors">
 {item.description}
 </p>
 </div>

 <div className={ctaClassName}>
 {hasMedia
 ? "View Gallery & Coverage"
 : "Coming Soon Gallery"}
 <ArrowRight className="w-4 h-4" />
 </div>
 </div>
 </>
 );

 if (!hasMedia) {
 return (
 <article
 key={item.id}
 className={`${cardClassName} cursor-default opacity-[0.98]`}
 aria-label={`${item.title} gallery coming soon`}
 >
 {content}
 </article>
 );
 }

 return (
 <Link
 key={item.id}
 to={`/events/${item.id}`}
 className={`${cardClassName} hover:-translate-y-1 hover:shadow-xl`}
 >
 {content}
 </Link>
 );
 })}
 </div>
 </section>

 <section className="py-16 md:py-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="mb-8 max-w-3xl">
 <div className="flex items-center gap-3 text-gray-500">
 <Camera className="w-5 h-5 text-royal-600" />
 <span className="text-sm font-semibold uppercase tracking-[0.2em]">
 Media Archive
 </span>
 </div>
 <h2 className="mt-4 text-3xl md:text-4xl font-black text-gray-950">
 An image-first archive for future events.
 </h2>
 <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl">
 As the archive grows, this space can evolve into a global media
 gallery supporting albums and keyword filtering.
 </p>
 </div>

 <div className="grid gap-6 md:grid-cols-3">
 {galleryPlaceholders.map((item) => (
 <article
 key={item.title}
 className="rounded-[2rem] border border-dashed border-gray-300 bg-gray-50 p-7"
 >
 <div className="aspect-[4/3] rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.14),transparent_40%),linear-gradient(135deg,rgba(15,23,42,0.04),rgba(15,23,42,0.01))]),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] border border-white/40 flex items-center justify-center text-center px-4">
 <div className="max-w-xs">
 <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal-700">
 {item.title}
 </p>
 </div>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
 </div>
 </Layout>
 );
};

export default PressMedia;
