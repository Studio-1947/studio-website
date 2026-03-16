// ─────────────────────────────────────────────────────────────────────────────
// BrandWorkTemplate
// Reusable page template for all "Our Work" brand case-study pages.
// Inspired by the editorial / archival aesthetic of brandarchive.xyz.
//
// Pass a BrandWork data object as the `data` prop — no content lives here.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Layout from './Layout';
import type { BrandWork } from '../data/ourworksData';

interface Props {
    data: BrandWork;
}

// ── Small reusable sub-components ────────────────────────────────────────────

/** Section wrapper: thin top-border + small uppercase label, then children. */
function Section({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <section className="border-t border-[#e0e0e0] pt-10 pb-20 px-6 lg:px-16 max-w-[1440px] mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.225em] text-[#999] mb-10 select-none">
                {label}
            </p>
            {children}
        </section>
    );
}

/** Tight uniform image grid — 1 col mobile, 2 col tablet, 3 col desktop. */
function ImageGrid({ images, alt }: { images: string[]; alt: string }) {
    const onImageClick = (src: string) => {
        const event = new CustomEvent('brandwork-open-lightbox', { detail: { src } });
        window.dispatchEvent(event);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {images.map((src, i) => (
                <div key={i} className="overflow-hidden bg-[#f0f0f0]">
                    <button
                        type="button"
                        onClick={() => onImageClick(src)}
                        className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111]"
                        aria-label={`Open ${alt} ${i + 1}`}
                    >
                        <img
                            src={src}
                            alt={`${alt} ${i + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
                        />
                    </button>
                </div>
            ))}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function BrandWorkTemplate({ data }: Props) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const lightboxImages = useMemo(
        () => [
            ...data.logoImages,
            ...data.artDirectionImages,
            ...data.applicationImages,
            ...(data.website ? [data.website.image] : []),
        ],
        [data.logoImages, data.artDirectionImages, data.applicationImages, data.website]
    );

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    useEffect(() => {
        const handleOpen = (event: Event) => {
            const customEvent = event as CustomEvent<{ src?: string }>;
            const src = customEvent.detail?.src;
            if (!src) return;

            const imageIndex = lightboxImages.findIndex((item) => item === src);
            if (imageIndex >= 0) {
                setLightboxIndex(imageIndex);
            }
        };

        window.addEventListener('brandwork-open-lightbox', handleOpen as EventListener);
        return () => window.removeEventListener('brandwork-open-lightbox', handleOpen as EventListener);
    }, [lightboxImages]);

    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setLightboxIndex(null);
                return;
            }

            if (event.key === 'ArrowRight') {
                setLightboxIndex((prev) => {
                    if (prev === null) return prev;
                    return (prev + 1) % lightboxImages.length;
                });
                return;
            }

            if (event.key === 'ArrowLeft') {
                setLightboxIndex((prev) => {
                    if (prev === null) return prev;
                    return (prev - 1 + lightboxImages.length) % lightboxImages.length;
                });
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [lightboxIndex, lightboxImages.length]);

    const hasLightbox = lightboxIndex !== null && lightboxImages.length > 0;
    const activeImage = hasLightbox ? lightboxImages[lightboxIndex] : null;

    const goPrev = () => {
        setLightboxIndex((prev) => {
            if (prev === null) return prev;
            return (prev - 1 + lightboxImages.length) % lightboxImages.length;
        });
    };

    const goNext = () => {
        setLightboxIndex((prev) => {
            if (prev === null) return prev;
            return (prev + 1) % lightboxImages.length;
        });
    };

    return (
        <Layout>
            <div className="bg-[#fafafa] text-[#111111] min-h-screen font-sans overflow-x-hidden selection:bg-[#111111] selection:text-white">

                {/* ── Back navigation ──────────────────────────────────────── */}
                <div className="pt-28 pb-0 px-6 lg:px-16 max-w-[1440px] mx-auto">
                    <Link
                        to="/ourworks"
                        className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999] hover:text-[#111] transition-colors duration-200"
                    >
                        <span className="block w-6 h-px bg-current" />
                        All Works
                    </Link>
                </div>

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <header className="px-6 lg:px-16 max-w-[1440px] mx-auto pt-12 pb-16">
                    {/* Brand name */}
                    <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-black tracking-[-0.04em] leading-[0.88] text-[#111111] break-words">
                        {data.title}
                    </h1>

                    {/* Subtitle + meta bar */}
                    <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <p className="text-lg md:text-xl text-[#555] font-light leading-snug max-w-xl">
                            {data.subtitle}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#666] shrink-0">
                            <span>
                                Designed by{' '}
                                <span className="text-[#111] font-semibold">{data.studio}</span>
                            </span>
                            <span className="hidden md:inline text-[#ccc]">·</span>
                            <div className="flex flex-wrap gap-1.5">
                                {data.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-0.5 bg-[#efefef] rounded-full text-[11px] font-medium text-[#555] tracking-wide"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Credits */}
                    {data.credits.length > 0 && (
                        <div className="mt-10 pt-8 border-t border-[#e0e0e0] flex flex-wrap gap-x-10 gap-y-5">
                            {data.credits.map((credit) => (
                                <div key={credit.role}>
                                    <span className="block text-[10px] uppercase tracking-[0.18em] text-[#aaa] mb-1">
                                        {credit.role}
                                    </span>
                                    <span className="text-sm font-medium text-[#111]">
                                        {credit.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </header>

                {/* ── Overview / Text ───────────────────────────────────────── */}
                {(data.overview.heading ||
                    data.overview.paragraphs.length > 0) && (
                    <Section label="Overview">
                        {data.overview.heading && (
                            <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-6 leading-snug">
                                {data.overview.heading}
                            </h2>
                        )}
                        <div className="max-w-3xl space-y-5">
                            {data.overview.paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className="text-base md:text-lg text-[#444] leading-relaxed"
                                >
                                    {p}
                                </p>
                            ))}
                        </div>
                    </Section>
                )}

                {/* ── Logo ──────────────────────────────────────────────────── */}
                {data.logoImages.length > 0 && (
                    <Section label="Logo">
                        <div className="bg-[#f0f0f0] p-8 md:p-16 flex flex-wrap items-center justify-center gap-8 min-h-[240px]">
                            {data.logoImages.map((src, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => {
                                        const event = new CustomEvent('brandwork-open-lightbox', { detail: { src } });
                                        window.dispatchEvent(event);
                                    }}
                                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111]"
                                    aria-label={`Open ${data.title} logo ${i + 1}`}
                                >
                                    <img
                                        src={src}
                                        alt={`${data.title} logo ${i + 1}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="max-h-48 max-w-xs w-auto object-contain"
                                    />
                                </button>
                            ))}
                        </div>
                    </Section>
                )}

                {/* ── Type ──────────────────────────────────────────────────── */}
                {data.typefaces.length > 0 && (
                    <Section label="Type">
                        <div className="space-y-10">
                            {data.typefaces.map((tf, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 pb-10 border-b border-[#e0e0e0] last:border-0 last:pb-0"
                                >
                                    {/* Specimen image OR large typeface name */}
                                    <div className="shrink-0">
                                        {tf.specimenImage ? (
                                            <img
                                                src={tf.specimenImage}
                                                alt={`${tf.name} specimen`}
                                                className="h-[60px] w-auto object-contain"
                                            />
                                        ) : (
                                            <span
                                                className="block text-[2.5rem] md:text-[3.5rem] font-bold leading-none text-[#111] tracking-tight"
                                                style={{ fontFamily: 'inherit' }}
                                            >
                                                {tf.name}
                                            </span>
                                        )}
                                    </div>

                                    {/* Meta */}
                                    <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm text-[#666]">
                                        {tf.style && (
                                            <span className="text-[#999]">{tf.style}</span>
                                        )}
                                        <span>
                                            Designer{' '}
                                            <span className="text-[#111] font-medium">
                                                {tf.designer}
                                            </span>
                                        </span>
                                        <span>
                                            Released{' '}
                                            <span className="text-[#111] font-medium">
                                                {tf.released}
                                            </span>
                                        </span>
                                        <span>
                                            Foundry{' '}
                                            <span className="text-[#111] font-medium">
                                                {tf.foundry}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                {/* ── Color ─────────────────────────────────────────────────── */}
                {data.colors.length > 0 && (
                    <Section label="Color">
                        <div className="flex flex-wrap gap-4">
                            {data.colors.map((color, i) => (
                                <div key={i} className="flex flex-col gap-2 min-w-[112px]">
                                    {/* Swatch */}
                                    <div
                                        className="w-full h-24 rounded-sm"
                                        style={{ backgroundColor: color.hex }}
                                        title={color.label}
                                    />
                                    {/* Values */}
                                    <div className="text-[11px] text-[#666] leading-[1.6] space-y-0.5">
                                        {color.label && (
                                            <p className="font-semibold text-[#111] text-[12px]">
                                                {color.label}
                                            </p>
                                        )}
                                        <p>
                                            <span className="text-[#aaa]">Hex </span>
                                            {color.hex}
                                        </p>
                                        <p>
                                            <span className="text-[#aaa]">RGB </span>
                                            {color.rgb}
                                        </p>
                                        {color.cmyk && (
                                            <p>
                                                <span className="text-[#aaa]">CMYK </span>
                                                {color.cmyk}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                {data.website && (
                    <Section label="Website">
                        <div className="max-w-5xl mx-auto">
                            <div className="overflow-hidden bg-[#f3f3f3] rounded-2xl">
                                <button
                                    type="button"
                                    onClick={() => {
                                        const event = new CustomEvent('brandwork-open-lightbox', {
                                            detail: { src: data.website!.image },
                                        });
                                        window.dispatchEvent(event);
                                    }}
                                    className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111]"
                                    aria-label={`Open ${data.title} website preview`}
                                >
                                    <img
                                        src={data.website.image}
                                        alt={data.website.alt ?? `${data.title} website preview`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[500px] object-contain p-3 md:p-5 transition-transform duration-500 hover:scale-[1.01]"
                                    />
                                </button>
                            </div>

                            {data.website.paragraphs.length > 0 && (
                                <div className="max-w-3xl mt-8 space-y-5 text-[#444]">
                                    {data.website.paragraphs.map((paragraph, index) => (
                                        <p key={index} className="text-base md:text-lg leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Section>
                )}

                {/* ── Art Direction ─────────────────────────────────────────── */}
                {data.artDirectionImages.length > 0 && (
                    <Section label="Art Direction">
                        <ImageGrid
                            images={data.artDirectionImages}
                            alt={`${data.title} art direction`}
                        />
                    </Section>
                )}

                {/* ── Application ───────────────────────────────────────────── */}
                {data.applicationImages.length > 0 && (
                    <Section label="Application">
                        <ImageGrid
                            images={data.applicationImages}
                            alt={`${data.title} application`}
                        />
                    </Section>
                )}

                {/* ── Footer spacer ─────────────────────────────────────────── */}
                <div className="h-24" />

                {/* ── Lightbox ──────────────────────────────────────────────── */}
                {hasLightbox && activeImage && (
                    <div
                        className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Image viewer"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <button
                            type="button"
                            onClick={() => setLightboxIndex(null)}
                            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/60"
                            aria-label="Close image viewer"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                goPrev();
                            }}
                            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/60"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                goNext();
                            }}
                            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/60"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                        <div
                            className="flex h-full w-full items-center justify-center px-4 py-16"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <img
                                src={activeImage}
                                alt={`${data.title} preview ${lightboxIndex + 1}`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/45 px-3 py-1 text-xs font-medium tracking-wide text-white/90">
                            {lightboxIndex + 1} / {lightboxImages.length}
                        </p>
                    </div>
                )}

            </div>
        </Layout>
    );
}
