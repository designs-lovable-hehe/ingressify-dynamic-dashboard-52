
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import StepIndicator from "@/components/StepIndicator";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!companyName || !tradingName || !description || !cnpj) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
      });
      return;
    }

    // TODO: Save data to backend
    navigate("/empresa/endereco");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <StepIndicator currentStep={1} steps={steps} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Informações Básicas</h2>
              <p className="text-gray-600">Passo 1 de 4 - Dados da empresa</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                Razão Social
              </label>
              <Input
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Razão social da empresa"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="tradingName" className="text-sm font-medium text-gray-700">
                Nome Fantasia
              </label>
              <Input
                id="tradingName"
                value={tradingName}
                onChange={(e) => setTradingName(e.target.value)}
                placeholder="Nome fantasia da empresa"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="cnpj" className="text-sm font-medium text-gray-700">
                CNPJ
              </label>
              <Input
                id="cnpj"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                placeholder="00.000.000/0000-00"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-gray-700">
                Descrição da Empresa
              </label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Conte um pouco sobre sua empresa..."
                className="h-32"
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit" size="lg">
                Próximo
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyBasicInfo;
