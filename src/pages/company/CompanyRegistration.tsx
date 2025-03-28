
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  FileCheck, 
  Save, 
  Upload,
  User,
  Mail,
  Phone,
  Calendar
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Informações Básicas
  const [companyName, setCompanyName] = useState("");
  const [tradingName, setTradingName] = useState("");
  const [description, setDescription] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [foundedAt, setFoundedAt] = useState("");
  
  // Responsável
  const [responsibleName, setResponsibleName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  // Endereço
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  
  // Documentos
  const [cnpjDoc, setCnpjDoc] = useState<File | null>(null);
  const [contractDoc, setContractDoc] = useState<File | null>(null);
  
  // Tab atual
  const [activeTab, setActiveTab] = useState("basic");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: (file: File | null) => void) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!companyName || !tradingName || !cnpj || !street || !number || !neighborhood || !city || !state) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
      });
      return;
    }

    if (!cnpjDoc || !contractDoc) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, faça o upload de todos os documentos necessários.",
      });
      return;
    }
    
    toast({
      title: "Sucesso!",
      description: "Cadastro da empresa finalizado com sucesso.",
    });
    
    // Redirect to partner dashboard
    navigate("/parceiros/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-4 py-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Cadastro de Empresa</h2>
              <p className="text-gray-600">Complete todas as informações abaixo para finalizar o cadastro</p>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="basic" className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                <span className="hidden sm:inline">Informações</span>
              </TabsTrigger>
              <TabsTrigger value="responsible" className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Responsável</span>
              </TabsTrigger>
              <TabsTrigger value="address" className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Endereço</span>
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex items-center gap-1">
                <FileCheck className="w-4 h-4" />
                <span className="hidden sm:inline">Documentos</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <form onSubmit={handleSubmit} className="space-y-8">
            <TabsContent value="basic" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                    Razão Social <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Razão social da empresa"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="tradingName" className="text-sm font-medium text-gray-700">
                    Nome Fantasia <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="tradingName"
                    value={tradingName}
                    onChange={(e) => setTradingName(e.target.value)}
                    placeholder="Nome fantasia da empresa"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="cnpj" className="text-sm font-medium text-gray-700">
                    CNPJ <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="cnpj"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                    placeholder="00.000.000/0000-00"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="foundedAt" className="text-sm font-medium text-gray-700">
                    Data de Fundação
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <Input
                      id="foundedAt"
                      type="date"
                      value={foundedAt}
                      onChange={(e) => setFoundedAt(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-gray-700">
                  Descrição da Empresa <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Conte um pouco sobre sua empresa..."
                  className="h-24"
                  required
                />
              </div>
              
              <div className="pt-4 flex justify-end">
                <Button 
                  type="button" 
                  onClick={() => setActiveTab("responsible")}
                  className="bg-gradient-to-r from-primary to-primary/80"
                >
                  Próxima Seção
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="responsible" className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="responsibleName" className="text-sm font-medium text-gray-700">
                  Nome do Responsável <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <Input
                    id="responsibleName"
                    value={responsibleName}
                    onChange={(e) => setResponsibleName(e.target.value)}
                    className="pl-10"
                    placeholder="Nome completo do responsável"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      placeholder="email@empresa.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4 flex justify-between">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setActiveTab("basic")}
                >
                  Voltar
                </Button>
                <Button 
                  type="button" 
                  onClick={() => setActiveTab("address")}
                  className="bg-gradient-to-r from-primary to-primary/80"
                >
                  Próxima Seção
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="address" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="cep" className="text-sm font-medium text-gray-700">
                    CEP <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="00000-000"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-2">
                  <label htmlFor="street" className="text-sm font-medium text-gray-700">
                    Rua <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Nome da rua"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="number" className="text-sm font-medium text-gray-700">
                    Número <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="complement" className="text-sm font-medium text-gray-700">
                  Complemento
                </label>
                <Input
                  id="complement"
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                  placeholder="Apto 123, Bloco B (opcional)"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="neighborhood" className="text-sm font-medium text-gray-700">
                  Bairro <span className="text-red-500">*</span>
                </label>
                <Input
                  id="neighborhood"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  placeholder="Nome do bairro"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-gray-700">
                    Cidade <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Nome da cidade"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="state" className="text-sm font-medium text-gray-700">
                    Estado <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="UF"
                    required
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setActiveTab("responsible")}
                >
                  Voltar
                </Button>
                <Button 
                  type="button" 
                  onClick={() => setActiveTab("documents")}
                  className="bg-gradient-to-r from-primary to-primary/80"
                >
                  Próxima Seção
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    id="cnpjDoc"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, setCnpjDoc)}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="cnpjDoc"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {cnpjDoc ? cnpjDoc.name : "Cartão CNPJ"}
                    </span>
                    <span className="text-xs text-gray-500">
                      Clique para fazer upload (PDF, JPG ou PNG)
                    </span>
                    {cnpjDoc && (
                      <span className="text-xs text-emerald-500 font-semibold mt-2">
                        ✓ Arquivo carregado
                      </span>
                    )}
                  </label>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    id="contractDoc"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, setContractDoc)}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="contractDoc"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {contractDoc ? contractDoc.name : "Contrato Social"}
                    </span>
                    <span className="text-xs text-gray-500">
                      Clique para fazer upload (PDF, JPG ou PNG)
                    </span>
                    {contractDoc && (
                      <span className="text-xs text-emerald-500 font-semibold mt-2">
                        ✓ Arquivo carregado
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setActiveTab("address")}
                >
                  Voltar
                </Button>
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Finalizar Cadastro
                </Button>
              </div>
            </TabsContent>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyRegistration;
