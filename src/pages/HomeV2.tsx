import { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import { usePageMeta } from '../hooks/usePageMeta';

// Eagerly loaded Hero v2 with Antigravity background
import HeroV2 from '../components/HeroV2';

// Lazily loaded sections below the fold
const Services = lazy(() => import('../components/Services/Services'));
const Verticals = lazy(() => import('../components/Verticals/Verticals'));
const PortfolioShowcase = lazy(() => import('../components/PortfolioShowcase'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const OurProcess = lazy(() => import('../components/OurProcess'));
const OurProducts = lazy(() => import('../components/OurProducts'));
const LatestBlogs = lazy(() => import('../components/LatestBlogs'));
const Contact = lazy(() => import('../components/Contact'));

// Minimal placeholder while a section loads in
const SectionLoader = () => (
  <div style={{ minHeight: '200px' }} aria-hidden="true" />
);

export default function HomeV2() {
  usePageMeta({
    title: 'Studio 1947 – Experience the Future of Digital Wisdom',
    description: 'Studio 1947 is a creative studio crafting next-generation digital experiences. Discover our v2 homepage featuring interactive WebGL fluid simulations and modern design.',
  });

  return (
    <Layout>
      {/* Above the fold — eager v2 Hero */}
      <HeroV2 />

      {/* Below the fold — lazy loaded sections */}
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Verticals />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <PortfolioShowcase />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <OurProcess />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <OurProducts />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LatestBlogs />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      
      <Analytics />
    </Layout>
  );
}
