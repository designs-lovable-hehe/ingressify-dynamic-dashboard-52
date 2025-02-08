
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileCheck, ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CompanyDocuments = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cnpjDoc, setCnpjDoc] = useState<File | null>(null);
  const [contractDoc, setContractDoc] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cnpjDoc || !contractDoc) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, faça o upload de todos os documentos necessários.",
      });
      return;
    }

    // TODO: Save data to backend
    navigate("/empresa/revisao");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: (file: File | null) => void) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <FileCheck className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Documentos</h2>
              <p className="text-gray-600">Passo 3 de 4 - Upload de documentos</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
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
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {cnpjDoc ? cnpjDoc.name : "Cartão CNPJ"}
                  </span>
                  <span className="text-xs text-gray-500">
                    Clique para fazer upload (PDF, JPG ou PNG)
                  </span>
                </label>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
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
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {contractDoc ? contractDoc.name : "Contrato Social"}
                  </span>
                  <span className="text-xs text-gray-500">
                    Clique para fazer upload (PDF, JPG ou PNG)
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/empresa/endereco")}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>
              <Button type="submit">
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

export default CompanyDocuments;
