
export interface ServiceItem {
  id: string;
  title: string;
  price?: string;
  priceValue?: number; // Optional numerical value for calculation if needed, though most are fixed/custom
  description: string;
  category: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  // --- Brand Identity ---
  {
    id: 'logo-design',
    category: 'Brand Identity',
    title: 'Logo Design',
    price: '₹ custom',
    description: 'Creation of a unique visual identity that represents your brand'
  },
  {
    id: 'business-card',
    category: 'Brand Identity',
    title: 'Business Card',
    price: '₹ custom',
    description: 'Professionally designed card showcasing your details in a clean and impactful layout'
  },
  {
    id: 'letterhead',
    category: 'Brand Identity',
    title: 'Letterhead',
    price: '₹ custom',
    description: 'Branded document template that adds a polished and consistent look'
  },
  {
    id: 'menu-design',
    category: 'Brand Identity',
    title: 'Menu Design',
    price: '₹ custom',
    description: 'Visually appealing menu layout that enhances customer experience'
  },
  {
    id: 'brand-guidelines',
    category: 'Brand Identity',
    title: 'Brand Guidelines Documents',
    price: '₹ 10,000',
    description: 'Brand rules for color, font & design consistency'
  },
  {
    id: 'product-packaging',
    category: 'Brand Identity',
    title: 'Product Packaging Design',
    price: '₹ 3,500',
    description: 'Attractive packaging or label design for your product'
  },
  {
    id: 'mobile-brochure',
    category: 'Brand Identity',
    title: 'Mobile Friendly Interactive Brochure',
    price: '₹ 20,000',
    description: 'Digital brochure designed specifically for mobile viewing'
  },
  {
    id: 'brochure-a4',
    category: 'Brand Identity',
    title: 'Brochure (A4 Front & Back)',
    price: '₹ 2,000',
    description: 'Professional marketing brochure'
  },
  {
    id: 'brochure-a5-4',
    category: 'Brand Identity',
    title: 'Brochure (A5 4 pages)',
    price: '₹ 3,000',
    description: 'Compact brochure for product and service presentation'
  },
  {
    id: 'brochure-a5-8',
    category: 'Brand Identity',
    title: 'Brochure (A5 8 pages)',
    price: '₹ 6,000',
    description: 'Detailed brochure with more content space'
  },
  {
    id: 'poster-design',
    category: 'Brand Identity',
    title: 'Poster Design',
    price: '₹ 2,000',
    description: 'Promotional posters for events and offers'
  },
  {
    id: 'poster-bundle',
    category: 'Brand Identity',
    title: 'Poster Bundle (20 designs)',
    price: '₹ 10,000',
    description: '20 ready promotional design for regular marketing'
  },
  {
    id: 'rebranding',
    category: 'Brand Identity',
    title: 'Rebranding Services',
    price: '₹ 10,000',
    description: 'Complete refresh or Logo and Brand Identity'
  },

  // --- Business Setup (Digital Presence) ---
  {
    id: 'google-business',
    category: 'Business Setup (Digital Presence)',
    title: 'Google Business Profile Setup',
    price: '₹ 1,000',
    description: 'Set up your business on Google Search and Maps'
  },
  {
    id: 'maps-listing',
    category: 'Business Setup (Digital Presence)',
    title: 'Maps Listing Setup',
    price: '₹ 1,000',
    description: 'Correct location listing on Google Maps'
  },
  {
    id: 'social-media-setup',
    category: 'Business Setup (Digital Presence)',
    title: 'Social Media Account Setup',
    price: '₹ 1,000',
    description: 'Set up Facebook and Instagram business pages'
  },
  {
    id: 'whatsapp-setup',
    category: 'Business Setup (Digital Presence)',
    title: 'WhatsApp Business Setup',
    price: '₹ 3,000',
    description: 'WhatsApp Business with a catalogue and auto replies'
  },
  {
    id: 'domain-setup',
    category: 'Business Setup (Digital Presence)',
    title: 'Domain Setup',
    price: '₹ 1,000',
    description: 'Register and connect your domain name'
  },
  {
    id: 'hosting-setup',
    category: 'Business Setup (Digital Presence)',
    title: 'Hosting Setup',
    price: '₹ 1,000',
    description: 'Website hosting configuration'
  },
  {
    id: 'booking-listing',
    category: 'Business Setup (Digital Presence)',
    title: 'Booking Platforms Listing',
    price: '₹ 5,000',
    description: 'Set up your hotel/homestay listing professionally'
  },
  {
    id: 'payment-gateway',
    category: 'Business Setup (Digital Presence)',
    title: 'Payment Gateway Setup',
    price: '₹ 5,000',
    description: 'Online payment system integration'
  },

