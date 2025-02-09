
import { Users, CreditCard, Star, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Workshop de Marketing Digital",
    icon: Users,
  },
  {
    title: "Novo Pagamento Recebido",
    icon: CreditCard,
  },
  {
    title: "Avaliação do Evento",
    icon: Star,
  },
  {
    title: "Nova Mensagem",
    icon: MessageSquare,
  },
];

export function RecentActivity() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="bg-white rounded-xl shadow-sm border-none h-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Atividade Recente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {activities.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-[#9b87f5]/10 p-2 rounded-lg">
                  <item.icon className="w-4 h-4 text-[#9b87f5]" />
                </div>
                <p className="text-sm font-medium text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
