import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import SirfLocalCatalog from './pages/SirfLocalCatalog.tsx';
import SirfLocalLanding from './pages/SirfLocalLanding.tsx';
import TeamMember from './pages/TeamMember.tsx';
import About from './pages/About.tsx';
import Layout from './components/Layout.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/initiative/sirflocal" element={<Layout><SirfLocalLanding /></Layout>} />
        <Route path="/initiative/sirflocal/catalog" element={<Layout><SirfLocalCatalog /></Layout>} />
        <Route path="/team/:slug" element={<TeamMember />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
