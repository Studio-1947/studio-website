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
const Story = lazy(() => import("./pages/Story.tsx"));
const Solutions = lazy(() => import("./pages/Solutions.tsx"));
const ComingSoon = lazy(() => import("./pages/ComingSoon.tsx"));
const PressMedia = lazy(() => import("./pages/PressMedia.tsx"));
const EventDetail = lazy(() => import("./pages/EventDetail.tsx"));

// Blog pages
const Blogs = lazy(() => import("./pages/blogs/Blogs.tsx"));
const BlogPost = lazy(() => import("./pages/blogs/BlogPost.tsx"));

// Product pages
const Products = lazy(() => import("./pages/products/Products.tsx"));
const Doptor = lazy(() => import("./pages/products/Doptor.tsx"));
const Angan = lazy(() => import("./pages/products/Angan.tsx"));
const DataAnalysis = lazy(() => import("./pages/products/DataAnalysis.tsx"));
const SocialMedia = lazy(() => import("./pages/products/SocialMedia.tsx"));

// Collabs pages
const WalkingProjectV2 = lazy(
  () => import("./pages/collabs/WalkingProjectV2.tsx"),
);
const AiCrowd = lazy(() => import("./pages/collabs/AiCrowd.tsx"));
const EcologicalFoundations = lazy(
  () => import("./pages/collabs/EcologicalFoundations.tsx"),
);
const MirikCollege = lazy(() => import("./pages/collabs/MirikCollege.tsx"));
const Sundargaan = lazy(() => import("./pages/collabs/Sundargaan.tsx"));

// Figma test page (temporary)
const FigmaTest = lazy(() => import("./pages/figma/FigmaTest.tsx"));

// Our Work pages
const FesIndia = lazy(() => import("./pages/ourwork/FesIndia.tsx"));
const RemodelUn = lazy(() => import("./pages/ourwork/RemodelUn.tsx"));
const Rajkamal = lazy(() => import("./pages/ourwork/Rajkamal.tsx"));
const FermyLab = lazy(() => import("./pages/ourwork/FermyLab.tsx"));
const Awch = lazy(() => import("./pages/ourwork/Awch.tsx"));
const JanSahas = lazy(() => import("./pages/ourwork/JanSahas.tsx"));
const Givfunds = lazy(() => import("./pages/ourwork/Givfunds.tsx"));
const VillageWays = lazy(() => import("./pages/ourwork/VillageWays.tsx"));
const LocalFutures = lazy(() => import("./pages/ourwork/LocalFutures.tsx"));
const AllWorks = lazy(() => import("./pages/ourwork/AllWorks.tsx"));

// Portfolio V2 pages
const PortfolioV2 = lazy(() => import("./pages/portfoliov2/Portfolio.tsx"));
const RemodelUNv2 = lazy(() => import("./pages/portfoliov2/RemodelUN.tsx"));
const FermyLabV2 = lazy(() => import("./pages/portfoliov2/FermyLab.tsx"));
const RajkamalV2 = lazy(() => import("./pages/portfoliov2/RajkamalPrakashan.tsx"));
const AwchV2 = lazy(() => import("./pages/portfoliov2/Awch.tsx"));
const LocalFuturesV2 = lazy(
  () => import("./pages/portfoliov2/LocalFutures.tsx"),
);
const VillageWaysV2 = lazy(
  () => import("./pages/portfoliov2/VillageWays.tsx"),
);

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
          <Route path="/our-story" element={<Story />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/press-media" element={<PressMedia />} />
          <Route path="/events/:eventId" element={<EventDetail />} />

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
          <Route path="/collabs/mirik-college" element={<MirikCollege />} />
          <Route path="/collabs/mirikcollege" element={<MirikCollege />} />
          <Route path="/collabs/sundargaan" element={<Sundargaan />} />

          {/* Figma test route (temporary) */}
          <Route path="/figma" element={<FigmaTest />} />

          {/* Portfolio V2 Routes */}
          <Route path="/portfoliov2" element={<PortfolioV2 />} />
          <Route path="/portfoliov2/remodel-un" element={<RemodelUNv2 />} />
          <Route path="/portfoliov2/fermy-lab" element={<FermyLabV2 />} />
          <Route path="/portfoliov2/rajkamal-prakashan" element={<RajkamalV2 />} />
          <Route path="/portfoliov2/awch" element={<AwchV2 />} />
          <Route
            path="/portfoliov2/local-futures"
            element={<LocalFuturesV2 />}
          />
          <Route
            path="/portfoliov2/village-ways"
            element={<VillageWaysV2 />}
          />

          {/* Our Work Routes */}
          <Route path="/ourworks" element={<AllWorks />} />
          <Route path="/ourwork/fes-india" element={<FesIndia />} />
          <Route path="/ourwork/remodel-un" element={<RemodelUn />} />
          <Route path="/ourwork/rajkamal" element={<Rajkamal />} />
          <Route path="/ourwork/fermylab" element={<FermyLab />} />
          <Route path="/ourwork/awch" element={<Awch />} />
          <Route path="/ourwork/jansahas" element={<JanSahas />} />
          <Route path="/ourwork/village-ways" element={<VillageWays />} />
          <Route path="/ourwork/local-futures" element={<LocalFutures />} />
          <Route path="/ourwork/givfunds" element={<Givfunds />} />

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
