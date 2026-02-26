import { useEffect, useRef } from "react";

export default function HeroFigure({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        fetch("/Studio viz_final.svg")
            .then((res) => res.text())
            .then((raw) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(raw, "image/svg+xml");
                const svg = doc.querySelector("svg");
                if (!svg) return;

                /* ── viewBox center for rotation pivot ── */
                const vb = svg.getAttribute("viewBox")?.split(/\s+/).map(Number);
                const cx = vb ? vb[0] + vb[2] / 2 : 1644;
                const cy = vb ? vb[1] + vb[3] / 2 : 1644;
                const ns = "http://www.w3.org/2000/svg";

                /*
                 * The SVG has NO <g> groups – all paths are flat children.
                 * We group them by index ranges into rotating wrappers:
                 *
                 *  [0..1]     → center compass icon  (static)
                 *  [2..95]    → OUTER text ring + outer stars
                 *  [96..209]  → MIDDLE text ring + middle stars
                 *  [210..255] → INNER text ring + inner stars
                 *  [256+]     → decorative dots (static)
                 */
                const children = Array.from(svg.children);

                const rings: { start: number; end: number; cls: string }[] = [
                    { start: 2, end: 95, cls: "hero-ring-ccw-slow" },   // outer → CCW
                    { start: 96, end: 209, cls: "hero-ring-cw-mid" },   // middle → CW
                    // inner ring (210-255) left static to avoid distortion
                ];

                /* Wrap a range of child elements in a translate→rotate→translate-back
                   wrapper for jitter-free CSS rotation around the viewBox centre. */
                for (const ring of rings) {
                    const slice = children.slice(ring.start, ring.end + 1);
                    if (!slice.length) continue;

                    const outerG = doc.createElementNS(ns, "g");
                    outerG.setAttribute("transform", `translate(${cx}, ${cy})`);

                    const spinG = doc.createElementNS(ns, "g");
                    spinG.setAttribute("class", ring.cls);

                    const innerG = doc.createElementNS(ns, "g");
                    innerG.setAttribute("transform", `translate(${-cx}, ${-cy})`);

                    // Insert wrapper before the first element of the slice
                    slice[0].parentNode?.insertBefore(outerG, slice[0]);

                    // Move every element in the slice into the innerG
                    for (const child of slice) innerG.appendChild(child);

                    spinG.appendChild(innerG);
                    outerG.appendChild(spinG);
                }

                // Make SVG fill container
                svg.setAttribute("class", "w-full h-full");
                svg.setAttribute("overflow", "visible");
                svg.removeAttribute("width");
                svg.removeAttribute("height");

                // Inject directly into DOM so animations start immediately
                el.innerHTML = svg.outerHTML;
            })
            .catch(console.error);
    }, []);

    return (
        <div
            className={`relative flex items-center justify-center w-full h-full aspect-square ${className || ""}`}
        >
            <style>{`
                @keyframes hero-spin-cw {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes hero-spin-ccw {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(-360deg); }
                }
                .hero-ring-ccw-slow {
                    animation: hero-spin-ccw 70s linear infinite;
                    transform-origin: 0 0;
                }
                .hero-ring-cw-mid {
                    animation: hero-spin-cw 55s linear infinite;
                    transform-origin: 0 0;
                }
                .hero-ring-ccw-fast {
                    animation: hero-spin-ccw 40s linear infinite;
                    transform-origin: 0 0;
                }
            `}</style>

            {/* SVG injected here by useEffect */}
            <div ref={containerRef} className="w-full h-full">
                {/* Loading placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-[#4439e6] rounded-full animate-spin" />
                </div>
            </div>
        </div>
    );
}
