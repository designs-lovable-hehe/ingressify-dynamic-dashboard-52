
import { DollarSign, TrendingUp, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function EventAdsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="bg-white rounded-xl shadow-sm border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg font-semibold">Anúncios em Destaque</CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-[200px] text-sm">
                    Promova seus eventos e aumente sua visibilidade com anúncios em destaque
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* Plano Premium */}
            <div className="flex flex-col gap-4 p-6 rounded-lg bg-gradient-to-br from-[#9b87f5]/10 to-[#9b87f5]/5 border border-[#9b87f5]/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#9b87f5]/20">
                    <TrendingUp className="h-5 w-5 text-[#9b87f5]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Evento em Destaque</h3>
                    <p className="text-sm text-gray-500">7 dias de exposição premium</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-[#9b87f5]">R$ 199</span>
                  <Button variant="default" className="bg-[#9b87f5] hover:bg-[#9b87f5]/90">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Promover
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#9b87f5]" />
                  <span className="text-sm text-gray-600">Primeiro nas buscas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#9b87f5]" />
                  <span className="text-sm text-gray-600">Badge exclusivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#9b87f5]" />
                  <span className="text-sm text-gray-600">Analytics detalhado</span>
                </div>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <TrendingUp className="h-4 w-4" />
                  Visibilidade média
                </div>
                <p className="text-2xl font-semibold text-gray-900">+280%</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <DollarSign className="h-4 w-4" />
                  Vendas com anúncio
                </div>
                <p className="text-2xl font-semibold text-gray-900">+145%</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <TrendingUp className="h-4 w-4" />
                  Alcance semanal
                </div>
                <p className="text-2xl font-semibold text-gray-900">12.5k</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
