
import { motion } from "framer-motion";
import { Building2, ChevronLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface CompanyRegistrationHeaderProps {
  currentStep: number;
  totalSteps: number;
  title: string;
  subtitle: string;
}

export const CompanyRegistrationHeader = ({
  currentStep,
  totalSteps,
  title,
  subtitle
}: CompanyRegistrationHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        <Link 
          to="/" 
          className="text-gray-500 hover:text-gray-700 flex items-center text-sm font-medium mr-4 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Voltar
        </Link>
        <div className="flex-1 h-px bg-gray-200"></div>
        <div className="ml-4 px-3 py-1 bg-white rounded-full border border-gray-200 shadow-sm flex items-center">
          <Building2 className="w-4 h-4 text-primary mr-1.5" />
          <span className="text-xs font-medium">Cadastro Empresarial</span>
        </div>
      </div>
      
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 max-w-lg">{subtitle}</p>
        </div>
        
        <motion.div 
          className="hidden md:flex items-center gap-2 bg-green-50 px-3 py-2 rounded-full border border-green-100 text-green-700"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ShieldCheck className="w-4 h-4" />
          <span className="text-xs font-medium">Dados protegidos</span>
        </motion.div>
      </div>
      
      <div className="mt-6 w-full bg-gray-100 h-1 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};
