
import { Check, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StepIndicatorProps {
  currentStep: number;
  steps: {
    number: number;
    title: string;
    description?: string;
  }[];
}

const StepIndicator = ({ currentStep, steps }: StepIndicatorProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative flex justify-between">
        {/* Line connecting the steps */}
        <div className="absolute top-6 left-0 right-0 h-[2px] bg-gray-200" />
        
        {/* Active line overlay */}
        <div 
          className="absolute top-6 left-0 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-in-out"
          style={{ 
            width: `${(100 * (currentStep - 1)) / (steps.length - 1)}%`
          }}
        />
        
        {/* Steps */}
        <div className="relative flex justify-between w-full">
          {steps.map((step, index) => {
            const isCompleted = currentStep > step.number;
            const isCurrent = currentStep === step.number;
            
            return (
              <div key={step.number} className="flex flex-col items-center z-10">
                {/* Step circle */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ 
                    scale: isCurrent ? 1.1 : 1,
                    transition: { 
                      type: "spring", 
                      stiffness: 500,
                      damping: 30
                    }
                  }}
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                    isCompleted 
                      ? "bg-gradient-to-br from-primary to-accent text-white shadow-md shadow-primary/20" 
                      : isCurrent 
                        ? "bg-white border-2 border-primary text-primary shadow-md shadow-primary/10" 
                        : "bg-white border-2 border-gray-200 text-gray-400"
                  )}
                >
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <Check className="w-5 h-5" />
                    </motion.div>
                  ) : isCurrent ? (
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <CircleDot className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <span className="font-semibold">{step.number}</span>
                  )}
                </motion.div>
                
                {/* Step title */}
                <span className={cn(
                  "mt-3 font-medium transition-colors duration-200",
                  (isCurrent || isCompleted) ? "text-gray-900" : "text-gray-500"
                )}>
                  {step.title}
                </span>
                
                {/* Step description (optional) */}
                {step.description && (
                  <span className="mt-1 text-xs text-gray-500 max-w-[120px] text-center">
                    {step.description}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
