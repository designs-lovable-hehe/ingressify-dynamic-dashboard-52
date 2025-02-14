
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export const Header = () => {
  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === '#eventos' && location.pathname === '/eventos') return true;
    if (path === '#sobre' && location.pathname === '/sobre') return true;
    if (path === '#parceiros' && location.pathname === '/parceiros') return true;
    if (path === '#contato' && location.pathname.includes('contato')) return true;
    return false;
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex space-x-8">
            <motion.a
              href="#eventos"
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                isActivePath('#eventos')
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Eventos
            </motion.a>
            <motion.a
              href="#sobre"
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                isActivePath('#sobre')
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Sobre
            </motion.a>
            <motion.a
              href="#parceiros"
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                isActivePath('#parceiros')
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Parceiros
            </motion.a>
            <motion.a
              href="#contato"
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                isActivePath('#contato')
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Contato
            </motion.a>
          </nav>
          <Link to="/login">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              <LogIn className="w-4 h-4" />
              <span>Entrar</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
