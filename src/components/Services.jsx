import {
  Crown,
  Sparkles,
  Scissors,
  Droplet,
  Flower2,
  Eye,
  SprayCan,
  Hand,
  Palette,
  Gift,
  ArrowRight,
} from "lucide-react";
import Reveal from "../components/Reveal";

const SERVICES = [
  {
    title: "Bridal Makeup",
    description:
      "Elegant bridal looks customized to your style and special day.",
    icon: Crown,
  },
  {
    title: "Party & Event Makeup",
    description:
      "Glamorous makeup looks for weddings, parties and special occasions.",
    icon: Sparkles,
  },
  {
    title: "Hair Styling",
    description:
      "Professional hairstyles, curls, straightening and occasion styling.",
    icon: Scissors,
  },
  {
    title: "Hair Treatments",
    description:
      "Hair care treatments designed to improve the look and feel of your hair.",
    icon: Droplet,
  },
  {
    title: "Facials & Skin Care",
    description:
      "Refreshing beauty treatments for clean, healthy and glowing skin.",
    icon: Flower2,
  },
  {
    title: "Threading",
    description:
      "Precise eyebrow and facial threading for a clean and polished look.",
    icon: Eye,
  },
  {
    title: "Waxing",
    description:
      "Professional waxing services for smooth and beautiful skin.",
    icon: SprayCan,
  },
  {
    title: "Manicure & Pedicure",
    description:
      "Relaxing nail and hand/foot care for a polished finish.",
    icon: Hand,
  },
  {
    title: "Nail Art",
    description:
      "Beautiful and stylish nail designs for everyday and special occasions.",
    icon: Palette,
  },
  {
    title: "Makeup & Beauty Packages",
    description:
      "Customized beauty packages for your important events.",
    icon: Gift,
  },
];

export default function Services({ onSelectService }) {
  const handleBook = (service) => {
    onSelectService(service);

    document
      .querySelector("#appointment")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-medium">
            Our Services
          </span>

          <h2 className="font-display text-4xl lg:text-5xl text-ink-900 mt-4 mb-5 leading-tight">
            Beauty Services Tailored to You
          </h2>

          <p className="text-ink-600 leading-relaxed">
            A full range of professional beauty and styling services,
            delivered with care and attention to detail.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 100}
            >
              <div className="group relative rounded-2xl border border-cream-200 bg-cream-50 p-8 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold-300">
                <div className="w-14 h-14 rounded-xl bg-ink-900 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-gold-500">
                  <service.icon
                    className="w-6 h-6 text-gold-300 group-hover:text-ink-900 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-display text-xl text-ink-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-ink-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <button
                  onClick={() => handleBook(service.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-700 hover:text-gold-600 transition-colors"
                >
                  Book Now

                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}