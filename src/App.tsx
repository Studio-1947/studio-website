import Layout from './components/Layout';
import Hero from './components/Hero';
import ClientsTicker from './components/ClientsTicker';
import Services from './components/Services/Services';
import Verticals from './components/Verticals/Verticals';



function App() {
  return (
    <Layout>
      <Hero />
      <ClientsTicker />
      <Services />
      <Verticals />

      {/* Team Section on Home? Or remove? I'll keep it on home as a teaser or section, but maybe duplicative. Let's REMOVE AboutHero/Content from here. */}
      
      {/* Team Section */}
      {/* <div id="team">
        <TeamGrid />
      </div> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                Get in touch
              </h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Ready to start your next project? Contact us today to discuss your vision.
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500 dark:text-gray-400">
                    <a href="tel:+917207680813" className="hover:text-primary transition-colors">+91 72076 80813</a>
                    <p className="mt-1">
                        <a href="mailto:studio@1947.io" className="hover:text-primary transition-colors">studio@1947.io</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
