
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const Logo = () => {
  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg overflow-hidden group"
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -2, 2, -1, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background gradient animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-primary/90 to-accent/90"
          animate={{
            background: [
              "linear-gradient(to top right, rgba(155, 135, 245, 0.9), rgba(249, 115, 22, 0.9))",
              "linear-gradient(to bottom right, rgba(155, 135, 245, 0.9), rgba(249, 115, 22, 0.9))",
              "linear-gradient(to top right, rgba(155, 135, 245, 0.9), rgba(249, 115, 22, 0.9))"
            ],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        {/* Letters - modern stylized "IN" */}
        <div className="relative text-white z-10 flex font-bold">
          <motion.span 
            className="text-xl" 
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            IN
          </motion.span>
        </div>
        
        {/* Lightning bolt - representing "Nitro" */}
        <motion.div 
          className="absolute right-0 bottom-0 opacity-80 group-hover:opacity-100 z-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M13 2L4.5 12.5H11L9 22L17.5 11.5H11L13 2Z" 
              fill="white"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            />
          </svg>
        </motion.div>
        
        {/* Speed lines effect - representing velocity/nitro */}
        <motion.div 
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1.5px] bg-white/60"
              style={{
                width: `${Math.random() * 20 + 8}px`,
                left: `${20 + Math.random() * 15}%`,
                top: `${i * 18 + Math.random() * 10}%`,
                transformOrigin: "left center",
                rotate: `${Math.random() * 10 - 5}deg`,
              }}
              animate={{
                x: [-2, -15],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
      
      <div className="flex flex-col items-start">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.03 }}
          >
            Ingresso
          </motion.span>
          <motion.span
            className="text-xl md:text-2xl font-bold ml-1.5 bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.03 }}
            animate={{ 
              opacity: [0.85, 1, 0.85],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Nitro
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};
