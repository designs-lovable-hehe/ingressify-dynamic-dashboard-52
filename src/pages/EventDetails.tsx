
import { useParams } from "react-router-dom";
import { GeometricBackground } from "@/components/GeometricBackground";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const EventDetails = () => {
  const { id } = useParams();

  // This is a mock event data. In a real application, you would fetch this data based on the ID
  const event = {
    id,
    title: "Festival de Música 2024",
    date: "15 Mar 2024",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    participants: 1250,
    location: "São Paulo SP",
    description: "Um dos maiores festivais de música do Brasil, reunindo grandes artistas nacionais e internacionais em um fim de semana inesquecível.",
    price: "R$ 250,00",
    address: "Av. das Nações Unidas, 1000 - São Paulo, SP",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <GeometricBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
            
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{event.date}</span>
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
              <h2 className="text-xl font-semibold mb-2">Sobre o Evento</h2>
              <p className="text-gray-600">{event.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-2">Local</h2>
                <p className="text-gray-600">{event.address}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Ingresso</h2>
                <p className="text-gray-600">A partir de {event.price}</p>
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
