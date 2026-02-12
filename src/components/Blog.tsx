import { CalendarDays } from "lucide-react";

const posts = [
  {
    title: "Как выбрать материал для кровли",
    excerpt:
      "Разбираем плюсы и минусы металлочерепицы, мягкой и фальцевой кровли — какой вариант подойдёт именно вам.",
    date: "12 января 2026",
    tag: "Советы",
  },
  {
    title: "Типичные ошибки при монтаже кровли",
    excerpt:
      "5 распространённых ошибок, которые приводят к протечкам и дорогостоящему ремонту. Как их избежать.",
    date: "28 декабря 2025",
    tag: "Ошибки",
  },
  {
    title: "Уход за кровлей: сезонные работы",
    excerpt:
      "Что нужно делать весной, летом и осенью, чтобы кровля служила десятилетиями без ремонта.",
    date: "15 декабря 2025",
    tag: "Обслуживание",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-2">
            Полезное
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Блог
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group rounded-xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <span className="self-start text-xs font-semibold uppercase tracking-wider text-warm bg-warm/10 px-3 py-1 rounded-full mb-4">
                  {post.tag}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
