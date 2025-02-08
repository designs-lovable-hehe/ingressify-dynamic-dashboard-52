
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PopularEvents } from "@/components/PopularEvents";
import { AboutSection } from "@/components/AboutSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/10 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            scale: [1, Math.random() * 0.5 + 0.5],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-gray-50/50 backdrop-blur-[2px]" />
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/80 to-gray-50/80 relative overflow-hidden">
      <ParticleBackground />
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
