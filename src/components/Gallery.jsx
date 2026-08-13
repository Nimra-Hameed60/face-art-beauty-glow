import { useState } from "react";
import Reveal from "../components/Reveal";

const GALLERY_ITEMS = [
  {
    category: "Bridal Makeup",
    image:
      "https://images.pexels.com/photos/20249093/pexels-photo-20249093.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Party Makeup",
    image:
      "https://images.pexels.com/photos/33945859/pexels-photo-33945859.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Hair Styling",
    image:
      "https://images.pexels.com/photos/3993290/pexels-photo-3993290.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Nail Art",
    image:
      "https://images.pexels.com/photos/34871595/pexels-photo-34871595.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Beauty Treatments",
    image:
      "https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Salon Work",
    image:
      "https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Bridal Makeup",
    image:
      "https://images.pexels.com/photos/37866001/pexels-photo-37866001.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Party Makeup",
    image:
      "https://images.pexels.com/photos/10613212/pexels-photo-10613212.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Hair Styling",
    image:
      "https://images.pexels.com/photos/696285/pexels-photo-696285.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Nail Art",
    image:
      "https://images.pexels.com/photos/33566030/pexels-photo-33566030.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Beauty Treatments",
    image:
      "https://images.pexels.com/photos/30809943/pexels-photo-30809943.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    category: "Salon Work",
    image:
      "https://images.pexels.com/photos/7195801/pexels-photo-7195801.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const CATEGORIES = [
  "All",
  "Bridal Makeup",
  "Party Makeup",
  "Hair Styling",
  "Nail Art",
  "Beauty Treatments",
  "Salon Work",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section id="gallery" className="bg-cream-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-medium">
            Our Gallery
          </span>

          <h2 className="font-display text-4xl lg:text-5xl text-ink-900 mt-4 mb-5 leading-tight">
            A Glimpse of Our Work
          </h2>

          <p className="text-ink-600 leading-relaxed">
            Bridal transformations, glamorous looks and the artistry behind
            every visit to Face Art Beauty Salon.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "bg-ink-900 text-cream-50"
                  : "bg-white text-ink-700 border border-cream-200 hover:border-gold-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, i) => (
            <Reveal
              key={`${item.category}-${item.image}`}
              delay={(i % 4) * 80}
            >
              <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
                <img
                  src={item.image}
                  alt={item.category}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {item.category}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}