
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, MapPin, FileText, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GeometricBackground } from "@/components/GeometricBackground";
import { CompanyRegistrationHeader } from "@/components/company/CompanyRegistrationHeader";
import { FormSection } from "@/components/company/FormSection";
import { FormField } from "@/components/company/FormField";
import { AddressAutocomplete } from "@/components/company/AddressAutocomplete";
import { FileUploader } from "@/components/company/FileUploader";
import { CompanyReviewSection } from "@/components/company/CompanyReviewSection";
import StepIndicator from "@/components/StepIndicator";
import { toast } from "@/components/ui/use-toast";
import { useToast } from "@/components/ui/use-toast";

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Company data state
  const [companyData, setCompanyData] = useState({
    name: "",
    tradingName: "",
    cnpj: "",
    segment: "",
    description: "",
    address: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: ""
    },
    contract: null,
    addressProof: null,
    termsAccepted: false
  });
  
  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Steps configuration
  const steps = [
    { number: 1, title: "Informações", description: "Dados da empresa" },
    { number: 2, title: "Endereço", description: "Localização" },
    { number: 3, title: "Documentos", description: "Comprovantes" },
    { number: 4, title: "Revisão", description: "Finalização" },
  ];
  
  // Update company data
  const updateCompanyData = (data: any) => {
    setCompanyData(prev => ({ ...prev, ...data }));
    // Clear any errors for updated fields
    const updatedErrors = { ...errors };
    Object.keys(data).forEach(key => {
      if (updatedErrors[key]) {
        delete updatedErrors[key];
      }
    });
    setErrors(updatedErrors);
  };
  
  // Basic validation for each step
  const validateStep = (step: number) => {
    let valid = true;
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!companyData.name.trim()) {
        newErrors.name = "Nome da empresa é obrigatório";
        valid = false;
      }
      
      if (!companyData.cnpj.trim()) {
        newErrors.cnpj = "CNPJ é obrigatório";
        valid = false;
      } else if (!/^\d{14}$/.test(companyData.cnpj.replace(/\D/g, ''))) {
        newErrors.cnpj = "CNPJ inválido";
        valid = false;
      }
      
      if (!companyData.segment.trim()) {
        newErrors.segment = "Segmento é obrigatório";
        valid = false;
      }
    }
    
    if (step === 2) {
      if (!companyData.address.cep || !companyData.address.street || !companyData.address.number || !companyData.address.city || !companyData.address.state) {
        newErrors.address = "Todos os campos de endereço são obrigatórios";
        valid = false;
      }
    }
    
    if (step === 3) {
      if (!companyData.contract) {
        newErrors.contract = "Contrato social é obrigatório";
        valid = false;
      }
      
      if (!companyData.addressProof) {
        newErrors.addressProof = "Comprovante de endereço é obrigatório";
        valid = false;
      }
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  // Handle next step
  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
        
        // Show success toast
        toast({
          title: "Etapa concluída!",
          description: `Informações salvas com sucesso.`,
          variant: "default",
        });
      } else {
        // Final submission
        handleSubmit();
      }
    }
  };
  
  // Handle prev step
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Jump to specific step (for review edit)
  const handleEditSection = (section: string) => {
    switch(section) {
      case 'basic':
        setCurrentStep(1);
        break;
      case 'address':
        setCurrentStep(2);
        break;
      case 'documents':
        setCurrentStep(3);
        break;
      default:
        break;
    }
  };
  
  // Format CNPJ while typing
  const formatCNPJ = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, '');
    
    // Format as CNPJ: XX.XXX.XXX/XXXX-XX
    if (numericValue.length <= 2) {
      return numericValue;
    } else if (numericValue.length <= 5) {
      return `${numericValue.slice(0, 2)}.${numericValue.slice(2)}`;
    } else if (numericValue.length <= 8) {
      return `${numericValue.slice(0, 2)}.${numericValue.slice(2, 5)}.${numericValue.slice(5)}`;
    } else if (numericValue.length <= 12) {
      return `${numericValue.slice(0, 2)}.${numericValue.slice(2, 5)}.${numericValue.slice(5, 8)}/${numericValue.slice(8)}`;
    } else {
      return `${numericValue.slice(0, 2)}.${numericValue.slice(2, 5)}.${numericValue.slice(5, 8)}/${numericValue.slice(8, 12)}-${numericValue.slice(12, 14)}`;
    }
  };
  
  // Handle CNPJ change
  const handleCNPJChange = (value: string) => {
    const formattedValue = formatCNPJ(value);
    updateCompanyData({ cnpj: formattedValue });
  };
  
  // Final submission
  const handleSubmit = () => {
    // Simulate API call
    console.log("Submitting company data:", companyData);
    
    // Show loading toast
    toast({
      title: "Enviando dados...",
      description: "Aguarde enquanto processamos seu cadastro.",
    });
    
    // Simulate API delay
    setTimeout(() => {
      // Success toast
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Sua empresa foi cadastrada. Você será redirecionado.",
        variant: "default",
      });
      
      // Redirect after success
      setTimeout(() => {
        navigate("/parceiros/dashboard");
      }, 2000);
    }, 2000);
  };
  
  // Render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <FormSection 
            title="Informações da Empresa" 
            description="Preencha os dados básicos da sua empresa"
            icon={<Building2 className="w-5 h-5" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                id="company-name"
                label="Nome da Empresa"
                placeholder="Razão social conforme CNPJ"
                value={companyData.name}
                onChange={(value) => updateCompanyData({ name: value })}
                error={errors.name}
                required
                className="md:col-span-2"
              />
              
              <FormField
                id="trading-name"
                label="Nome Fantasia"
                placeholder="Nome comercial (se diferente da razão social)"
                value={companyData.tradingName}
                onChange={(value) => updateCompanyData({ tradingName: value })}
              />
              
              <FormField
                id="cnpj"
                label="CNPJ"
                placeholder="XX.XXX.XXX/XXXX-XX"
                value={companyData.cnpj}
                onChange={handleCNPJChange}
                error={errors.cnpj}
                required
              />
              
              <FormField
                id="segment"
                label="Segmento"
                placeholder="Área de atuação da empresa"
                value={companyData.segment}
                onChange={(value) => updateCompanyData({ segment: value })}
                error={errors.segment}
                required
              />
              
              <FormField
                id="description"
                label="Descrição"
                placeholder="Descreva brevemente sua empresa"
                value={companyData.description}
                onChange={(value) => updateCompanyData({ description: value })}
                multiline
                rows={4}
                className="md:col-span-2"
              />
            </div>
          </FormSection>
        );
        
      case 2:
        return (
          <FormSection 
            title="Endereço da Empresa" 
            description="Informe o endereço completo da sua empresa"
            icon={<MapPin className="w-5 h-5" />}
          >
            <AddressAutocomplete
              value={companyData.address}
              onChange={(address) => updateCompanyData({ address })}
              error={errors.address}
            />
          </FormSection>
        );
        
      case 3:
        return (
          <FormSection 
            title="Documentação" 
            description="Envie os documentos necessários para validação"
            icon={<FileText className="w-5 h-5" />}
          >
            <div className="space-y-6">
              <FileUploader
                id="contract"
                label="Contrato Social ou MEI"
                acceptedFileTypes=".pdf,.jpg,.jpeg,.png"
                maxFileSize={5}
                value={companyData.contract}
                onChange={(file) => updateCompanyData({ contract: file })}
                error={errors.contract}
                helpText="Arquivos em formato PDF, JPG ou PNG com tamanho máximo de 5MB"
                required
              />
              
              <FileUploader
                id="address-proof"
                label="Comprovante de Endereço"
                acceptedFileTypes=".pdf,.jpg,.jpeg,.png"
                maxFileSize={5}
                value={companyData.addressProof}
                onChange={(file) => updateCompanyData({ addressProof: file })}
                error={errors.addressProof}
                helpText="Conta de luz, água ou telefone dos últimos 3 meses"
                required
              />
              
              <div className="mt-4 flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary/50 border-gray-300 rounded"
                  checked={companyData.termsAccepted}
                  onChange={(e) => updateCompanyData({ termsAccepted: e.target.checked })}
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  Declaro que as informações fornecidas são verdadeiras e que li e concordo com os{" "}
                  <a href="#" className="text-primary hover:text-primary/80 font-medium">
                    Termos e Condições
                  </a>
                </label>
              </div>
            </div>
          </FormSection>
        );
        
      case 4:
        return (
          <CompanyReviewSection 
            companyData={companyData}
            onEdit={handleEditSection}
          />
        );
        
      default:
        return null;
    }
  };
  
  // Page title and description based on current step
  let stepTitle = "";
  let stepDescription = "";
  
  switch (currentStep) {
    case 1:
      stepTitle = "Informações Básicas";
      stepDescription = "Preencha os dados fundamentais da sua empresa";
      break;
    case 2:
      stepTitle = "Endereço";
      stepDescription = "Informe a localização da sua empresa";
      break;
    case 3:
      stepTitle = "Documentação";
      stepDescription = "Envie os documentos necessários para validação";
      break;
    case 4:
      stepTitle = "Revisão Final";
      stepDescription = "Confirme todos os dados antes de finalizar";
      break;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <GeometricBackground />
      
      <div className="container mx-auto px-4 py-12 flex-1">
        <CompanyRegistrationHeader 
          currentStep={currentStep}
          totalSteps={steps.length}
          title={stepTitle}
          subtitle={stepDescription}
        />
        
        <StepIndicator currentStep={currentStep} steps={steps} />
        
        <div className="max-w-4xl mx-auto">
          {renderStepContent()}
          
          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <Button
                variant="outline"
                onClick={handlePrev}
                className="bg-white"
              >
                Voltar
              </Button>
            ) : (
              <div></div>
            )}
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-primary to-accent text-white"
              >
                {currentStep < steps.length ? (
                  <>
                    Próximo
                    <Send className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Finalizar Cadastro
                    <Check className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;
