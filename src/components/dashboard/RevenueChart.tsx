
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line } from "recharts";
import { motion } from "framer-motion";

const data = [
  { revenue: 2500, month: "Jan" },
  { revenue: 1500, month: "Feb" },
  { revenue: 10000, month: "Mar" },
  { revenue: 4000, month: "Apr" },
  { revenue: 5000, month: "May" },
  { revenue: 3500, month: "Jun" },
  { revenue: 4000, month: "Jul" },
];

export function RevenueChart() {
  return (
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
            <LineChart data={data} width={500} height={300}>
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
  );
}
