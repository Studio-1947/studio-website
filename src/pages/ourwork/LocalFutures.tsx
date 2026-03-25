import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/-GMHIvCduTg';

export default function LocalFutures() {
  usePageMeta({
    title: 'Local Futures – Trade Gone Mad (Hindi) | Studio 1947',
    description:
      'Hindi translation of Local Futures video "Trade Gone Mad", embedded for direct playback.',
  });

  return (
    <Layout>
      <section className="bg-white dark:bg-black min-h-screen pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/ourworks"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Back to All Works
          </Link>

          <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            Local Futures
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Trade Gone Mad (Hindi Translation)
          </p>

          <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm bg-black">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={YOUTUBE_EMBED_URL}
                title="Trade Gone Mad - Hindi Translation"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
