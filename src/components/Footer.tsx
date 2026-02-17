import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-border py-10 px-4">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-xl font-extrabold text-primary-foreground tracking-tight">
              КРОВЛЯ<span className="text-warm">ПРО</span>
            </a>
            <p className="text-xs text-dark-surface-foreground mt-1">
              Кровельные и строительные работы · Алтайский край
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-dark-surface-foreground">
            <a href="tel:+79132560338" className="flex items-center gap-2 hover:text-warm transition-colors">
              <Phone className="w-4 h-4" /> +7 (913) 256-03-38
            </a>
            <a href="mailto:vitor.vinokur@yandex.ru" className="flex items-center gap-2 hover:text-warm transition-colors">
              <Mail className="w-4 h-4" /> vitor.vinokur@yandex.ru
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2025 ИП Винокуров В.А. ИНН 228001083066 ОГРНИП 322220200017831. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
