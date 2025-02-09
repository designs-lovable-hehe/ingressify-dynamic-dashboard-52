
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { GeometricBackground } from "@/components/GeometricBackground";

const Index = () => {
  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1511578314322-379afb476865",
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec",
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50">
      <GeometricBackground />
      <div className="container mx-auto px-4 py-8">
        <Logo />
      </div>
      <div className="container mx-auto flex flex-1 items-center justify-between gap-12 px-4">
        <div className="max-w-2xl">
          <motion.h1
            className="mb-6 text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transforme seus eventos em{" "}
            <span className="text-primary">experiências inesquecíveis</span>
          </motion.h1>
          <motion.p
            className="mb-8 text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Seja bem-vindo à plataforma que conecta pessoas a eventos extraordinários.
            Encontre ou crie eventos que transformam momentos em memórias.
          </motion.p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div
                onClick={() => navigate("/eventos")}
                className="group block rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl cursor-pointer"
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Encontrar Eventos
                </h2>
                <p className="mb-6 text-gray-600">
                  Descubra eventos incríveis, compre ingressos e viva experiências únicas
                </p>
                <div className="flex items-center font-semibold text-primary transition-transform group-hover:translate-x-2">
                  Explorar eventos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div
                onClick={() => navigate("/parceiros")}
                className="group block rounded-2xl bg-primary/10 p-8 shadow-lg transition-all hover:shadow-xl cursor-pointer"
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Área de Parceiros
                </h2>
                <p className="mb-6 text-gray-600">
                  Organize seus próprios eventos e gerencie vendas de ingressos
                </p>
                <div className="flex items-center font-semibold text-primary transition-transform group-hover:translate-x-2">
                  Seja um parceiro
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="hidden flex-1 lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Event ${index + 1}`}
                className="h-64 w-full rounded-2xl object-cover shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              />
            ))}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
