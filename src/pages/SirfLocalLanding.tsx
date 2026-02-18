import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SirfLocalHeroAnimation from '../components/SirfLocal/SirfLocalHeroAnimation';

gsap.registerPlugin(ScrollTrigger);

const CONTENT = {
  hero: {
    badge: "Empowering Local Businesses",
    titleLine1: "Grow Your Business",
    titleLine2: "Digitally.",
    description: "From social media management to full-stack web development, we provide the tools you need to succeed in the digital age.",
    ctaPrimary: "View Plans",
    ctaSecondary: "Explore Catalog",
    imagePlaceholderText: "Visualizing Digital Growth"
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "Simple steps to transform your digital presence.",
    steps: [
      { title: "1. Choose Your Plan", desc: "Select a package that fits your needs or build a custom one.", icon: "📦" },
      { title: "2. Customize & Consult", desc: "Our experts work with you to tailor strategies for your brand.", icon: "🤝" },
      { title: "3. Launch & Grow", desc: "Watch your digital presence expand with our professional execution.", icon: "🚀" }
    ]
  },
  whyChooseUs: {
    title: "Why Choose SirfLocal?",
    description: "We understand the unique challenges of local businesses. Our mission is to bridge the gap between traditional business models and modern digital demands.",
    benefits: [
      { title: "Local Market Expertise", desc: "Strategies designed specifically for your local audience." },
      { title: "Cost-Effective Solutions", desc: "Premium services at prices that make sense for you." },
      { title: "Fast Turnaround", desc: "Get your campaigns and websites up and running quickly." }
    ]
  },
  pricing: {
    title: "Flexible Pricing",
    subtitle: "Transparent packages with no hidden costs.",
    plans: [
      {
        name: "Starter",
        price: "₹10,000",
        period: "/mo",
        features: [
          "Basic Social Media Management",
          "Google Business Profile Setup",
          "Monthly Performance Report"
        ],
        cta: "Choose Starter",
        highlight: false
      },
      {
        name: "Growth",
        price: "₹30,000",
        period: "/mo",
        features: [
          "Advanced Social Media Strategy",
          "2 Reels + 10 Posts",
          "Ad Campaign Management",
          "Website Maintenance"
        ],
        cta: "Choose Growth",
        highlight: true,
        highlightText: "POPULAR"
      },
      {
        name: "Custom",
        price: "Build Your Own",
        period: "", // No period for custom
        description: "Tailor a package that fits your exact needs. Choose from our catalog of services.",
        features: [
          "Select specific services",
          "Flexible pricing",
          "Dedicated support"
        ],
        cta: "Start Building",
        highlight: false,
        isCustom: true // Logic flag for custom behavior
      }
    ]
  }
};

export default function SirfLocalLanding() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animation
    gsap.from(".hero-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Sections Scroll Trigger
    const sections = [workRef.current, benefitsRef.current, cardsRef.current];
    sections.forEach(section => {
      if (!section) return;
      gsap.from(section.children, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    });
    
  }, { scope: heroRef });

  return (
    <div ref={heroRef} className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
        
        {/* Hero Background Animation */}
        <SirfLocalHeroAnimation />

        <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center justify-center h-full text-center px-4">
          <div className="hero-content max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm mb-8 tracking-wide uppercase">
              {CONTENT.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight text-white drop-shadow-sm">
              {CONTENT.hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                {CONTENT.hero.titleLine2}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-sm">
              {CONTENT.hero.description}
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
               <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 transition-all text-lg tracking-wide"
               >
                 {CONTENT.hero.ctaPrimary}
               </button>
               <button 
                  onClick={() => navigate('/initiative/sirflocal/catalog')}
                  className="px-10 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold hover:bg-white/20 hover:border-white/50 transition-all text-lg tracking-wide"
               >
                 {CONTENT.hero.ctaSecondary}
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={workRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{CONTENT.howItWorks.title}</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">{CONTENT.howItWorks.subtitle}</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {CONTENT.howItWorks.steps.map((step, i) => (
             <div key={i} className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center hover:border-blue-500 transition-colors">
                <div className="text-5xl mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={benefitsRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{CONTENT.whyChooseUs.title}</h2>
                 <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                   {CONTENT.whyChooseUs.description}
                 </p>
                 <div className="space-y-6">
                    {CONTENT.whyChooseUs.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                           {i + 1}
                         </div>
                         <div>
                            <h4 className="text-lg font-bold mb-1">{benefit.title}</h4>
                            <p className="text-gray-500 dark:text-gray-400">{benefit.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800">
                  {/* Placeholder for another image or graphic */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                     <span className="text-9xl opacity-20">🛡️</span>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={cardsRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{CONTENT.pricing.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{CONTENT.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CONTENT.pricing.plans.map((plan, i) => (
               <div key={i} className={`pricing-card relative p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col ${plan.highlight ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 transform scale-105 z-10' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}>
                  
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">{plan.highlightText}</div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-extrabold mb-6">{plan.price}<span className={`text-base font-normal ${plan.highlight ? 'opacity-70' : 'text-gray-500'}`}>{plan.period}</span></div>
                  
                  {plan.description && (
                     <p className={`mb-6 ${plan.highlight ? 'opacity-90' : 'text-gray-500'}`}>{plan.description}</p>
                  )}

                  <ul className={`space-y-4 mb-8 flex-1 ${plan.highlight ? 'opacity-90' : 'text-gray-600 dark:text-gray-300'}`}>
                     {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                           <svg className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-blue-400 dark:text-blue-600' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                           <span>{feature}</span>
                        </li>
                     ))}
                  </ul>

                  <button 
                     onClick={() => plan.isCustom ? navigate('/initiative/sirflocal/catalog') : null}
                     className={`w-full py-3 rounded-xl font-bold transition-colors ${
                        plan.highlight 
                           ? 'bg-white text-gray-900 dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' 
                           : plan.isCustom
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30'
                              : 'border-2 border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900'
                     }`}
                  >
                     {plan.cta}
                  </button>
               </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

