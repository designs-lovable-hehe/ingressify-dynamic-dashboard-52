
import { motion } from "framer-motion";
import { Calendar, Heart, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sobre a Ingreso Nitro
            </h2>
            <p className="text-gray-600 mb-6">
              Somos a principal plataforma de gestão e venda de ingressos do Brasil. Nossa missão é simplificar a organização de eventos e proporcionar experiências incríveis para organizadores e participantes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">1000+</h4>
                  <p className="text-sm text-gray-600">Eventos mensais</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">500k+</h4>
                  <p className="text-sm text-gray-600">Usuários ativos</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
              alt="Evento musical com público animado"
              className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-red-500" />
                <span className="font-semibold">98% de satisfação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
