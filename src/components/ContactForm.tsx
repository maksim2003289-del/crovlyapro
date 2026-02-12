import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", roofType: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Заполните обязательные поля", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка отправлена!", description: "Мы свяжемся с вами в ближайшее время." });
    setForm({ name: "", phone: "", roofType: "" });
  };

  return (
    <section id="contact" className="section-padding bg-dark-surface">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-2">Контакты</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
              Оставьте заявку
            </h2>
            <p className="text-dark-surface-foreground mb-8 leading-relaxed">
              Получите бесплатную консультацию и расчёт стоимости работ за 15 минут. Наш специалист свяжется с вами.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-dark-surface-foreground">
                <Phone className="w-5 h-5 text-warm" />
                <span className="font-medium">8 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-dark-surface-foreground">
                <Mail className="w-5 h-5 text-warm" />
                <span className="font-medium">info@krovlyapro.ru</span>
              </div>
              <div className="flex items-center gap-3 text-dark-surface-foreground">
                <MapPin className="w-5 h-5 text-warm" />
                <span className="font-medium">Москва, ул. Строителей, 15</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Ваше имя *</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Иван Иванов"
                maxLength={100}
                className="bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон *</label>
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+7 (999) 123-45-67"
                maxLength={20}
                className="bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Тип кровли</label>
              <Input
                value={form.roofType}
                onChange={(e) => setForm({ ...form, roofType: e.target.value })}
                placeholder="Металлочерепица, мягкая кровля..."
                maxLength={200}
                className="bg-background"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-warm hover:bg-warm/90 text-warm-foreground font-bold text-base py-6 rounded-lg"
            >
              Рассчитать стоимость
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
