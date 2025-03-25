
import React, { useState } from "react";
import { Building2, Users, DollarSign, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CreateEventModal } from "@/components/events/CreateEventModal";

const actions = [
  {
    title: "Criar Novo Evento",
    icon: Building2,
    action: "create-event",
  },
  {
    title: "Ver Participantes",
    icon: Users,
    action: "view-participants",
  },
  {
    title: "Relatório Financeiro",
    icon: DollarSign,
    action: "financial-report",
  },
  {
    title: "Central de Mensagens",
    icon: MessageSquare,
    action: "messages",
  },
];

export function QuickActions() {
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);

  const handleActionClick = (action: string) => {
    if (action === "create-event") {
      setShowCreateEventModal(true);
    }
    // Handle other actions as needed
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="bg-white rounded-xl shadow-sm border-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {actions.map((action, index) => (
              <button
                key={index}
                className="p-4 rounded-lg bg-[#9b87f5]/5 hover:bg-[#9b87f5]/10 transition-colors flex items-center space-x-3"
                onClick={() => handleActionClick(action.action)}
              >
                <div className="bg-[#9b87f5]/10 p-2 rounded-lg">
                  <action.icon className="w-4 h-4 text-[#9b87f5]" />
                </div>
                <span className="text-sm font-medium text-gray-700">{action.title}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Event Creation Modal */}
      <CreateEventModal 
        isOpen={showCreateEventModal} 
        onClose={() => setShowCreateEventModal(false)} 
      />
    </motion.div>
  );
}
