
const TESTIMONIALS = [
  {
    quote:
      "Studio 1947 delivered exceptional promotional designs for our cultural programmes. Their unique emphasis on visual storytelling added a fascinating, artistic layer to our work that we hadn't seen before.",
    author: "Suranya Aiyaar",
    role: "CEO",
    company: "Bhagyam Arts & Aesthetic",
    image: "/client/Suranya.avif",
  },
  {
    quote:
      "Working with the team has been a treat. They did an amazing job simplifying technical jargon into thoughtful illustrations, making our challenging concepts genuinely engaging and effective for our audience.",
    author: "Sharda Mohanty",
    role: "CEO",
    company: "AIcrowd",
    image: "/client/Sharda.avif",
  },
  {
    quote:
      "As a development organization, we often struggle to make abstract research accessible. Studio 1947 translated our complex vision into visually meaningful products that made our findings exciting and easy to understand.",
    author: "Mandvi Kulshreshtha",
    role: "Senior Program Adviser",
    company: "Friedrich-Ebert-Stiftung, India",
    image: "/client/Mandvi.avif",
  },
];

export default function Testimonials() {
  const cardClassName =
    "w-full rounded-3xl p-8 border border-gray-100 bg-white shadow-xl transition-colors hover:border-gray-200 flex flex-col justify-between cursor-default";
  const quoteIconClassName = "w-8 h-8 text-gray-200 mb-6";
  const quoteClassName = "text-gray-900 text-lg leading-relaxed font-medium";
  const authorClassName = "font-bold text-gray-900 mb-0.5";
  const roleClassName = "text-sm text-gray-600 font-medium";
  const companyClassName = "text-sm text-gray-500 mt-1";

  return (
    <section className="relative py-24 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our Clients Are Saying
        </h2>
        <p className="text-gray-500 text-lg">
          Don't just take our word for it—hear from the people we've worked
          with.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className={cardClassName}>
              <div className="mb-8">
                <svg
                  className={quoteIconClassName}
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.333 13.333c0-3.682 2.985-6.667 6.667-6.667V0c-7.364 0-13.333 5.97-13.333 13.333v13.333h13.333V13.333H9.333zM25.333 13.333c0-3.682 2.985-6.667 6.667-6.667V0c-7.364 0-13.333 5.97-13.333 13.333v13.333h13.333V13.333H25.333z" />
                </svg>
                <p className={quoteClassName}>"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                )}
                <div>
                  <p className={authorClassName}>{testimonial.author}</p>
                  <p className={roleClassName}>{testimonial.role}</p>
                  <p className={companyClassName}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
