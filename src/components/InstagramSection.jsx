import { FaInstagram } from "react-icons/fa";
import Reveal from "../components/Reveal";
import { SALON } from "../data/salon";

const PREVIEW_IMAGES = [
  "https://images.pexels.com/photos/19789087/pexels-photo-19789087.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/13330555/pexels-photo-13330555.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/34871644/pexels-photo-34871644.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3993297/pexels-photo-3993297.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/24860964/pexels-photo-24860964.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7509916/pexels-photo-7509916.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function InstagramSection() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-6">
            <FaInstagram
              className="w-6 h-6 text-gold-600"
              strokeWidth={1.5}
            />
          </div>

          <h2 className="font-display text-3xl lg:text-4xl text-ink-900 mb-4 leading-tight">
            See Our Latest Beauty Looks
          </h2>

          <p className="text-ink-600 leading-relaxed mb-8">
            Follow Face Art Beauty Salon on Instagram for bridal
            transformations, makeup looks, hairstyles and beauty inspiration.
          </p>

          <a
            href={SALON.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-8 py-4 text-sm font-medium tracking-wide text-cream-50 transition-all duration-300 hover:bg-gold-600 hover:-translate-y-0.5"
          >
            <FaInstagram className="w-5 h-5" />
            Follow Us on Instagram
          </a>

          <p className="text-sm text-ink-500 mt-4">
            {SALON.instagramHandle}
          </p>
        </Reveal>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
          {PREVIEW_IMAGES.map((src, i) => (
            <Reveal key={src} delay={i * 60}>
              <a
                href={SALON.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square rounded-xl overflow-hidden"
              >
                <img
                  src={src}
                  alt="Face Art Beauty Salon Instagram preview"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/30 flex items-center justify-center transition-colors duration-300">
                  <FaInstagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}