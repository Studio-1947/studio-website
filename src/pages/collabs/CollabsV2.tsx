import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

const COLLABS = [
  {
    name: 'Walking Project',
    slug: 'walking-project',
    category: 'Urban Mobility Advocacy',
    image: '/collabs/walkingproject/walkingprojectHero.png',
    accent: '#FDC700',
  },
  {
    name: 'Ai Crowd',
    slug: 'ai-crowd',
    category: 'Open AI Collaboration',
    image: '/collabs/aicrowd.png',
    accent: '#7C8BFF',
  },
  {
    name: 'Ecological Foundations',
    slug: 'ecological-foundations',
    category: 'Community & Ecology Programs',
    image: '/collabs/ecologicalfoundation.png',
    accent: '#1FA968',
  },
];

const CollabsV2: React.FC = () => {
  usePageMeta({
    title: 'Collaborations V2 - Studio 1947',
    description: 'An Our Works style visual test for collaboration projects at Studio 1947.',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-black min-h-screen pt-32 pb-24" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#works"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-12 group text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="mb-16">
            <span
              className="inline-block py-1 px-3 rounded-full border text-xs font-semibold tracking-wide uppercase mb-4"
              style={{ backgroundColor: 'rgba(253, 199, 0, 0.12)', borderColor: 'rgba(253, 199, 0, 0.35)', color: '#9A7700' }}
            >
              Collaboration Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white">
              Collabs
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg mt-4 max-w-2xl leading-relaxed">
              Same layout direction as Our Works, adapted for partnership-led projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {COLLABS.map((collab) => (
              <Link
                key={collab.slug}
                to={`/collabs/${collab.slug}`}
                className="flex flex-col gap-4 group cursor-pointer self-start"
              >
                <div className="aspect-[4/3] w-full rounded-2xl relative overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
                  <img
                    src={collab.image}
                    alt={collab.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1"
                    style={{ backgroundColor: collab.accent }}
                  />
                </div>

                <div className="flex flex-col gap-1 px-1">
                  <span className="font-bold text-gray-900 dark:text-white text-base leading-snug transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {collab.name}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 text-sm leading-snug">
                    {collab.category}
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

export default CollabsV2;
