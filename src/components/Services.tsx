// src/components/Services.tsx
export default function Services() {
  return (
    <section id="Services" dir="ltr" className="bg-gray-400 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Service</h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            A single focused service that gives you a smooth and fast experience to find the right property.
          </p>
        </div>

        {/* One service with an image */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text (left in LTR) */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Smart Search
            </h3>
            <p className="mt-4 text-gray-700 leading-8">
              An AI-powered search engine that understands your preferences (budget, district, size, and lifestyle)
              and instantly displays the best options, with personalized and up-to-date recommendations from the market.
            </p>
            {/* Optional button */}
            <div className="mt-8">
              <a
                href="#Contact"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-white hover:bg-gray-400"
              >
                Request a Demo
              </a>
            </div>
          </div>

          {/* Image (right in LTR) */}
          <div className="relative">
              <img
                src="/smart-search.png"
                alt="Smart Search feature interface"
                className="w-80 h-auto bg-gray-400 border-gray-400"
              />
            
          </div>
        </div>
      </div>
    </section>
  );
}
