
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CompanyAddress = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cep || !street || !number || !neighborhood || !city || !state) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
      });
      return;
    }

    // TODO: Save data to backend
    navigate("/empresa/documentos");
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
            <MapPin className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Endereço</h2>
              <p className="text-gray-600">Passo 2 de 4 - Localização da empresa</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="cep" className="text-sm font-medium text-gray-700">
                  CEP
                </label>
                <Input
                  id="cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  placeholder="00000-000"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-2">
                <label htmlFor="street" className="text-sm font-medium text-gray-700">
                  Rua
                </label>
                <Input
                  id="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="Nome da rua"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="number" className="text-sm font-medium text-gray-700">
                  Número
                </label>
                <Input
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="123"
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
                Bairro
              </label>
              <Input
                id="neighborhood"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="Nome do bairro"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-medium text-gray-700">
                  Cidade
                </label>
                <Input
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Nome da cidade"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="state" className="text-sm font-medium text-gray-700">
                  Estado
                </label>
                <Input
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="UF"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/empresa/informacoes-basicas")}
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

export default CompanyAddress;
