
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CompanyRegistrationHeader } from "@/components/company/CompanyRegistrationHeader";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/company/FormField";
import { AddressAutocomplete } from "@/components/company/AddressAutocomplete";
import { FileUploader } from "@/components/company/FileUploader";
import { CompanyReviewSection } from "@/components/company/CompanyReviewSection";
import StepIndicator from "@/components/StepIndicator";
import { GeometricBackground } from "@/components/GeometricBackground";
import CompletionModal from "@/components/company/CompletionModal";

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCompletionModalOpen, setIsCompletionModalOpen] = useState(false);
  
  // Initialize company data state
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
    businessLicense: null
  });
  
  // Set current step based on URL
  const getCurrentStep = () => {
    const path = location.pathname;
    if (path.includes("informacoes-basicas")) return 1;
    if (path.includes("endereco")) return 2;
    if (path.includes("documentos")) return 3;
    if (path.includes("revisao")) return 4;
    return 1;
  };
  
  const currentStep = getCurrentStep();
  
  // Step definitions
  const steps = [
    { number: 1, title: "Informações", description: "Dados básicos" },
    { number: 2, title: "Endereço", description: "Localização" },
    { number: 3, title: "Documentos", description: "Comprovações" },
    { number: 4, title: "Revisão", description: "Finalizar" }
  ];
  
  // Handle next step navigation
  const handleNext = () => {
    const nextStep = currentStep + 1;
    if (nextStep > 4) {
      // Show completion modal when finished all steps
      setIsCompletionModalOpen(true);
      return;
    }
    
    if (nextStep === 2) {
      navigate("/empresa/endereco");
    } else if (nextStep === 3) {
      navigate("/empresa/documentos");
    } else if (nextStep === 4) {
      navigate("/empresa/revisao");
    }
  };
  
  // Handle back navigation
  const handleBack = () => {
    const prevStep = currentStep - 1;
    if (prevStep === 0) {
      navigate("/");
      return;
    }
    
    if (prevStep === 1) {
      navigate("/empresa/informacoes-basicas");
    } else if (prevStep === 2) {
      navigate("/empresa/endereco");
    } else if (prevStep === 3) {
      navigate("/empresa/documentos");
    }
  };
  
  // Handle edit from review page
  const handleEditSection = (section: string) => {
    if (section === 'basic') {
      navigate("/empresa/informacoes-basicas");
    } else if (section === 'address') {
      navigate("/empresa/endereco");
    } else if (section === 'documents') {
      navigate("/empresa/documentos");
    }
  };
  
  // Headers for each step
  const getStepHeader = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Informações Básicas da Empresa",
          subtitle: "Forneça os dados principais da sua empresa"
        };
      case 2:
        return {
          title: "Endereço da Empresa",
          subtitle: "Informe a localização da sua sede ou filial principal"
        };
      case 3:
        return {
          title: "Documentação",
          subtitle: "Envie os documentos necessários para verificação"
        };
      case 4:
        return {
          title: "Revisão Final",
          subtitle: "Confirme se todos os dados estão corretos antes de finalizar"
        };
      default:
        return {
          title: "Cadastro Empresarial",
          subtitle: "Preencha as informações da sua empresa"
        };
    }
  };
  
  const header = getStepHeader();
  
  return (
    <div className="min-h-screen pb-20">
      <GeometricBackground />
      
      <div className="container mx-auto px-4 pt-8">
        <CompanyRegistrationHeader
          currentStep={currentStep}
          totalSteps={4}
          title={header.title}
          subtitle={header.subtitle}
        />
        
        <StepIndicator
          currentStep={currentStep}
          steps={steps}
        />
        
        <div className="max-w-3xl mx-auto">
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  id="companyName"
                  label="Razão Social"
                  placeholder="Razão social conforme CNPJ"
                  value={companyData.name}
                  onChange={(value) => setCompanyData({...companyData, name: value})}
                  required
                />
                <FormField
                  id="tradingName"
                  label="Nome Fantasia"
                  placeholder="Nome comercial da empresa"
                  value={companyData.tradingName}
                  onChange={(value) => setCompanyData({...companyData, tradingName: value})}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  id="cnpj"
                  label="CNPJ"
                  placeholder="00.000.000/0000-00"
                  value={companyData.cnpj}
                  onChange={(value) => setCompanyData({...companyData, cnpj: value})}
                  required
                />
                <FormField
                  id="segment"
                  label="Segmento"
                  placeholder="Ex: Tecnologia, Educação, Saúde"
                  value={companyData.segment}
                  onChange={(value) => setCompanyData({...companyData, segment: value})}
                />
              </div>
              
              <FormField
                id="description"
                label="Descrição da Empresa"
                placeholder="Descreva brevemente sua empresa e os eventos que pretende organizar"
                value={companyData.description}
                onChange={(value) => setCompanyData({...companyData, description: value})}
                multiline
                rows={5}
              />
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-8">
              <AddressAutocomplete
                value={companyData.address}
                onChange={(address) => setCompanyData({...companyData, address})}
              />
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="space-y-8">
              <FileUploader
                id="contract"
                label="Contrato Social"
                helpText="Envie o contrato social da empresa em formato PDF (máx. 5MB)"
                acceptedFileTypes=".pdf"
                value={companyData.contract}
                onChange={(file) => setCompanyData({...companyData, contract: file})}
                required
              />
              
              <FileUploader
                id="businessLicense"
                label="Alvará de Funcionamento"
                helpText="Envie o alvará de funcionamento em formato PDF ou imagem (máx. 5MB)"
                acceptedFileTypes=".pdf,.jpg,.jpeg,.png"
                value={companyData.businessLicense}
                onChange={(file) => setCompanyData({...companyData, businessLicense: file})}
                required
              />
            </div>
          )}
          
          {currentStep === 4 && (
            <CompanyReviewSection
              companyData={companyData}
              onEdit={handleEditSection}
            />
          )}
          
          <div className="mt-12 flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              className="px-6"
            >
              Voltar
            </Button>
            
            <Button
              onClick={handleNext}
              className="px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              {currentStep === 4 ? "Finalizar Cadastro" : "Próximo"}
            </Button>
          </div>
        </div>
      </div>
      
      <CompletionModal
        isOpen={isCompletionModalOpen}
        onClose={() => {
          setIsCompletionModalOpen(false);
          navigate("/parceiros/dashboard");
        }}
      />
    </div>
  );
};

export default CompanyRegistration;
