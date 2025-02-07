
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PopularEvents } from "@/components/PopularEvents";
import { Footer } from "@/components/Footer";

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <GeometricBackground />
      <Header />
      <HeroSection />
      <PopularEvents />
      <Footer />
    </div>
  );
};

export default Events;
