
import { useState } from "react";
import { motion } from "framer-motion";
import { BadgePercent, Calendar, DollarSign, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AdPlan = {
  id: string;
  name: string;
  price: number;
  duration: number;
  benefits: string[];
  color: string;
  bgClass: string;
};

const adPlans: AdPlan[] = [
  {
    id: "basic",
    name: "Básico",
    price: 99,
    duration: 3,
    benefits: ["Destaque na página principal", "Badge de evento patrocinado", "Relatório básico de desempenho"],
    color: "text-blue-600",
    bgClass: "bg-blue-100/50",
  },
  {
    id: "premium",
    name: "Premium",
    price: 199,
    duration: 7,
    benefits: ["Primeiro nas buscas", "Badge exclusivo", "Analytics detalhado", "Notificações para usuários", "Destaque na newsletter"],
    color: "text-[#9b87f5]",
    bgClass: "bg-[#9b87f5]/10",
  },
  {
    id: "enterprise",
    name: "Exclusivo",
    price: 399,
    duration: 15,
    benefits: ["Top em todas as páginas", "Badge premium", "Analytics avançado", "Notificações push", "Email marketing dedicado", "Suporte prioritário"],
    color: "text-[#f97316]",
    bgClass: "bg-[#f97316]/10",
  },
];

interface CreateAdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateAdModal({ isOpen, onClose }: CreateAdModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>("premium");
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form logic here
      onClose();
    }
  };

  // Mock event data
  const events = [
    { id: "1", name: "Festival de Verão 2023" },
    { id: "2", name: "Workshop de Marketing Digital" },
    { id: "3", name: "Conferência Tech 2024" },
    { id: "4", name: "Show de Stand-up Comedy" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl font-semibold flex items-center gap-2">
            <BadgePercent className="h-5 w-5 text-[#f97316]" />
            Criar Anúncio em Destaque
          </DialogTitle>
        </DialogHeader>

        {/* Progress indicator */}
        <div className="px-6 py-2">
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#f97316] to-[#f97316]/70 transition-all duration-300 ease-in-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span className={step >= 1 ? "text-[#f97316] font-medium" : ""}>Selecionar evento</span>
            <span className={step >= 2 ? "text-[#f97316] font-medium" : ""}>Escolher plano</span>
            <span className={step >= 3 ? "text-[#f97316] font-medium" : ""}>Revisar e pagar</span>
          </div>
        </div>

        <div className="p-6 pt-4">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div>
                <Label htmlFor="event" className="text-gray-700">Selecione o evento para promover</Label>
                <select
                  id="event"
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#f97316] focus:ring focus:ring-[#f97316]/20 focus:ring-opacity-50"
                >
                  <option value="" disabled>Selecione um evento</option>
                  {events.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="pt-4">
                <Button 
                  onClick={handleContinue} 
                  disabled={!selectedEvent}
                  className="w-full bg-gradient-to-r from-[#f97316] to-[#f97316]/80 hover:opacity-90"
                >
                  Continuar
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-medium text-gray-700">Escolha o plano de anúncio</h3>
              
              <div className="grid gap-4">
                {adPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      selectedPlan === plan.id
                        ? `border-2 border-${plan.color} ${plan.bgClass} shadow-sm`
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border ${
                          selectedPlan === plan.id 
                            ? `${plan.bgClass} border-2 border-${plan.color}`
                            : "border-gray-300"
                        } flex items-center justify-center`}>
                          {selectedPlan === plan.id && (
                            <div className={`w-2.5 h-2.5 rounded-full ${plan.color.replace('text-', 'bg-')}`} />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{plan.name}</h4>
                          <p className="text-sm text-gray-500">{plan.duration} dias de destaque</p>
                        </div>
                      </div>
                      <div className="text-lg font-semibold">
                        <span className={selectedPlan === plan.id ? plan.color : "text-gray-700"}>
                          R$ {plan.price}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 pl-8">
                      <ul className="space-y-1">
                        {plan.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className={`h-1.5 w-1.5 rounded-full ${plan.color.replace('text-', 'bg-')}`} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="w-1/2"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={handleContinue} 
                  className="w-1/2 bg-gradient-to-r from-[#f97316] to-[#f97316]/80 hover:opacity-90"
                >
                  Continuar
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-medium text-gray-700 mb-4">Resumo do seu anúncio</h3>
                
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Evento:</span>
                    <span className="font-medium">{events.find(e => e.id === selectedEvent)?.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Plano:</span>
                    <span className={`font-medium ${adPlans.find(p => p.id === selectedPlan)?.color}`}>
                      {adPlans.find(p => p.id === selectedPlan)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duração:</span>
                    <span className="font-medium">{adPlans.find(p => p.id === selectedPlan)?.duration} dias</span>
                  </div>
                  <div className="border-t border-gray-200 my-2 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Total:</span>
                      <span className="font-semibold text-lg text-[#f97316]">
                        R$ {adPlans.find(p => p.id === selectedPlan)?.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">Informações de pagamento</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="cardNumber">Número do cartão</Label>
                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Data de expiração</Label>
                      <Input id="expiryDate" placeholder="MM/AA" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Nome no cartão</Label>
                    <Input id="cardName" placeholder="Nome completo" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(2)}
                  className="w-1/2"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={handleContinue}
                  className="w-1/2 bg-gradient-to-r from-[#f97316] to-[#f97316]/80 hover:opacity-90"
                >
                  Finalizar e Pagar
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
