
import { motion } from "framer-motion";
import { Calendar, Globe, Heart, Mail, Phone, Users } from "lucide-react";
import { Logo } from "@/components/Logo";
import { GeometricBackground } from "@/components/GeometricBackground";
import { EventCard } from "@/components/EventCard";
import { PartnerLogo } from "@/components/PartnerLogo";

const Index = () => {
  // Mock data - replace with real data in production
  const popularEvents = [
    {
      title: "Festival de Música 2024",
      date: "15 Mar 2024",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      rating: 4.8,
      location: "São Paulo, SP",
    },
    {
      title: "Tech Conference",
      date: "22 Mar 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      rating: 4.9,
      location: "Rio de Janeiro, RJ",
    },
    {
      title: "Show de Stand-up",
      date: "30 Mar 2024",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      rating: 4.7,
      location: "Curitiba, PR",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <GeometricBackground />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-8">
            <motion.a
              href="#eventos"
              className="text-gray-600 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Eventos
            </motion.a>
            <motion.a
              href="#sobre"
              className="text-gray-600 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Sobre
            </motion.a>
            <motion.a
              href="#parceiros"
              className="text-gray-600 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Parceiros
            </motion.a>
            <motion.a
              href="#contato"
              className="text-gray-600 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Contato
            </motion.a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              A melhor plataforma de eventos do Brasil
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme seus eventos em{" "}
              <span className="text-primary">experiências inesquecíveis</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Gerencie, promova e venda ingressos para seus eventos com a plataforma mais completa do mercado.
            </p>
            <motion.button
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comece agora
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Popular Events Section */}
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

      {/* About Section */}
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
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Sobre nós"
                className="rounded-lg shadow-xl"
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

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-gray-400">
                Transformando a maneira como as pessoas vivenciam eventos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Segurança
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ingreso Nitro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
