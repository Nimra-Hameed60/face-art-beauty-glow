import { useEffect, useState } from "react";
import { Menu, X, Sparkle } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Bridal", href: "#bridal" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-cream-50/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2 group"
        >
          <Sparkle
            className={`w-6 h-6 transition-colors ${
              scrolled || menuOpen ? "text-gold-600" : "text-gold-400"
            }`}
            strokeWidth={1.5}
          />

          <span
            className={`font-display text-xl md:text-2xl tracking-wide transition-colors ${
              scrolled || menuOpen ? "text-ink-900" : "text-white"
            }`}
          >
            Rabia Beauty Parlor
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`text-sm uppercase tracking-wider font-medium transition-colors hover:text-gold-600 ${
                scrolled ? "text-ink-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#appointment"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#appointment");
            }}
            className="inline-flex items-center rounded-full bg-ink-900 px-6 py-2.5 text-sm font-medium text-cream-50 tracking-wide transition-all duration-300 hover:bg-gold-600 hover:shadow-lg hover:-translate-y-0.5"
          >
            Book an Appointment
          </a>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X
              className={`w-6 h-6 ${
                scrolled || menuOpen ? "text-ink-900" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                scrolled ? "text-ink-900" : "text-white"
              }`}
            />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-cream-50 border-t border-cream-200 px-6 py-6 flex flex-col gap-5 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-ink-800 text-base font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#appointment"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#appointment");
            }}
            className="inline-flex justify-center items-center rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-cream-50 tracking-wide"
          >
            Book an Appointment
          </a>
        </div>
      )}
    </header>
  );
}