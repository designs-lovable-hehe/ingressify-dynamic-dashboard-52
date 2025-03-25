
import { useState } from "react";
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
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 px-1">
                <span>Progresso</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-1.5 bg-gray-200 dark:bg-gray-700">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </Progress>
            </div>
          </div>

          <div className="px-6 py-2">
            <TabsList className="grid grid-cols-4 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              {steps.map((step, index) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  disabled={index > currentStepIndex + 1}
                  className={`
                    ${currentStep === step.id ? 'bg-white dark:bg-gray-700 shadow-sm' : ''}
                    data-[state=active]:text-primary data-[state=active]:shadow-sm
                    text-sm py-2
                  `}
                >
                  <span className="hidden sm:inline">{step.label}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="flex-1 p-6 overflow-auto">
            <Tabs value={currentStep} className="w-full">
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
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
