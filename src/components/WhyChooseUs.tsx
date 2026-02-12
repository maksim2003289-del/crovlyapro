import { Shield, Clock, Award, Wrench } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Гарантия 10 лет",
    description: "На все виды работ предоставляем официальную гарантию и заключаем договор.",
  },
  {
    icon: Clock,
    title: "Точные сроки",
    description: "Соблюдаем дедлайны. Средний срок монтажа кровли — от 3 дней.",
  },
  {
    icon: Award,
    title: "Сертифицированные мастера",
    description: "Команда с опытом более 12 лет. Постоянное повышение квалификации.",
  },
  {
    icon: Wrench,
    title: "Собственное оборудование",
    description: "Используем профессиональный инструмент и проверенные материалы.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-2">Преимущества</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Почему выбирают нас
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {advantages.map((a, i) => (
            <div
              key={i}
              className="group bg-card rounded-xl p-6 md:p-8 border border-border hover:border-warm/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-warm/10 flex items-center justify-center mb-5 group-hover:bg-warm/20 transition-colors">
                <a.icon className="w-7 h-7 text-warm" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
