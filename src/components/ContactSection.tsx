
import { motion } from "framer-motion";
import { Globe, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Entre em Contato
            </motion.h2>
            <p className="text-gray-600">Estamos aqui para ajudar você a criar eventos incríveis</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.a
              href="mailto:contato@ingresonitro.com"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600">contato@ingresonitro.com</p>
            </motion.a>
            <motion.a
              href="tel:+551199999999"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-sm text-gray-600">+55 11 9999-9999</p>
            </motion.a>
            <motion.a
              href="#"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <Globe className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Redes Sociais</h3>
              <p className="text-sm text-gray-600">@ingresonitro</p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