  // --- Media Production ---
  {
    id: 'product-photography',
    category: 'Media Production',
    title: 'Product Photography (20 photos)',
    price: '₹ 5,000',
    description: 'Professional product photos for marketing'
  },
  {
    id: 'hotel-photography',
    category: 'Media Production',
    title: 'Hotel/Homestay Photography (20 photos)',
    price: '₹ 5,000',
    description: 'Professional property photos for better booking'
  },
  {
    id: 'corporate-photoshoot',
    category: 'Media Production',
    title: 'Corporate Photoshoot (20 photos + 1 video)',
    price: '₹ 10,000',
    description: 'Business photoshoot with one promotional video'
  },
  {
    id: 'promotional-video',
    category: 'Media Production',
    title: 'Promotional Video Shoot',
    price: '₹ 10,000',
    description: 'Marketing video for advertising and social media'
  },
  {
    id: 'brand-video',
    category: 'Media Production',
    title: 'Brand Video Production',
    price: '₹ 10,000',
    description: 'Brand introduction video to build trust'
  },
  {
    id: 'explainer-video',
    category: 'Media Production',
    title: 'Explainer Video',
    price: '₹ 10,000',
    description: 'Simple video explaining your product or service'
  },

  // --- Website Development ---
  {
    id: 'landing-page',
    category: 'Website Development',
    title: 'Landing Page Website',
    price: '₹ 5,000',
    description: 'A simple one-page website to show your business details, services, and contact'
  },
  {
    id: 'full-business-website',
    category: 'Website Development',
    title: 'Full Business Website (4-5 pages)',
    price: '₹ 20,000',
    description: 'Complete website with Home, About, Services, Gallery, and Contact page'
  },
  {
    id: 'ecommerce-basic',
    category: 'Website Development',
    title: 'E-commerce Website Basic (6-months AMC free)',
    price: '₹ 40,000',
    description: 'Online store with product listing and payment system'
  },
  {
    id: 'ecommerce-advanced',
    category: 'Website Development',
    title: 'E-commerce Website Advanced (12-months AMC free)',
    price: '₹ 80,000',
    description: 'Full-featured online store with an admin panel and long-term support'
  },
  {
    id: 'booking-website',
    category: 'Website Development',
    title: 'Booking Website (Hotel / Homestay)',
    price: '₹ 30,000',
    description: 'Website with room display and booking enquiry feature'
  },
  {
    id: 'business-portfolio',
    category: 'Website Development',
    title: 'Business Portfolio Website',
    price: '₹ 20,000',
    description: 'Website to showcase your work, projects, and services'
  },
  {
    id: 'company-profile',
    category: 'Website Development',
    title: 'Company Profile Website',
    price: '₹ 20,000',
    description: 'A corporate website to present your company professionally'
  },

  // --- Social Media Management (monthly) ---
  {
    id: 'ugc-reel',
    category: 'Social Media Management (monthly)',
    title: 'UGC Reel Creation',
    price: '₹ 2,000/reel',
    description: 'User-style natural reels to increase engagement and trust'
  },
  {
    id: 'animated-reel',
    category: 'Social Media Management (monthly)',
    title: 'Animated Reel Creation',
    price: '₹ 5,000/reel',
    description: 'Professionally animated reels for branding and promotions'
  },
  {
    id: 'influencer-outreach',
    category: 'Social Media Management (monthly)',
    title: 'Influencer Outreach',
    price: '₹ custom',
    description: 'Connecting your brand with relevant influencers for promotions'
  },
  {
    id: 'starter-plan',
    category: 'Social Media Management (monthly)',
    title: 'Starter Plan (10 posts + 2 reels + basic analytics report)',
    price: '₹ 10,000/month',
    description: 'Regular posting to keep your business active online'
  },
  {
    id: 'growth-plan',
    category: 'Social Media Management (monthly)',
    title: 'Growth Plan (12 posts + 4 reels + 4 carousel posts + analytics)',
    price: '₹ 20,000/month',
    description: 'Better engagement and professional content planning'
  },
  {
    id: 'premium-plan',
    category: 'Social Media Management (monthly)',
    title: 'Premium Plan (16 posts + 8 reels + 4 carousel posts + detailed analytics)',
    price: '₹ 35,000/month',
    description: 'High-volume content strategy for serious growth'
  },

