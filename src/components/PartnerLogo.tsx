
import { motion } from "framer-motion";

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export const PartnerLogo = ({ name, logo }: PartnerLogoProps) => {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 aspect-[4/3] flex items-center justify-center group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src={logo} 
        alt={name} 
        className="w-full h-auto max-h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
      />
    </motion.div>
  );
};
