
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
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
              className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group"
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
              className="block p-8 bg-primary/10 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
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
