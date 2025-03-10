
import { motion } from "framer-motion";
import { Users, Shield, ArrowRight } from "lucide-react";

const BenefitsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md"
    >
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-900">
          Crie sua conta gratuita
        </h1>
        <p className="text-lg text-gray-600">
          Junte-se à nossa comunidade e descubra os melhores eventos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-primary/10 group"
          >
            <div className="bg-[#9b87f5]/10 p-3 rounded-xl w-fit mb-3 group-hover:bg-[#9b87f5]/20 transition-colors">
              <Users className="w-8 h-8 text-[#9b87f5]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Viva Experiências Únicas</h3>
            <p className="text-sm text-gray-600">Conecte-se com momentos inesquecíveis e faça parte de histórias extraordinárias</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-primary/10 group"
          >
            <div className="bg-[#9b87f5]/10 p-3 rounded-xl w-fit mb-3 group-hover:bg-[#9b87f5]/20 transition-colors">
              <Shield className="w-8 h-8 text-[#9b87f5]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Compra Segura</h3>
            <p className="text-sm text-gray-600">Transações protegidas e garantia de reembolso em todos os eventos</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-primary/10 group col-span-full"
          >
            <div className="bg-[#9b87f5]/10 p-3 rounded-xl w-fit mb-3 group-hover:bg-[#9b87f5]/20 transition-colors">
              <ArrowRight className="w-8 h-8 text-[#9b87f5]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Tudo em Um Só Lugar</h3>
            <p className="text-sm text-gray-600">Descubra, escolha e compre ingressos para os melhores eventos na palma da sua mão</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitsSection;
