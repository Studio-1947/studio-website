// ─────────────────────────────────────────────────────────────────────────────
// Our Works — Brand Data
//
// This file contains data for all brand pages under /ourwork/*
// To edit a brand's content, find it by slug below and update the fields.
// Placeholder values are marked  ← PLACEHOLDER
//
// Collabs (NOT in this file — they have their own custom pages):
//   • AIcrowd            → /collabs/ai-crowd
//   • Walking Project    → /collabs/walking-project
//   • Ecological Found.  → /collabs/ecological-foundations
//   • Mirik College      → /collabs/mirik-college
//   • Sundargaan         → /collabs/sundargaan
// ─────────────────────────────────────────────────────────────────────────────

export interface BrandCredit {
  role: string;
  name: string;
}

export interface BrandTypeface {
  name: string;
  designer: string;
  released: string;
  foundry: string;
  specimenImage?: string;
  style?: string;
}

export interface BrandColor {
  hex: string;
  rgb: string;
  cmyk?: string;
  label?: string;
}

export interface BrandWork {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  studio: string;
  credits: BrandCredit[];
  overview: {
    heading?: string;
    paragraphs: string[];
  };
  logoImages: string[];
  typefaces: BrandTypeface[];
  colors: BrandColor[];
  artDirectionImages: string[];
  applicationImages: string[];
  website?: {
    image: string;
    alt?: string;
    paragraphs: string[];
  };
}

