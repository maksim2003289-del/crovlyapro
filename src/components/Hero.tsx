import heroImage from "@/assets/hero-roofing.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay)/0.85)] via-[hsl(var(--hero-overlay)/0.7)] to-[hsl(var(--hero-overlay)/0.9)]" />

      <div className="relative z-10 container-narrow text-center px-4 pt-20">
        <p className="text-warm font-semibold text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in-up">
          Надёжная кровля с гарантией 10 лет
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up [animation-delay:0.15s]">
          Ваша кровля —<br />
          <span className="text-warm">наша забота!</span>
        </h1>
        <p className="max-w-2xl mx-auto text-dark-surface-foreground text-base md:text-lg mb-10 animate-fade-in-up [animation-delay:0.3s]">
          Профессиональный монтаж и ремонт кровли любой сложности.
          Бесплатный выезд замерщика. Расчёт стоимости за 15 минут.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:0.45s]">
          <Button asChild size="lg" className="bg-warm hover:bg-warm/90 text-warm-foreground font-bold text-base px-8 py-6 rounded-lg shadow-lg">
            <a href="#contact">Рассчитать стоимость</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6 rounded-lg">
            <a href="#services">Наши услуги</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-warm rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
