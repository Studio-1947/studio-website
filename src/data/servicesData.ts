
export interface ServiceItem {
  id: string;
  title: string;
  price?: string;
  priceValue?: number; // Optional numerical value for calculation if needed, though most are fixed/custom
  description: string;
  category: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'google-maps',
    category: 'Essential Setup',
    title: 'Get Found on Google Maps',
    price: '₹ 2,000',
    description: 'The Must-Have: If people can’t find you on their phones, they can’t visit you!\n\nWhat you get: We’ll add your shop to Google Maps and Search, verify your business, and ensure your hours and location are 100% accurate.'
  },
  {
    id: 'professional-look',
    category: 'Brand Identity',
    title: 'The Professional Look (Logo + Business Cards)',
    price: '₹ 5,000',
    description: 'First Impressions Matter: Move from a "small shop" to a "big brand" look.\n\nWhat you get: A unique logo designed just for you, plus a matching business card design.'
  },
  {
    id: 'whatsapp-shop',
    category: 'Digital Storefront',
    title: 'Your WhatsApp Shop',
    price: '₹ 3,000',
    description: 'Sell While You Chat: People love shopping on WhatsApp. Let’s make it easy for them.\n\nWhat you get: We’ll set up your product catalogue with photos and prices, plus create auto-replies so customers get instant answers.'
  },
  {
    id: 'catchy-social-posts',
    category: 'Social Media',
    title: '"Catchy" Social Media Posts',
    price: '₹ 800 per post',
    description: 'Stop the Scroll: Beautiful designs to bring customers through your door.\n\nWhat you get: High-quality graphics for "Buy 1 Get 1" deals, flash sales, or grand openings.'
  },
  {
    id: 'one-page-website',
    category: 'Digital Storefront',
    title: 'Your One-Page Website',
    price: '₹ 5,000',
    description: 'Your 24/7 Digital Home: A simple, clean page that tells people who you are.\n\nWhat you get: A mobile-friendly site with a big "Call/WhatsApp Us" button and direct Map directions.'
  },
  {
    id: 'premium-packaging',
    category: 'Brand Identity',
    title: 'Premium Product Packaging',
    price: '₹ 3,500',
    description: 'Looks like a Top Brand: Perfect for local bakers, candle makers, or crafters.\n\nWhat you get: A professional label or box design that makes your products look premium.'
  },
  {
    id: 'monthly-content',
    category: 'Social Media',
    title: 'Monthly Content Posts',
    price: '₹ 3,500',
    description: 'We Do the Work for You: For owners too busy to worry about posting.\n\nWhat you get: 8 ready-to-use posts per month (greetings, offers, and highlights).'
  },
  {
    id: 'monthly-reels',
    category: 'Social Media',
    title: 'Monthly Reels',
    price: '₹ 3,500',
    description: 'Get More Views: Short, engaging videos to trend locally.\n\nWhat you get: 4 ready-to-use reels created from your photos and clips.'
  },
  {
    id: 'brand-makeover',
    category: 'Brand Identity',
    title: 'The Brand Makeover',
    price: '₹ 5,000+',
    description: 'A Fresh Start: Give your "old" shop a modern facelift.\n\nWhat you get: New colours, a fresh logo, and updated social media banners to attract a younger crowd.'
  }
];
