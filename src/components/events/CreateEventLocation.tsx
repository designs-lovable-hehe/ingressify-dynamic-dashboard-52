
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";

type CreateEventLocationProps = {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
};

export function CreateEventLocation({ formData, updateFormData, onNext, onBack }: CreateEventLocationProps) {
  const handleUpdateLocation = (field: string, value: string) => {
    updateFormData({
      location: {
        ...formData.location,
        [field]: value,
      },
    });
  };

  const handleNext = () => {
    // Simple validation
    if (!formData.location.name || !formData.location.address) {
      alert("Por favor, preencha pelo menos o nome do local e endereço");
      return;
    }
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-4 flex items-center gap-3">
        <div className="rounded-full bg-white dark:bg-gray-800 p-2">
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Onde será seu evento?</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">Forneça detalhes precisos para que os participantes possam encontrar facilmente</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="location-name">Nome do Local *</Label>
          <Input
            id="location-name"
            placeholder="Ex: Centro de Convenções XYZ"
            value={formData.location.name}
            onChange={(e) => handleUpdateLocation("name", e.target.value)}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location-address">Endereço *</Label>
          <Textarea
            id="location-address"
            placeholder="Rua, número, complemento"
            value={formData.location.address}
            onChange={(e) => handleUpdateLocation("address", e.target.value)}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="location-city">Cidade</Label>
            <Input
              id="location-city"
              placeholder="Cidade"
              value={formData.location.city}
              onChange={(e) => handleUpdateLocation("city", e.target.value)}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location-state">Estado</Label>
            <Input
              id="location-state"
              placeholder="Estado"
              value={formData.location.state}
              onChange={(e) => handleUpdateLocation("state", e.target.value)}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location-zipcode">CEP</Label>
          <Input
            id="location-zipcode"
            placeholder="00000-000"
            value={formData.location.zipCode}
            onChange={(e) => handleUpdateLocation("zipCode", e.target.value)}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button 
          onClick={onBack} 
          variant="outline"
          className="flex items-center gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
        <Button 
          onClick={handleNext}
          className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white flex items-center gap-1"
        >
          Próximo
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
