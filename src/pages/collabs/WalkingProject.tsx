import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const WalkingProject: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const servicesList = [
    {
      title: "A Complete Digital Facelift",
      desc: "We redesigned their website from the ground up, making it intuitive, modern, and accessible for everyday citizens to learn, engage, and support."
    },
    {
      title: "Strategic Storytelling",
      desc: "We crafted compelling social media campaigns to highlight common walkability issues, turning everyday pedestrian struggles into actionable civic conversations."
    },
    {
      title: "Data-Driven Deep Dives",
      desc: "We conducted an in-depth market analysis and researched comprehensive data on walkability across the Mumbai metropolitan region, giving their advocacy stronger, data-backed leverage."
    }
  ];

  return (
    <Layout>
      <article className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">

        {/* 1. Header & Introduction */}
        <header className="relative pt-32 pb-16 md:pt-40 md:pb-24 w-full overflow-hidden">
          {/* Subtle SVG Logo Background (Full screen-width) */}
          <div
            className="absolute inset-0 -z-0 opacity-10 dark:opacity-5 pointer-events-none bg-[url('/collabs/walkingproject/walkingprojectlogo.svg')] bg-no-repeat bg-center bg-cover md:bg-[length:100%_auto] filter grayscale mix-blend-multiply dark:mix-blend-screen dark:grayscale-[0.5]"
          ></div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-gray-900/50 dark:to-gray-900 pointer-events-none z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/collabs" className="inline-flex items-center text-gray-500 hover:text-black dark:hover:text-white font-medium mb-12 transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Collaborations
            </Link>

            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8"
              >
                Paving the Way for a <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                  Walkable Mumbai:
                </span><br /> Our Collaboration with the Walking Project
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed border-l-4 border-yellow-500 pl-6"
              >
                <p>
                  At Studio 1947, a purpose-driven consulting agency born in the serene hills of Mirik, Darjeeling, we believe that great ideas deserve the right spotlight. We partner with changemakers across India to amplify their impact. Recently, we joined forces with three incredible NGOs to help them scale their vision—starting with the Walking Project.
                </p>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Main Hero Image */}
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[100rem] mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[21/9] bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden relative group border border-gray-200 dark:border-gray-800"
          >
            <img
              src="/collabs/walkingproject/walkingprojectHero.png"
              alt="Walking Project in Mumbai"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>

        {/* 2. Who is & What they do */}
        <section className="bg-gray-50 dark:bg-gray-950 py-24 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                  <span className="w-8 h-px bg-yellow-500 inline-block"></span>
                  Who are they?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  An initiative by the Mumbai Sustainability Center, the Walking Project is a passionate advocacy group dedicated to making Mumbai's streets safer and more accessible for pedestrians.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                  <span className="w-8 h-px bg-yellow-500 inline-block"></span>
                  What they do
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  They are the voice of the everyday commuter. Rather than pouring concrete or building footpaths themselves, they work directly with the <strong>Brihanmumbai Municipal Corporation (BMC)</strong>.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  By highlighting grassroots issues and offering data-backed suggestions, they advocate for systemic, long-lasting improvements to the city's pedestrian infrastructure.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. How Studio 1947 Stepped in */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              How Studio 1947 Stepped In
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              When we looked at the incredible work the Walking Project was doing, we knew we had to help them amplify their message for the betterment of society. To bridge the gap between their on-ground advocacy and their digital presence, we rolled up our sleeves and delivered a comprehensive growth strategy:
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-200 dark:border-gray-800"
              >
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Secondary Image with Text Overlay */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-video md:aspect-[21/9] bg-gray-900 rounded-3xl overflow-hidden relative group border border-gray-200 dark:border-gray-800 max-w-5xl mx-auto shadow-xl"
          >
            <img
              src="/collabs/walkingproject/walkingproject01.jpg"
              alt="Community walk in Mumbai"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6 text-center">
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-md">
                Safe & Accessible Road
              </h3>
            </div>
          </motion.div>
        </section>

        {/* 4. The Result */}
        <section className="py-24 bg-yellow-400 dark:bg-yellow-500 text-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-black tracking-[0.2em] uppercase mb-8 opacity-80"
            >
              The Result
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black leading-tight mb-12"
            >
              A louder, clearer, and more impactful voice for pedestrian rights in Mumbai.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium opacity-90 max-w-3xl mx-auto leading-relaxed"
            >
              By streamlining their digital ecosystem, we helped the Walking Project do what they do best: advocate for safer, more sustainable cities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16"
            >
              <a
                href="http://www.walkingproject.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-black text-white hover:bg-gray-800 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl"
              >
                Visit Walking Project
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

      </article>
    </Layout>
  );
};

export default WalkingProject;
