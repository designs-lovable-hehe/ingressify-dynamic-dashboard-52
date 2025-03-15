import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Loader2, AlertCircle, PartyPopper, ExternalLink, Frown, Smile, Sparkles, ZapOff } from "lucide-react";
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
      variants={errorAnimVariants}
      initial="initial"
      animate="animate"
    >
      <div className="relative">
        <motion.div
          className="absolute -inset-4 rounded-full opacity-0"
          animate={{
            opacity: [0, 0.2, 0],
            scale: [0.8, 1.5, 2],
            background: [
              "radial-gradient(circle, rgba(239,68,68,0.6) 0%, rgba(239,68,68,0) 70%)",
              "radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(239,68,68,0) 70%)",
              "radial-gradient(circle, rgba(239,68,68,0) 0%, rgba(239,68,68,0) 70%)"
            ]
          }}
          transition={{ duration: 1.2, repeat: 1, repeatType: "reverse" }}
        />
        
        <motion.div 
          className="w-24 h-24 flex items-center justify-center"
          animate={{
            boxShadow: [
              "0px 0px 0px rgba(239, 68, 68, 0)",
              "0px 0px 30px rgba(239, 68, 68, 0.6)",
              "0px 0px 0px rgba(239, 68, 68, 0)"
            ],
          }}
          transition={{ duration: 1.5, times: [0, 0.5, 1], ease: "easeInOut" }}
        >
          <motion.div 
            className="w-20 h-20 rounded-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center overflow-hidden"
            animate={{ 
              scale: [1, 1.1, 0.95, 1.05, 0.98, 1],
              rotateZ: [0, 3, -3, 2, -2, 0],
              background: [
                "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
                "linear-gradient(135deg, #fecaca 0%, #ef4444 30%, #fee2e2 100%)",
                "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)"
              ]
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.div
              animate={{
                opacity: [1, 0.8, 1, 0.8, 1],
                scale: [1, 1.15, 0.95, 1.08, 1],
                rotateZ: [0, -5, 5, -3, 0]
              }}
              transition={{ duration: 1.2 }}
            >
              <AlertCircle className="h-10 w-10 text-red-600 drop-shadow-md" />
            </motion.div>
          </motion.div>
          
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${50 + 35 * Math.sin(i * Math.PI / 2)}%`,
                left: `${50 + 35 * Math.cos(i * Math.PI / 2)}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 1,
                delay: 0.1 * i,
                repeat: 1,
                repeatType: "reverse"
              }}
            >
              <Sparkles className="h-3 w-3 text-red-400" />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="absolute -top-5 -right-5 z-10"
          initial={{ opacity: 0, y: 10, x: -10 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [10, -5, -20],
            x: [-10, 5, 15]
          }}
          transition={{ duration: 1.4, delay: 0.2 }}
        >
          <div className="bg-red-100 p-1 rounded-full shadow-md">
            <ZapOff className="h-4 w-4 text-red-500" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute -bottom-5 -left-5 z-10"
          initial={{ opacity: 0, y: -10, x: 10 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [-10, 5, 20],
            x: [10, -5, -15]
          }}
          transition={{ duration: 1.4, delay: 0.4 }}
        >
          <div className="bg-red-100 p-1 rounded-full shadow-md">
            <AlertCircle className="h-4 w-4 text-red-500" />
          </div>
        </motion.div>
      </div>
      
      <motion.h2 
        className="text-2xl font-bold mb-3 mt-5"
        animate={{ 
          opacity: [1, 0.9, 0.8, 0.7, 0.5, 0],
          y: [0, -1, 1, -2, 2, 0],
          color: ["#111827", "#991B1B", "#111827", "#991B1B", "#111827"],
          textShadow: [
            "0 0 0 rgba(239,68,68,0)",
            "0 0 8px rgba(239,68,68,0.3)",
            "0 0 0 rgba(239,68,68,0)"
          ]
        }}
        transition={{ duration: 1 }}
      >
        Verificando sua conta
      </motion.h2>
      
      <motion.div 
        className="w-full max-w-xs mx-auto"
        animate={{ 
          opacity: [1, 0.9, 0.7, 0.5, 0.3, 0],
          scale: [1, 0.99, 0.98, 0.97, 0.96, 0.95]
        }}
        transition={{ duration: 1 }}
      >
        <Progress 
          value={100} 
          className="h-2.5 bg-red-100 overflow-hidden" 
          indicatorClassName="bg-gradient-to-r from-red-400 via-red-500 to-red-600" 
        />
        
        <motion.div
          className="h-0.5 w-full bg-transparent mt-1 rounded-full overflow-hidden"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(239,68,68,0) 0%, rgba(239,68,68,0.3) 50%, rgba(239,68,68,0) 100%)",
              "linear-gradient(90deg, rgba(239,68,68,0) 0%, rgba(239,68,68,0.6) 50%, rgba(239,68,68,0) 100%)",
              "linear-gradient(90deg, rgba(239,68,68,0) 0%, rgba(239,68,68,0.3) 50%, rgba(239,68,68,0) 100%)"
            ],
            backgroundSize: ["200% 100%", "200% 100%", "200% 100%"],
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
          }}
          transition={{ duration: 1.2, repeat: 1 }}
        />
        
        <motion.p
          className="text-xs text-center mt-2"
          animate={{
            opacity: [1, 0.7, 0.4, 0],
            color: ["#6b7280", "#ef4444", "#6b7280"]
          }}
          transition={{ duration: 1 }}
        >
          Processando token de verificação...
        </motion.p>
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
