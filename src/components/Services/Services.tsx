import { Link } from "react-router-dom";

export default function Services() {
 return (
 <section className="relative py-24 md:py-32 lg:min-h-screen lg:flex lg:items-center border-b border-gray-200/50 overflow-hidden bg-black">
 {/* Background illustration */}
 <div
 className="absolute inset-0 w-full h-full pointer-events-none select-none"
 aria-hidden="true"
 >
 <img
 src="https://res.cloudinary.com/drgb8w8ak/image/upload/v1779518409/what-we-do_qvvcqs.jpg"
 alt=""
 className="w-full h-full object-cover object-center opacity-30 blur-sm"
 loading="lazy"
 decoding="async"
 />
 </div>

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

 {/* Centralized, Premium Introduction */}
 <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
 <span className="inline-block py-1.5 px-4 text-sm font-bold tracking-widest uppercase mb-8 text-primary">
 What We Do
 </span>
 <h2
 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-white"
 style={{ fontFamily: 'Inter, sans-serif' }}
 >
 Comprehensive solutions<br />
 for<br />
 the modern<br />
 <span className="text-primary">digital landscape.</span>
 </h2>
 <p
 className="text-lg md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl mb-12"
 style={{ fontFamily: 'Inter, sans-serif' }}
 >
 From performance marketing and cutting-edge web development to high-end photography and brand strategy, we provide everything your business needs to scale elegantly and efficiently.
 </p>

 <Link
 to="/solutions"
 className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-white bg-[#383649] border-0 hover:bg-white hover:text-[#383649] transition-colors duration-300"
 >
 Explore All Solutions
 </Link>
 </div>

 </div>
 </section>
 );
}
