import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (913) 256-03-38",
    subtext: "WhatsApp / Telegram",
    href: "tel:+79132560338",
  },
  {
    icon: MessageCircle,
    label: "Мессенджеры",
    value: "+7 (961) 980-55-04",
    subtext: "WhatsApp / Telegram",
    href: "https://wa.me/79619805504",
    external: true,
  },
  {
    icon: Mail,
    label: "Почта",
    value: "vitor.vinokur@yandex.ru",
    href: "mailto:vitor.vinokur@yandex.ru",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "п. Садовый, ул. Полевая 14/1",
    subtext: "Алтайский край",
  },
];

const ContactForm = () => {
  return (
    <section id="contact" className="section-padding bg-dark-surface relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-warm rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-2">
            Контакты
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-dark-surface-foreground max-w-xl mx-auto leading-relaxed">
            Позвоните или напишите — бесплатно проконсультируем и рассчитаем стоимость работ за 15 минут.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {contacts.map((item, i) => {
            const Icon = item.icon;
            const inner = (
              <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:bg-white/10 hover:border-warm/30 transition-all duration-300 h-full flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-warm/15 flex items-center justify-center mb-1 group-hover:bg-warm/25 transition-colors">
                  <Icon className="w-5 h-5 text-warm" />
                </div>
                <p className="text-xs uppercase tracking-widest text-dark-surface-foreground/60 font-semibold">
                  {item.label}
                </p>
                <p className="text-primary-foreground font-semibold text-sm leading-snug">
                  {item.value}
                </p>
                {item.subtext && (
                  <p className="text-dark-surface-foreground/50 text-xs">{item.subtext}</p>
                )}
              </div>
            );

            return item.href ? (
              <a
                key={i}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {inner}
              </a>
            ) : (
              <div key={i}>{inner}</div>
            );
          })}
        </div>

        {/* Working hours */}
        <div className="flex items-center justify-center gap-2 text-dark-surface-foreground/60 text-sm">
          <Clock className="w-4 h-4 text-warm/70" />
          <span>Работаем ежедневно с 8:00 до 20:00</span>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
