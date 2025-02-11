
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const LogoSVG = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Background Rectangle */}
    <motion.rect
      x="40"
      y="50"
      width="120"
      height="100"
      rx="8"
      className="fill-white/80 stroke-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
    
    {/* IN Letters */}
    <motion.text
      x="60"
      y="120"
      className="text-4xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <tspan fill="url(#gradient)">IN</tspan>
    </motion.text>

    {/* Gradient Definition */}
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#9b87f5" }} />
        <stop offset="100%" style={{ stopColor: "#7E69AB" }} />
      </linearGradient>
    </defs>
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
            <div className="w-32 h-32 mx-auto">
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
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary p-4 rounded-lg">
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
            <div className="w-32 h-32 mx-auto bg-gray-900 p-4 rounded-lg">
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
