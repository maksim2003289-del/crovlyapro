import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/95 backdrop-blur-md border-b border-dark-surface">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#hero" className="text-xl md:text-2xl font-extrabold text-primary-foreground tracking-tight">
          КРОВЛЯ<span className="text-warm">ПРО</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-dark-surface-foreground hover:text-warm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+78001234567"
          className="hidden md:flex items-center gap-2 text-sm font-semibold text-warm"
        >
          <Phone className="w-4 h-4" />
          8 (800) 123-45-67
        </a>

        <button
          className="md:hidden text-dark-surface-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark-surface border-t border-border animate-fade-in">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-dark-surface-foreground hover:text-warm transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+78001234567" className="flex items-center gap-2 text-sm font-semibold text-warm">
              <Phone className="w-4 h-4" />
              8 (800) 123-45-67
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
