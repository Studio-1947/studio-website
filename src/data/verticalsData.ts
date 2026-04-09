export type VerticalTone = "royal" | "emerald" | "indigo" | "amber";

export interface VerticalItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tone: VerticalTone;
  featured?: boolean;
  className?: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface VerticalsSectionData {
  eyebrow: string;
  heading: string;
  description: string;
  cards: VerticalItem[];
}

export const verticalsSectionData: VerticalsSectionData = {
  eyebrow: "Our Verticals",
  heading: "We Don’t Just Build Products.",
  description:
    "We work across collaborations, products, solutions, and initiatives, shaping each one with the same craft but a different lens for impact.",
  cards: [
    {
      id: "products",
      title: "Products",
      description:
        "We build scalable, robust software solutions tailored to solve complex challenges. Explore our suite of enterprise products.",
      image: "/vertical/products.png",
      tone: "royal",
      featured: true,
      className: "sm:col-span-2 min-h-[31rem]",
      ctaLabel: "Explore products",
      ctaHref: "/products",
    },
    {
      id: "collaborations",
      title: "Collaborations",
      description:
        "We collaborate with NGOs and other businesses who aim for local impact with greater minds.",
      image: "/vertical/collabs.jpg",
      tone: "emerald",
      className: "min-h-[19rem]",
      ctaLabel: "View collaborations",
      ctaHref: "/collabs",
    },
    {
      id: "solutions",
      title: "Solutions",
      description:
        "From research to deployment, we build bespoke platforms and workflows tailored exactly to your organizational volume and scale.",
      image: "/vertical/Solutions.png",
      tone: "indigo",
      className: "min-h-[19rem]",
      ctaLabel: "See solutions",
      ctaHref: "/solutions",
    },
    {
      id: "initiatives",
      title: "Initiatives",
      description:
        "Pioneering meaningful change through localized, sustainable, and culturally rooted projects.",
      image: "/vertical/initiative.png",
      tone: "amber",
      className: "sm:col-span-2 min-h-[18rem]",
      ctaLabel: "Discover initiatives",
      ctaHref: "/initiative",
    },
  ],
};
