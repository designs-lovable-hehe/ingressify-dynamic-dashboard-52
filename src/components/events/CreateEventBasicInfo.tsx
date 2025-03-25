
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
          <div className="border-2 border-dashed rounded-xl p-6 text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            {coverImagePreview ? (
              <div className="relative group">
                <img 
                  src={coverImagePreview} 
                  alt="Preview" 
                  className="mx-auto rounded-lg max-h-[200px] object-cover" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-white border-white hover:bg-white/20 hover:text-white"
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
              <>
                <Image className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white dark:bg-gray-700 font-semibold text-primary hover:text-primary/90 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 px-3 py-1.5"
                  >
                    <span>Carregar imagem</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleCoverImageChange}
                    />
                  </label>
                  <p className="pl-1">ou arraste e solte</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF até 10MB
                </p>
              </>
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
