
import { motion } from "framer-motion";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { EventAdsSection } from "@/components/dashboard/EventAdsSection";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { useState } from "react";
import { CreateEventModal } from "@/components/events/CreateEventModal";
import { CreateAdModal } from "@/components/ads/CreateAdModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgePercent, LayoutDashboard } from "lucide-react";

export default function PartnerDashboard() {
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);
  const [showCreateAdModal, setShowCreateAdModal] = useState(false);
  const [currentTab, setCurrentTab] = useState("dashboard");

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
                onClick={() => setShowCreateAdModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-[#f97316] to-[#f97316]/80 text-white rounded-lg hover:opacity-90 transition-colors flex items-center gap-2"
              >
                <BadgePercent className="w-4 h-4" />
                <span className="hidden md:inline">Criar Anúncio</span>
                <span className="md:hidden">+</span>
              </button>
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

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Tabs 
              defaultValue="dashboard" 
              value={currentTab}
              onValueChange={setCurrentTab}
              className="w-full"
            >
              <TabsList className="bg-white border border-gray-100 shadow-sm mb-6">
                <TabsTrigger value="dashboard" className="data-[state=active]:bg-[#9b87f5]/10 data-[state=active]:text-[#9b87f5]">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="ads" className="data-[state=active]:bg-[#f97316]/10 data-[state=active]:text-[#f97316]">
                  <BadgePercent className="w-4 h-4 mr-2" />
                  Anúncios
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="dashboard" className="mt-0 space-y-8">
                {/* Stats Grid */}
                <StatsCards />

                {/* Revenue Chart & Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <RevenueChart />
                  </div>
                  <RecentActivity />
                </div>

                {/* Quick Actions */}
                <QuickActions />
              </TabsContent>
              
              <TabsContent value="ads" className="mt-0 space-y-8">
                {/* Event Ads Section */}
                <EventAdsSection 
                  onCreateAd={() => setShowCreateAdModal(true)} 
                />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
      
      {/* Event Creation Modal */}
      <CreateEventModal 
        isOpen={showCreateEventModal} 
        onClose={() => setShowCreateEventModal(false)} 
      />

      {/* Ad Creation Modal */}
      <CreateAdModal
        isOpen={showCreateAdModal}
        onClose={() => setShowCreateAdModal(false)}
      />
    </div>
  );
}
