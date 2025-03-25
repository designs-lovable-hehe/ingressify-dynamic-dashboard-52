
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Trash2, Plus, ArrowLeft, ArrowRight, Ticket } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Ticket = {
  name: string;
  price: number;
  quantity: number;
  description: string;
};

type CreateEventTicketsProps = {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
};

export function CreateEventTickets({ formData, updateFormData, onNext, onBack }: CreateEventTicketsProps) {
  const [tickets, setTickets] = useState<Ticket[]>(formData.tickets || [
    {
      name: "Ingresso Padrão",
      price: 0,
      quantity: 100,
      description: "",
    },
  ]);

  const handleUpdateTicket = (index: number, field: keyof Ticket, value: string | number) => {
    const updatedTickets = [...tickets];
    
    if (field === 'price' || field === 'quantity') {
      updatedTickets[index][field] = Number(value);
    } else {
      updatedTickets[index][field as 'name' | 'description'] = value as string;
    }
    
    setTickets(updatedTickets);
    updateFormData({ tickets: updatedTickets });
  };

  const handleAddTicket = () => {
    const newTickets = [
      ...tickets,
      {
        name: `Ingresso ${tickets.length + 1}`,
        price: 0,
        quantity: 100,
        description: "",
      },
    ];
    setTickets(newTickets);
    updateFormData({ tickets: newTickets });
  };

  const handleRemoveTicket = (index: number) => {
    if (tickets.length > 1) {
      const updatedTickets = tickets.filter((_, i) => i !== index);
      setTickets(updatedTickets);
      updateFormData({ tickets: updatedTickets });
    }
  };

  const calculateTotalTickets = () => {
    return tickets.reduce((acc, ticket) => acc + ticket.quantity, 0);
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
          <Ticket className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Configure seus ingressos</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">Defina tipos, preços e quantidades disponíveis</p>
        </div>
      </div>

      <div className="space-y-6">
        {tickets.map((ticket, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "p-4 rounded-xl border border-gray-200 dark:border-gray-700", 
              "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
              index === 0 ? "border-primary/30" : ""
            )}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">
                {index === 0 ? "Ingresso Principal" : `Ingresso ${index + 1}`}
              </h3>
              {tickets.length > 1 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRemoveTicket(index)}
                  className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`ticket-name-${index}`}>Nome do Ingresso</Label>
                <Input
                  id={`ticket-name-${index}`}
                  value={ticket.name}
                  onChange={(e) => handleUpdateTicket(index, "name", e.target.value)}
                  className="bg-white dark:bg-gray-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`ticket-price-${index}`}>Preço (R$)</Label>
                <Input
                  id={`ticket-price-${index}`}
                  type="number"
                  min="0"
                  step="0.01"
                  value={ticket.price}
                  onChange={(e) => handleUpdateTicket(index, "price", e.target.value)}
                  className="bg-white dark:bg-gray-800"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`ticket-quantity-${index}`}>Quantidade</Label>
                <Input
                  id={`ticket-quantity-${index}`}
                  type="number"
                  min="1"
                  value={ticket.quantity}
                  onChange={(e) => handleUpdateTicket(index, "quantity", e.target.value)}
                  className="bg-white dark:bg-gray-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`ticket-description-${index}`}>Descrição (opcional)</Label>
                <Textarea
                  id={`ticket-description-${index}`}
                  value={ticket.description}
                  onChange={(e) => handleUpdateTicket(index, "description", e.target.value)}
                  placeholder="Detalhes sobre o ingresso"
                  className="bg-white dark:bg-gray-800 h-[80px]"
                />
              </div>
            </div>
          </motion.div>
        ))}

        <Button 
          variant="outline" 
          onClick={handleAddTicket}
          className="w-full border-dashed border-primary/50 text-primary hover:bg-primary/5 hover:text-primary"
        >
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Tipo de Ingresso
        </Button>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 flex justify-between items-center">
          <div>
            <h4 className="text-sm font-medium">Total de Ingressos</h4>
            <p className="text-xs text-gray-500">Capacidade total do evento</p>
          </div>
          <div className="text-xl font-bold">{calculateTotalTickets()}</div>
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
          onClick={onNext}
          className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white flex items-center gap-1"
        >
          Revisar
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
