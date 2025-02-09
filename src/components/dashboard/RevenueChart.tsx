
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { month: "Jan", online: 1500, offline: 1000 },
  { month: "Feb", online: 800, offline: 700 },
  { month: "Mar", online: 6000, offline: 4000 },
  { month: "Apr", online: 2500, offline: 1500 },
  { month: "May", online: 3000, offline: 2000 },
  { month: "Jun", online: 2000, offline: 1500 },
  { month: "Jul", online: 2500, offline: 1500 },
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
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorOnline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorOffline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#7E69AB" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
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
                <Tooltip
                  contentStyle={{
                    background: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                  formatter={(value: number) => [`R$ ${value}`, "Receita"]}
                />
                <Area
                  type="monotone"
                  dataKey="online"
                  stackId="1"
                  stroke="#9b87f5"
                  fill="url(#colorOnline)"
                />
                <Area
                  type="monotone"
                  dataKey="offline"
                  stackId="1"
                  stroke="#7E69AB"
                  fill="url(#colorOffline)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
