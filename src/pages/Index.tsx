
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PopularEvents } from "@/components/PopularEvents";
import { AboutSection } from "@/components/AboutSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <GeometricBackground />
      <Header />
      <HeroSection />
      <PopularEvents />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
