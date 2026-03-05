import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Layout from './components/Layout.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import './index.css';
import NotFound from './pages/NotFound.tsx';

// ─── Route-level lazy imports ──────────────────────────────────────────────
// Each lazy() call creates a separate chunk loaded only when the route is visited

// Core pages
const Initiative = lazy(() => import('./pages/Initiative.tsx'));
const TeamMember = lazy(() => import('./pages/TeamMember.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Careers = lazy(() => import('./pages/Careers.tsx'));
const Story = lazy(() => import('./pages/Story.tsx'));
const Solutions = lazy(() => import('./pages/Solutions.tsx'));
const ComingSoon = lazy(() => import('./pages/ComingSoon.tsx'));

// Blog pages
const Blogs = lazy(() => import('./pages/blogs/Blogs.tsx'));
const BlogPost = lazy(() => import('./pages/blogs/BlogPost.tsx'));

// Product pages
const Products = lazy(() => import('./pages/products/Products.tsx'));
const Doptor = lazy(() => import('./pages/products/Doptor.tsx'));
const Angan = lazy(() => import('./pages/products/Angan.tsx'));
const DataAnalysis = lazy(() => import('./pages/products/DataAnalysis.tsx'));
const SocialMedia = lazy(() => import('./pages/products/SocialMedia.tsx'));

// Collabs pages
const Collabs = lazy(() => import('./pages/collabs/Collabs.tsx'));
const WalkingProject = lazy(() => import('./pages/collabs/WalkingProject.tsx'));
const AiCrowd = lazy(() => import('./pages/collabs/AiCrowd.tsx'));
const EcologicalFoundations = lazy(() => import('./pages/collabs/EcologicalFoundations.tsx'));

// Our Work pages
const MirikCollege = lazy(() => import('./pages/ourwork/MirikCollege.tsx'));
const MadlyInLove = lazy(() => import('./pages/ourwork/MadlyInLove.tsx'));
const FesIndia = lazy(() => import('./pages/ourwork/FesIndia.tsx'));
const NestHomes = lazy(() => import('./pages/ourwork/NestHomes.tsx'));
const RemodelUn = lazy(() => import('./pages/ourwork/RemodelUn.tsx'));
const Rajkamal = lazy(() => import('./pages/ourwork/Rajkamal.tsx'));
const AiCrowdBadge = lazy(() => import('./pages/ourwork/AiCrowdBadge.tsx'));
const Vanya = lazy(() => import('./pages/ourwork/Vanya.tsx'));

// Legal pages
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy.tsx'));
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService.tsx'));

// ─── Loading Fallback ──────────────────────────────────────────────────────
const PageLoader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'var(--bg, #fff)',
  }}>
    <div style={{
      width: 40,
      height: 40,
      border: '3px solid #e5e7eb',
      borderTopColor: '#1d4ed8',
      borderRadius: '50%',
      animation: 'spin 0.7s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

// ─── Root ──────────────────────────────────────────────────────────────────
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<App />} />

          {/* Initiative Routes */}
          <Route path="/initiative" element={<Layout><Initiative /></Layout>} />

          {/* Core Routes */}
          <Route path="/team/:slug" element={<TeamMember />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/solutions" element={<Solutions />} />

          {/* Blog Routes */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />

          {/* Product Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/doptor" element={<Doptor />} />
          <Route path="/products/angan" element={<Angan />} />
          <Route path="/products/data-analysis" element={<DataAnalysis />} />
          <Route path="/products/social-media" element={<SocialMedia />} />

          {/* Collabs Routes */}
          <Route path="/collabs" element={<Collabs />} />
          <Route path="/collabs/walking-project" element={<WalkingProject />} />
          <Route path="/collabs/ai-crowd" element={<AiCrowd />} />
          <Route path="/collabs/ecological-foundations" element={<EcologicalFoundations />} />

          {/* Our Work Routes */}
          <Route path="/ourwork/mirik-college" element={<MirikCollege />} />
          <Route path="/ourwork/madly-in-love" element={<MadlyInLove />} />
          <Route path="/ourwork/fes-india" element={<FesIndia />} />
          <Route path="/ourwork/nest-homes" element={<NestHomes />} />
          <Route path="/ourwork/remodel-un" element={<RemodelUn />} />
          <Route path="/ourwork/rajkamal" element={<Rajkamal />} />
          <Route path="/ourwork/aicrowd-badge" element={<AiCrowdBadge />} />
          <Route path="/ourwork/vanya" element={<Vanya />} />

          {/* Legal Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Catch-all for unimplemented sections */}
          <Route path="/collabs/*" element={<ComingSoon />} />
          <Route path="/initiative/*" element={<ComingSoon />} />

          {/* Global 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
