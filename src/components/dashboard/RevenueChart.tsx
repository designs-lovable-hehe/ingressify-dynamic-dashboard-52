
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "@/components/ui/chart";
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
            <BarChart
              data={data}
              categories={["revenue"]}
              index="month"
              colors={["#9b87f5"]}
              valueFormatter={(value) => `R$${value}`}
              yAxisWidth={65}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
