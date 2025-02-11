
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const LogoSVG = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* I Letter */}
    <motion.path
      d="M60 50 L60 150 L80 150 L80 50 Z"
      stroke="#9b87f5"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    {/* N Letter */}
    <motion.path
      d="M100 150 L100 50 L120 50 L140 90 L140 50 L160 50 L160 150 L140 150 L120 110 L120 150 L100 150Z"
      stroke="#7E69AB"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
    />
  </svg>
);

const ListLogo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nossa Logo</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa logo representa as iniciais "IN" do Ingresso Nitro, simbolizando inovação e 
            excelência no mercado de eventos e venda de ingressos. O design moderno e minimalista 
            reflete nossa abordagem tecnológica e eficiente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Logo Original */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="aspect-square">
              <LogoSVG />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Logo Principal</h3>
            <p className="text-gray-600 mt-2">Versão padrão da nossa identidade visual</p>
          </motion.div>

          {/* Logo com Gradiente */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="aspect-square bg-gradient-to-br from-primary to-secondary p-8 rounded-lg">
              <LogoSVG />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Versão Gradiente</h3>
            <p className="text-gray-600 mt-2">Aplicação com gradiente para destaque visual</p>
          </motion.div>

          {/* Logo Monocromática */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="aspect-square bg-gray-900 p-8 rounded-lg">
              <LogoSVG />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Versão Monocromática</h3>
            <p className="text-gray-600 mt-2">Para aplicações em fundos escuros</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Download</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all">
              Download SVG
            </button>
            <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all">
              Download PNG
            </button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ListLogo;
