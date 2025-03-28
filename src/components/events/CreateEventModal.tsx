
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateEventBasicInfo } from "./CreateEventBasicInfo";
import { CreateEventLocation } from "./CreateEventLocation";
import { CreateEventTickets } from "./CreateEventTickets";
import { CreateEventReview } from "./CreateEventReview";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type CreateEventModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const steps = [
  { id: "basic-info", label: "Informações" },
  { id: "location", label: "Local" },
  { id: "tickets", label: "Ingressos" },
  { id: "review", label: "Revisão" },
];

export function CreateEventModal({ isOpen, onClose }: CreateEventModalProps) {
  const [currentStep, setCurrentStep] = useState<string>("basic-info");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    category: "",
    coverImage: null as File | null,
    location: {
      name: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
    tickets: [
      {
        name: "Ingresso Padrão",
        price: 0,
        quantity: 100,
        description: "",
      },
    ],
  });

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData({ ...formData, ...newData });
  };

  const handleNextStep = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id);
    }
  };

  const handlePrevStep = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id);
    }
  };

  const submitEvent = () => {
    console.log("Evento criado:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] p-0 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden border-none shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 pt-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Criar Novo Evento
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Preencha os campos abaixo para criar seu evento
              </p>
            </div>
            <button 
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="px-6 py-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Etapa {currentStepIndex + 1} de {steps.length}
                </span>
                <span className="text-sm font-medium text-primary/80">
                  {Math.round(progress)}%
                </span>
              </div>
              
              <div className="relative h-2 w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary via-primary/90 to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                
                {/* Step markers */}
                <div className="absolute inset-0 flex justify-between items-center px-1">
                  {steps.map((_, index) => {
                    const stepPosition = (index / (steps.length - 1)) * 100;
                    const isCompleted = currentStepIndex >= index;
                    
                    return (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full ${isCompleted 
                          ? 'bg-white' 
                          : 'bg-gray-400/30 dark:bg-gray-600/30'}`}
                        style={{ 
                          transform: index === 0 
                            ? 'translateX(0%)' 
                            : index === steps.length - 1 
                            ? 'translateX(0%)' 
                            : 'translateX(-50%)'
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-2">
            <Tabs value={currentStep} className="w-full">
              <TabsList className="grid grid-cols-4 gap-2 bg-transparent p-1 rounded-lg">
                {steps.map((step, index) => (
                  <TabsTrigger
                    key={step.id}
                    value={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    disabled={index > currentStepIndex + 1}
                    className={`
                      relative px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200
                      ${currentStep === step.id 
                        ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-md shadow-primary/20 border border-primary/20' 
                        : 'bg-gray-100/90 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 hover:bg-gray-200/90 dark:hover:bg-gray-700/70 border border-gray-200/50 dark:border-gray-700/50'}
                      data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 
                      data-[state=active]:text-white dark:data-[state=active]:from-primary dark:data-[state=active]:to-primary/90
                      data-[state=active]:shadow-md data-[state=active]:shadow-primary/20
                      ${index === 0 ? 'rounded-l-md' : ''}
                      ${index === steps.length - 1 ? 'rounded-r-md' : ''}
                    `}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 text-xs rounded-full bg-white/20">
                        {index + 1}
                      </span>
                      <span className="hidden sm:inline">{step.label}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="flex-1 p-6 overflow-auto">
                <TabsContent value="basic-info" className="mt-0">
                  <CreateEventBasicInfo 
                    formData={formData} 
                    updateFormData={updateFormData} 
                    onNext={handleNextStep}
                  />
                </TabsContent>
                <TabsContent value="location" className="mt-0">
                  <CreateEventLocation 
                    formData={formData} 
                    updateFormData={updateFormData} 
                    onNext={handleNextStep}
                    onBack={handlePrevStep}
                  />
                </TabsContent>
                <TabsContent value="tickets" className="mt-0">
                  <CreateEventTickets 
                    formData={formData} 
                    updateFormData={updateFormData} 
                    onNext={handleNextStep}
                    onBack={handlePrevStep}
                  />
                </TabsContent>
                <TabsContent value="review" className="mt-0">
                  <CreateEventReview 
                    formData={formData} 
                    onSubmit={submitEvent}
                    onBack={handlePrevStep}
                  />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
