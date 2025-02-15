
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GeometricBackground } from "@/components/GeometricBackground";

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false 
}: { 
  title: string;
  price: string;
  description: string;
  features: { name: string; included: boolean }[];
  highlighted?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 hover:shadow-xl ${
        highlighted
          ? 'bg-gradient-to-b from-primary/10 via-primary/5 to-transparent border-primary/20 dark:from-primary/20 dark:via-primary/10 dark:to-transparent'
          : 'bg-white/50 dark:bg-black/20 border-gray-200/50 dark:border-white/10'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm rounded-full">
          Mais Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {price}
        </span>
        {price !== "Personalizado" && <span className="text-gray-500 dark:text-gray-400 ml-2">/mês</span>}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <X className="w-5 h-5 text-gray-400" />
            )}
            <span className={`${feature.included ? 'text-gray-700 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full py-6 text-lg ${
          highlighted
            ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white'
            : 'bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
        }`}
      >
        Começar Agora
      </Button>
    </motion.div>
  );
};

const PricingPage = () => {
  const plans = [
    {
      title: "Básico",
      price: "R$ 99",
      description: "Perfeito para pequenos eventos e organizadores iniciantes",
      features: [
        { name: "Até 3 eventos simultâneos", included: true },
        { name: "Gestão de ingressos", included: true },
        { name: "Relatórios básicos", included: true },
        { name: "Suporte por email", included: true },
        { name: "Personalização da página", included: false },
        { name: "Check-in QR Code", included: false },
        { name: "Análises avançadas", included: false },
        { name: "API de integração", included: false },
      ],
    },
    {
      title: "Profissional",
      price: "R$ 299",
      description: "Ideal para empresas e organizadores em crescimento",
      features: [
        { name: "Até 10 eventos simultâneos", included: true },
        { name: "Gestão de ingressos", included: true },
        { name: "Relatórios avançados", included: true },
        { name: "Suporte prioritário", included: true },
        { name: "Personalização da página", included: true },
        { name: "Check-in QR Code", included: true },
        { name: "Análises avançadas", included: false },
        { name: "API de integração", included: false },
      ],
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "Personalizado",
      description: "Para grandes organizações com necessidades específicas",
      features: [
        { name: "Eventos ilimitados", included: true },
        { name: "Gestão de ingressos", included: true },
        { name: "Relatórios personalizados", included: true },
        { name: "Suporte 24/7", included: true },
        { name: "Personalização completa", included: true },
        { name: "Check-in QR Code", included: true },
        { name: "Análises avançadas", included: true },
        { name: "API de integração", included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F0FB] to-white dark:from-slate-950 dark:to-slate-900">
      <GeometricBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
          >
            Escolha o Plano Ideal para Seus Eventos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Planos flexíveis que crescem junto com seu negócio. Cancele a qualquer momento.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingTier
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Nossa equipe está pronta para ajudar você a escolher o melhor plano para seu negócio.
          </p>
          <Button variant="outline" size="lg" className="dark:border-white/10 dark:text-white">
            Fale com um Consultor
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
