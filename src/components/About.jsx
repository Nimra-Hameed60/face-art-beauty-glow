import { Award, Heart, Home, Gem, Crown } from "lucide-react";
import Reveal from "../components/Reveal";

const REASONS = [
  { icon: Award, label: "Professional Beauty Services" },
  { icon: Heart, label: "Personalized Attention" },
  { icon: Home, label: "Elegant & Comfortable Environment" },
  { icon: Gem, label: "Quality Beauty Care" },
  { icon: Crown, label: "Special Occasion & Bridal Services" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Face Art Beauty Salon interior"
                  className="w-full h-[480px] object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -right-6 sm:-right-10 bg-ink-900 rounded-2xl px-8 py-6 shadow-xl">
                <p className="font-display text-3xl text-gold-300">
                  Face Art
                </p>

                <p className="text-xs uppercase tracking-[0.2em] text-cream-100/80 mt-1">
                  Beauty Salon
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-medium">
              About Us
            </span>

            <h2 className="font-display text-4xl lg:text-5xl text-ink-900 mt-4 mb-6 leading-tight">
              Crafted for Your Natural Beauty
            </h2>

            <p className="text-ink-600 leading-[1.75] text-base lg:text-lg mb-10">
              At Face Art Beauty Salon, we believe every woman deserves to
              feel confident, beautiful and cared for. Our salon offers
              professional beauty and styling services in a comfortable and
              welcoming environment. From everyday beauty care to special
              occasions and bridal looks, we focus on quality, attention to
              detail and making every client feel their best.
            </p>

            <h3 className="text-sm uppercase tracking-[0.2em] text-ink-900 font-semibold mb-5">
              Why Choose Us
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {REASONS.map((reason) => (
                <div
                  key={reason.label}
                  className="flex items-center gap-3 rounded-xl border border-cream-200 bg-white px-4 py-3.5 transition-all duration-300 hover:border-gold-300 hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gold-50 flex items-center justify-center">
                    <reason.icon
                      className="w-4 h-4 text-gold-600"
                      strokeWidth={1.5}
                    />
                  </div>

                  <span className="text-sm text-ink-800 font-medium">
                    {reason.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}