
import { motion } from "framer-motion";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";

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
        <StatsCards />

        {/* Revenue Chart & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RevenueChart />
          <RecentActivity />
        </div>

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </div>
  );
}
