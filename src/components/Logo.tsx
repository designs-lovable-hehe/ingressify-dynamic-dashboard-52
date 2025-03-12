
import { motion } from "framer-motion";
import { Ticket, Zap } from "lucide-react";

export const Logo = () => {
  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg overflow-hidden group"
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -2, 2, -1, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background effects */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-accent/80 backdrop-blur-sm"
          animate={{
            background: [
              "linear-gradient(to top right, rgba(155, 135, 245, 0.8), rgba(249, 115, 22, 0.8))",
              "linear-gradient(to bottom right, rgba(155, 135, 245, 0.8), rgba(249, 115, 22, 0.8))",
              "linear-gradient(to top right, rgba(155, 135, 245, 0.8), rgba(249, 115, 22, 0.8))"
            ],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        {/* Glow effect */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20"
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Main logo letters */}
        <span className="relative text-xl font-bold text-white z-10">IN</span>
        
        {/* Speed lines effect on hover */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 z-0 overflow-hidden"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-white/40"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${i * 20 + Math.random() * 10}%`,
                rotate: `${Math.random() * 45 - 22.5}deg`,
              }}
              animate={{
                x: [0, -30],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>

        {/* Small icon for "nitro" */}
        <motion.div 
          className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full shadow-md z-20"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Zap className="h-3 w-3 text-accent" />
        </motion.div>
      </motion.div>
      
      <div className="flex flex-col items-start">
        <motion.span
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent"
          whileHover={{ scale: 1.03 }}
        >
          Ingresso Nitro
        </motion.span>
        <motion.div 
          className="flex items-center space-x-1"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Ticket className="h-3 w-3 text-primary/70" />
          <span className="text-xs text-gray-500">Velocidade em eventos</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
