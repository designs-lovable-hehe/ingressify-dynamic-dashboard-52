
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Ticket, Zap, Download } from "lucide-react";

const LogoSVG = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Background Rectangle with curved corners */}
    <motion.rect
      x="40"
      y="50"
      width="120"
      height="100"
      rx="16"
      className="fill-gradient-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
    
    {/* Ticket perforations */}
    <motion.line
      x1="60"
      y1="50"
      x2="60"
      y2="150"
      stroke="rgba(255, 255, 255, 0.5)"
      strokeWidth="1.5"
      strokeDasharray="5 5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
    
    <motion.line
      x1="140"
      y1="50"
      x2="140"
      y2="150"
      stroke="rgba(255, 255, 255, 0.5)"
      strokeWidth="1.5"
      strokeDasharray="5 5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
    
    {/* IN Letters */}
    <motion.text
      x="70"
      y="115"
      className="text-5xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <tspan fill="white">IN</tspan>
    </motion.text>
    
    {/* Lightning Bolt (Nitro) symbol */}
    <motion.path
      d="M115 70 L105 100 L120 100 L100 140 L110 110 L95 110 L115 70"
      fill="white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    />
    
    {/* Speed lines */}
    {[...Array(5)].map((_, i) => (
      <motion.line
        key={i}
        x1={85 + (i * 3)}
        y1={130 + (i * 3)}
        x2={105 + (i * 3)}
        y2={130 + (i * 3)}
        strokeWidth="1.5"
        stroke="rgba(255, 255, 255, 0.6)"
        initial={{ opacity: 0, x: 0 }}
        animate={{ 
          opacity: [0, 0.8, 0],
          x: [-5, 5]
        }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          delay: i * 0.15,
          repeatType: "loop"
        }}
      />
    ))}

    {/* Gradient Definition */}
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#9b87f5" }} />
        <stop offset="100%" style={{ stopColor: "#F97316" }} />
      </linearGradient>
      <style>
        {`
          .fill-gradient-bg {
            fill: url(#gradient);
          }
        `}
      </style>
    </defs>
  </svg>
);

const ListLogo = () => {
  const handleDownloadSVG = () => {
    // Create SVG string with the new design
    const svgString = `
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="50" width="120" height="100" rx="12" fill="url(#gradient)"/>
        <path d="M120 90 L105 120 L115 125 L90 160 L100 130 L90 125 L110 90" stroke="rgba(255, 255, 255, 0.5)" stroke-width="3" fill="none"/>
        <path d="M140 70 L150 80 L145 85 L135 75 Z" fill="rgba(255, 255, 255, 0.7)"/>
        <text x="65" y="115" font-size="48" font-weight="bold" fill="white">IN</text>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #9b87f5"/>
            <stop offset="100%" style="stop-color: #F97316"/>
          </linearGradient>
        </defs>
      </svg>
    `;

    // Create Blob and download link
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ingresso-nitro-logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPNG = () => {
    // Create an image from the SVG string
    const svgString = `
      <svg width="800" height="800" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="50" width="120" height="100" rx="12" fill="url(#gradient)"/>
        <path d="M120 90 L105 120 L115 125 L90 160 L100 130 L90 125 L110 90" stroke="rgba(255, 255, 255, 0.5)" stroke-width="3" fill="none"/>
        <path d="M140 70 L150 80 L145 85 L135 75 Z" fill="rgba(255, 255, 255, 0.7)"/>
        <text x="65" y="115" font-size="48" font-weight="bold" fill="white">IN</text>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #9b87f5"/>
            <stop offset="100%" style="stop-color: #F97316"/>
          </linearGradient>
        </defs>
      </svg>
    `;

    // Convert SVG to PNG using canvas
    const img = new Image();
    const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svg);

    img.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 800;
      const ctx = canvas.getContext('2d');
      ctx!.drawImage(img, 0, 0);
      
      const pngUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = 'ingresso-nitro-logo.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    img.src = url;
  };

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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">Nossa Logo</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa logo representa as iniciais "IN" do Ingresso Nitro, simbolizando velocidade e 
            inovação no mercado de eventos e venda de ingressos. O design moderno combina elementos de
            velocidade e energia, representando nosso compromisso com a agilidade e eficiência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Logo Principal */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="w-32 h-32 mx-auto flex items-center justify-center">
              <LogoSVG />
            </div>
            <h3 className="text-xl font-semibold mt-6 text-gray-800">Logo Principal</h3>
            <p className="text-gray-600 mt-2">Versão oficial da nossa identidade visual, representando velocidade e inovação</p>
          </motion.div>

          {/* Logo com Movimento */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-5 flex items-center justify-center">
              <motion.div
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.05, 1, 1.05, 1]
                }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="w-full h-full"
              >
                <LogoSVG />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold mt-6 text-gray-800">Versão Animada</h3>
            <p className="text-gray-600 mt-2">Logo com efeitos de movimento para destacar o conceito de velocidade</p>
          </motion.div>

          {/* Logo Minimalista */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-5 flex items-center justify-center">
              <svg
                width="80"
                height="80"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect x="40" y="50" width="120" height="100" rx="12" fill="#2A2A2A" />
                <text x="65" y="115" fontSize="48" fontWeight="bold" fill="white">IN</text>
                <path d="M120 90 L105 120 L115 125 L90 160 L100 130 L90 125 L110 90" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="3" fill="none" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-6 text-gray-800">Versão Monocromática</h3>
            <p className="text-gray-600 mt-2">Versão simplificada para aplicações em fundos escuros</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Download</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              onClick={handleDownloadSVG}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Download className="w-5 h-5" />
              SVG (Vetorial)
            </motion.button>
            <motion.button 
              onClick={handleDownloadPNG}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Download className="w-5 h-5" />
              PNG (Alta Resolução)
            </motion.button>
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Significado da Logo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="min-w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Elemento "Nitro"</h4>
                  <p className="text-sm text-gray-600">O raio representa velocidade e energia, características do nosso serviço</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Elemento "Ingresso"</h4>
                  <p className="text-sm text-gray-600">O formato retangular com cantos arredondados simboliza um ingresso</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ListLogo;
