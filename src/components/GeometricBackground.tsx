
import { motion } from "framer-motion";

type GeometricBackgroundProps = {
  status?: "error" | "success" | "loading";
};

export const GeometricBackground = ({ status }: GeometricBackgroundProps) => {
  // Determine circle colors based on status
  const primaryColor = status === "error" 
    ? "bg-red-500/5" 
    : status === "success" 
      ? "bg-green-500/5" 
      : "bg-primary/5";
      
  const secondaryColor = status === "error" 
    ? "bg-red-400/5" 
    : status === "success" 
      ? "bg-green-400/5" 
      : "bg-secondary/5";
      
  const primaryShapeColor = status === "error" 
    ? "bg-red-500/10" 
    : status === "success" 
      ? "bg-green-500/10" 
      : "bg-primary/10";
      
  const secondaryShapeColor = status === "error" 
    ? "bg-red-400/10" 
    : status === "success" 
      ? "bg-green-400/10" 
      : "bg-secondary/10";
      
  const primarySquareColor = status === "error" 
    ? "bg-red-500/8" 
    : status === "success" 
      ? "bg-green-500/8" 
      : "bg-primary/8";
      
  const secondarySquareColor = status === "error" 
    ? "bg-red-400/8" 
    : status === "success" 
      ? "bg-green-400/8" 
      : "bg-secondary/8";
      
  const smallElementColor = status === "error" 
    ? "bg-red-500/20" 
    : status === "success" 
      ? "bg-green-500/20" 
      : "bg-primary/20";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Large circles */}
      <motion.div
        className={`absolute -top-20 -left-20 w-[40rem] h-[40rem] ${primaryColor} rounded-full blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className={`absolute -bottom-40 -right-40 w-[45rem] h-[45rem] ${secondaryColor} rounded-full blur-3xl`}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating triangles */}
      <motion.div
        className={`absolute top-1/4 right-1/4 w-40 h-40 ${primaryShapeColor}`}
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className={`absolute bottom-1/4 left-1/4 w-32 h-32 ${secondaryShapeColor}`}
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating squares */}
      <motion.div
        className={`absolute top-1/3 left-1/3 w-24 h-24 ${primarySquareColor} rounded-lg blur-xl`}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-1/3 right-1/3 w-32 h-32 ${secondarySquareColor} rounded-lg blur-xl`}
        animate={{
          y: [0, 30, 0],
          rotate: [45, 0, 45],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small decorative elements */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          className={`absolute w-4 h-4 ${smallElementColor} rounded-full`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
