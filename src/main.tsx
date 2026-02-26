import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Initiative from './pages/Initiative.tsx';
import TeamMember from './pages/TeamMember.tsx';
import About from './pages/About.tsx';
import Careers from './pages/Careers.tsx';
import Layout from './components/Layout.tsx';
import './index.css';
import Blogs from './pages/Blogs.tsx';
import BlogPost from './pages/BlogPost.tsx';
import Products from './pages/Products.tsx';
import Doptor from './pages/Doptor.tsx';
import Angan from './pages/Angan.tsx';
import DataAnalysis from './pages/DataAnalysis.tsx';
import SocialMedia from './pages/SocialMedia.tsx';
import Solutions from './pages/Solutions.tsx';
import ComingSoon from './pages/ComingSoon.tsx';
import Collabs from './pages/Collabs.tsx';
import WalkingProject from './pages/WalkingProject.tsx';
import AiCrowd from './pages/AiCrowd.tsx';
import EcologicalFoundations from './pages/EcologicalFoundations.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        
        {/* Initiative Routes */}
        <Route path="/initiative" element={<Layout><Initiative /></Layout>} />
        
        {/* Existing Routes */}
        <Route path="/team/:slug" element={<TeamMember />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />

        {/* Product Routes */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/doptor" element={<Doptor />} />
        <Route path="/products/angan" element={<Angan />} />
        <Route path="/products/data-analysis" element={<DataAnalysis />} />
        <Route path="/products/social-media" element={<SocialMedia />} />

        {/* Solutions Route */}
        <Route path="/solutions" element={<Solutions />} />

        {/* Collabs Routes */}
        <Route path="/collabs" element={<Collabs />} />
        <Route path="/collabs/walking-project" element={<WalkingProject />} />
        <Route path="/collabs/ai-crowd" element={<AiCrowd />} />
        <Route path="/collabs/ecological-foundations" element={<EcologicalFoundations />} />

        {/* Legal Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* Catch-all for sections not yet implemented */}
        <Route path="/collabs/*" element={<ComingSoon />} />
        <Route path="/initiative/*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
