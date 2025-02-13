
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PopularEvents } from "@/components/PopularEvents";
import { AboutSection } from "@/components/AboutSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageCircle, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "John",
    username: "@john",
    avatar: "https://i.pravatar.cc/150?u=john",
    text: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jack",
    username: "@jack",
    avatar: "https://i.pravatar.cc/150?u=jack",
    text: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Jill",
    username: "@jill",
    avatar: "https://i.pravatar.cc/150?u=jill",
    text: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: "Jenny",
    username: "@jenny",
    avatar: "https://i.pravatar.cc/150?u=jenny",
    text: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "James",
    username: "@james",
    avatar: "https://i.pravatar.cc/150?u=james",
    text: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jane",
    username: "@jane",
    avatar: "https://i.pravatar.cc/150?u=jane",
    text: "I'm at a loss for words. This is amazing. I love it.",
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <GeometricBackground />
      <Header />
      <main className="py-8">
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold">Vozes dos Nossos Parceiros</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent mb-6">
              Histórias de Sucesso que Inspiram
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Descubra como nossa plataforma tem transformado a maneira como nossos parceiros organizam e gerenciam seus eventos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.username}</p>
                    </div>
                    <Quote className="w-6 h-6 text-primary/20 ml-auto" />
                  </div>
                  <p className="mt-4 text-gray-600 relative">{testimonial.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <HeroSection />
        <PopularEvents />
        <AboutSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
