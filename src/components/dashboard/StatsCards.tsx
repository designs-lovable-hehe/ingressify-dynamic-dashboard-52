
import { BarChart3, Users, DollarSign, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Card key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="w-4 h-4 text-[#9b87f5]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
}
