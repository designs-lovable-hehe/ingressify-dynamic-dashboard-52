
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from "lucide-react";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

const VerificationModal = ({ isOpen, onClose, email }: VerificationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white/90 backdrop-blur-md border border-primary/20">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#E5DEFF] rounded-full mb-4">
            <Mail className="h-8 w-8 text-[#9b87f5]" />
          </div>
          <DialogTitle className="text-2xl font-bold">Verifique seu email</DialogTitle>
        </DialogHeader>
        
        <div className="mt-2 space-y-4">
          <DialogDescription className="text-center">
            Enviamos um link de confirmação para o email:
          </DialogDescription>
          
          <div className="bg-[#E5DEFF] text-[#1A1F2C] font-medium py-3 px-4 rounded-lg text-center break-all">
            {email}
          </div>
          
          <DialogDescription className="text-center">
            Por favor, verifique sua caixa de entrada e spam para completar o cadastro. 
            O link expira em 24 horas.
          </DialogDescription>
          
          <div className="flex items-center justify-center text-sm text-[#8E9196] gap-2 bg-[#F7F5FF] p-3 rounded-lg border border-[#E5DEFF]">
            <CheckCircle className="h-4 w-4 text-[#9b87f5]" />
            <span>Após a confirmação, você poderá fazer login na plataforma.</span>
          </div>
        </div>
        
        <div className="mt-4">
          <Button 
            onClick={onClose} 
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            Entendi
          </Button>
          
          <div className="text-center mt-3">
            <button 
              onClick={onClose} 
              className="text-sm text-[#9b87f5] hover:text-[#8571e0] underline-offset-2 underline transition-colors"
            >
              Reenviar email de confirmação
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationModal;
