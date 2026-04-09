import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { verticalsSectionData } from "../../data/verticalsData";

gsap.registerPlugin(ScrollTrigger);

export interface VerticalItemInput {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkAction: (() => void) | string;
}

interface VerticalsProps {
  items?: VerticalItemInput[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
}

const defaultItems: VerticalItemInput[] = verticalsSectionData.cards.map((card) => ({
  id: card.id,
  title: card.title,
  description: card.description,
  imageUrl: card.image,
  linkAction: card.ctaHref,
}));

export default function Verticals({
  items = defaultItems,
  eyebrow = verticalsSectionData.eyebrow,
  heading = verticalsSectionData.heading,
  subheading = verticalsSectionData.description,
}: VerticalsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const pinnedRightRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        [badgeRef.current, headingRef.current, subheadingRef.current],
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );

      const hoverTimelines: gsap.core.Timeline[] = [];
      const removeHoverListeners: Array<() => void> = [];

      cardRefs.current.forEach((card, index) => {
        const image = imageRefs.current[index];
        const content = contentRefs.current[index];
        if (!card || !image || !content) return;

        gsap.set(image, { scale: 1.14, filter: "blur(5px)" });
        gsap.set(content, { y: 16, opacity: 0.9 });

        const hoverTl = gsap
          .timeline({ paused: true, defaults: { ease: "power3.out" } })
          .to(
            image,
            {
              scale: 1,
              filter: "blur(0px)",
              duration: 0.65,
            },
            0,
          )
          .to(
            content,
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
            },
            0.05,
          );

        const onEnter = () => hoverTl.play();
        const onLeave = () => hoverTl.reverse();

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        card.addEventListener("focus", onEnter);
        card.addEventListener("blur", onLeave);

        hoverTimelines.push(hoverTl);
        removeHoverListeners.push(() => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
          card.removeEventListener("focus", onEnter);
          card.removeEventListener("blur", onLeave);
        });
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (!pinnedRightRef.current || !cardsRef.current) return;

        const pinTrigger = ScrollTrigger.create({
          trigger: pinnedRightRef.current,
          start: "top center",
          endTrigger: cardsRef.current,
          end: "bottom center",
          pin: pinnedRightRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        return () => {
          pinTrigger.kill();
        };
      });

      return () => {
        removeHoverListeners.forEach((remove) => remove());
        hoverTimelines.forEach((timeline) => timeline.kill());
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  const runLinkAction = (action: VerticalItemInput["linkAction"]) => {
    if (typeof action === "function") {
      action();
      return;
    }

    if (typeof window !== "undefined") {
      window.location.assign(action);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-gray-200 bg-gray-50 py-20 md:py-24 dark:border-gray-800 dark:bg-[#0a0f1a]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div ref={cardsRef} className="order-2 grid gap-6 sm:grid-cols-2 lg:order-1">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                tabIndex={0}
                aria-label={`Open ${item.title}`}
                onClick={() => runLinkAction(item.linkAction)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    runLinkAction(item.linkAction);
                  }
                }}
                className={`group relative min-h-[20rem] overflow-hidden rounded-[1.5rem] text-left shadow-[0_24px_70px_-36px_rgba(2,6,23,0.82)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white ${index === 0 ? "sm:col-span-2 min-h-[29rem]" : ""}`}
              >
                <div
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  aria-hidden="true"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/58 to-slate-900/24" />

                <div className="relative z-10 flex h-full items-end">
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className="w-full px-6 pb-6 pt-16 sm:px-7 sm:pb-7"
                  >
                    <h3 className="text-[clamp(1.35rem,1.8vw,2rem)] font-black leading-tight tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-[0.98rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <div ref={pinnedRightRef} className="lg:h-screen lg:pt-[12vh]">
              <div className="max-w-xl">
                <span
                  ref={badgeRef}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-300" />
                  {eyebrow}
                </span>

                <h2
                  ref={headingRef}
                  className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.03em] text-gray-950 dark:text-white sm:text-5xl"
                >
                  {heading}
                </h2>

                <p
                  ref={subheadingRef}
                  className="mt-5 max-w-lg text-base leading-8 text-gray-600 dark:text-gray-300"
                >
                  {subheading}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
