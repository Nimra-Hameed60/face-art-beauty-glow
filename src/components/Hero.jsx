import { MapPin } from "lucide-react";
import { SALON } from "../data/salon";

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/10658354/pexels-photo-10658354.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Elegant beauty makeup look"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-ink-900/90 via-ink-900/60 to-ink-900/30" />

        <div className="absolute inset-0 bg-linear-to-t from-ink-900/80 via-transparent to-ink-900/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="max-w-2xl">

          {/* Location */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-white/5 backdrop-blur-sm px-4 py-2 mb-8 animate-fade-up"
            style={{
              animationDelay: "0.1s",
              opacity: 1,
            }}
          >
            <MapPin
              className="w-4 h-4 text-gold-300"
              strokeWidth={1.5}
            />

            <span className="text-xs uppercase tracking-[0.2em] text-cream-100">
              {SALON.name} — Punjab Pakistan
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-white mb-6"
          >
            Where Beauty
            <br />
            <span className="italic text-gold-300">
              Meets Confidence
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-cream-100/90 leading-relaxed max-w-xl mb-10">
            Enhancing your natural beauty with professional care, elegant
            styling and personalized beauty services.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button
              onClick={() => scrollTo("#appointment")}
              className="inline-flex justify-center items-center rounded-full bg-gold-500 px-8 py-4 text-sm font-medium tracking-wide text-ink-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-xl hover:-translate-y-0.5"
            >
              Book an Appointment
            </button>

            <button
              onClick={() => scrollTo("#services")}
              className="inline-flex justify-center items-center rounded-full border border-white/40 px-8 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Explore Our Services
            </button>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[11px] uppercase tracking-[0.25em] text-white/60">
          Scroll
        </span>

        <div className="w-px h-10 bg-linear-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}