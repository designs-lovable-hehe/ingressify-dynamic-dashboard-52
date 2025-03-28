import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { Building2, MapPin, FileText, CheckCircle2, ArrowRight, Upload } from "lucide-react";
import { Footer } from "@/components/Footer";

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    companyName: "",
    tradingName: "",
    cnpj: "",
    email: "",
    phone: "",
    website: "",
    description: "",
    segment: "",
    
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    
    businessLicense: null,
    ownerDocument: null,
    bankDetails: {
      bank: "",
      agency: "",
      account: "",
      accountType: ""
    },
    
    termsAccepted: false,
    privacyPolicyAccepted: false
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateNestedFormData = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const handleFileChange = (field, e) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      updateFormData(field, file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.cnpj || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos obrigatórios para continuar.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.termsAccepted || !formData.privacyPolicyAccepted) {
      toast({
        title: "Termos e políticas",
        description: "Você precisa aceitar os termos de uso e política de privacidade para continuar.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Cadastro enviado com sucesso!",
        description: "Em breve entraremos em contato para confirmar seus dados.",
        variant: "default",
      });
      navigate("/parceiros/dashboard");
      setIsSubmitting(false);
    }, 1500);
  };

  const segments = [
    { value: "entertainment", label: "Entretenimento" },
    { value: "education", label: "Educação" },
    { value: "technology", label: "Tecnologia" },
    { value: "sports", label: "Esportes" },
    { value: "culture", label: "Cultura" },
    { value: "business", label: "Negócios" },
    { value: "other", label: "Outro" }
  ];

  const states = [
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" }
  ];

  const banks = [
    { value: "001", label: "Banco do Brasil" },
    { value: "104", label: "Caixa Econômica Federal" },
    { value: "033", label: "Santander" },
    { value: "341", label: "Itaú" },
    { value: "237", label: "Bradesco" },
    { value: "756", label: "Sicoob" },
    { value: "077", label: "Inter" },
    { value: "260", label: "Nubank" }
  ];

  const accountTypes = [
    { value: "checking", label: "Conta Corrente" },
    { value: "savings", label: "Conta Poupança" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <GeometricBackground />
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cadastro de Empresa Parceira</h1>
            <p className="text-gray-600">
              Preencha todos os dados abaixo para cadastrar sua empresa como parceira na plataforma
            </p>
          </motion.div>
          
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Informações da Empresa</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Nome da Empresa *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => updateFormData('companyName', e.target.value)}
                      placeholder="Razão Social"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tradingName">Nome Fantasia</Label>
                    <Input
                      id="tradingName"
                      value={formData.tradingName}
                      onChange={(e) => updateFormData('tradingName', e.target.value)}
                      placeholder="Nome Fantasia"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ *</Label>
                    <Input
                      id="cnpj"
                      value={formData.cnpj}
                      onChange={(e) => updateFormData('cnpj', e.target.value)}
                      placeholder="00.000.000/0000-00"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="segment">Segmento *</Label>
                    <Select 
                      value={formData.segment} 
                      onValueChange={(value) => updateFormData('segment', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um segmento" />
                      </SelectTrigger>
                      <SelectContent>
                        {segments.map((segment) => (
                          <SelectItem key={segment.value} value={segment.value}>
                            {segment.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="email@empresa.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website">Site</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => updateFormData('website', e.target.value)}
                      placeholder="www.empresa.com.br"
                    />
                  </div>
                  
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="description">Descrição da Empresa</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => updateFormData('description', e.target.value)}
                      placeholder="Conte um pouco sobre sua empresa e seus principais serviços"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </section>
              
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Endereço</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">CEP *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => updateFormData('zipCode', e.target.value)}
                      placeholder="00000-000"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="street">Rua *</Label>
                    <Input
                      id="street"
                      value={formData.street}
                      onChange={(e) => updateFormData('street', e.target.value)}
                      placeholder="Nome da rua"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="number">Número *</Label>
                    <Input
                      id="number"
                      value={formData.number}
                      onChange={(e) => updateFormData('number', e.target.value)}
                      placeholder="123"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input
                      id="complement"
                      value={formData.complement}
                      onChange={(e) => updateFormData('complement', e.target.value)}
                      placeholder="Sala, andar, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="neighborhood">Bairro *</Label>
                    <Input
                      id="neighborhood"
                      value={formData.neighborhood}
                      onChange={(e) => updateFormData('neighborhood', e.target.value)}
                      placeholder="Nome do bairro"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      placeholder="Nome da cidade"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">Estado *</Label>
                    <Select 
                      value={formData.state} 
                      onValueChange={(value) => updateFormData('state', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um estado" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state.value} value={state.value}>
                            {state.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </section>
              
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Documentos e Dados Bancários</h2>
                </div>
                
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessLicense">Contrato Social / Certificado MEI *</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="businessLicense"
                        type="file"
                        onChange={(e) => handleFileChange('businessLicense', e)}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ownerDocument">Documento do Responsável (RG/CNH) *</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="ownerDocument"
                        type="file"
                        onChange={(e) => handleFileChange('ownerDocument', e)}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="bank">Banco *</Label>
                    <Select 
                      value={formData.bankDetails.bank}
                      onValueChange={(value) => updateNestedFormData('bankDetails', 'bank', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um banco" />
                      </SelectTrigger>
                      <SelectContent>
                        {banks.map((bank) => (
                          <SelectItem key={bank.value} value={bank.value}>
                            {bank.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accountType">Tipo de Conta *</Label>
                    <Select 
                      value={formData.bankDetails.accountType}
                      onValueChange={(value) => updateNestedFormData('bankDetails', 'accountType', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        {accountTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="agency">Agência *</Label>
                    <Input
                      id="agency"
                      value={formData.bankDetails.agency}
                      onChange={(e) => updateNestedFormData('bankDetails', 'agency', e.target.value)}
                      placeholder="0000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="account">Conta *</Label>
                    <Input
                      id="account"
                      value={formData.bankDetails.account}
                      onChange={(e) => updateNestedFormData('bankDetails', 'account', e.target.value)}
                      placeholder="00000-0"
                    />
                  </div>
                </div>
              </section>
              
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Termos e Condições</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="termsAccepted" 
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => updateFormData('termsAccepted', Boolean(checked))}
                    />
                    <Label htmlFor="termsAccepted" className="text-sm leading-tight">
                      Li e aceito os <a href="#" className="text-primary font-medium hover:underline">Termos de Uso</a> da plataforma Ingresso Nitro
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="privacyPolicyAccepted" 
                      checked={formData.privacyPolicyAccepted}
                      onCheckedChange={(checked) => updateFormData('privacyPolicyAccepted', Boolean(checked))}
                    />
                    <Label htmlFor="privacyPolicyAccepted" className="text-sm leading-tight">
                      Li e aceito a <a href="#" className="text-primary font-medium hover:underline">Política de Privacidade</a> da plataforma Ingresso Nitro
                    </Label>
                  </div>
                </div>
              </section>
              
              <div className="pt-6 flex justify-end">
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-primary to-accent text-white px-8 py-6 h-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Processando..."
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar Cadastro
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyRegistration;
