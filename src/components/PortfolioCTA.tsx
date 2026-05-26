export default function PortfolioCTA() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white">
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full items-center justify-end overflow-hidden pointer-events-none">
          <img
            src="/portfolio/remodelUN/end_half_logo.svg"
            alt=""
            aria-hidden
            className="h-full object-cover object-left opacity-100"
          />
        </div>
        <div className="relative z-10 p-10 md:p-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#D60000] leading-tight mb-8 md:mb-10">
            Building a future-proof brand system or launching a complex digital
            product?
          </h2>
          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-talk-modal"))
            }
            className="inline-flex items-center justify-center px-8 py-4 bg-[#D60000] text-white rounded-full font-bold text-lg hover:bg-[#B80000] transition-colors"
          >
            Let&apos;s Build a Sustainable System
          </button>
        </div>
      </div>
    </section>
  );
}
