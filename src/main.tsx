import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Initiative from './pages/Initiative.tsx';
import TeamMember from './pages/TeamMember.tsx';
import About from './pages/About.tsx';
import Layout from './components/Layout.tsx';
import './index.css';

import ComingSoon from './pages/ComingSoon.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        {/* Initiative Routes */}
        <Route path="/initiative" element={<Layout><Initiative /></Layout>} />
        
        {/* Existing Routes */}
        <Route path="/team/:slug" element={<TeamMember />} />
        <Route path="/about" element={<About />} />

        {/* Catch-all for sections not yet implemented */}
        <Route path="/blogs" element={<ComingSoon />} />
        <Route path="/products/*" element={<ComingSoon />} />
        <Route path="/solutions" element={<ComingSoon />} />
        <Route path="/collabs/*" element={<ComingSoon />} />
        <Route path="/initiative/*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
