
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FileCheck, ChevronLeft, ChevronRight, Upload, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import StepIndicator from "@/components/StepIndicator";
import { GeometricBackground } from "@/components/GeometricBackground";

const steps = [
  { number: 1, title: "Informações Básicas" },
  { number: 2, title: "Endereço" },
  { number: 3, title: "Documentos" },
  { number: 4, title: "Revisão" },
];

const CompanyDocuments = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cnpjDoc, setCnpjDoc] = useState<File | null>(null);
  const [contractDoc, setContractDoc] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState<string | null>(null);

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

    toast({
      title: "Documentos enviados",
      description: "Seus documentos foram recebidos com sucesso!",
    });
    
    // TODO: Save data to backend
    navigate("/empresa/revisao");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: (file: File | null) => void) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      toast({
        title: "Arquivo adicionado",
        description: `${e.target.files[0].name} foi carregado com sucesso.`,
      });
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(id);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, setFile: (file: File | null) => void) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(null);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      toast({
        title: "Arquivo adicionado",
        description: `${e.dataTransfer.files[0].name} foi carregado com sucesso.`,
      });
    }
  };

  const removeFile = (setFile: (file: File | null) => void) => {
    setFile(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-white">
      <GeometricBackground />
      
      <div className="container mx-auto px-4 py-12">
        <StepIndicator currentStep={3} steps={steps} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white">
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20 
                }}
                className="rounded-full bg-primary/10 p-3"
              >
                <FileCheck className="w-8 h-8 text-primary" />
              </motion.div>
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                >
                  Documentos da Empresa
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600"
                >
                  Faça o upload dos documentos necessários para validar seu negócio
                </motion.p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div 
                  className={`border-2 ${dragActive === 'cnpj' ? 'border-primary' : cnpjDoc ? 'border-green-400' : 'border-dashed border-gray-300'} 
                  rounded-xl p-6 transition-all duration-300 ${cnpjDoc ? 'bg-green-50/50' : dragActive === 'cnpj' ? 'bg-primary/5' : 'bg-white/50'}`}
                  onDragEnter={(e) => handleDragEnter(e, 'cnpj')}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, setCnpjDoc)}
                >
                  <input
                    type="file"
                    id="cnpjDoc"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, setCnpjDoc)}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  
                  <AnimatePresence mode="wait">
                    {!cnpjDoc ? (
                      <motion.label
                        key="upload-cnpj"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        htmlFor="cnpjDoc"
                        className="cursor-pointer flex flex-col items-center gap-3"
                      >
                        <div className="p-3 rounded-full bg-primary/10">
                          <Upload className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-base font-medium text-gray-700">Cartão CNPJ</span>
                        <span className="text-sm text-gray-500 text-center">
                          Arraste e solte seu arquivo aqui, ou clique para selecionar
                        </span>
                        <span className="text-xs text-gray-400">
                          Formatos aceitos: PDF, JPG ou PNG
                        </span>
                      </motion.label>
                    ) : (
                      <motion.div
                        key="file-cnpj"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-green-100">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{cnpjDoc.name}</p>
                            <p className="text-xs text-gray-500">
                              {(cnpjDoc.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(setCnpjDoc)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div 
                  className={`border-2 ${dragActive === 'contract' ? 'border-primary' : contractDoc ? 'border-green-400' : 'border-dashed border-gray-300'} 
                  rounded-xl p-6 transition-all duration-300 ${contractDoc ? 'bg-green-50/50' : dragActive === 'contract' ? 'bg-primary/5' : 'bg-white/50'}`}
                  onDragEnter={(e) => handleDragEnter(e, 'contract')}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, setContractDoc)}
                >
                  <input
                    type="file"
                    id="contractDoc"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, setContractDoc)}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  
                  <AnimatePresence mode="wait">
                    {!contractDoc ? (
                      <motion.label
                        key="upload-contract"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        htmlFor="contractDoc"
                        className="cursor-pointer flex flex-col items-center gap-3"
                      >
                        <div className="p-3 rounded-full bg-primary/10">
                          <Upload className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-base font-medium text-gray-700">Contrato Social</span>
                        <span className="text-sm text-gray-500 text-center">
                          Arraste e solte seu arquivo aqui, ou clique para selecionar
                        </span>
                        <span className="text-xs text-gray-400">
                          Formatos aceitos: PDF, JPG ou PNG
                        </span>
                      </motion.label>
                    ) : (
                      <motion.div
                        key="file-contract"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-green-100">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{contractDoc.name}</p>
                            <p className="text-xs text-gray-500">
                              {(contractDoc.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(setContractDoc)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <div className="mt-4 flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-primary/5 rounded-lg p-4 text-sm"
                >
                  <p className="text-gray-700">
                    <span className="font-semibold">Importante:</span> Certifique-se de que todos os documentos estão legíveis e atualizados. Isso agiliza o processo de verificação da sua empresa.
                  </p>
                </motion.div>
              </div>

              <motion.div 
                className="flex justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  type="button"
                  variant="outline"
                  className="group flex items-center gap-2 hover:border-primary/70 hover:bg-primary/5 transition-all duration-300"
                  onClick={() => navigate("/empresa/endereco")}
                >
                  <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Anterior
                </Button>
                
                <Button 
                  type="submit"
                  className="group bg-gradient-to-r from-primary to-purple-700 hover:from-primary/90 hover:to-purple-600 text-white flex items-center gap-2"
                >
                  Próximo
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyDocuments;
