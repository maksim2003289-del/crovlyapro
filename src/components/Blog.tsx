import { useState } from "react";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const posts = [
  {
    title: "Как выбрать материал для кровли",
    excerpt:
      "Разбираем плюсы и минусы металлочерепицы, мягкой и фальцевой кровли — какой вариант подойдёт именно вам.",
    date: "12 января 2026",
    tag: "Советы",
    content: `Выбор кровельного материала — один из ключевых этапов строительства или ремонта крыши. Рассмотрим основные варианты:

**Металлочерепица** — долговечна (до 50 лет), устойчива к перепадам температур, лёгкая. Отлично подходит для климата Алтайского края. Из минусов — шумит при дожде без дополнительной звукоизоляции.

**Мягкая кровля (гибкая черепица)** — бесшумная, эстетичная, подходит для сложных форм крыши. Срок службы 30–40 лет. Требует сплошного основания, что увеличивает стоимость монтажа.

**Профнастил** — бюджетный и надёжный вариант. Быстрый монтаж, широкий выбор цветов. Идеален для хозяйственных построек и домов с простой формой крыши.

**Фальцевая кровля** — максимальная герметичность, долговечность до 60 лет. Премиальный вид. Требует квалифицированного монтажа.

Мы поможем подобрать оптимальный материал с учётом вашего бюджета, формы крыши и климатических условий региона.`,
  },
  {
    title: "Типичные ошибки при монтаже кровли",
    excerpt:
      "5 распространённых ошибок, которые приводят к протечкам и дорогостоящему ремонту. Как их избежать.",
    date: "28 декабря 2025",
    tag: "Ошибки",
    content: `Неправильный монтаж кровли приводит к серьёзным проблемам. Вот 5 самых частых ошибок:

**1. Неправильный шаг обрешётки.** Слишком большой шаг приводит к прогибу материала и застою воды. Шаг должен соответствовать типу кровельного покрытия.

**2. Отсутствие вентиляции подкровельного пространства.** Без вентзазора скапливается конденсат, который разрушает стропильную систему и утеплитель.

**3. Экономия на гидроизоляции.** Дешёвые плёнки быстро теряют свойства. Качественная мембрана — это инвестиция в долговечность крыши.

**4. Неправильный нахлёст листов.** Недостаточный нахлёст — прямой путь к протечкам. Особенно критично для регионов с обильными осадками, как Алтайский край.

**5. Игнорирование снеговой нагрузки.** В нашем регионе снеговая нагрузка может достигать 180 кг/м². Стропильная система должна быть рассчитана с запасом.

Обращайтесь к профессионалам — мы учитываем все нюансы монтажа.`,
  },
  {
    title: "Уход за кровлей: сезонные работы",
    excerpt:
      "Что нужно делать весной, летом и осенью, чтобы кровля служила десятилетиями без ремонта.",
    date: "15 декабря 2025",
    tag: "Обслуживание",
    content: `Регулярное обслуживание кровли продлевает срок её службы в 1,5–2 раза. Вот что нужно делать в каждый сезон:

**Весна (март–апрель):**
— Осмотр кровли после зимы на предмет повреждений
— Очистка водостоков от мусора и листвы
— Проверка герметичности примыканий к трубам и стенам
— Удаление мха и лишайника, если появились

**Лето (июнь–август):**
— Проверка состояния кровельного покрытия при жаре
— Ремонт мелких повреждений (замена отдельных элементов)
— Покраска металлических элементов при необходимости

**Осень (сентябрь–октябрь):**
— Очистка крыши от листвы и веток
— Прочистка водосточной системы перед зимой
— Проверка утепления и вентиляции чердака
— Установка снегозадержателей, если отсутствуют

**Зима:**
— Контроль снеговой нагрузки (при необходимости — очистка)
— Удаление наледи и сосулек с карнизов

Предлагаем услугу сезонного обслуживания кровли — звоните!`,
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

        <Tabs defaultValue="list" className="w-full">
          <TabsList className="w-full justify-start mb-6 bg-transparent gap-2 h-auto flex-wrap">
            <TabsTrigger
              value="list"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 py-2 text-sm"
            >
              Все статьи
            </TabsTrigger>
            {posts.map((post, i) => (
              <TabsTrigger
                key={i}
                value={`post-${i}`}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 py-2 text-sm"
              >
                {post.tag}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="list">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <TabsTrigger
                  key={i}
                  value={`post-${i}`}
                  className="all-unset cursor-pointer"
                  asChild
                >
                  <article className="group rounded-xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 text-left">
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
                </TabsTrigger>
              ))}
            </div>
          </TabsContent>

          {posts.map((post, i) => (
            <TabsContent key={i} value={`post-${i}`}>
              <div className="rounded-xl bg-card border border-border p-6 md:p-10">
                <TabsTrigger
                  value="list"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 p-0 h-auto bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Назад к статьям
                </TabsTrigger>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-warm bg-warm/10 px-3 py-1 rounded-full mb-4 ml-4">
                  {post.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                  {post.content}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Blog;
