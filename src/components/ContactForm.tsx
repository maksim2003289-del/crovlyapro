import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="section-padding bg-dark-surface">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-2">Контакты</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-dark-surface-foreground max-w-xl mx-auto leading-relaxed">
            Позвоните или напишите — бесплатно проконсультируем и рассчитаем стоимость работ за 15 минут.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-dark-surface-foreground">
          <a href="tel:+79132560338" className="flex items-center gap-3 hover:text-warm transition-colors">
            <Phone className="w-5 h-5 text-warm" />
            <span className="font-medium">+7 (913) 256-03-38</span>
          </a>
          <a href="https://wa.me/79619805504" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-warm transition-colors">
            <MessageCircle className="w-5 h-5 text-warm" />
            <span className="font-medium">+7 (961) 980-55-04 (WhatsApp / Telegram)</span>
          </a>
          <a href="mailto:vitor.vinokur@yandex.ru" className="flex items-center gap-3 hover:text-warm transition-colors">
            <Mail className="w-5 h-5 text-warm" />
            <span className="font-medium">vitor.vinokur@yandex.ru</span>
          </a>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-warm" />
            <span className="font-medium">п. Садовый, ул. Полевая 14/1</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
