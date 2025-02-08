
import { motion } from "framer-motion";
import { EventCard } from "./EventCard";

export const PopularEvents = () => {
  const popularEvents = [
    {
      title: "Festival de Música 2024",
      date: "15 Mar 2024",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      participants: 1250,
      location: "São Paulo SP",
    },
    {
      title: "Tech Conference",
      date: "22 Mar 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      participants: 850,
      location: "Rio de Janeiro RJ",
    },
    {
      title: "Show de Stand-up",
      date: "30 Mar 2024",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      participants: 320,
      location: "Curitiba PR",
    },
  ];

  return (
    <section id="eventos" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Eventos Populares
          </motion.h2>
          <p className="text-gray-600">Descubra os eventos mais aguardados do momento</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

