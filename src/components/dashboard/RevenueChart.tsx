
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const data = [
  { month: "Jan", revenue: 2500 },
  { month: "Feb", revenue: 1500 },
  { month: "Mar", revenue: 10000 },
  { month: "Apr", revenue: 4000 },
  { month: "May", revenue: 5000 },
  { month: "Jun", revenue: 3500 },
  { month: "Jul", revenue: 4000 },
];

export function RevenueChart() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-white rounded-xl shadow-sm border-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Receita Mensal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={data}>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                  stroke="#888888"
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                  stroke="#888888"
                  tickFormatter={(value) => `R$${value}`}
                  width={65}
                />
                <Bar
                  dataKey="revenue"
                  fill="#9b87f5"
                  radius={[4, 4, 0, 0]}
                />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
