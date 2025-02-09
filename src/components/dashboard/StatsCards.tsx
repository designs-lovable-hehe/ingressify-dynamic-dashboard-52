
import { BarChart3, Users, DollarSign, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function StatsCards() {
  const stats = [
    {
      title: "Eventos Realizados",
      value: "12",
      icon: BarChart3,
    },
    {
      title: "Participantes",
      value: "1,482",
      icon: Users,
    },
    {
      title: "Faturamento",
      value: "R$ 24.580",
      icon: DollarSign,
    },
    {
      title: "Avaliação Média",
      value: "4.8",
      icon: Star,
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border-none">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
              <div className="bg-[#9b87f5]/10 p-2 rounded-lg">
                <stat.icon className="w-5 h-5 text-[#9b87f5]" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
}
