
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center"
      >
        {verificationState === "loading" && (
          <>
            <div className="w-20 h-20 flex items-center justify-center bg-[#E5DEFF] rounded-full mx-auto mb-6">
              <Loader2 className="h-9 w-9 text-primary animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Verificando conta
            </h2>
            <p className="text-gray-600 mb-6">
              Estamos validando seu token de verificação. Por favor, aguarde um momento...
            </p>
            <Progress value={progress} className="h-2 mb-6" />
          </>
        )}

        {verificationState === "success" && (
          <>
            <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
              <Check className="h-9 w-9 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Conta verificada com sucesso!
            </h2>
            <p className="text-gray-600 mb-6">
              Sua conta foi confirmada e você já pode acessar a plataforma.
            </p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <Link to="/login">Entrar na conta</Link>
            </Button>
          </>
        )}

        {verificationState === "error" && (
          <>
            <div className="w-20 h-20 flex items-center justify-center bg-red-100 rounded-full mx-auto mb-6">
              <AlertCircle className="h-9 w-9 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Falha na verificação
            </h2>
            <p className="text-gray-600 mb-6">
              O token de verificação é inválido ou expirou. Por favor, tente novamente ou solicite um novo link de verificação.
            </p>
            <Button
              asChild
              variant="outline"
              className="w-full mb-3"
            >
              <Link to="/cadastro">Voltar ao cadastro</Link>
            </Button>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <Link to="/login">Tentar fazer login</Link>
            </Button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default VerifyAccount;
