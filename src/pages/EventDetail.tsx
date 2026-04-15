import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, Video, CalendarDays } from "lucide-react";
import Layout from "../components/Layout";
import { usePageMeta } from "../hooks/usePageMeta";
import { eventItems } from "../data/pressMediaData";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const EventDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  // Find the event
  const event = eventItems.find((e) => e.id === eventId);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState<{ src: string }[]>([]);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);
    // If no event found, redirect back to press media
    if (!event) {
      navigate("/press-media", { replace: true });
    }
  }, [event, navigate]);

  useEffect(() => {
    setLoadedImages({});
  }, [eventId]);

  usePageMeta({
    title: event ? `${event.title} – Studio 1947` : "Event – Studio 1947",
    description: event?.description || "Studio 1947 Event Coverage",
  });

  if (!event) return null;

  const getOptimizedGalleryImage = (src: string, size: number) => {
    if (!src.includes("res.cloudinary.com") || !src.includes("/upload/")) {
      return src;
    }

    return src.replace(
      "/upload/",
      `/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto,w_${size},h_${size}/`,
    );
  };

  const openLightbox = (images: string[], startIndex: number) => {
    setLightboxSlides(images.map((src) => ({ src })));
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  const hasCoverage = event.coverage && event.coverage.length > 0;
  const hasImages = event.images && event.images.length > 0;
  const comingSoonPlaceholders = Array.from(
    { length: 6 },
    (_, index) => index + 1,
  );

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
        {/* Page Header */}
        <section className="relative overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-50/70 via-white to-white dark:from-royal-950/20 dark:via-gray-950 dark:to-gray-950" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back navigation */}
              <Link
                to="/press-media"
                className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-gray-500 hover:text-royal-600 transition-colors dark:text-gray-400 dark:hover:text-royal-400"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Press & Media
              </Link>

              <div className="flex items-center gap-3 text-royal-600 dark:text-royal-400 mb-4">
                <CalendarDays className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {event.eyebrow}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-950 dark:text-white">
                {event.title}
              </h1>

              <p className="mt-6 text-lg xl:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                {event.description}
              </p>
            </div>
          </div>
        </section>

        {/* Media Content */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Videos & Embeds Area */}
              {hasCoverage && (
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-8 text-gray-900 dark:text-white">
                    <Video className="w-6 h-6 text-royal-600 dark:text-royal-400" />
                    <h2 className="text-2xl md:text-3xl font-black">
                      Video Coverage
                    </h2>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {event.coverage.map((media) => (
                      <div
                        key={media.src}
                        className={`overflow-hidden rounded-[2rem] border border-gray-200 bg-black/5 shadow-md dark:border-gray-800 dark:bg-black transition-transform hover:-translate-y-1 duration-300 ${media.fullWidth ? "sm:col-span-2" : ""}`}
                      >
                        <div className={`w-full bg-black ${media.aspectRatio}`}>
                          <iframe
                            src={media.src}
                            title={media.title}
                            width="100%"
                            height="100%"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowFullScreen
                            className="h-full w-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Photos Area */}
              {hasImages && (
                <div>
                  <div className="flex items-center gap-3 mb-8 text-gray-900 dark:text-white">
                    <Camera className="w-6 h-6 text-royal-600 dark:text-royal-400" />
                    <h2 className="text-2xl md:text-3xl font-black">
                      Photo Gallery
                    </h2>
                  </div>
                  {/* Responsive grid for photo gallery */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {event.images.map((src, index) => (
                      <button
                        key={src + index}
                        type="button"
                        onClick={() => openLightbox(event.images, index)}
                        className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
                      >
                        {!loadedImages[src] && (
                          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
                        )}
                        <img
                          src={getOptimizedGalleryImage(src, 640)}
                          srcSet={`${getOptimizedGalleryImage(src, 320)} 320w, ${getOptimizedGalleryImage(src, 480)} 480w, ${getOptimizedGalleryImage(src, 640)} 640w`}
                          sizes="(max-width: 640px) 50vw, 33vw"
                          alt={`Gallery image ${index + 1}`}
                          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages[src] ? "opacity-100" : "opacity-0"}`}
                          loading="lazy"
                          decoding="async"
                          fetchPriority={index < 4 ? "high" : "low"}
                          width={640}
                          height={640}
                          onLoad={() =>
                            setLoadedImages((prev) => ({
                              ...prev,
                              [src]: true,
                            }))
                          }
                          onError={() =>
                            setLoadedImages((prev) => ({
                              ...prev,
                              [src]: true,
                            }))
                          }
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!hasImages && (
                <div>
                  <div className="flex items-center gap-3 mb-4 text-gray-900 dark:text-white">
                    <Camera className="w-6 h-6 text-royal-600 dark:text-royal-400" />
                    <h2 className="text-2xl md:text-3xl font-black">
                      Coming Soon Gallery
                    </h2>
                  </div>
                  <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    Expedition photos from this trek are being curated and will
                    be published here shortly.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {comingSoonPlaceholders.map((item) => (
                      <article
                        key={item}
                        className="relative aspect-square w-full overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
                        aria-label={`Coming soon gallery placeholder ${item}`}
                      >
                        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
                        <div className="relative z-10 flex h-full w-full items-end p-4">
                          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-gray-700 shadow-sm dark:bg-gray-950/90 dark:text-gray-200">
                            Coming Soon
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Lightbox Component */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxSlides}
        />
      </div>
    </Layout>
  );
};

export default EventDetail;
