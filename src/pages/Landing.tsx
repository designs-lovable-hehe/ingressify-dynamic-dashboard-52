
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

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

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/80 to-gray-50/80 flex flex-col relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 py-8">
        <Logo />
      </div>
      <div className="flex-1 container mx-auto px-4 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/eventos"
              className="block p-8 bg-white/80 backdrop-blur rounded-2xl shadow-lg hover:shadow-xl transition-all group"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Encontrar Eventos</h2>
              <p className="text-gray-600 mb-6">
                Descubra eventos incríveis, compre ingressos e viva experiências únicas
              </p>
              <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                Explorar eventos
                <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/parceiros"
              className="block p-8 bg-primary/10 backdrop-blur rounded-2xl shadow-lg hover:shadow-xl transition-all group"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Área de Parceiros</h2>
              <p className="text-gray-600 mb-6">
                Organize seus próprios eventos e gerencie vendas de ingressos
              </p>
              <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                Seja um parceiro
                <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
