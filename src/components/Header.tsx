
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6">
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
          <Link to="/login">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              <span>Entrar</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

