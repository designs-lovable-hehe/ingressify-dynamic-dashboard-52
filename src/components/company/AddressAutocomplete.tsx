
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MapPin, Search, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock data for address suggestions
const MOCK_ADDRESSES = [
  { cep: "01310-100", street: "Avenida Paulista", number: "", neighborhood: "Bela Vista", city: "São Paulo", state: "SP" },
  { cep: "22250-040", street: "Rua Voluntários da Pátria", number: "", neighborhood: "Botafogo", city: "Rio de Janeiro", state: "RJ" },
  { cep: "30130-110", street: "Avenida Afonso Pena", number: "", neighborhood: "Centro", city: "Belo Horizonte", state: "MG" },
  { cep: "80010-010", street: "Rua XV de Novembro", number: "", neighborhood: "Centro", city: "Curitiba", state: "PR" },
  { cep: "90010-280", street: "Rua dos Andradas", number: "", neighborhood: "Centro", city: "Porto Alegre", state: "RS" },
];

interface Address {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

interface AddressAutocompleteProps {
  value: Address;
  onChange: (address: Address) => void;
  error?: string;
}

export const AddressAutocomplete = ({
  value,
  onChange,
  error,
}: AddressAutocompleteProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Address[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  
  useEffect(() => {
    if (searchTerm.length >= 3) {
      setIsLoading(true);
      // Simulate API call delay
      const timeout = setTimeout(() => {
        const filteredSuggestions = MOCK_ADDRESSES.filter((addr) => 
          addr.street.toLowerCase().includes(searchTerm.toLowerCase()) || 
          addr.cep.replace('-', '').includes(searchTerm.replace('-', ''))
        );
        setSuggestions(filteredSuggestions);
        setIsLoading(false);
      }, 500);
      
      return () => clearTimeout(timeout);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);
  
  const handleSelectAddress = (address: Address) => {
    onChange(address);
    setSearchTerm("");
    setSuggestions([]);
    setHasSelected(true);
  };
  
  const handleClearAddress = () => {
    onChange({
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: ""
    });
    setHasSelected(false);
  };
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">
          Endereço <span className="text-red-500">*</span>
        </Label>
        
        {!hasSelected ? (
          <div className="relative">
            <div className="absolute left-3 top-3 text-gray-500">
              <Search className="w-4 h-4" />
            </div>
            <Input
              placeholder="Digite seu CEP ou endereço"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className={cn(
                "pl-9 transition-all duration-200 bg-white",
                error 
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" 
                  : "border-gray-300 focus:border-primary focus:ring-primary/20"
              )}
            />
            {isLoading && (
              <div className="absolute right-3 top-3">
                <motion.div 
                  className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
            )}
            
            <AnimatePresence>
              {isFocused && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-y-auto"
                >
                  <ul className="py-1">
                    {suggestions.map((address, index) => (
                      <li 
                        key={index}
                        className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 transition-colors"
                        onClick={() => handleSelectAddress(address)}
                      >
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 mr-2" />
                          <div>
                            <div className="font-medium">
                              {address.street} - {address.neighborhood}
                            </div>
                            <div className="text-xs text-gray-500">
                              {address.city}, {address.state} - CEP {address.cep}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative"
          >
            <div className="flex items-start">
              <div className="p-1 bg-green-100 rounded-full mr-3">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {value.street}, {value.neighborhood}
                </p>
                <p className="text-xs text-gray-600">
                  {value.city}, {value.state} - CEP {value.cep}
                </p>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleClearAddress}
                className="text-gray-500 hover:text-red-500 p-1 -mt-1 -mr-1"
              >
                <XCircle className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
        
        {error && (
          <motion.p 
            className="text-xs text-red-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.p>
        )}
      </div>
      
      {hasSelected && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Número <span className="text-red-500">*</span>
            </Label>
            <Input 
              placeholder="Número"
              value={value.number}
              onChange={(e) => onChange({ ...value, number: e.target.value })}
              className="bg-white border-gray-300 focus:border-primary focus:ring-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Complemento
            </Label>
            <Input 
              placeholder="Complemento (opcional)"
              value={value.complement || ""}
              onChange={(e) => onChange({ ...value, complement: e.target.value })}
              className="bg-white border-gray-300 focus:border-primary focus:ring-primary/20"
            />
          </div>
        </div>
      )}
    </div>
  );
};
