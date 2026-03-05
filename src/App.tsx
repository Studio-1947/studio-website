import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import { Analytics } from '@vercel/analytics/react';

// Eagerly loaded — above the fold, must render immediately
import Hero from './components/Hero';
import ClientsTicker from './components/ClientsTicker';

// Lazily loaded — below the fold, improves initial bundle size
const Services = lazy(() => import('./components/Services/Services'));
const Verticals = lazy(() => import('./components/Verticals/Verticals'));
const BuiltForImpact = lazy(() => import('./components/BuiltForImpact'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const OurProcess = lazy(() => import('./components/OurProcess'));
const OurProducts = lazy(() => import('./components/OurProducts'));
const LatestBlogs = lazy(() => import('./components/LatestBlogs'));
const Contact = lazy(() => import('./components/Contact'));

// Minimal placeholder while a section loads in
const SectionLoader = () => (
  <div style={{ minHeight: '200px' }} aria-hidden="true" />
);

function App() {
  return (
    <Layout>
      {/* Above the fold — eager */}
      <Hero />
      <ClientsTicker />

      {/* Below the fold — lazy, each gets its own chunk */}
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Verticals />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BuiltForImpact />
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

export default App;
