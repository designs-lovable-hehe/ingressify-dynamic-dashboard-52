
import { motion } from "framer-motion";

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export const PartnerLogo = ({ name, logo }: PartnerLogoProps) => {
  return (
    <motion.div
      className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={logo} alt={name} className="h-12 w-auto object-contain" />
    </motion.div>
  );
};
