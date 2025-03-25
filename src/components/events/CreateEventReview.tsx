
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import { format } from "date-fns";

type CreateEventReviewProps = {
  formData: any;
  onSubmit: () => void;
  onBack: () => void;
};

export function CreateEventReview({ formData, onSubmit, onBack }: CreateEventReviewProps) {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="rounded-xl bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 p-4 flex items-center gap-3">
        <div className="rounded-full bg-white dark:bg-gray-800 p-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Revise as informações do seu evento</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">Confirme se todos os detalhes estão corretos antes de criar o evento</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Event Preview */}
        <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          {formData.coverImage && (
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700">
              <img 
                src={URL.createObjectURL(formData.coverImage)} 
                alt={formData.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{formData.title || "Sem título"}</h2>
            
            {formData.category && (
              <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {formData.category}
              </div>
            )}
            
            <div className="mt-4 space-y-3">
              {formData.startDate && (
                <div className="flex items-start space-x-3 text-sm">
                  <div className="flex-shrink-0 mt-0.5">
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      {format(formData.startDate, "PPP")}
                      {formData.endDate && ` até ${format(formData.endDate, "PPP")}`}
                    </p>
                  </div>
                </div>
              )}
              
              {formData.location?.name && (
                <div className="flex items-start space-x-3 text-sm">
                  <div className="flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{formData.location.name}</p>
                    <p className="text-gray-500">
                      {formData.location.address}
                      {formData.location.city && `, ${formData.location.city}`}
                      {formData.location.state && `, ${formData.location.state}`}
                    </p>
                  </div>
                </div>
              )}
              
              {formData.description && (
                <div className="pt-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>{formData.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tickets Summary */}
        <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700 px-5 py-3">
            <h3 className="font-medium flex items-center gap-2">
              <Ticket className="h-4 w-4" />
              Ingressos ({formData.tickets?.length || 0})
            </h3>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {formData.tickets?.map((ticket: any, index: number) => (
              <div key={index} className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{ticket.name}</p>
                  <p className="text-sm text-gray-500">
                    {ticket.quantity} disponíveis
                    {ticket.description && ` • ${ticket.description}`}
                  </p>
                </div>
                <div className="font-bold">
                  {formatCurrency(ticket.price)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button 
          onClick={onBack} 
          variant="outline"
          className="flex items-center gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
        <Button 
          onClick={onSubmit}
          className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white gap-1"
        >
          Criar Evento
        </Button>
      </div>
    </motion.div>
  );
}
