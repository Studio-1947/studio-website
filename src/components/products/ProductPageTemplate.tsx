import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import ContactModal from '../ContactModal';
import { type Product, productColorConfig } from '../../data/productsData';
import { usePageMeta } from '../../hooks/usePageMeta';

interface Props {
  product: Product;
}

export default function ProductPageTemplate({ product }: Props) {
  const colors = productColorConfig[product.accentColor];
  const [isContactOpen, setIsContactOpen] = useState(false);

  usePageMeta({
    title: `${product.name} – Studio 1947`,
    description: product.description,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Subtle background image — texture only */}
          <div
            className="absolute inset-0 opacity-[0.07] dark:opacity-[0.04] scale-105"
            style={{
              backgroundImage: `url(${product.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px)',
            }}
          />
          {/* Gradient wash over the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors mb-16"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All Products
            </Link>

            <div className="max-w-4xl">
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${colors.badge}`}>
                {product.category}
              </span>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-none tracking-tight mb-6">
                {product.name}
              </h1>

              <p className={`text-xl md:text-2xl font-light leading-relaxed mb-8 ${colors.accentText}`}>
                {product.tagline}
              </p>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-12">
                {product.description}
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 mb-12">
                {product.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`border rounded-2xl px-6 py-4 min-w-[140px] ${colors.statBorder}`}
                  >
                    <p className={`text-2xl font-black ${colors.accentText}`}>{stat.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setIsContactOpen(true)} className={`px-8 py-4 rounded-full font-bold transition-colors cursor-pointer ${colors.primaryBtn}`}>
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="py-20 md:py-28 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <div className={`w-12 h-1 rounded-full mb-6 ${colors.divider}`} />
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight">
                  About<br />{product.name}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-6">
                {product.aboutParagraphs.map((para, i) => (
                  <p key={i} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800/30 relative overflow-hidden">
          {/* Very faint background repeat */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
            style={{
              backgroundImage: `url(${product.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(8px)',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <div className={`w-12 h-1 rounded-full mb-6 ${colors.divider}`} />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                {product.featuresHeading}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colors.iconBg}`}>
                    <svg className={`w-6 h-6 ${colors.iconText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={feature.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <div className={`w-12 h-1 rounded-full mb-6 ${colors.divider}`} />
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                {product.useCasesHeading}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.useCases.map((uc, i) => (
                <div key={i} className="group">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-sm font-black ${colors.iconBg} ${colors.iconText}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {uc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gray-900 dark:bg-black">
          {/* Background image at moderate opacity */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${product.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 dark:from-black/90 dark:to-black/70" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                {product.ctaHeading}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-10">
                {product.ctaBody}
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setIsContactOpen(true)} className={`px-8 py-4 rounded-full font-bold transition-colors cursor-pointer ${colors.primaryBtn}`}>
                  Get in Touch
                </button>
                <Link
                  to="/products"
                  className="px-8 py-4 rounded-full font-bold border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Explore Other Products
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </Layout>
  );
}
