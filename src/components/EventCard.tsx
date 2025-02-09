
import { motion } from "framer-motion";
import { Calendar, MapPin, TrendingUp, Users } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  image: string;
  participants: number;
  location: string;
  trending?: boolean;
}

export const EventCard = ({ title, date, image, participants, location, trending }: EventCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {trending && (
        <div className="absolute top-4 right-4 bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
          <TrendingUp className="w-4 h-4" />
          Em Alta
        </div>
      )}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="mt-2 flex items-center text-sm text-gray-600 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{participants}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
      </div>
    </motion.div>
  );
};
