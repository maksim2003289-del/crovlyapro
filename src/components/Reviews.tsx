import { Star } from "lucide-react";

const reviews = [
  {
    name: "Алексей Петров",
    text: "Отличная команда! Сделали кровлю на нашем доме за 4 дня. Качество на высоте, всё аккуратно и чисто. Рекомендую!",
    rating: 5,
    project: "Монтаж металлочерепицы",
  },
  {
    name: "Марина Козлова",
    text: "Обратились для ремонта протечки. Приехали быстро, нашли проблему и устранили за один день. Гарантию дали на 3 года.",
    rating: 5,
    project: "Ремонт кровли",
  },
  {
    name: "Дмитрий Сидоров",
    text: "Заказывали полный монтаж мягкой кровли. Работу выполнили в срок, цена не изменилась с момента расчёта. Очень довольны!",
    rating: 5,
    project: "Мягкая кровля",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-2">Отзывы</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Что говорят клиенты
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-warm text-warm" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
