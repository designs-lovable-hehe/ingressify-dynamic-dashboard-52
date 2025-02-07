
import { motion } from "framer-motion";

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export const PartnerLogo = ({ name, logo }: PartnerLogoProps) => {
  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 aspect-[4/3] flex items-center justify-center group relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-purple-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={logo} 
          alt={name} 
          className="w-full h-auto max-h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-110" 
        />
      </motion.div>
    </motion.div>
  );
};
