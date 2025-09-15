import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import AIEmployees from "@/components/AIEmployees";
import Competition from "@/components/Competition";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Mentor from "@/components/Mentor";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="font-advent-pro">
      <Hero />
      <Pillars />
      <Benefits />
      <Testimonials />
      <AIEmployees />
      <Competition />
      <Pricing />
      <FAQ />
      <Mentor />
      <Footer />
    </main>
  );
};

export default Index;
