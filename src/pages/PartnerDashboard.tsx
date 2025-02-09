
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  CreditCard,
  Building2,
  Star,
  ArrowUpRight,
  MessageSquare,
  DollarSign,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line } from "recharts";

const data = [
  {
    revenue: 2500,
    month: "Jan",
  },
  {
    revenue: 1500,
    month: "Feb",
  },
  {
    revenue: 10000,
    month: "Mar",
  },
  {
    revenue: 4000,
    month: "Apr",
  },
  {
    revenue: 5000,
    month: "May",
  },
  {
    revenue: 3500,
    month: "Jun",
  },
  {
    revenue: 4000,
    month: "Jul",
  },
]

export default function PartnerDashboard() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-[#9b87f5] text-white rounded-lg hover:bg-[#9b87f5]/90 transition-colors">
              Novo Evento
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Eventos Realizados
              </CardTitle>
              <BarChart3 className="w-4 h-4 text-[#9b87f5]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Participantes
              </CardTitle>
              <Users className="w-4 h-4 text-[#9b87f5]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,482</div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Faturamento
              </CardTitle>
              <DollarSign className="w-4 h-4 text-[#9b87f5]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 24.580</div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Avaliação Média
              </CardTitle>
              <Star className="w-4 h-4 text-[#9b87f5]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Revenue Chart & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white rounded-xl shadow-sm h-[400px]">
              <CardHeader>
                <CardTitle>Receita Mensal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <LineChart
                    data={data}
                    width={500}
                    height={300}
                  >
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#9b87f5"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white rounded-xl shadow-sm h-[400px]">
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
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
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-[#9b87f5]/10 p-2 rounded-full">
                        <item.icon className="w-4 h-4 text-[#9b87f5]" />
                      </div>
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
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
                ].map((action, index) => (
                  <button
                    key={index}
                    className="p-4 rounded-lg bg-[#9b87f5]/5 hover:bg-[#9b87f5]/10 transition-colors flex items-center space-x-3"
                  >
                    <div className="bg-[#9b87f5]/10 p-2 rounded-full">
                      <action.icon className="w-4 h-4 text-[#9b87f5]" />
                    </div>
                    <span className="text-sm font-medium">{action.title}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
