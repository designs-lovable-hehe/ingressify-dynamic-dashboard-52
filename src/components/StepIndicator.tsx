
import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  steps: {
    number: number;
    title: string;
  }[];
}

const StepIndicator = ({ currentStep, steps }: StepIndicatorProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative flex justify-between">
        {/* Line connecting the steps */}
        <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-200" />
        
        {/* Steps */}
        <div className="relative flex justify-between w-full">
          {steps.map((step, index) => {
            const isCompleted = currentStep > step.number;
            const isCurrent = currentStep === step.number;
            
            return (
              <div key={step.number} className="flex flex-col items-center z-10">
                {/* Step circle */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",
                    isCompleted ? "bg-primary" : isCurrent ? "bg-primary/20" : "bg-gray-200",
                    "border-2",
                    isCompleted || isCurrent ? "border-primary" : "border-gray-300"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className={cn(
                      "font-semibold",
                      isCurrent ? "text-primary" : "text-gray-500"
                    )}>
                      {step.number}
                    </span>
                  )}
                </div>
                
                {/* Step title */}
                <span className={cn(
                  "mt-2 text-sm font-medium",
                  isCurrent ? "text-primary" : "text-gray-500"
                )}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
