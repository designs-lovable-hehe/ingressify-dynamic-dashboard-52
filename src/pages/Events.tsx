
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Filter, MapPin, TrendingUp } from "lucide-react";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EventCard } from "@/components/EventCard";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Events = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");

  const trendingEvents = [
    {
      id: "1",
      title: "Festival de Música 2024",
      date: "15 Mar 2024",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      participants: 1250,
      location: "São Paulo SP",
      trending: true,
    },
    {
      id: "2",
      title: "Tech Conference",
      date: "22 Mar 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      participants: 850,
      location: "Rio de Janeiro RJ",
      trending: true,
    },
  ];

  const events = [
    {
      id: "3",
      title: "Show de Stand-up",
      date: "30 Mar 2024",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      participants: 320,
      location: "Curitiba PR",
    },
    {
      id: "4",
      title: "Festival Gastronômico",
      date: "05 Abr 2024",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033",
      participants: 750,
      location: "Belo Horizonte MG",
    },
    {
      id: "5",
      title: "Exposição de Arte",
      date: "12 Abr 2024",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
      participants: 430,
      location: "Salvador BA",
    },
    {
      id: "6",
      title: "Show de Rock",
      date: "19 Abr 2024",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b",
      participants: 2100,
      location: "Porto Alegre RS",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <GeometricBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Encontre Eventos Incríveis
        </motion.h1>

        {/* Trending Events Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6 text-[#8B5CF6]">
            <TrendingUp className="w-6 h-6" /> Em Alta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trendingEvents.map((event) => (
              <Link key={event.id} to={`/eventos/${event.id}`}>
                <EventCard {...event} />
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Card className="p-6">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5" /> Filtros
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </motion.div>

        {/* All Events */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Todos os Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Link key={event.id} to={`/eventos/${event.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <EventCard {...event} />
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
