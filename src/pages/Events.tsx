
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Filter, MapPin, Search, TrendingUp } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white">
      <GeometricBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Encontre Eventos <span className="text-primary">Especiais</span>
          </h1>
          <p className="text-lg text-gray-600">
            Descubra experiências únicas e crie memórias inesquecíveis
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              type="text" 
              placeholder="Pesquisar eventos..." 
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </motion.div>

        {/* Trending Events Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-8 text-[#8B5CF6]">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="p-8 bg-white/80 backdrop-blur-sm">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5" /> Filtros
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4" /> Estado
                </label>
                <Select value={state} onValueChange={setState}>
                  <SelectTrigger className="w-full">
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
                <label className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4" /> Cidade
                </label>
                <Input 
                  type="text" 
                  placeholder="Digite a cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <Calendar className="w-4 h-4" /> Data
                </label>
                <Input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <Clock className="w-4 h-4" /> Horário
                </label>
                <Select value={timeOfDay} onValueChange={setTimeOfDay}>
                  <SelectTrigger className="w-full">
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold mb-8">Todos os Eventos</h2>
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
