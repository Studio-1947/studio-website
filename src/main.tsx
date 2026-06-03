import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.tsx";
import Layout from "./components/Layout.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import "./index.css";
import NotFound from "./pages/NotFound.tsx";
import ExternalRedirect from "./components/ExternalRedirect.tsx";

// ─── Route-level lazy imports ──────────────────────────────────────────────
// Each lazy() call creates a separate chunk loaded only when the route is visited

// Core pages
const Initiative = lazy(() => import("./pages/Initiative.tsx"));
const TeamMember = lazy(() => import("./pages/TeamMember.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Careers = lazy(() => import("./pages/Careers.tsx"));
const Solutions = lazy(() => import("./pages/Solutions.tsx"));
const ComingSoon = lazy(() => import("./pages/ComingSoon.tsx"));
const PressMedia = lazy(() => import("./pages/PressMedia.tsx"));
const EventDetail = lazy(() => import("./pages/EventDetail.tsx"));

// Blog pages
const Blogs = lazy(() => import("./pages/blogs/Blogs.tsx"));
const BlogPost = lazy(() => import("./pages/blogs/BlogPost.tsx"));

// Product pages
const ProductsAndServices = lazy(() => import("./pages/products-and-services/ProductsAndServices.tsx"));
const Doptor = lazy(() => import("./pages/products-and-services/Doptor.tsx"));
const Angan = lazy(() => import("./pages/products-and-services/Angan.tsx"));
const DataAnalysis = lazy(() => import("./pages/products-and-services/DataAnalysis.tsx"));
const SocialMedia = lazy(() => import("./pages/products-and-services/SocialMedia.tsx"));

// Collabs pages
const WalkingProjectV2 = lazy(
  () => import("./pages/collabs/WalkingProjectV2.tsx"),
);
const AiCrowd = lazy(() => import("./pages/collabs/AiCrowd.tsx"));
const EcologicalFoundations = lazy(
  () => import("./pages/collabs/EcologicalFoundations.tsx"),
);
const MirikCollegeV2 = lazy(() => import("./pages/portfolio/MirikCollege.tsx"));
const Sundargaan = lazy(() => import("./pages/collabs/Sundargaan.tsx"));

// Figma test page (temporary)
const FigmaTest = lazy(() => import("./pages/figma/FigmaTest.tsx"));

// V2 Portfolio Components
const PortfolioV2 = lazy(() => import("./pages/portfolio/Portfolio.tsx"));
const RemodelUNv2 = lazy(() => import("./pages/portfolio/RemodelUN.tsx"));
const FermyLabV2 = lazy(() => import("./pages/portfolio/FermyLab.tsx"));
const RajkamalV2 = lazy(() => import("./pages/portfolio/RajkamalPrakashan.tsx"));
const AwchV2 = lazy(() => import("./pages/portfolio/Awch.tsx"));
const LocalFuturesV2 = lazy(
  () => import("./pages/portfolio/LocalFutures.tsx"),
);
const VillageWaysV2 = lazy(
  () => import("./pages/portfolio/VillageWays.tsx"),
);
const AiCrowdV2 = lazy(() => import("./pages/portfolio/AiCrowd.tsx"));

const HomeV2 = lazy(() => import("./pages/HomeV2.tsx"));


// Legal pages
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy.tsx"));
const TermsOfService = lazy(() => import("./pages/legal/TermsOfService.tsx"));

// ─── Loading Fallback ──────────────────────────────────────────────────────
// eslint-disable-next-line react-refresh/only-export-components
const PageLoader = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "var(--bg, #fff)",
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        border: "3px solid #e5e7eb",
        borderTopColor: "#1d4ed8",
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

// ─── Root ──────────────────────────────────────────────────────────────────
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
          <Routes>
          <Route path="/" element={<App />} />
          <Route path="/v2" element={<HomeV2 />} />


          {/* External Redirects */}
          <Route
            path="/sirflocal"
            element={<ExternalRedirect to="https://www.sirflocal.in" />}
          />

          {/* Initiative Routes */}
          <Route
            path="/initiative"
            element={
              <Layout>
                <Initiative />
              </Layout>
            }
          />

          {/* Core Routes */}
          <Route path="/team/:slug" element={<TeamMember />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/press-media" element={<PressMedia />} />
          <Route path="/events/:eventId" element={<EventDetail />} />

          {/* Blog Routes */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />

          {/* Product Routes */}
          <Route path="/products-and-services" element={<ProductsAndServices />} />
          <Route path="/products-and-services/doptor" element={<Doptor />} />
          <Route path="/products-and-services/angan" element={<Angan />} />
          <Route path="/products-and-services/data-analysis" element={<DataAnalysis />} />
          <Route path="/products-and-services/social-media" element={<SocialMedia />} />

          {/* Collabs Routes */}
          <Route path="/collabs" element={<Navigate to="/" replace />} />
          <Route path="/collabs-v2" element={<Navigate to="/" replace />} />
          <Route
            path="/collabs/walking-project"
            element={<WalkingProjectV2 />}
          />
          <Route
            path="/collabs/walking-project-v2"
            element={<WalkingProjectV2 />}
          />
          <Route path="/collabs/ai-crowd" element={<AiCrowd />} />
          <Route
            path="/collabs/ecological-foundations"
            element={<EcologicalFoundations />}
          />
          <Route path="/collabs/mirik-college" element={<Navigate to="/portfolio/mirik-college" replace />} />
          <Route path="/collabs/mirikcollege" element={<Navigate to="/portfolio/mirik-college" replace />} />
          <Route path="/collabs/sundargaan" element={<Sundargaan />} />

          {/* Figma test route (temporary) */}
          <Route path="/figma" element={<FigmaTest />} />

          {/* Portfolio V2 Routes */}
          <Route path="/portfolio" element={<PortfolioV2 />} />
          <Route path="/portfolio/remodel-un" element={<RemodelUNv2 />} />
          <Route path="/portfolio/fermy-lab" element={<FermyLabV2 />} />
          <Route path="/portfolio/rajkamal-prakashan" element={<RajkamalV2 />} />
          <Route path="/portfolio/awch" element={<AwchV2 />} />
          <Route
            path="/portfolio/local-futures"
            element={<LocalFuturesV2 />}
          />
          <Route
            path="/portfolio/village-ways"
            element={<VillageWaysV2 />}
          />
          <Route path="/portfolio/ai-crowd" element={<AiCrowdV2 />} />
          <Route path="/portfolio/mirik-college" element={<MirikCollegeV2 />} />

          {/* Our Work Routes */}


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
