
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Loader2, AlertCircle, PartyPopper } from "lucide-react";
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

  useEffect(() => {
    // Simulate progress bar advancing
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 600);

    // Simulate verification process
    const verifyToken = setTimeout(() => {
      if (token) {
        // Here you would normally validate the token with your backend
        // For now, we'll just simulate success (in a real app, this would be an API call)
        setVerificationState("success");
      } else {
        setVerificationState("error");
      }
    }, 3000);

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <GeometricBackground />
      
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
            {verificationState === "loading" && (
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-6">
                    <Loader2 className="h-10 w-10 text-primary animate-spin" />
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
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-3">
                  Verificando sua conta
                </h2>
                <p className="text-gray-600 mb-6 max-w-xs mx-auto">
                  Estamos validando seu token de verificação. Por favor, aguarde um momento...
                </p>
                
                <div className="w-full bg-gray-100 rounded-full h-2 mb-6 overflow-hidden">
                  <Progress value={progress} className="h-2" />
                </div>
                
                <div className="text-xs text-gray-500">
                  Isso normalmente leva apenas alguns segundos
                </div>
              </motion.div>
            )}

            {verificationState === "success" && (
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
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity py-6 text-base font-medium"
                  >
                    <Link to="/login">Entrar na conta</Link>
                  </Button>
                </motion.div>
              </motion.div>
            )}

            {verificationState === "error" && (
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200 rounded-full mb-6">
                  <AlertCircle className="h-10 w-10 text-red-600" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Falha na verificação
                </h2>
                <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                  O token de verificação é inválido ou expirou. Por favor, tente novamente ou solicite um novo link de verificação.
                </p>
                
                <div className="w-full space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-gray-300 hover:bg-gray-50"
                    >
                      <Link to="/cadastro">Voltar ao cadastro</Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    >
                      <Link to="/login">Tentar fazer login</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default VerifyAccount;
