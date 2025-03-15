import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Loader2, AlertCircle, PartyPopper, ExternalLink, Frown, Smile, Sparkles, ZapOff, Zap, Orbit, BadgeAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { GeometricBackground } from "@/components/GeometricBackground";

const VerifyAccount = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [verificationState, setVerificationState] = useState<
    "loading" | "success" | "error"
  >("loading");
  const [progress, setProgress] = useState(0);
  const [showErrorAnimation, setShowErrorAnimation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    const verifyToken = setTimeout(() => {
      if (token) {
        setVerificationState("success");
      } else {
        setShowErrorAnimation(true);
        setTimeout(() => {
          setVerificationState("error");
        }, 800);
      }
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(verifyToken);
    };
  }, [token]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const errorAnimVariants = {
    initial: { 
      scale: 1,
      rotate: 0,
      opacity: 1
    },
    animate: { 
      scale: [1, 1.05, 0.98, 1.02, 0.98, 1],
      rotate: [0, -1, 1, -0.5, 0.5, 0],
      opacity: [1, 0.95, 0.9, 0.85, 0.8, 0],
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const renderVerifyingState = () => (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="absolute w-28 h-28 rounded-full border-4 border-primary/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-28 h-28 rounded-full border-4 border-secondary/20"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="w-24 h-24 relative">
          <svg className="w-24 h-24 transform rotate-[-90deg]">
            <motion.circle
              cx="48"
              cy="48"
              r="46"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="drop-shadow-md"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9b87f5" />
                <stop offset="100%" stopColor="#7E69AB" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
          </div>
        </div>
        
        <motion.div 
          className="absolute -bottom-2 -right-2 p-1 bg-white rounded-full shadow-md"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="bg-primary/10 p-1 rounded-full">
            <AlertCircle className="h-4 w-4 text-primary" />
          </div>
        </motion.div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-5">
        Verificando sua conta
      </h2>
      <p className="text-gray-600 mb-6 max-w-xs mx-auto">
        Estamos validando seu token de verificação. Por favor, aguarde um momento...
      </p>
      
      <div className="w-full space-y-3 mb-6">
        {[
          { text: "Validando token", delay: 0 },
          { text: "Verificando permissões", delay: 0.8 },
          { text: "Atualizando perfil", delay: 1.6 },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: step.delay }}
            className="flex items-center space-x-3 text-sm text-gray-500"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: step.delay,
              }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
            />
            <span>{step.text}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="text-xs text-gray-500">
        Isso normalmente leva apenas alguns segundos
      </div>
    </motion.div>
  );

  const renderSuccessState = () => (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative mb-6">
        <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 rounded-full">
          <Check className="h-12 w-12 text-green-600" />
        </div>
        <motion.div 
          className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-md"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-green-100 p-1 rounded-full">
            <PartyPopper className="h-5 w-5 text-green-600" />
          </div>
        </motion.div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        Conta verificada com sucesso!
      </h2>
      <p className="text-gray-600 mb-8 max-w-xs mx-auto">
        Sua conta foi confirmada e você já pode acessar todos os recursos da plataforma.
      </p>
      
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-3 mb-8"
      >
        <div className="p-3 bg-green-100 rounded-full">
          <Smile className="h-8 w-8 text-green-600" />
        </div>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="w-full"
      >
        <Button
          asChild
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity py-6 text-base font-medium"
        >
          <Link to="/login" className="flex items-center justify-center gap-2">
            Entrar na conta <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );

  const renderErrorState = () => (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="absolute w-28 h-28 rounded-full border-4 border-red-400/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-28 h-28 rounded-full border-4 border-red-500/30"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="w-24 h-24 flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-red-600" />
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        Falha na verificação
      </h2>
      <p className="text-gray-600 mb-8 max-w-xs mx-auto">
        O token de verificação é inválido ou expirou. Por favor, tente novamente ou solicite um novo link de verificação.
      </p>
      
      <div className="w-full space-y-3">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center mb-4"
        >
          <div className="p-3 bg-red-100 rounded-full">
            <Frown className="h-8 w-8 text-red-600" />
          </div>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Button
            asChild
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 transition-opacity"
          >
            <Link to="/cadastro">Voltar ao cadastro</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderErrorAnimation = () => (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative mb-8">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${140 - i * 20}px`,
              height: `${140 - i * 20}px`,
              top: `${-20 + i * 10}px`,
              left: `${-20 + i * 10}px`,
              background: `linear-gradient(135deg, rgba(239,68,68,0.${3-i}) 0%, rgba(255,137,137,0.${3-i}) 100%)`,
              filter: `blur(${(3-i) * 5}px)`,
              zIndex: -1,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        
        <motion.div 
          className="w-28 h-28 rounded-full flex items-center justify-center relative overflow-hidden"
          initial={{ boxShadow: "0 0 0 rgba(239,68,68,0)" }}
          animate={{ 
            boxShadow: [
              "0 0 15px rgba(239,68,68,0.2)",
              "0 0 30px rgba(239,68,68,0.4)",
              "0 0 15px rgba(239,68,68,0.2)",
            ],
            background: [
              "linear-gradient(135deg, rgba(254,226,226,1) 0%, rgba(252,231,231,1) 100%)",
              "linear-gradient(135deg, rgba(254,202,202,1) 0%, rgba(248,180,180,1) 100%)",
              "linear-gradient(135deg, rgba(254,226,226,1) 0%, rgba(252,231,231,1) 100%)",
            ]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "easeInOut" 
          }}
        >
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full rounded-full border-2 border-red-400/30"
              animate={{
                scale: [0.6 + i * 0.2, 1 + i * 0.1, 0.6 + i * 0.2],
                opacity: [0.2, 0.5, 0.2],
                borderColor: [
                  "rgba(248,113,113,0.2)",
                  "rgba(239,68,68,0.4)",
                  "rgba(248,113,113,0.2)",
                ]
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
          
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60) * (Math.PI / 180);
            const x = Math.cos(angle) * 50;
            const y = Math.sin(angle) * 50;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-red-400"
                style={{ left: "50%", top: "50%" }}
                animate={{
                  x: [x * 0.3, x, x * 0.5, x * 0.8, x * 0.3],
                  y: [y * 0.3, y * 0.5, y, y * 0.7, y * 0.3],
                  opacity: [0, 0.7, 1, 0.7, 0],
                  scale: [0.6, 1, 1.2, 1, 0.6],
                  background: [
                    "rgba(248,113,113,0.5)",
                    "rgba(239,68,68,0.7)",
                    "rgba(220,38,38,0.9)",
                    "rgba(239,68,68,0.7)",
                    "rgba(248,113,113,0.5)",
                  ]
                }}
                transition={{
                  duration: 8,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            );
          })}
          
          <motion.div
            className="relative z-10"
            animate={{
              scale: [0.95, 1.05, 0.98, 1.02, 1],
              rotate: [-1, 1, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                opacity: [1, 0.9, 1, 0.9, 1],
                filter: [
                  "drop-shadow(0 0 2px rgba(239,68,68,0.3))",
                  "drop-shadow(0 0 5px rgba(239,68,68,0.5))",
                  "drop-shadow(0 0 8px rgba(239,68,68,0.7))",
                  "drop-shadow(0 0 5px rgba(239,68,68,0.5))",
                  "drop-shadow(0 0 2px rgba(239,68,68,0.3))",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <AlertCircle className="h-12 w-12 text-red-500" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {[
          { icon: BadgeAlert, delay: 0.2, position: { top: "-20px", right: "-15px" } },
          { icon: ZapOff, delay: 0.5, position: { bottom: "-15px", left: "-20px" } },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute z-20 bg-white p-1 rounded-full shadow-lg"
            style={item.position}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 1, 1],
              y: [0, -5, 0, 5, 0],
              x: [0, 3, 0, -3, 0],
            }}
            transition={{
              scale: { duration: 0.5, delay: item.delay },
              opacity: { duration: 0.5, delay: item.delay },
              y: { duration: 5, repeat: Infinity, repeatType: "reverse", delay: item.delay },
              x: { duration: 6, repeat: Infinity, repeatType: "reverse", delay: item.delay },
            }}
          >
            <div className="bg-red-100 p-1.5 rounded-full">
              <item.icon className="h-5 w-5 text-red-500" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="w-full space-y-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-1"
          animate={{ 
            color: ["#18181b", "#ef4444", "#18181b"],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Verificando sua conta
        </motion.h2>
        
        <motion.p
          className="text-sm text-gray-600 mb-4"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Processando o token de validação...
        </motion.p>
        
        <div className="relative w-full max-w-xs mx-auto overflow-hidden">
          <motion.div
            className="h-1 w-full bg-gray-100 rounded-full overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-full overflow-hidden"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <motion.div
                className="h-full w-full bg-gradient-to-r from-red-300 via-red-500 to-red-600"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%"],
                  boxShadow: [
                    "0 0 5px rgba(239,68,68,0.3)",
                    "0 0 15px rgba(239,68,68,0.5)",
                    "0 0 5px rgba(239,68,68,0.3)",
                  ]
                }}
                transition={{
                  backgroundPosition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                  boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
                style={{ backgroundSize: "200% 100%" }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{ 
              left: ["-100%", "100%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(2px)" }}
          />
        </div>
        
        <motion.div
          className="flex justify-center gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-red-300"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.4, 1, 0.4],
                backgroundColor: [
                  "rgb(252, 165, 165)",
                  "rgb(239, 68, 68)",
                  "rgb(252, 165, 165)"
                ]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <GeometricBackground status={verificationState === "error" ? "error" : verificationState === "success" ? "success" : "loading"} />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-8 z-10"
      >
        <Logo />
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        className="w-full max-w-md z-10"
      >
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden">
          <CardContent className="p-8">
            {verificationState === "loading" && !showErrorAnimation && renderVerifyingState()}
            {showErrorAnimation && verificationState === "loading" && renderErrorAnimation()}
            {verificationState === "success" && renderSuccessState()}
            {verificationState === "error" && renderErrorState()}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default VerifyAccount;
