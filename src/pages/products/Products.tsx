import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { productsGridData, productColorConfig } from "../../data/productsData";
import { usePageMeta } from "../../hooks/usePageMeta";

const Products: React.FC = () => {
 usePageMeta({
 title: "Products – Studio 1947",
 description:
 "Explore Studio 1947's suite of in-house software products — from office management and homestay operations to data dashboards and social analytics.",
 });

 useEffect(() => {
 window.scrollTo({ top: 0, left: 0, behavior: "instant" });
 }, []);

 return (
 <Layout>
 <div className="bg-white pt-32 pb-24 transition-colors duration-300 min-h-screen">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Header */}
 <div className="max-w-3xl mb-20 md:mb-28">
 <span className="text-royal-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
 Our Products
 </span>
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
 Software built from
 <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-indigo-600">
 the inside out.
 </span>
 </h1>
 <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
 We build our own products because we've seen the gaps that
 off-the-shelf software leaves behind. Each platform here started
 as a response to a real, observed problem — and is designed to
 solve it without unnecessary complexity.
 </p>
 </div>

 {/* Products grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
 {productsGridData.map((product) => {
 const colors = productColorConfig[product.accentColor];
 const bgObjectPosition =
 product.slug === "data-analysis" ? "center 38%" : "center";
 return (
 <Link
 key={product.slug}
 to={`/products/${product.slug}`}
 className="group relative rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white"
 >
 {/* Background image with focal framing so product device shots stay recognizable */}
 <img
 src={product.backgroundImage}
 alt=""
 aria-hidden="true"
 className="absolute inset-0 h-full w-full object-cover opacity-[0.18] group-hover:opacity-[0.24] transition-all duration-500 group-hover:scale-[1.03]"
 style={{ objectPosition: bgObjectPosition }}
 />
 <div className="absolute inset-0 bg-gradient-to-br from-white/78 via-white/66 to-white/52" />

 <div className="relative z-10 p-8 md:p-10 flex flex-col h-full min-h-[280px]">
 <div className="flex items-start justify-between mb-auto">
 <span
 className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${colors.badge}`}
 >
 {product.category}
 </span>
 <div
 className={`w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2 ${colors.iconBg}`}
 >
 <svg
 className={`w-4 h-4 ${colors.iconText}`}
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2.5}
 d="M9 5l7 7-7 7"
 />
 </svg>
 </div>
 </div>

 <div className="mt-12">
 <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight">
 {product.name}
 </h2>
 <p className="text-gray-500 leading-relaxed">
 {product.tagline}
 </p>
 <span
 className={`inline-flex items-center gap-2 mt-6 text-sm font-bold ${colors.accentText}`}
 >
 Explore Platform
 <svg
 className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2.5}
 d="M9 5l7 7-7 7"
 />
 </svg>
 </span>
 </div>
 </div>
 </Link>
 );
 })}
 </div>

 {/* Bottom CTA */}
 <div className="mt-24 md:mt-32 rounded-3xl p-8 md:p-16 bg-gray-900 text-center relative overflow-hidden">
 <div
 className="absolute inset-0 opacity-10"
 style={{
 backgroundImage:
 "url(https://images.unsplash.com/photo-1557683316-973673baf926?w=2000&auto=format&fit=crop)",
 backgroundSize: "cover",
 backgroundPosition: "center",
 }}
 />
 <div className="relative z-10 max-w-2xl mx-auto">
 <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
 Have a vision? Let's build it to spec!
 </h3>
 <p className="text-gray-400 text-lg mb-8 leading-relaxed">
 None of our existing products quite fit your problem? We design
 and build bespoke platforms from the ground up.
 </p>
 <Link
 to="/about"
 className="inline-block px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold transition-colors shadow-lg"
 >
 Talk to our team
 </Link>
 </div>
 </div>
 </div>
 </div>
 </Layout>
 );
};

export default Products;
