
import { Building2, Users, DollarSign, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const actions = [
  {
    title: "Criar Novo Evento",
    icon: Building2,
  },
  {
    title: "Ver Participantes",
    icon: Users,
  },
  {
    title: "Relatório Financeiro",
    icon: DollarSign,
  },
  {
    title: "Central de Mensagens",
    icon: MessageSquare,
  },
];

export function QuickActions() {
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
    </motion.div>
  );
}
