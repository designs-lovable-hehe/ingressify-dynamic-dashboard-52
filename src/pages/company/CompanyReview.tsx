
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ChevronLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import StepIndicator from "@/components/StepIndicator";

const steps = [
  { number: 1, title: "Informações Básicas" },
  { number: 2, title: "Endereço" },
  { number: 3, title: "Documentos" },
  { number: 4, title: "Revisão" },
];

const CompanyReview = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Sucesso!",
      description: "Cadastro da empresa finalizado com sucesso.",
    });
    
    // Redirect to partner dashboard
    navigate("/parceiros/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <StepIndicator currentStep={4} steps={steps} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Revisão</h2>
              <p className="text-gray-600">Passo 4 de 4 - Confirme suas informações</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Informações Básicas</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Razão Social</p>
                  <p className="font-medium">Nome da Empresa LTDA</p>
                </div>
                <div>
                  <p className="text-gray-500">Nome Fantasia</p>
                  <p className="font-medium">Nome Fantasia</p>
                </div>
                <div>
                  <p className="text-gray-500">CNPJ</p>
                  <p className="font-medium">00.000.000/0000-00</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Endereço</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="col-span-2">
                  <p className="text-gray-500">Endereço Completo</p>
                  <p className="font-medium">
                    Rua Nome da Rua, 123 - Complemento
                    <br />
                    Bairro - Cidade/UF
                    <br />
                    CEP: 00000-000
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Documentos</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Cartão CNPJ</p>
                  <p className="font-medium text-primary">✓ Enviado</p>
                </div>
                <div>
                  <p className="text-gray-500">Contrato Social</p>
                  <p className="font-medium text-primary">✓ Enviado</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/empresa/documentos")}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>
              <Button onClick={handleSubmit}>
                <Save className="w-4 h-4 mr-2" />
                Finalizar Cadastro
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyReview;
