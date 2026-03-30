import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

const YELLOW = '#FDC700';

const galleryImages = [
  // Only include images that exist in the folder
  '/collabs/walkingproject/poster01.jpg',
  '/collabs/walkingproject/poster02.png',
  '/collabs/walkingproject/poster03.png',
  '/collabs/walkingproject/Poster%2016.png',
  '/collabs/walkingproject/Instagram%20post%20-%2011.png',
  '/collabs/walkingproject/Frame%20137.png',
];

const websiteImage = '/collabs/walkingproject/website_view.png';

const logoImages = [
  '/collabs/walkingproject/logo01.png',
  '/collabs/walkingproject/logo02.png',
];


import { useState, useMemo } from 'react';

const WalkingProjectV2: React.FC = () => {
  usePageMeta({
    title: 'Walking Project - Studio 1947',
    description: 'A case-study treatment of Walking Project in an Our Works style format.',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Lightbox logic (mirroring BrandWorkTemplate)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // Lightbox order: logoImages, galleryImages, websiteImage
  const lightboxImages = useMemo(() => [...logoImages, ...galleryImages, websiteImage], []);
  const hasLightbox = lightboxIndex !== null && lightboxImages.length > 0;
  const activeImage = hasLightbox ? lightboxImages[lightboxIndex!] : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxIndex(null);
      if (event.key === 'ArrowRight') setLightboxIndex((prev) => prev === null ? prev : (prev + 1) % lightboxImages.length);
      if (event.key === 'ArrowLeft') setLightboxIndex((prev) => prev === null ? prev : (prev - 1 + lightboxImages.length) % lightboxImages.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, lightboxImages.length]);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex((prev) => prev === null ? prev : (prev - 1 + lightboxImages.length) % lightboxImages.length);
  const goNext = () => setLightboxIndex((prev) => prev === null ? prev : (prev + 1) % lightboxImages.length);

  return (
    <Layout>
      <div className="bg-[#fafafa] text-[#111111] min-h-screen overflow-x-hidden selection:bg-[#111111] selection:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="pt-28 px-6 lg:px-16 max-w-[1440px] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <header className="px-6 lg:px-16 max-w-[1440px] mx-auto pt-10 pb-14">
          <span
            className="inline-block px-3 py-1 text-xs uppercase tracking-wide font-semibold rounded-full mb-6"
            style={{ backgroundColor: 'rgba(253,199,0,0.14)', border: '1px solid rgba(253,199,0,0.35)', color: '#8D6E00' }}
          >
            Collaboration Case Study
          </span>

          <h1 className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] font-black leading-[0.9] tracking-[-0.04em]">
            Walking Project
          </h1>

          <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Advocacy, communication, and design assets created to make Mumbai streets safer and more walkable.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="px-2.5 py-1 rounded-full bg-[#efefef]">Inter</span>
              <span className="px-2.5 py-1 rounded-full bg-[#efefef]">#FDC700</span>
            </div>
          </div>
        </header>

        {/* Identity Section */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-10 pb-20 px-6 lg:px-16 max-w-[1440px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.225em] text-gray-500 mb-8">Identity</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {logoImages.map((src, i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-900 p-8 min-h-[180px] flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="focus:outline-none"
                  aria-label={`Open logo ${i + 1}`}
                >
                  <img src={src} alt={`Walking Project logo ${i + 1}`} className="max-h-28 w-auto object-contain" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Overview Section */}
        <section className="border-t border-[#e0e0e0] pt-10 pb-20 px-6 lg:px-16 max-w-[1440px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.225em] text-gray-500 mb-8">Overview</p>
          <div className="max-w-3xl space-y-5 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              Walking Project works at the intersection of citizen experience and urban policy, highlighting the everyday friction faced by pedestrians in Mumbai.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              This layout follows the Our Works structure to present collaboration work in a cleaner archival style while preserving project emotion through bold yellow accents.
            </p>
          </div>
        </section>

        {/* Color & Type Section */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-10 pb-20 px-6 lg:px-16 max-w-[1440px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.225em] text-gray-500 mb-8">Color & Type</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <div className="h-24 rounded-md mb-4" style={{ backgroundColor: YELLOW }} />
              <p className="text-sm text-gray-700 dark:text-gray-300">Hex #FDC700</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">RGB 253, 199, 0</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">CMYK 0, 21, 100, 1</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col justify-center">
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Typeface</p>
              <p className="text-4xl font-bold">Inter</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Sans-serif for headlines, body, and digital readability.</p>
            </div>
          </div>
        </section>


        {/* Applications Section (Gallery) */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-10 pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.225em] text-gray-500 mb-8">Applications</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {galleryImages.map((src, i) => {
              const idx = logoImages.length + i;
              return (
                <div key={i} className="overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <button
                    type="button"
                    onClick={() => openLightbox(idx)}
                    className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111]"
                    aria-label={`Open application ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Walking Project application ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Website Section */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-10 pb-24 px-6 lg:px-16 max-w-[1440px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.225em] text-gray-500 mb-8">Website</p>
          <div className=" overflow-hidden max-w-5xl mx-auto">
            <button
              type="button"
              onClick={() => openLightbox(logoImages.length + galleryImages.length)}
              className="block w-full focus:outline-none"
              aria-label="Open website image"
            >
              <img
                src={websiteImage}
                alt="Walking Project website preview"
                className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[430px] object-contain p-3 md:p-5 transition-transform duration-500 hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
            </button>
          </div>
          <div className="max-w-3xl mx-auto mt-8 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              The website experience extends the campaign language into a digital format, balancing strong civic messaging with clear visual hierarchy and easy readability.
            </p>
          </div>
        </section>

        <section className="border-t border-gray-200 dark:border-gray-800 pt-10 pb-24 px-6 lg:px-16 max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto flex justify-center">
            <a
              href="http://www.walkingproject.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#FDC700] text-[#111111] px-8 py-3.5 text-sm md:text-base font-semibold tracking-wide hover:bg-[#e9b700] transition-colors duration-300"
            >
              Visit Walking Project
            </a>
          </div>
        </section>

        {/* Lightbox Modal */}
        {hasLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeLightbox}>
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold focus:outline-none"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              type="button"
            >
              ×
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl font-bold focus:outline-none"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
              type="button"
            >
              ‹
            </button>
            <img
              src={activeImage!}
              alt="Walking Project large preview"
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white object-contain"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl font-bold focus:outline-none"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
              type="button"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WalkingProjectV2;
