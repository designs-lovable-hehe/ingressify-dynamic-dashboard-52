
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

const VerificationModal = ({ isOpen, onClose, email }: VerificationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-xl border-0 shadow-xl">
        <DialogHeader className="text-center space-y-2">
          <div className="relative mx-auto">
            <div className="w-20 h-20 flex items-center justify-center bg-[#E5DEFF] rounded-full mb-4">
              <Mail className="h-9 w-9 text-primary" />
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
              className="absolute -right-2 -top-2 bg-green-100 rounded-full p-1.5"
            >
              <CheckCircle className="h-5 w-5 text-green-600" />
            </motion.div>
          </div>
          
          <DialogTitle className="text-2xl font-bold text-gray-900">Conta criada com sucesso!</DialogTitle>
          <DialogDescription className="text-primary font-medium">
            Confirme seu email para começar
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-2 space-y-4">
          <DialogDescription className="text-center text-gray-600">
            Enviamos um link de confirmação para:
          </DialogDescription>
          
          <div className="bg-[#E5DEFF] text-[#1A1F2C] font-medium py-3 px-4 rounded-lg text-center break-all">
            {email}
          </div>
          
          <div className="text-center text-gray-600 text-sm">
            Por favor, verifique sua caixa de entrada e spam para completar o cadastro. 
            O link expira em 24 horas.
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center text-sm text-gray-700 gap-2 bg-[#F7F5FF] p-3 rounded-lg border border-[#E5DEFF]"
          >
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Após a confirmação, você poderá fazer login na plataforma.</span>
          </motion.div>
        </div>
        
        <div className="mt-6 flex flex-col gap-3">
          <Button 
            asChild
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            <Link to={`/verificar-conta?token=sample-token-for-${encodeURIComponent(email)}`}>
              Verificar conta
            </Link>
          </Button>
          
          <Button 
            onClick={onClose} 
            variant="outline"
            className="w-full"
          >
            Entendi
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationModal;
