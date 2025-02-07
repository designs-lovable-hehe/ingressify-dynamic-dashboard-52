
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
        className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl font-bold text-white">IN</span>
      </motion.div>
      <motion.span
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        whileHover={{ scale: 1.05 }}
      >
        Ingreso Nitro
      </motion.span>
    </motion.div>
  );
};
