import Layout from './components/Layout';
import Hero from './components/Hero';
import ClientsTicker from './components/ClientsTicker';
import Services from './components/Services/Services';
import Verticals from './components/Verticals/Verticals';
// import ThingsYouNeedToKnow from './components/ThingsYouNeedToKnow';
import BuiltForImpact from './components/BuiltForImpact';
import Testimonials from './components/Testimonials';
import OurProcess from './components/OurProcess';
import OurProducts from './components/OurProducts';
import LatestBlogs from './components/LatestBlogs';
import Contact from './components/Contact';
import { Analytics } from '@vercel/analytics/react';



function App() {
  return (
    <Layout>
      <Hero />
      <ClientsTicker />
      <Services />
      <Verticals />
      {/* <ThingsYouNeedToKnow /> */}
      <BuiltForImpact />
      <Testimonials />
      <OurProcess />
      <OurProducts />
      <LatestBlogs />

      {/* Featured Work Section Placeholder */}


      {/* Team Section on Home? Or remove? I'll keep it on home as a teaser or section, but maybe duplicative. Let's REMOVE AboutHero/Content from here. */}

      {/* Team Section */}
      {/* <div id="team">
        <TeamGrid />
      </div> */}


      {/* Contact Section */}
      <Contact />
      <Analytics />
    </Layout>
  );
}

export default App;
