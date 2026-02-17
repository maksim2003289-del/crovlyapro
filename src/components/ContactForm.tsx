import { Button } from "@/components/ui/button";
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          <Button asChild size="lg" className="bg-warm hover:bg-warm/90 text-warm-foreground font-bold text-lg py-7 rounded-xl shadow-lg">
            <a href="tel:+79132560338">
              <Phone className="w-5 h-5 mr-2" />
              Позвонить
            </a>
          </Button>
          <Button asChild size="lg" className="bg-[hsl(142_70%_40%)] hover:bg-[hsl(142_70%_35%)] text-white font-bold text-lg py-7 rounded-xl shadow-lg">
            <a href="https://wa.me/79619805504" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp / Telegram
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-dark-surface-foreground text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-warm" />
            <span>+7 (913) 256-03-38</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-warm" />
            <a href="mailto:vitor.vinokur@yandex.ru" className="hover:text-warm transition-colors">vitor.vinokur@yandex.ru</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-warm" />
            <span>п. Садовый, ул. Полевая 14/1</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
