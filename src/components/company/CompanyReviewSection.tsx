
import { motion } from "framer-motion";
import { Building2, MapPin, FileText, CheckCircle2, FileEdit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompanyReviewSectionProps {
  companyData: any;
  onEdit: (section: string) => void;
}

export const CompanyReviewSection = ({
  companyData,
  onEdit,
}: CompanyReviewSectionProps) => {
  // Helper function to mask CNPJ
  const formatCNPJ = (cnpj: string) => {
    if (!cnpj) return "";
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  };
  
  return (
    <div className="space-y-6">
      <motion.div 
        className="p-4 bg-green-50 border border-green-100 rounded-lg flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <h3 className="font-medium text-green-800">Revisão final</h3>
          <p className="text-sm text-green-700">Confira se todos os dados estão corretos antes de finalizar</p>
        </div>
      </motion.div>
      
      {/* Company Information */}
      <motion.div 
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-gray-900">Informações Básicas</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit('basic')}
            className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 hover:bg-primary/5"
          >
            <FileEdit className="w-3.5 h-3.5" />
            <span>Editar</span>
          </Button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Nome da Empresa</p>
              <p className="text-sm font-medium text-gray-900">{companyData.name || "-"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Nome Fantasia</p>
              <p className="text-sm font-medium text-gray-900">{companyData.tradingName || "-"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">CNPJ</p>
              <p className="text-sm font-medium text-gray-900">{formatCNPJ(companyData.cnpj) || "-"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Segmento</p>
              <p className="text-sm font-medium text-gray-900">{companyData.segment || "-"}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs text-gray-500 mb-1">Descrição</p>
              <p className="text-sm text-gray-700">{companyData.description || "-"}</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Address Information */}
      <motion.div 
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-gray-900">Endereço</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit('address')}
            className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 hover:bg-primary/5"
          >
            <FileEdit className="w-3.5 h-3.5" />
            <span>Editar</span>
          </Button>
        </div>
        
        <div className="p-6">
          {companyData.address ? (
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-1 bg-primary/10 rounded-md mr-3">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {companyData.address.street}, {companyData.address.number}
                    {companyData.address.complement && ` - ${companyData.address.complement}`}
                  </p>
                  <p className="text-sm text-gray-700">
                    {companyData.address.neighborhood}, {companyData.address.city} - {companyData.address.state}
                  </p>
                  <p className="text-sm text-gray-500">CEP: {companyData.address.cep}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">Nenhum endereço cadastrado</p>
          )}
        </div>
      </motion.div>
      
      {/* Documents Information */}
      <motion.div 
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-gray-900">Documentos</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit('documents')}
            className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 hover:bg-primary/5"
          >
            <FileEdit className="w-3.5 h-3.5" />
            <span>Editar</span>
          </Button>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="p-1.5 rounded-md bg-green-100 mr-3">
                <FileText className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Contrato Social</p>
                <p className="text-xs text-gray-500">
                  {companyData.contract ? `${companyData.contract.name} (${companyData.contract.size} bytes)` : "Não enviado"}
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="p-1.5 rounded-md bg-green-100 mr-3">
                <FileText className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Comprovante de Endereço</p>
                <p className="text-xs text-gray-500">
                  {companyData.addressProof ? `${companyData.addressProof.name} (${companyData.addressProof.size} bytes)` : "Não enviado"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