export const ourWorksData: BrandWork[] = [
  // ─── FES India ───────────────────────────────────────────────────────────
  {
    slug: "fes-india",
    title: "FES India",
    subtitle: "Energy Transition Meet — EU India Policy Brochure",
    year: "2023",
    tags: ["Editorial Design", "Print", "Brochure"],
    studio: "Studio 1947",
    credits: [
      { role: "Creative Direction", name: "Rabi" },
      { role: "Layout Design", name: "Zahid" },
      { role: "Content", name: "FES Team" },
    ],
    overview: {
      heading: "Policy Meets Design",
      paragraphs: [
        "Policy discussions on green energy transition are often locked in dense, unapproachable formats. Our goal was to break down these barriers.",
        "We designed a printable coffee table brochure for FES India that transforms hard data into a visual narrative — structural elegance meets data journalism. Every spread was crafted to guide the reader from abstract policy to tangible human reality.",
      ],
    },
    logoImages: ["/ourworks/fes/HbY8QB78WeboThLDVb55f1p7k.avif"],
    typefaces: [
      // ← PLACEHOLDER — update with the actual typefaces used
      {
        name: "Libre Baskerville",
        designer: "Pablo Impallari",
        released: "2012",
        foundry: "Impallari Type",
        style: "Serif — Body text",
      },
      {
        name: "Inter",
        designer: "Rasmus Andersson",
        released: "2017",
        foundry: "Rasmus",
        style: "Sans-serif — Captions & UI",
      },
    ],
    colors: [
      // ← PLACEHOLDER — replace with the actual brand palette
      {
        hex: "#2b6043",
        rgb: "43, 96, 67",
        cmyk: "55, 0, 30, 62",
        label: "Forest Green",
      },
      {
        hex: "#1a2d24",
        rgb: "26, 45, 36",
        cmyk: "42, 0, 20, 82",
        label: "Deep Emerald",
      },
      {
        hex: "#e0e5dd",
        rgb: "224, 229, 221",
        cmyk: "2, 0, 3, 10",
        label: "Pale Sage",
      },
      {
        hex: "#f2f4f1",
        rgb: "242, 244, 241",
        cmyk: "1, 0, 1, 4",
        label: "Off White",
      },
    ],
    artDirectionImages: [
      "/ourworks/fes/nrO33Jsspt5GXHIenu5HJFjlZAg.avif",
      "/ourworks/fes/2h8aq95xXDNKu2dQPiZCvqmU.avif",
    ],
    applicationImages: [
      "/ourworks/fes/oycYUeLHVrfBeeBNhMTxdqGXgP0.avif",
      "/ourworks/fes/gymhnyeWWlR1NpbuelxxU57cNI.avif",
      "/ourworks/fes/HbY8QB78WeboThLDVb55f1p7k.avif",
    ],
  },

  // ─── reModelUN ───────────────────────────────────────────────────────────
  {
    slug: "remodel-un",
    title: "reModelUN",
    subtitle: "Podcast Branding & Visual Identity",
    year: "2023",
    tags: ["Brand Identity", "Podcast", "Digital"],
    studio: "Studio 1947",
    credits: [
      { role: "Creative Direction", name: "Rabi" },
      { role: "Layout Design", name: "Zahid" },
      { role: "Content", name: "Sneha — AIcrowd Team" },
    ],
    overview: {
      heading: "A Voice for Actionable Change",
      paragraphs: [
        "A podcast initiative bringing together thought leaders from UN-affiliated organisations who are working to improve the world through actionable, AI-driven solutions.",
        "Studio 1947 built reModelUN's complete visual identity — from logo and typography to digital templates and episode artwork — creating a brand that feels authoritative yet accessible.",
      ],
    },
    logoImages: ["/ourworks/remodelun/AoQZtFEqIqO8ptUbhMLYKw39IY.avif"],
    typefaces: [
      // ← PLACEHOLDER
      {
        name: "Neue Haas Grotesk",
        designer: "Max Miedinger",
        released: "1957",
        foundry: "Linotype",
        style: "Sans-serif — Display & Body",
      },
      {
        name: "Inter",
        designer: "Rasmus Andersson",
        released: "2017",
        foundry: "Rasmus",
        style: "Sans-serif — UI & Digital",
      },
    ],
    colors: [
      // ← PLACEHOLDER
      {
        hex: "#e9fb54",
        rgb: "233, 251, 84",
        cmyk: "7, 0, 67, 2",
        label: "Electric Yellow",
      },
      {
        hex: "#111111",
        rgb: "17, 17, 17",
        cmyk: "0, 0, 0, 93",
        label: "Off Black",
      },
      {
        hex: "#333333",
        rgb: "51, 51, 51",
        cmyk: "0, 0, 0, 80",
        label: "Dark Gray",
      },
      {
        hex: "#ffffff",
        rgb: "255, 255, 255",
        cmyk: "0, 0, 0, 0",
        label: "White",
      },
    ],
    artDirectionImages: [
      "/ourworks/remodelun/KjwzzwsWhV6hARRXQdCcxPJc8.avif",
      "/ourworks/remodelun/z0nYNiWawGbUVcyVkbYBx0entxw.avif",
    ],
    applicationImages: [
      "/ourworks/remodelun/HB6O7GiPg8pybqoVeBSXalqNpI.avif",
      "/ourworks/remodelun/AoQZtFEqIqO8ptUbhMLYKw39IY (1).avif",
      "/ourworks/remodelun/AoQZtFEqIqO8ptUbhMLYKw39IY.avif",
    ],
  },

  // ─── Rajkamal Prakashan ──────────────────────────────────────────────────
  {
    slug: "rajkamal",
    title: "Rajkamal Prakashan",
    subtitle: "Kitab Utsav — Yearly Book Festival Identity",
    year: "2024",
    tags: ["Event Branding", "Print", "Cultural Identity"],
    studio: "Studio 1947",
    credits: [
      { role: "Creative Direction", name: "Rabi" },
      { role: "Layout Design", name: "Zahid & Nikhil R" },
      { role: "Content", name: "Rajkamal Prakashan Team" },
    ],
    overview: {
      heading: "India's Oldest Hindi Publisher — Brought to Life",
      paragraphs: [
        "Rajkamal Prakashan is India's oldest Hindi publishing house. Their annual Kitab Utsav book festival needed a visual identity that honoured this legacy while feeling alive and contemporary.",
        "Studio 1947 crafted a distinct visual language that captures the festival's essence — a vibrant celebration of literature, ideas, and conversations. From the first brainstorm to final execution, every detail speaks to the joy of reading.",
      ],
    },
    logoImages: ["/ourworks/rajkamal/wWr5TZOCpGyP9DxVjHXXcjX6Kc.avif"],
    typefaces: [
      // ← PLACEHOLDER
      {
        name: "EB Garamond",
        designer: "Georg Duffner",
        released: "2011",
        foundry: "Georg Duffner",
        style: "Serif — Headings & Body",
      },
      {
        name: "Libre Franklin",
        designer: "Pablo Impallari",
        released: "2016",
        foundry: "Impallari Type",
        style: "Sans-serif — Labels & Captions",
      },
    ],
    colors: [
      // ← PLACEHOLDER
      {
        hex: "#f8f5f0",
        rgb: "248, 245, 240",
        cmyk: "0, 1, 3, 3",
        label: "Warm Cream",
      },
      {
        hex: "#2c1810",
        rgb: "44, 24, 16",
        cmyk: "0, 45, 64, 83",
        label: "Deep Umber",
      },
      {
        hex: "#d94a38",
        rgb: "217, 74, 56",
        cmyk: "0, 66, 74, 15",
        label: "Festival Red",
      },
      {
        hex: "#f0c850",
        rgb: "240, 200, 80",
        cmyk: "0, 17, 67, 6",
        label: "Marigold",
      },
    ],
    artDirectionImages: [
      "/ourworks/rajkamal/ueGsK5St0ZTr0DmA7c2i1HrsE.webp",
      "/ourworks/rajkamal/nx2kFu7e2jUtjqL0hMfZ1GboHE.avif",
    ],
    applicationImages: [
      "/ourworks/rajkamal/wWr5TZOCpGyP9DxVjHXXcjX6Kc.avif",
      "/ourworks/rajkamal/8og1ocqRym1XngeAHLI54DHEkM.avif",
      "/ourworks/rajkamal/ueGsK5St0ZTr0DmA7c2i1HrsE.webp",
    ],
  },

  // ─── Fermy Lab ───────────────────────────────────────────────────────────
  {
    slug: "fermylab",
    title: "Fermy Lab",
    subtitle: "Brand Identity, Packaging, and Retail Applications",
    year: "2024",
    tags: ["Brand Identity", "Packaging", "Retail"],
    studio: "Studio 1947",
    credits: [
      { role: "Creative Direction", name: "Rabi" },
      { role: "Brand Design", name: "Studio 1947 Team" },
    ],
    overview: {
      heading: "Fresh, Warm, and Distinctly Local",
      paragraphs: [
        "Fermy Lab needed a cohesive visual language that could move from logo to shelf, and from storefront to apparel without losing brand character.",
        "We built a bright, memorable identity anchored in rich bakery green and warm amber tones, then extended it across packaging, uniforms, merchandising, and environment touchpoints.",
      ],
    },
    logoImages: [
      "/ourworks/FermyLab/fermilab_logo.png",
      "/ourworks/FermyLab/fermilab_logo2.png",
    ],
    typefaces: [
      {
        name: "Space Grotesk",
        designer: "Florian Karsten",
        released: "2018",
        foundry: "Google Fonts",
        style: "Primary Sans — Headlines & Identity",
      },
      {
        name: "Just Sans",
        designer: "Groteskly Yours",
        released: "2023",
        foundry: "Groteskly Yours",
        style: "Secondary Sans — Supporting Text",
      },
    ],
    colors: [
      {
        hex: "#158533",
        rgb: "21, 133, 51",
        cmyk: "84, 0, 62, 48",
        label: "Fermy Lab Green",
      },
      {
        hex: "#E59739",
        rgb: "229, 151, 57",
        cmyk: "0, 34, 75, 10",
        label: "Fermy Lab Amber",
      },
    ],
    artDirectionImages: [
      "/ourworks/FermyLab/fermilab_storefront.png",
      "/ourworks/FermyLab/fermilab_billboard.png",
      "/ourworks/FermyLab/fermilab_standi.png",
      "/ourworks/FermyLab/iPhone%2016%20Dark.png",
      "/ourworks/FermyLab/iPhone%2016%20Plus%20Light.png",
    ],
    applicationImages: [
      "/ourworks/FermyLab/Bread%20Bakery%20Mockup%201.png",
      "/ourworks/FermyLab/Croissants%20in%20transparent%20packaging%201.png",
      "/ourworks/FermyLab/fermilab_tablecloth.png",
      "/ourworks/FermyLab/fermilab_t.png",
      "/ourworks/FermyLab/fermilab_tshirt.png",
      "/ourworks/FermyLab/fermilab_tshirt2.png",
    ],
  },

  // ─── Jan Sahas ───────────────────────────────────────────────────────────
  {
    slug: "jansahas",
    title: "Jan Sahas",
    subtitle: "Digital Presence and Web Communication System",
    year: "Ongoing",
    tags: ["Website Design", "Digital Communication", "Social Impact"],
    studio: "Studio 1947",
    credits: [
      { role: "Creative Direction", name: "Rabi" },
      { role: "Design", name: "Studio 1947 Team" },
    ],
    overview: {
      heading: "Designing Clarity for Social Impact",
      paragraphs: [
        "Jan Sahas works across issues of dignity, justice, and systemic change. The visual system needed to feel credible and grounded while remaining accessible to a wide public audience.",
        "We shaped a digital language built around strong blue tones, clean typography, and clear information hierarchy so the organisation's work could be communicated with greater confidence and reach.",
      ],
    },
    logoImages: [],
    typefaces: [
      {
        name: "Inter",
        designer: "Rasmus Andersson",
        released: "2017",
        foundry: "Rasmus Andersson",
        style: "Sans-serif — Headlines, body, and interface",
      },
    ],
    colors: [
      {
        hex: "#2D2A6D",
        rgb: "45, 42, 109",
        cmyk: "59, 61, 0, 57",
        label: "Deep Indigo",
      },
      {
        hex: "#2BA2FE",
        rgb: "43, 162, 254",
        cmyk: "83, 36, 0, 0",
        label: "Bright Blue",
      },
    ],
    artDirectionImages: [],
    applicationImages: [],
    website: {
      image: "/ourworks/janSahas/Jansahas.png",
      alt: "Jan Sahas website preview",
      paragraphs: [
        "The website section translates Jan Sahas into a digital experience that is direct, readable, and structured for trust. Content blocks, navigation, and visual emphasis work together to make complex issues easier to engage with.",
        "Presenting the full website preview in one frame helps retain the overall rhythm of the page, making the interface easier to review as a cohesive communication system rather than a cropped fragment.",
      ],
    },
  },

  // ─── AWCH (Avishkar Women and Child Hospital) ────────────────────────────
  {
    slug: "awch",
    title: "AWCH",
    subtitle:
      "Avishkar Women and Child Hospital — Complete Branding & Digital Identity",
    year: "2026",
    tags: [
      "Healthcare Branding",
      "Logo Design",
      "Social Media",
      "Website",
      "Digital",
      "Print",
    ],
    studio: "Studio 1947",
    credits: [
      { role: "Creative Direction", name: "Rabi" },
      { role: "Branding & Design", name: "Studio 1947 Team" },
      { role: "Project Management", name: "AWCH Team" },
    ],
    overview: {
      heading: "Redefining Healthcare Identity in Asansol",
      paragraphs: [
        "Avishkar Women and Child Hospital is a leading healthcare facility in Asansol dedicated to providing comprehensive medical care for women and children. The institution required a complete visual identity system that would establish trust, professionalism, and compassion.",
        "Studio 1947 developed a comprehensive branding solution encompassing social media strategy, logo design, website development, and in-hospital branding. From internal directional posters to external digital presence, every touchpoint communicates AWCH's commitment to excellence and patient care.",
        "The distinctive brand language extends across all platforms—digital, print, environmental, and social—creating a cohesive identity that resonates with patients and healthcare professionals alike.",
      ],
    },
    logoImages: ["/ourworks/awch/logo01.png"],
    typefaces: [
      {
        name: "Inter",
        designer: "Rasmus Andersson",
        released: "2017",
        foundry: "Rasmus Andersson",
        style: "Sans-serif — Modern, clean, and accessible",
      },
      {
        name: "Poppins",
        designer: "Ninad Kunder",
        released: "2014",
        foundry: "Geometric Fonts",
        style: "Sans-serif — Geometric and contemporary",
      },
    ],
    colors: [
      {
        hex: "#BF0076",
        rgb: "191, 0, 118",
        cmyk: "0, 100, 38, 25",
        label: "AWCH Magenta",
      },
      {
        hex: "#E097C8",
        rgb: "224, 151, 200",
        cmyk: "0, 33, 11, 12",
        label: "Light Magenta",
      },
      {
        hex: "#F4C5E0",
        rgb: "244, 197, 224",
        cmyk: "0, 19, 8, 4",
        label: "Pale Pink",
      },
      {
        hex: "#ffffff",
        rgb: "255, 255, 255",
        cmyk: "0, 0, 0, 0",
        label: "White",
      },
    ],
    artDirectionImages: [
      "/ourworks/awch/logo01.png",
      "/ourworks/awch/Frame 4.png",
    ],
    applicationImages: [
      "/ourworks/awch/logo01.png",
      "/ourworks/awch/Post 1.jpg",
      "/ourworks/awch/Post 5.jpg",
      "/ourworks/awch/Frame 482.jpg",
      "/ourworks/awch/DB 01.jpg",
      "/ourworks/awch/HAND 7.jpg",
      "/ourworks/awch/Final Poster 6.png",
    ],
  },

  // ─── Givfunds ────────────────────────────────────────────────────────────
  {
    slug: "givfunds",
    title: "Givfunds",
    subtitle: "Brand Identity and Visual Communication",
    year: "2026",
    tags: ["Brand Identity", "Campaign Design", "Social Impact"],
    studio: "Studio 1947",
    credits: [
      { role: "Creative Direction", name: "Rabi" },
      { role: "Brand Design", name: "Studio 1947 Team" },
      { role: "Visual Communication", name: "Studio 1947 Team" },
    ],
    overview: {
      heading: "Building Urgency Through Clarity",
      paragraphs: [
        "Givfunds needed a visual language that could communicate trust and urgency at the same time across social, print, and campaign touchpoints.",
        "We developed a bold communication system centered on strong red accents, direct typography, and clean layouts that keep focus on cause, contribution, and action.",
      ],
    },
    logoImages: [
      "/ourworks/givfunds/logo.png",
      "/ourworks/givfunds/logo01.png",
    ],
    typefaces: [
      {
        name: "Montserrat",
        designer: "Julieta Ulanovsky",
        released: "2011",
        foundry: "The Montserrat Project",
        style: "Sans-serif — Headlines and campaign statements",
      },
      {
        name: "Inter",
        designer: "Rasmus Andersson",
        released: "2017",
        foundry: "Rasmus Andersson",
        style: "Sans-serif — Body copy and digital UI",
      },
    ],
    colors: [
      {
        hex: "#C20000",
        rgb: "194, 0, 0",
        cmyk: "0, 100, 100, 24",
        label: "Givfunds Red",
      },
      {
        hex: "#ffffff",
        rgb: "255, 255, 255",
        cmyk: "0, 0, 0, 0",
        label: "White",
      },
      {
        hex: "#111111",
        rgb: "17, 17, 17",
        cmyk: "0, 0, 0, 93",
        label: "Ink Black",
      },
    ],
    artDirectionImages: [
      "/ourworks/givfunds/Givfuds%2002.jpg",
      "/ourworks/givfunds/Givfunds%204.jpg",
      "/ourworks/givfunds/Poster%204.jpg",
      "/ourworks/givfunds/JULYY%2001.png",
    ],
    applicationImages: [
      "/ourworks/givfunds/giv%20edu%2001.jpg",
      "/ourworks/givfunds/giv%20edu%2002.jpg",
      "/ourworks/givfunds/givs06.jpg",
      "/ourworks/givfunds/wa1.jpg",
    ],
  },

  // ─── Village Ways ────────────────────────────────────────────────────────
  {
    slug: "village-ways",
    title: "Village Ways",
    subtitle: "Brand Identity and Visual Communication",
    year: "2026",
    tags: ["Brand Identity", "Campaign Design", "Communication Design"],
    studio: "Studio 1947",
    credits: [
      { role: "Creative Direction", name: "Rabi" },
      { role: "Brand Design", name: "Studio 1947 Team" },
      { role: "Visual Communication", name: "Studio 1947 Team" },
    ],
    overview: {
      heading: "A Color-Led System for Community Storytelling",
      paragraphs: [
        "Village Ways required a lively visual identity that could hold cultural warmth while staying clear and adaptable across multiple communication formats.",
        "We built a flexible, color-forward design system with distinctive iconography and typographic rhythm so every touchpoint feels rooted, optimistic, and easy to engage with.",
      ],
    },
    logoImages: [],
    typefaces: [
      {
        name: "Montserrat",
        designer: "Julieta Ulanovsky",
        released: "2011",
        foundry: "The Montserrat Project",
        style: "Sans-serif — Headline and display use",
      },
      {
        name: "Inter",
        designer: "Rasmus Andersson",
        released: "2017",
        foundry: "Rasmus Andersson",
        style: "Sans-serif — Body and digital text",
      },
    ],
    colors: [
      {
        hex: "#D90059",
        rgb: "217, 0, 89",
        cmyk: "0, 100, 59, 15",
      },
      {
        hex: "#EA5219",
        rgb: "234, 82, 25",
        cmyk: "0, 65, 89, 8",
      },
      {
        hex: "#49B9CC",
        rgb: "73, 185, 204",
        cmyk: "64, 9, 0, 20",
      },
      {
        hex: "#96C31F",
        rgb: "150, 195, 31",
        cmyk: "23, 0, 84, 24",
      },
      {
        hex: "#F39200",
        rgb: "243, 146, 0",
        cmyk: "0, 40, 100, 5",
      },
      {
        hex: "#7A6B59",
        rgb: "122, 107, 89",
        cmyk: "0, 12, 27, 52",
      },
    ],
    artDirectionImages: [
      "/ourworks/villageways/CM1.svg",
      "/ourworks/villageways/CM2.svg",
      "/ourworks/villageways/CM3.svg",
    ],
    applicationImages: [
      "/ourworks/villageways/CM1.svg",
      "/ourworks/villageways/CM2.svg",
      "/ourworks/villageways/CM3.svg",
    ],
  },
];
/** Look up a brand by its URL slug. */
export const getWorkBySlug = (slug: string): BrandWork | undefined =>
  ourWorksData.find((w) => w.slug === slug);
