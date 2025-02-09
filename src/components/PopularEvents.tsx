
import { motion } from "framer-motion";
import { BarChart3, Calendar, CreditCard, Users } from "lucide-react";

export const PopularEvents = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Gestão Simplificada",
      description: "Ferramentas intuitivas para criar e gerenciar seus eventos com facilidade",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Pagamentos Seguros",
      description: "Receba pagamentos de forma segura com as principais bandeiras do mercado",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Marketing Integrado",
      description: "Alcance milhares de pessoas interessadas em eventos como o seu",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Análise em Tempo Real",
      description: "Acompanhe o desempenho das suas vendas com relatórios detalhados",
    },
  ];

  return (
    <section id="recursos" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tudo que Você Precisa para Seu Evento
          </motion.h2>
          <p className="text-gray-600">
            Ferramentas completas para transformar suas ideias em eventos de sucesso
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
