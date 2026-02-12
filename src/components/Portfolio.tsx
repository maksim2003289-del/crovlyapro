import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    title: "Коттедж в Подмосковье",
    type: "Металлочерепица",
    area: "280 м²",
    duration: "5 дней",
    image: portfolio1,
  },
  {
    title: "Загородный дом",
    type: "Мягкая кровля",
    area: "350 м²",
    duration: "7 дней",
    image: portfolio2,
  },
  {
    title: "Таунхаус",
    type: "Фальцевая кровля",
    area: "190 м²",
    duration: "4 дня",
    image: portfolio3,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-2">Наши работы</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Портфолио</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-dark-surface/30 to-transparent group-hover:from-dark-surface/70 transition-colors duration-300" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <span className="text-xs font-semibold text-warm uppercase tracking-wider mb-1">
                  {p.type}
                </span>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">{p.title}</h3>
                <div className="flex gap-4 text-xs text-dark-surface-foreground">
                  <span>Площадь: {p.area}</span>
                  <span>Срок: {p.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
