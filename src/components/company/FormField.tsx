
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  helpText?: string;
  error?: string;
  success?: boolean;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  className?: string;
  autoFocus?: boolean;
  disabled?: boolean;
}

export const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  helpText,
  error,
  success,
  required = false,
  multiline = false,
  rows = 3,
  className,
  autoFocus,
  disabled,
}: FormFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const hasValue = value.trim() !== "";
  
  return (
    <motion.div 
      className={cn("space-y-2", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center">
        <Label 
          htmlFor={id} 
          className={cn(
            "text-sm font-medium",
            error ? "text-red-500" : "text-gray-700"
          )}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
        
        {helpText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <HelpCircle className="w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-gray-700 max-w-xs">
                <p className="text-xs">{helpText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      
      <div className="relative">
        {multiline ? (
          <Textarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={rows}
            className={cn(
              "w-full resize-none transition-all duration-200 bg-white",
              error 
                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" 
                : success 
                  ? "border-green-300 focus:border-green-500 focus:ring-green-500/20" 
                  : isFocused 
                    ? "border-primary focus:border-primary focus:ring-primary/20" 
                    : "border-gray-300"
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            autoFocus={autoFocus}
            disabled={disabled}
          />
        ) : (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={cn(
              "w-full transition-all duration-200 bg-white",
              error 
                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" 
                : success 
                  ? "border-green-300 focus:border-green-500 focus:ring-green-500/20" 
                  : isFocused 
                    ? "border-primary focus:border-primary focus:ring-primary/20" 
                    : "border-gray-300"
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            autoFocus={autoFocus}
            disabled={disabled}
          />
        )}
        
        {(error || (success && hasValue)) && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {error ? (
              <AlertCircle className="w-4 h-4 text-red-500" />
            ) : success && hasValue ? (
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            ) : null}
          </div>
        )}
      </div>
      
      {error && (
        <motion.p 
          className="text-xs text-red-500 mt-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};
