import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Reviews />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
