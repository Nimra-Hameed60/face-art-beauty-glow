import {
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaDirections,
} from "react-icons/fa";

import Reveal from "../components/Reveal";

import {
  SALON,
  buildWhatsappUrl,
  defaultWhatsappMessage,
  mapsDirectionsUrl,
  mapsEmbedUrl,
} from "../data/salon";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-medium">
            Visit Us
          </span>

          <h2 className="font-display text-4xl lg:text-5xl text-ink-900 mt-4 mb-5 leading-tight">
            Find Us in Jaranwala
          </h2>

          <p className="text-ink-600 leading-relaxed">
            {SALON.name}
            <br />
            {SALON.addressLines[0]}
            <br />
            {SALON.addressLines[1]}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-[1.75rem] overflow-hidden shadow-lg border border-cream-200 h-[420px]">
              <iframe
                title="Face Art Beauty Salon location"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-cream-50 rounded-[1.75rem] p-8 sm:p-10 h-full flex flex-col">
              
              {/* Address */}
              <div className="flex items-start gap-3 mb-6">
                <FaMapMarkerAlt className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />

                <p className="text-ink-800 leading-relaxed">
                  {SALON.addressLines[0]}
                  <br />
                  {SALON.addressLines[1]}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 mb-8">
                <FaPhone className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-500 mb-1">
                    Phone / WhatsApp
                  </p>

                  <p className="text-ink-800 font-medium">
                    {SALON.phoneDisplay}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                
                {/* Call */}
                <a
                  href={`tel:${SALON.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3.5 text-sm font-medium text-cream-50 transition-all duration-300 hover:bg-gold-600 hover:-translate-y-0.5"
                >
                  <FaPhone className="w-4 h-4" />
                  Call Now
                </a>

                {/* WhatsApp */}
                <a
                  href={buildWhatsappUrl(defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-success-600 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-success-500 hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>

                {/* Instagram */}
                <a
                  href={SALON.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-900 px-5 py-3.5 text-sm font-medium text-ink-900 transition-all duration-300 hover:bg-ink-900 hover:text-cream-50 hover:-translate-y-0.5"
                >
                  <FaInstagram className="w-4 h-4" />
                  Instagram
                </a>

                {/* Directions */}
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-900 px-5 py-3.5 text-sm font-medium text-ink-900 transition-all duration-300 hover:bg-ink-900 hover:text-cream-50 hover:-translate-y-0.5"
                >
                  <FaDirections className="w-4 h-4" />
                  Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}