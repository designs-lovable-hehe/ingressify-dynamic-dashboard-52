
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg flex items-center justify-center shadow-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">IN</span>
      </motion.div>
      <motion.span
        className="text-2xl font-bold text-gray-800"
        whileHover={{ scale: 1.05 }}
      >
        Ingreso Nitro
      </motion.span>
    </motion.div>
  );
};
