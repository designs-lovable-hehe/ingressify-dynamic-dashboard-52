import { motion } from "framer-motion";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { EventAdsSection } from "@/components/dashboard/EventAdsSection";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { useState } from "react";
import { CreateEventModal } from "@/components/events/CreateEventModal";

export default function PartnerDashboard() {
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8F9FC]">
      <Sidebar />
      
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowCreateEventModal(true)}
                className="px-4 py-2 bg-[#9b87f5] text-white rounded-lg hover:bg-[#9b87f5]/90 transition-colors flex items-center gap-2"
              >
                <span className="hidden md:inline">Novo Evento</span>
                <span className="md:hidden">+</span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                JD
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <StatsCards />

          {/* Revenue Chart & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <RecentActivity />
          </div>

          {/* Event Ads Section */}
          <EventAdsSection />

          {/* Quick Actions */}
          <QuickActions />
        </div>
      </div>
      
      {/* Event Creation Modal */}
      <CreateEventModal 
        isOpen={showCreateEventModal} 
        onClose={() => setShowCreateEventModal(false)} 
      />
    </div>
  );
}
