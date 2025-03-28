
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Upload, X, CheckCircle, AlertCircle, ArrowUpFromLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FileUploaderProps {
  id: string;
  label: string;
  acceptedFileTypes?: string;
  maxFileSize?: number; // in MB
  onChange: (file: File | null) => void;
  value: File | null;
  error?: string;
  helpText?: string;
  required?: boolean;
}

export const FileUploader = ({
  id,
  label,
  acceptedFileTypes = ".pdf,.jpg,.jpeg,.png",
  maxFileSize = 5, // 5MB default
  onChange,
  value,
  error,
  helpText,
  required = false,
}: FileUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      validateAndUpdateFile(file);
    }
  };
  
  const validateAndUpdateFile = (file: File) => {
    // Check file type
    const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
    const isValidType = acceptedFileTypes.includes(fileExtension);
    
    // Check file size
    const isValidSize = file.size / 1024 / 1024 <= maxFileSize;
    
    if (!isValidType) {
      // Show error for invalid file type
      onChange(null);
      return;
    }
    
    if (!isValidSize) {
      // Show error for invalid file size
      onChange(null);
      return;
    }
    
    // Simulate upload
    setIsUploading(true);
    setTimeout(() => {
      onChange(file);
      setIsUploading(false);
    }, 1000);
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      validateAndUpdateFile(file);
    }
  };
  
  const handleRemoveFile = () => {
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const getFileSize = (size: number) => {
    if (size < 1024) {
      return `${size} B`;
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    } else {
      return `${(size / 1024 / 1024).toFixed(2)} MB`;
    }
  };
  
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </div>
      
      <div 
        className={cn(
          "border-2 border-dashed rounded-lg transition-all duration-200",
          isDragging 
            ? "border-primary bg-primary/5" 
            : error 
              ? "border-red-300 bg-red-50/50" 
              : value 
                ? "border-green-300 bg-green-50/50" 
                : "border-gray-300 hover:border-gray-400 bg-gray-50/50"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <AnimatePresence mode="wait">
          {isUploading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 mb-4">
                <motion.div 
                  className="bg-primary h-2.5 rounded-full" 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-sm text-gray-600">Processando arquivo...</p>
            </motion.div>
          ) : value ? (
            <motion.div 
              className="p-6 flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="p-2 rounded-lg bg-green-100 mr-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{value.name}</p>
                <p className="text-xs text-gray-500">{getFileSize(value.size)}</p>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleRemoveFile}
                className="text-gray-500 hover:text-red-500"
              >
                <X className="h-4 w-4" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 flex flex-col items-center justify-center"
            >
              <div className="mb-3 p-3 rounded-full bg-primary/10">
                <ArrowUpFromLine className="h-6 w-6 text-primary" />
              </div>
              <p className="mb-2 text-sm text-gray-700 font-medium">
                Arraste e solte seu arquivo aqui
              </p>
              <p className="mb-4 text-xs text-gray-500">
                ou
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="relative overflow-hidden group"
              >
                <Upload className="h-4 w-4 mr-2" />
                <span>Selecionar arquivo</span>
              </Button>
              <input
                ref={fileInputRef}
                id={id}
                type="file"
                className="hidden"
                accept={acceptedFileTypes}
                onChange={handleFileChange}
              />
              {helpText && (
                <p className="mt-4 text-xs text-gray-500 text-center">
                  {helpText}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {error && (
        <div className="flex items-center text-red-600 text-xs">
          <AlertCircle className="h-3.5 w-3.5 mr-1.5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
