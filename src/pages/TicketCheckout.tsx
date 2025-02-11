
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Ticket, CreditCard, Users, Calendar, ChevronLeft, ShoppingCart, Clock, BadgeCheck } from "lucide-react";
import { useState } from "react";

interface TicketType {
  id: number;
  name: string;
  price: string;
  available: number;
}

const TicketCheckout = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: ""
  });

  const ticketTypes: TicketType[] = location.state?.ticketTypes || [
    {
      id: 1,
      name: "Pista",
      price: "R$ 250,00",
      available: 500
    },
    {
      id: 2,
      name: "VIP",
      price: "R$ 450,00",
      available: 200
    },
    {
      id: 3,
      name: "Camarote",
      price: "R$ 850,00",
      available: 50
    }
  ];

  const handleQuantityChange = (ticketId: number, change: number) => {
    setQuantities(prev => {
      const currentQty = prev[ticketId] || 0;
      const newQty = Math.max(0, Math.min(4, currentQty + change));
      return { ...prev, [ticketId]: newQty };
    });
  };

  const calculateTotal = () => {
    return ticketTypes.reduce((total, ticket) => {
      const quantity = quantities[ticket.id] || 0;
      const price = parseFloat(ticket.price.replace("R$ ", "").replace(",", "."));
      return total + (price * quantity);
    }, 0);
  };

  const totalTickets = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F0FB] to-white">
      <GeometricBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <button
            onClick={() => navigate(`/eventos/${id}`)}
            className="flex items-center gap-2 text-[#8B5CF6] hover:text-[#7C3AED] mb-8 group transition-colors"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Voltar para detalhes do evento
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent">
                  <Ticket className="w-6 h-6 text-[#8B5CF6]" />
                  Seleção de Ingressos
                </h2>

                <div className="space-y-4">
                  {ticketTypes.map((ticket) => (
                    <motion.div
                      key={ticket.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-white/90 to-white/80 border border-white/40 shadow-lg group hover:shadow-xl transition-all"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{ticket.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>15 Mar 2024</span>
                            <Clock className="w-4 h-4 ml-2" />
                            <span>16:00</span>
                          </div>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent">
                          {ticket.price}
                        </span>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleQuantityChange(ticket.id, -1)}
                            className="w-8 h-8 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] hover:bg-[#8B5CF6]/20 flex items-center justify-center transition-colors"
                          >
                            -
                          </button>
                          <span className="text-lg font-semibold w-8 text-center">
                            {quantities[ticket.id] || 0}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(ticket.id, 1)}
                            className="w-8 h-8 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] hover:bg-[#8B5CF6]/20 flex items-center justify-center transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-sm text-gray-600">
                          {ticket.available} disponíveis
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent">
                  <Users className="w-6 h-6 text-[#8B5CF6]" />
                  Informações do Comprador
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/50"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">E-mail</label>
                    <Input
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/50"
                      type="email"
                      placeholder="Digite seu e-mail"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Telefone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/50"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">CPF</label>
                    <Input
                      value={formData.cpf}
                      onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                      className="bg-white/50"
                      placeholder="000.000.000-00"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r from-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent">
                    <ShoppingCart className="w-6 h-6 text-[#8B5CF6]" />
                    Resumo da Compra
                  </h2>

                  <div className="space-y-4">
                    {Object.entries(quantities).map(([ticketId, quantity]) => {
                      if (quantity === 0) return null;
                      const ticket = ticketTypes.find(t => t.id === Number(ticketId));
                      if (!ticket) return null;

                      return (
                        <div key={ticketId} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-gray-900">{ticket.name}</p>
                            <p className="text-sm text-gray-600">{quantity}x {ticket.price}</p>
                          </div>
                          <p className="font-semibold text-gray-900">
                            R$ {(parseFloat(ticket.price.replace("R$ ", "").replace(",", ".")) * quantity).toFixed(2).replace(".", ",")}
                          </p>
                        </div>
                      );
                    })}

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-600">Total de Ingressos</p>
                        <p className="font-semibold text-gray-900">{totalTickets}</p>
                      </div>
                      <div className="flex justify-between items-center text-lg">
                        <p className="font-medium text-gray-900">Total</p>
                        <p className="font-bold text-2xl bg-gradient-to-r from-[#8B5CF6] to-[#F97316] bg-clip-text text-transparent">
                          R$ {calculateTotal().toFixed(2).replace(".", ",")}
                        </p>
                      </div>
                    </div>

                    <Button 
                      disabled={totalTickets === 0}
                      className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#F97316] hover:from-[#7C3AED] hover:to-[#EA580C] transition-all duration-300 text-lg py-6 mt-6 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <CreditCard className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Finalizar Compra
                    </Button>

                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                      <BadgeCheck className="w-5 h-5 text-[#8B5CF6]" />
                      Compra 100% segura e processada em até 24h
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default TicketCheckout;
