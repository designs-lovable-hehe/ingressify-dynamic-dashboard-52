
import { motion } from "framer-motion";
import { Check, Shield, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GeometricBackground } from "@/components/GeometricBackground";

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  icon: Icon,
  highlighted = false 
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: any;
  highlighted?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative p-8 rounded-3xl backdrop-blur-sm shadow-lg transition-all duration-300 hover:translate-y-[-8px] ${
        highlighted
          ? 'bg-gradient-to-br from-primary/20 via-accent/10 to-transparent border-2 border-primary/20'
          : 'bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-white/10'
      }`}
    >
      {highlighted && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium rounded-full shadow-lg"
        >
          Mais Popular
        </motion.div>
      )}
      
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto ${
        highlighted ? 'bg-gradient-to-br from-primary/20 to-accent/20' : 'bg-gray-100 dark:bg-white/5'
      }`}>
        <Icon className={`w-10 h-10 ${highlighted ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`} />
      </div>

      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">{title}</h3>
      <div className="flex items-baseline justify-center mb-4">
        <span className={`text-5xl font-bold ${highlighted ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>
          {price}
        </span>
        {price !== "Personalizado" && <span className="text-gray-500 dark:text-gray-400 ml-2 text-lg">/mês</span>}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-8 min-h-[60px] text-lg text-center">{description}</p>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className={`p-1.5 rounded-full ${highlighted ? 'bg-primary/10' : 'bg-gray-100 dark:bg-white/5'}`}>
              <Check className={`w-4 h-4 ${highlighted ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`} />
            </div>
            <span className="text-gray-700 dark:text-gray-200">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <Button
        className={`w-full py-7 text-lg font-medium transition-all duration-300 ${
          highlighted
            ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl shadow-primary/20'
            : 'bg-gray-900 dark:bg-white dark:text-gray-900 hover:opacity-90'
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
      title: "Iniciante",
      price: "R$ 99",
      description: "Ideal para organizadores iniciantes e eventos pequenos",
      icon: Star,
      features: [
        "Até 2 eventos simultâneos",
        "Gestão básica de ingressos",
        "Relatórios simples",
        "Suporte por email",
      ],
    },
    {
      title: "Profissional",
      price: "R$ 299",
      description: "Perfeito para empresas em crescimento e eventos médios",
      icon: Zap,
      features: [
        "Até 10 eventos simultâneos",
        "Gestão avançada de ingressos",
        "Analytics completo",
        "Suporte prioritário 24/7",
        "Check-in via QR Code",
        "Personalização da marca",
      ],
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "Personalizado",
      description: "Para grandes organizações com necessidades específicas",
      icon: Shield,
      features: [
        "Eventos ilimitados",
        "API dedicada",
        "Onboarding personalizado",
        "Gerente de conta dedicado",
        "SLA garantido",
        "Customizações especiais",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F0FB] via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <GeometricBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
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
              {...plan}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center max-w-2xl mx-auto bg-white/30 dark:bg-slate-900/30 p-10 rounded-3xl backdrop-blur-sm border border-white/20 dark:border-white/10"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Precisa de Ajuda para Escolher?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Nossa equipe está pronta para ajudar você a encontrar o plano perfeito para suas necessidades específicas.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/50 dark:bg-slate-900/50 text-lg font-medium hover:scale-105 transition-transform duration-300 border-2 border-primary/20"
          >
            Fale com um Especialista
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
