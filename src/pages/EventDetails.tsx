
import { useParams } from "react-router-dom";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Building2, CreditCard, Award, Ticket, BadgeCheck, Users2 } from "lucide-react";
import { motion } from "framer-motion";

const EventDetails = () => {
  const { id } = useParams();

  // This is a mock event data. In a real application, you would fetch this data based on the ID
  const event = {
    id,
    title: "Festival de Música 2024",
    date: "15 Mar 2024",
    time: "16:00",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    participants: 1250,
    location: "São Paulo SP",
    description: "Um dos maiores festivais de música do Brasil, reunindo grandes artistas nacionais e internacionais em um fim de semana inesquecível. Prepare-se para uma experiência única com shows incríveis, área gastronômica e muito mais!",
    price: "R$ 250,00",
    address: "Av. das Nações Unidas, 1000 - São Paulo, SP",
    ageRequirement: "16+",
    tags: ["Música", "Festival", "Show", "Entretenimento", "Gastronomia"],
    organizer: {
      name: "EventPro Produções e Eventos",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      rating: 4.8,
      eventsProduced: 127,
      yearsInBusiness: 15,
      verifiedBusiness: true,
      description: "Uma das maiores produtoras de eventos do Brasil, especializada em festivais e shows de grande porte."
    },
    ticketTypes: [
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
    ],
    highlights: [
      "Shows de artistas nacionais e internacionais",
      "Área gastronômica com os melhores food trucks",
      "Área de descanso com lounges",
      "Estacionamento gratuito",
      "Segurança 24h"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <GeometricBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section with Improved Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm border border-white/20"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <div className="flex flex-col justify-between">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl font-bold text-gray-900 mb-4 leading-tight"
                >
                  {event.title}
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-2 mb-8"
                >
                  {event.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-[#8B5CF6]/10 text-[#8B5CF6] hover:bg-[#8B5CF6]/20 px-4 py-1 text-sm font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 gap-6 mb-8"
                >
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <Calendar className="w-6 h-6 text-[#8B5CF6]" />
                    <div>
                      <p className="text-sm text-gray-500">Data e Hora</p>
                      <p className="text-gray-900 font-medium">{event.date} às {event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <Users className="w-6 h-6 text-[#8B5CF6]" />
                    <div>
                      <p className="text-sm text-gray-500">Participantes</p>
                      <p className="text-gray-900 font-medium">{event.participants}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#8B5CF6]" />
                    <div>
                      <p className="text-sm text-gray-500">Localização</p>
                      <p className="text-gray-900 font-medium">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <Users2 className="w-6 h-6 text-[#8B5CF6]" />
                    <div>
                      <p className="text-sm text-gray-500">Faixa Etária</p>
                      <p className="text-gray-900 font-medium">{event.ageRequirement}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="prose max-w-none"
              >
                <p className="text-gray-600 leading-relaxed text-lg">{event.description}</p>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content with Improved Styling */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8 border border-white/20"
              >
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <Award className="w-6 h-6 text-[#8B5CF6] mr-2" />
                  Destaques do Evento
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start bg-white/60 p-4 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <Award className="w-5 h-5 text-[#8B5CF6] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
              >
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-[#8B5CF6] mr-2" />
                  Localização
                </h2>
                <p className="text-gray-600 mb-4">{event.address}</p>
                <div className="rounded-xl overflow-hidden h-[300px] bg-gray-100">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar with Enhanced Design */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
              >
                <h2 className="text-xl font-semibold mb-6">Empresa Organizadora</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <img
                      src={event.organizer.image}
                      alt={event.organizer.name}
                      className="w-16 h-16 rounded-xl object-cover mr-4"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">{event.organizer.name}</h3>
                        {event.organizer.verifiedBusiness && (
                          <BadgeCheck className="w-5 h-5 text-[#8B5CF6]" />
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 text-yellow-400 mr-1" />
                        <span>{event.organizer.rating} • {event.organizer.eventsProduced} eventos</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="w-4 h-4" />
                      <span>{event.organizer.yearsInBusiness} anos no mercado</span>
                    </div>
                    <p className="text-sm text-gray-600">{event.organizer.description}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl sticky top-6 border border-white/20"
              >
                <h2 className="text-xl font-semibold mb-6">Ingressos</h2>
                <div className="space-y-4">
                  {event.ticketTypes.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="p-4 border border-gray-100 rounded-xl hover:border-[#8B5CF6] transition-colors bg-white/60"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-medium text-gray-900">{ticket.name}</h3>
                          <p className="text-sm text-gray-600">{ticket.available} disponíveis</p>
                        </div>
                        <span className="font-semibold text-[#8B5CF6]">{ticket.price}</span>
                      </div>
                      <Button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors">
                        <Ticket className="w-4 h-4 mr-2" />
                        Comprar
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetails;
