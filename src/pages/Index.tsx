
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";

const Index = () => {
  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1511578314322-379afb476865",
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec",
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="py-6 px-8">
        <Logo />
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl font-bold leading-tight">
              Transforme seus eventos em{" "}
              <span className="text-primary">experiências inesquecíveis</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Seja bem-vindo à plataforma que conecta pessoas a eventos extraordinários.
              Encontre ou crie eventos que transformam momentos em memórias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">Encontrar Eventos</h3>
                <p className="text-gray-600 mb-4">
                  Descubra eventos incríveis, compre ingressos e viva experiências únicas
                </p>
                <button
                  onClick={() => navigate("/eventos")}
                  className="text-primary flex items-center gap-2 font-medium hover:gap-3 transition-all"
                >
                  Explorar eventos <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-primary/5 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">Área de Parceiros</h3>
                <p className="text-gray-600 mb-4">
                  Organize seus próprios eventos e gerencie vendas de ingressos
                </p>
                <button
                  onClick={() => navigate("/parceiros")}
                  className="text-primary flex items-center gap-2 font-medium hover:gap-3 transition-all"
                >
                  Seja um parceiro <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl overflow-hidden ${
                  index % 2 === 0 ? "mt-8" : ""
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;
