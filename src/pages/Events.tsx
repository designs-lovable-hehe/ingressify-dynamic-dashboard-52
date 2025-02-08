
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Filter, MapPin } from "lucide-react";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EventCard } from "@/components/EventCard";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Events = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");

  const events = [
    {
      title: "Festival de Música 2024",
      date: "15 Mar 2024",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      rating: 4.8,
      location: "São Paulo, SP",
    },
    {
      title: "Tech Conference",
      date: "22 Mar 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      rating: 4.9,
      location: "Rio de Janeiro, RJ",
    },
    {
      title: "Show de Stand-up",
      date: "30 Mar 2024",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      rating: 4.7,
      location: "Curitiba, PR",
    },
    {
      title: "Festival Gastronômico",
      date: "05 Abr 2024",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033",
      rating: 4.6,
      location: "Belo Horizonte, MG",
    },
    {
      title: "Exposição de Arte",
      date: "12 Abr 2024",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
      rating: 4.5,
      location: "Salvador, BA",
    },
    {
      title: "Show de Rock",
      date: "19 Abr 2024",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b",
      rating: 4.8,
      location: "Porto Alegre, RS",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <GeometricBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtros */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-64 space-y-6"
          >
            <Card className="p-4 space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Filter className="w-5 h-5" /> Filtros
              </h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Estado
                  </label>
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Cidade
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Digite a cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Data
                  </label>
                  <Input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Horário
                  </label>
                  <Select value={timeOfDay} onValueChange={setTimeOfDay}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Manhã</SelectItem>
                      <SelectItem value="afternoon">Tarde</SelectItem>
                      <SelectItem value="night">Noite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </motion.aside>

          {/* Lista de Eventos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
