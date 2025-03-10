
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

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

const VerificationModal = ({ isOpen, onClose, email }: VerificationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-xl border-0 shadow-xl p-6">
        <DialogHeader className="text-center space-y-4">
          <div className="relative mx-auto">
            <div className="w-20 h-20 flex items-center justify-center bg-[#E5DEFF] rounded-full mx-auto">
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
          
          <div className="space-y-2">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Conta criada com sucesso!
            </DialogTitle>
            <DialogDescription className="text-primary font-medium text-base">
              Confirme seu email para começar
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="space-y-5 mt-4">
          <p className="text-center text-gray-600 text-sm">
            Enviamos um link de confirmação para:
          </p>
          
          <div className="bg-[#E5DEFF] text-[#1A1F2C] font-medium py-3 px-4 rounded-lg text-center break-all">
            {email}
          </div>
          
          <div className="text-center text-gray-600 text-sm px-2">
            Por favor, verifique sua caixa de entrada e spam para completar o cadastro. 
            O link expira em 24 horas.
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center text-sm text-gray-700 gap-2 bg-[#F7F5FF] p-4 rounded-lg border border-[#E5DEFF]"
          >
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Após a confirmação, você poderá fazer login na plataforma.</span>
          </motion.div>
        </div>
        
        <div className="mt-6">
          <Button 
            onClick={onClose} 
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity py-5 text-base"
          >
            Entendi
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationModal;
