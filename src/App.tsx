import Layout from './components/Layout';
import Hero from './components/Hero';
import ClientsTicker from './components/ClientsTicker';
import Services from './components/Services/Services';
import Verticals from './components/Verticals/Verticals';
import ThingsYouNeedToKnow from './components/ThingsYouNeedToKnow';
import BuiltForImpact from './components/BuiltForImpact';
import Testimonials from './components/Testimonials';
import OurProcess from './components/OurProcess';
import OurProducts from './components/OurProducts';
import LatestBlogs from './components/LatestBlogs';

function App() {
  return (
    <Layout>
      <Hero />
      <ClientsTicker />
      <Services />
      <Verticals />
      <ThingsYouNeedToKnow />
      <BuiltForImpact />
      <Testimonials />
      <OurProcess />
      <OurProducts />
      <LatestBlogs />

      {/* Featured Work Section Placeholder */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Featured Work
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              A selection of our recent projects.
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholders for project cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="h-48 bg-gray-300 dark:bg-gray-600 w-full object-cover"></div>
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Project {item}</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-300">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tempore!</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio/About Section Placeholder */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">The Studio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              We craft digital excellence
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Founded in 1947 (conceptually), we bring decades of timeless design principles to the modern web.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section Placeholder */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
                    <p>+1 (555) 123-4567</p>
                    <p className="mt-1">hello@studio1947.io</p>
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
