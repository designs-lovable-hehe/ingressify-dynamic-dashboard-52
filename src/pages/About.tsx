
import { motion } from "framer-motion";
import { Award, Building2, Calendar, Heart, Star, Ticket, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GeometricBackground } from "@/components/GeometricBackground";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white">
      <GeometricBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sua plataforma completa de
            <span className="text-primary block mt-2">Gestão de Eventos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A Ingresso Nitro é uma plataforma completa que revoluciona a forma como eventos são 
            organizados e vivenciados. Oferecemos soluções integradas para venda de ingressos, 
            gestão de eventos e ferramentas especializadas para organizadores.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: Users,
              stat: "500k+",
              label: "Usuários Ativos",
              color: "bg-primary/10",
              textColor: "text-primary"
            },
            {
              icon: Ticket,
              stat: "1M+",
              label: "Ingressos Vendidos",
              color: "bg-accent/10",
              textColor: "text-accent"
            },
            {
              icon: Building2,
              stat: "1000+",
              label: "Parceiros",
              color: "bg-secondary/10",
              textColor: "text-secondary"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <item.icon className={`w-6 h-6 ${item.textColor}`} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{item.stat}</h3>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Ticket,
                title: "Venda de Ingressos",
                description: "Sistema seguro e eficiente para venda e gestão de ingressos online."
              },
              {
                icon: Calendar,
                title: "Gestão de Eventos",
                description: "Ferramentas completas para organização e controle de eventos."
              },
              {
                icon: Users,
                title: "Portal do Organizador",
                description: "Dashboard completo com análises, relatórios e controles em tempo real."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl mb-20"
        >
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div className="ml-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Transformar o mercado de eventos através de tecnologia e inovação, oferecendo uma 
              plataforma completa que conecta organizadores e participantes. Nosso compromisso 
              é simplificar a gestão de eventos, garantir vendas seguras de ingressos e 
              proporcionar experiências incríveis para todos os envolvidos.
            </p>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Ingresso Nitro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Experiência Única",
                description: "Interface intuitiva e suporte personalizado"
              },
              {
                icon: Award,
                title: "Tecnologia Avançada",
                description: "Plataforma robusta e sempre atualizada"
              },
              {
                icon: Star,
                title: "Segurança Total",
                description: "Transações e dados protegidos"
              },
              {
                icon: Users,
                title: "Suporte Dedicado",
                description: "Atendimento especializado 24/7"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
