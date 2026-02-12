import { Home, Layers, Hammer, Trash2, Droplets } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Монтаж мягкой кровли",
    description: "Укладка битумной черепицы, рулонных и мембранных материалов на плоские и скатные крыши.",
    price: "от 450 ₽/м²",
  },
  {
    icon: Home,
    title: "Монтаж металлочерепицы",
    description: "Установка металлочерепицы с полным комплексом подготовительных работ.",
    price: "от 500 ₽/м²",
  },
  {
    icon: Hammer,
    title: "Ремонт кровли",
    description: "Устранение протечек, замена повреждённых элементов, восстановление герметичности.",
    price: "от 300 ₽/м²",
  },
  {
    icon: Trash2,
    title: "Демонтаж старой кровли",
    description: "Аккуратный демонтаж с утилизацией отходов. Подготовка основания под новое покрытие.",
    price: "от 200 ₽/м²",
  },
  {
    icon: Droplets,
    title: "Утепление и гидроизоляция",
    description: "Профессиональное утепление чердака, мансарды. Надёжная гидроизоляция кровли.",
    price: "от 350 ₽/м²",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-2">Что мы делаем</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Наши услуги</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border hover:border-warm/40 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{s.description}</p>
              <div className="pt-3 border-t border-border">
                <span className="text-warm font-bold text-lg">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
