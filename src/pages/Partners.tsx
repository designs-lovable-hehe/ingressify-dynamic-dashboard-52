
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageCircle, Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "John Smith",
    username: "@john",
    avatar: "https://i.pravatar.cc/150?u=john",
    text: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jack Wilson",
    username: "@jack",
    avatar: "https://i.pravatar.cc/150?u=jack",
    text: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Jill Brown",
    username: "@jill",
    avatar: "https://i.pravatar.cc/150?u=jill",
    text: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: "Jenny Davis",
    username: "@jenny",
    avatar: "https://i.pravatar.cc/150?u=jenny",
    text: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "James Miller",
    username: "@james",
    avatar: "https://i.pravatar.cc/150?u=james",
    text: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jane Wilson",
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
      <main className="py-16">
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold">Depoimentos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent mb-6">
              O Que Nossos Parceiros Dizem
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Descubra por que centenas de organizadores de eventos confiam em nossa plataforma para criar experiências memoráveis
            </p>
          </motion.div>

          <div className="relative py-4">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-purple-100/20 pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12 border-2 border-purple-100">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.username}</p>
                    </div>
                    <Quote className="w-6 h-6 text-primary/20 ml-auto" />
                  </div>
                  <p className="mt-4 text-gray-600">{testimonial.text}</p>
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