  // --- Ads Management ---
  {
    id: 'fb-insta-ads',
    category: 'Ads Management',
    title: 'Facebook/Instagram Ads Management',
    price: '10% of budget',
    description: 'Complete ad campaign setup, monitoring, and optimization'
  },
  {
    id: 'google-ads',
    category: 'Ads Management',
    title: 'Google Ads Management',
    price: '10% of budget',
    description: 'Search, display, and performance campaign management'
  },
  {
    id: 'lead-generation',
    category: 'Ads Management',
    title: 'Lead generation, re-marketing, conversion tracking setup',
    price: '₹ custom',
    description: 'Advanced setup for tracking and optimizing leads'
  },

  // --- Analytics & Reporting ---
  {
    id: 'business-growth-report',
    category: 'Analytics & Reporting',
    title: 'Business growth reporting',
    price: '₹ custom',
    description: 'Search, display, and performance campaign management'
  },
  {
    id: 'business-performance-report',
    category: 'Analytics & Reporting',
    title: 'Business Performance Report',
    price: '₹ custom',
    description: 'Comprehensive report on business performance metrics'
  },
  {
    id: 'website-analytics-report',
    category: 'Analytics & Reporting',
    title: 'Website Analytics Report',
    price: '₹ custom',
    description: 'Detailed insights into website traffic and user behavior'
  },
  {
    id: 'campaign-performance-report',
    category: 'Analytics & Reporting',
    title: 'Campaign Performance Report',
    price: '₹ custom',
    description: 'Analysis of ad campaign effectiveness'
  },
  {
    id: 'customer-insights',
    category: 'Analytics & Reporting',
    title: 'Customer Insights',
    price: '₹ custom',
    description: 'Deep dive into customer demographics and preferences'
  },
  {
    id: 'monthly-growth-analysis',
    category: 'Analytics & Reporting',
    title: 'Monthly Growth Analysis',
    price: '₹ custom',
    description: 'Month-over-month growth tracking'
  },

  // --- Website Maintenance (monthly) ---
  {
    id: 'website-maintenance',
    category: 'Website Maintenance (monthly)',
    title: 'Website Maintenance Plan',
    price: '₹ custom',
    description: 'Regular updates, technical support, and monitoring to keep your website running smoothly'
  },
  {
    id: 'website-updates',
    category: 'Website Maintenance (monthly)',
    title: 'Website updates',
    price: '₹ custom',
    description: 'Content and structural updates'
  },
  {
    id: 'bug-fixes',
    category: 'Website Maintenance (monthly)',
    title: 'Bug fixes',
    price: '₹ custom',
    description: 'Fixing technical issues and errors'
  },
  {
    id: 'content-fixes',
    category: 'Website Maintenance (monthly)',
    title: 'Content fixes',
    price: '₹ custom',
    description: 'Corrections and updates to website text and images'
  },
  {
    id: 'performance-monitoring',
    category: 'Website Maintenance (monthly)',
    title: 'Performance monitoring',
    price: '₹ custom',
    description: 'Tracking load times and optimization'
  },
  {
    id: 'security-monitoring',
    category: 'Website Maintenance (monthly)',
    title: 'Security monitoring',
    price: '₹ custom',
    description: 'Protecting against threats and vulnerabilities'
  },
  {
    id: 'backup-management',
    category: 'Website Maintenance (monthly)',
    title: 'Backup management',
    price: '₹ custom',
    description: 'Regular backups to ensure data safety'
  },
  {
    id: 'hosting-management',
    category: 'Website Maintenance (monthly)',
    title: 'Hosting management',
    price: '₹ custom',
    description: 'Managing server and hosting configurations'
  },
  {
    id: 'feature-updates',
    category: 'Website Maintenance (monthly)',
    title: 'Feature updates',
    price: '₹ custom',
    description: 'Adding new features and functionality'
  }
];
