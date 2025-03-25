
import { Calendar, Image, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

type CreateEventBasicInfoProps = {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
};

const eventCategories = [
  { value: "conference", label: "Conferência" },
  { value: "workshop", label: "Workshop" },
  { value: "concert", label: "Show/Concerto" },
  { value: "exhibition", label: "Exposição" },
  { value: "networking", label: "Networking" },
  { value: "party", label: "Festa" },
  { value: "sports", label: "Esportes" },
  { value: "other", label: "Outro" },
];

export function CreateEventBasicInfo({ formData, updateFormData, onNext }: CreateEventBasicInfoProps) {
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      updateFormData({ coverImage: file });
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    // Simple validation
    if (!formData.title || !formData.startDate) {
      alert("Por favor, preencha pelo menos o título e a data de início");
      return;
    }
    onNext();
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
    if (file && file.type.startsWith('image/')) {
      updateFormData({ coverImage: file });
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="event-title">Título do Evento *</Label>
          <Input
            id="event-title"
            placeholder="Digite o título do seu evento"
            value={formData.title}
            onChange={(e) => updateFormData({ title: e.target.value })}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="event-description">Descrição</Label>
          <Textarea
            id="event-description"
            placeholder="Descreva seu evento detalhadamente"
            value={formData.description}
            onChange={(e) => updateFormData({ description: e.target.value })}
            className="min-h-[120px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Data de Início *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700",
                    !formData.startDate && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {formData.startDate ? (
                    format(formData.startDate, "PPP")
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={formData.startDate}
                  onSelect={(date) => updateFormData({ startDate: date })}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Data de Término</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700",
                    !formData.endDate && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {formData.endDate ? (
                    format(formData.endDate, "PPP")
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={formData.endDate}
                  onSelect={(date) => updateFormData({ endDate: date })}
                  disabled={(date) => formData.startDate ? date < formData.startDate : false}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="event-category">Categoria</Label>
          <Select
            value={formData.category}
            onValueChange={(value) => updateFormData({ category: value })}
          >
            <SelectTrigger className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              {eventCategories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Imagem de Capa</Label>
          <div 
            className={cn(
              "relative overflow-hidden rounded-xl transition-all duration-200",
              isDragging ? "ring-2 ring-primary scale-[0.99]" : "ring-0"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {coverImagePreview ? (
              <div className="relative group rounded-xl overflow-hidden h-[200px]">
                <motion.img 
                  src={coverImagePreview} 
                  alt="Preview" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-white border-white/30 bg-black/20 backdrop-blur-sm hover:bg-white/20 hover:text-white"
                    onClick={() => {
                      updateFormData({ coverImage: null });
                      setCoverImagePreview(null);
                    }}
                  >
                    Alterar Imagem
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed rounded-xl p-8 text-center bg-gradient-to-b from-white/80 to-white/40 dark:from-gray-800/40 dark:to-gray-800/20 backdrop-blur-sm border-gray-200/70 dark:border-gray-700/40 hover:border-primary/30 dark:hover:border-primary/30 transition-colors">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Image className="h-10 w-10 text-primary/80" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Arraste sua imagem</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Arraste e solte ou clique para selecionar
                    </p>
                    <label
                      htmlFor="file-upload"
                      className="relative inline-flex items-center justify-center cursor-pointer rounded-md bg-gradient-to-r from-primary/90 to-primary text-white font-medium text-sm px-4 py-2 shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 transition-all duration-200 mt-2"
                    >
                      <span>Selecionar Arquivo</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleCoverImageChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG, GIF até 10MB
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button 
          onClick={handleNext}
          className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
        >
          Próximo
        </Button>
      </div>
    </motion.div>
  );
}
