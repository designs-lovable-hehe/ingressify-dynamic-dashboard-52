
import { motion } from "framer-motion";

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export const PartnerLogo = ({ name, logo }: PartnerLogoProps) => {
  return (
    <motion.div
      className="p-4 bg-gradient-to-br from-white to-purple-50/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 aspect-[3/2] flex items-center justify-center group relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/10 via-white/5 to-purple-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        whileHover={{ y: [-1, 1, -1], rotate: [-1, 1, -1] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <img 
          src={logo} 
          alt={name} 
          className="w-full h-auto max-h-8 object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter group-hover:brightness-105 group-hover:contrast-105" 
        />
      </motion.div>
    </motion.div>
  );
};
