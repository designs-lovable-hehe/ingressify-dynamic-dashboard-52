
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            A melhor plataforma de eventos do Brasil
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforme seus eventos em{" "}
            <span className="text-primary">experiências inesquecíveis</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Gerencie, promova e venda ingressos para seus eventos com a plataforma mais completa do mercado.
          </p>
          <motion.button
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comece agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
