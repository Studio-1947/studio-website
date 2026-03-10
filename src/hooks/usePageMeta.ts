import { useEffect } from 'react';

interface PageMeta {
    title: string;
    description?: string;
    ogImage?: string;
}

const DEFAULT_DESCRIPTION =
    'Studio 1947 — A creative studio crafting digital experiences that merge timeless design with cutting-edge technology. Based in Mirik, Darjeeling.';
const DEFAULT_OG_IMAGE = '/studiologo.png';
const BASE_TITLE = 'Studio 1947';

function setMetaTag(attr: 'name' | 'property', value: string, content: string) {
    let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, value);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

/**
 * Sets document.title and key OG/Twitter meta tags for the current route.
 * Call at the top of each page component.
 */
export function usePageMeta({
    title,
    description = DEFAULT_DESCRIPTION,
    ogImage = DEFAULT_OG_IMAGE,
}: PageMeta) {
    useEffect(() => {
        document.title = title;

        setMetaTag('name', 'description', description);

        // Open Graph
        setMetaTag('property', 'og:title', title);
        setMetaTag('property', 'og:description', description);
        setMetaTag('property', 'og:image', ogImage);
        setMetaTag('property', 'og:type', 'website');

        // Twitter Cards
        setMetaTag('name', 'twitter:card', 'summary_large_image');
        setMetaTag('name', 'twitter:title', title);
        setMetaTag('name', 'twitter:description', description);
        setMetaTag('name', 'twitter:image', ogImage);

        return () => {
            document.title = BASE_TITLE;
        };
    }, [title, description, ogImage]);
}
