import React from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  ExternalLink,
  Mountain,
  Newspaper,
} from "lucide-react";
import Layout from "../components/Layout";
import { usePageMeta } from "../hooks/usePageMeta";

const pressItems = [
  {
    title:
      "The Ghibli Wars: New turn, accessible art versus the war of existence",
    source: "The New Indian Express",
    date: "07 Apr 2025",
    href: "https://www.newindianexpress.com/states/delhi/2025/Apr/07/the-ghibli-wars-new-turn-accessible-art-versus-the-war-of-existence",
    summary:
      "Coverage that explores how accessible art is reshaping the conversation around creative work, ownership, and audience reach.",
  },
];

const eventItems = [
  {
    title: "Annual Event",
    eyebrow: "Recent",
    description:
      "A recap of our recent annual gathering will live here. Photos and highlights can be added as the archive grows.",
    icon: CalendarDays,
  },
  {
    title: "Sandakphu Trek",
    eyebrow: "Recent",
    description:
      "A recent trekking story from Sandakphu will sit here with a photo gallery and short narrative recap.",
    icon: Mountain,
  },
];

const galleryPlaceholders = [
  {
    title: "Media Gallery",
    caption:
      "Photo sets will appear here. When clicked, each image can open into a swipeable lightbox view.",
  },
  {
    title: "Archive View",
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
      <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
        <section className="relative overflow-hidden pt-32 pb-20 md:pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-50/70 via-white to-white dark:from-royal-950/20 dark:via-gray-950 dark:to-gray-950" />
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.12),transparent_45%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_38%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_45%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_38%)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-royal-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-royal-700 shadow-sm dark:border-royal-900/40 dark:bg-white/5 dark:text-royal-300">
                Press & Media
              </span>

              <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-gray-950 dark:text-white">
                Stories, events, and visual coverage in one place.
              </h1>

              <p className="mt-5 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl">
                We’ll keep press coverage, annual event recaps, trekking notes,
                and future media galleries together on a single page for now. As
                the archive grows, the page can expand into dedicated detail
                views when it becomes useful for SEO and navigation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <a
                href={pressItems[0].href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-50/90 via-white to-white dark:from-royal-950/30 dark:via-gray-900 dark:to-gray-900" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center gap-3 text-royal-600 dark:text-royal-400">
                    <Newspaper className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                      Featured Press
                    </span>
                  </div>

                  <h2 className="mt-5 text-3xl md:text-4xl font-black leading-tight text-gray-950 dark:text-white max-w-3xl">
                    {pressItems[0].title}
                  </h2>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                    {pressItems[0].source} · {pressItems[0].date}
                  </p>

                  <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {pressItems[0].summary}
                  </p>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-royal-700 dark:text-royal-300">
                    Read article
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </a>

              <div className="grid gap-6">
                {eventItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-7 md:p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                          <Icon className="w-5 h-5 text-royal-600 dark:text-royal-400" />
                          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                            {item.eyebrow}
                          </span>
                        </div>
                        <h3 className="mt-4 text-2xl md:text-3xl font-black text-gray-950 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
                          Gallery coming soon
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <Camera className="w-5 h-5 text-royal-600 dark:text-royal-400" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Media Gallery
                </span>
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-gray-950 dark:text-white">
                An image-first archive for events and coverage.
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl">
                The gallery is structured to support click-to-open viewing with
                next and previous navigation, so once photos are added later,
                users can browse albums without losing context.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {galleryPlaceholders.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-dashed border-gray-300 bg-gray-50 p-7 dark:border-gray-700 dark:bg-gray-900/60"
                >
                  <div className="aspect-[4/3] rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.14),transparent_40%),linear-gradient(135deg,rgba(15,23,42,0.04),rgba(15,23,42,0.01))] dark:bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.22),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] border border-white/40 dark:border-white/10 flex items-center justify-center text-center px-4">
                    <div className="max-w-xs">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal-700 dark:text-royal-300">
                        {item.title}
                      </p>
                      {/* <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        {item.caption}
                      </p> */}
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
