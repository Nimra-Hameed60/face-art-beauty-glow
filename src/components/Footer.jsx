import { FaPhone, FaInstagram, FaStar } from "react-icons/fa";
import { SALON } from "../data/salon";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault();

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-ink-900 text-cream-100/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid sm:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Salon Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaStar className="w-5 h-5 text-gold-400" />

              <span className="font-display text-xl text-white">
                {SALON.name}
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-xs">
              Professional Beauty Care &amp; Styling in Jaranwala
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium mb-4">
              Contact
            </h4>

            <a
              href={`tel:${SALON.phoneTel}`}
              className="flex items-center gap-2 text-sm mb-2.5 hover:text-gold-400 transition-colors"
            >
              <FaPhone className="w-4 h-4" />
              {SALON.phoneDisplay}
            </a>

            <a
              href={SALON.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-gold-400 transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
              {SALON.instagramHandle}
            </a>
          </div>
        </div>

        <p className="text-xs text-white/50 text-center pt-6">
          © 2026 {SALON.name}. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}