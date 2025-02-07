
import { motion } from "framer-motion";
import { Building } from "lucide-react";
import { PartnerLogo } from "./PartnerLogo";

export const PartnersSection = () => {
  const partners = [
    {
      name: "TechCorp",
      logo: "https://placehold.co/200x80?text=TechCorp",
    },
    {
      name: "InnovateX",
      logo: "https://placehold.co/200x80?text=InnovateX",
    },
    {
      name: "FutureVision",
      logo: "https://placehold.co/200x80?text=FutureVision",
    },
    {
      name: "GlobalTech",
      logo: "https://placehold.co/200x80?text=GlobalTech",
    },
  ];

  return (
    <section id="parceiros" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Building className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Nossos Parceiros</span>
          </motion.div>
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Empresas que Confiam em Nós
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Trabalhamos com as principais empresas do mercado para oferecer a melhor experiência em eventos
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {partners.map((partner, index) => (
            <PartnerLogo key={index} {...partner} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
