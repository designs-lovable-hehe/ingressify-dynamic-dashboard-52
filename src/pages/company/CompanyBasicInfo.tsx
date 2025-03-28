import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ChevronRight, CheckCircle2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import StepIndicator from "@/components/StepIndicator";
import VerificationModal from "@/components/VerificationModal";

const steps = [
  { number: 1, title: "Informações Básicas" },
  { number: 2, title: "Endereço" },
  { number: 3, title: "Documentos" },
  { number: 4, title: "Revisão" },
];

const CompanyBasicInfo = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [companyName, setCompanyName] = useState("");
  const [tradingName, setTradingName] = useState("");
  const [description, setDescription] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("empresa@exemplo.com");

  const [fieldStates, setFieldStates] = useState({
    companyName: { valid: false, touched: false },
    tradingName: { valid: false, touched: false },
    description: { valid: false, touched: false },
    cnpj: { valid: false, touched: false },
  });

  const validateField = (field: string, value: string) => {
    let isValid = false;
    
    switch(field) {
      case 'companyName':
        isValid = value.length >= 3;
        break;
      case 'tradingName':
        isValid = value.length >= 2;
        break;
      case 'description':
        isValid = value.length >= 10;
        break;
      case 'cnpj':
        isValid = value.replace(/[^\d]/g, '').length === 14;
        break;
      default:
        isValid = false;
    }
    
    setFieldStates(prev => ({
      ...prev,
      [field]: { ...prev[field as keyof typeof prev], valid: isValid, touched: true }
    }));
    
    return isValid;
  };

  const formatCnpj = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 5) {
      return `${numbers.slice(0, 2)}.${numbers.slice(2)}`;
    } else if (numbers.length <= 8) {
      return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`;
    } else if (numbers.length <= 12) {
      return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`;
    } else {
      return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`;
    }
  };

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCnpj(e.target.value);
    setCnpj(formatted);
    validateField('cnpj', formatted);
  };

  const isFormValid = () => {
    return fieldStates.companyName.valid &&
      fieldStates.tradingName.valid &&
      fieldStates.description.valid &&
      fieldStates.cnpj.valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validCompanyName = validateField('companyName', companyName);
    const validTradingName = validateField('tradingName', tradingName);
    const validDescription = validateField('description', description);
    const validCnpj = validateField('cnpj', cnpj);
    
    if (validCompanyName && validTradingName && validDescription && validCnpj) {
      setFormSubmitted(true);
      
      toast({
        title: "Informações salvas",
        description: "Seus dados foram salvos com sucesso!",
        variant: "default",
      });
      
      setTimeout(() => {
        setShowModal(true);
        navigate("/empresa/endereco");
      }, 1000);
    } else {
      toast({
        variant: "destructive",
        title: "Erro na validação",
        description: "Por favor, preencha todos os campos corretamente.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 p-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <StepIndicator currentStep={1} steps={steps} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30">
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-primary/10 p-3 rounded-full">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">Informações Básicas</h2>
              <p className="text-gray-600 dark:text-gray-300">Passo 1 de 4 - Dados da empresa</p>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence>
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <label htmlFor="companyName" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Razão Social <span className="text-red-500">*</span>
                  </label>
                  {fieldStates.companyName.touched && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`text-xs font-medium flex items-center gap-1 ${fieldStates.companyName.valid ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {fieldStates.companyName.valid ? (
                        <><CheckCircle2 className="w-3 h-3" /> Válido</>
                      ) : (
                        <><X className="w-3 h-3" /> Mínimo de 3 caracteres</>
                      )}
                    </motion.span>
                  )}
                </div>
                <Input
                  id="companyName"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    validateField('companyName', e.target.value);
                  }}
                  placeholder="Razão social da empresa"
                  className={`transition-all duration-300 border-2 ${
                    !fieldStates.companyName.touched 
                      ? 'border-gray-200 dark:border-gray-700' 
                      : fieldStates.companyName.valid 
                        ? 'border-green-500/50 bg-green-50/50 dark:bg-green-900/10' 
                        : 'border-red-500/50 bg-red-50/50 dark:bg-red-900/10'
                  }`}
                />
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <label htmlFor="tradingName" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Nome Fantasia <span className="text-red-500">*</span>
                  </label>
                  {fieldStates.tradingName.touched && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`text-xs font-medium flex items-center gap-1 ${fieldStates.tradingName.valid ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {fieldStates.tradingName.valid ? (
                        <><CheckCircle2 className="w-3 h-3" /> Válido</>
                      ) : (
                        <><X className="w-3 h-3" /> Mínimo de 2 caracteres</>
                      )}
                    </motion.span>
                  )}
                </div>
                <Input
                  id="tradingName"
                  value={tradingName}
                  onChange={(e) => {
                    setTradingName(e.target.value);
                    validateField('tradingName', e.target.value);
                  }}
                  placeholder="Nome fantasia da empresa"
                  className={`transition-all duration-300 border-2 ${
                    !fieldStates.tradingName.touched 
                      ? 'border-gray-200 dark:border-gray-700' 
                      : fieldStates.tradingName.valid 
                        ? 'border-green-500/50 bg-green-50/50 dark:bg-green-900/10' 
                        : 'border-red-500/50 bg-red-50/50 dark:bg-red-900/10'
                  }`}
                />
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <label htmlFor="cnpj" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    CNPJ <span className="text-red-500">*</span>
                  </label>
                  {fieldStates.cnpj.touched && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`text-xs font-medium flex items-center gap-1 ${fieldStates.cnpj.valid ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {fieldStates.cnpj.valid ? (
                        <><CheckCircle2 className="w-3 h-3" /> Válido</>
                      ) : (
                        <><X className="w-3 h-3" /> CNPJ inválido</>
                      )}
                    </motion.span>
                  )}
                </div>
                <Input
                  id="cnpj"
                  value={cnpj}
                  onChange={handleCnpjChange}
                  placeholder="00.000.000/0000-00"
                  className={`transition-all duration-300 border-2 ${
                    !fieldStates.cnpj.touched 
                      ? 'border-gray-200 dark:border-gray-700' 
                      : fieldStates.cnpj.valid 
                        ? 'border-green-500/50 bg-green-50/50 dark:bg-green-900/10' 
                        : 'border-red-500/50 bg-red-50/50 dark:bg-red-900/10'
                  }`}
                />
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Descrição da Empresa <span className="text-red-500">*</span>
                  </label>
                  {fieldStates.description.touched && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`text-xs font-medium flex items-center gap-1 ${fieldStates.description.valid ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {fieldStates.description.valid ? (
                        <><CheckCircle2 className="w-3 h-3" /> Válido</>
                      ) : (
                        <><X className="w-3 h-3" /> Mínimo de 10 caracteres</>
                      )}
                    </motion.span>
                  )}
                </div>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    validateField('description', e.target.value);
                  }}
                  placeholder="Conte um pouco sobre sua empresa..."
                  className={`h-32 transition-all duration-300 border-2 ${
                    !fieldStates.description.touched 
                      ? 'border-gray-200 dark:border-gray-700' 
                      : fieldStates.description.valid 
                        ? 'border-green-500/50 bg-green-50/50 dark:bg-green-900/10' 
                        : 'border-red-500/50 bg-red-50/50 dark:bg-red-900/10'
                  }`}
                />
              </motion.div>
            </AnimatePresence>

            <motion.div 
              className="flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                type="submit" 
                size="lg" 
                disabled={formSubmitted}
                className="relative overflow-hidden group bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-500 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  {formSubmitted ? "Processando..." : "Próximo"}
                  <ChevronRight className={`w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1`} />
                </span>
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-20 transition-all duration-300"></span>
              </Button>
            </motion.div>
          </form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-indigo-100 dark:border-gray-700/30 shadow-md"
        >
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-1">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Dica importante</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Preencha todos os campos com informações reais da sua empresa. O CNPJ será verificado e validado durante o processo de aprovação.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <VerificationModal 
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          navigate("/empresa/endereco");
        }}
        email={email}
      />
    </div>
  );
};

export default CompanyBasicInfo;
