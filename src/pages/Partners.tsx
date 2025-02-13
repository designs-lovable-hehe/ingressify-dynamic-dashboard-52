
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
        <HeroSection />
        <PopularEvents />
        <AboutSection />
        <PartnersSection />
        
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(124,58,237,0.05)_0%,rgba(124,58,237,0)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <MessageCircle className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-primary font-semibold">Experiências Reais</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent mb-6">
                O Que Nossos Usuários Dizem
              </h2>
              <p className="text-gray-600 text-lg md:text-xl">
                Descubra como nossa plataforma tem transformado a experiência de milhares de pessoas em eventos incríveis
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Avatar className="w-12 h-12 border-2 border-primary/10 ring-2 ring-purple-100 ring-offset-2">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.username}</p>
                      </div>
                      <Quote className="w-6 h-6 text-primary/20 ml-auto transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <motion.p 
                      className="mt-4 text-gray-600 relative"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      {testimonial.text}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
