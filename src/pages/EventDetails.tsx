
import { useParams } from "react-router-dom";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, User, CreditCard, Star, Ticket } from "lucide-react";
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
    creator: {
      name: "EventPro Produções",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
      rating: 4.8,
      events: 127
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
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          {/* Hero Section */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-xl">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date} às {event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{event.participants} participantes</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="prose max-w-none mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Sobre o Evento</h2>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Destaques</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-5 h-5 text-[#8B5CF6] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Local</h2>
                  <p className="text-gray-600 mb-2">{event.address}</p>
                  <div className="rounded-lg overflow-hidden h-[200px] bg-gray-100">
                    {/* Aqui você pode adicionar um mapa real usando Google Maps ou similar */}
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Creator Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-6">
                <h2 className="text-xl font-semibold mb-4">Organizador</h2>
                <div className="flex items-center mb-4">
                  <img
                    src={event.creator.image}
                    alt={event.creator.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{event.creator.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{event.creator.rating} • {event.creator.events} eventos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tickets Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg sticky top-6">
                <h2 className="text-xl font-semibold mb-4">Ingressos</h2>
                <div className="space-y-4">
                  {event.ticketTypes.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="p-4 border border-gray-200 rounded-lg hover:border-[#8B5CF6] transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-gray-900">{ticket.name}</h3>
                          <p className="text-sm text-gray-600">{ticket.available} disponíveis</p>
                        </div>
                        <span className="font-semibold text-[#8B5CF6]">{ticket.price}</span>
                      </div>
                      <Button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED]">
                        <Ticket className="w-4 h-4 mr-2" />
                        Comprar
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetails;

