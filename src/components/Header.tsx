
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { LogIn, Moon, Sun, CreditCard, CalendarCheck, Info, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  const isActivePath = (path: string) => {
    if (path === '#eventos' && location.pathname === '/eventos') return true;
    if (path === '#sobre' && location.pathname === '/sobre') return true;
    if (path === '#parceiros' && location.pathname === '/parceiros') return true;
    if (path === '#contato' && location.pathname.includes('contato')) return true;
    if (path === '/precos' && location.pathname === '/precos') return true;
    return false;
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  // Check for system preference on component mount
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b dark:border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex space-x-8">
            <motion.a
              href="#eventos"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActivePath('#eventos')
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <CalendarCheck className="w-4 h-4 stroke-[2.5]" />
              <span>Eventos</span>
            </motion.a>
            <motion.a
              href="#sobre"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActivePath('#sobre')
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Info className="w-4 h-4" />
              <span>Sobre</span>
            </motion.a>
            <motion.a
              href="#parceiros"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActivePath('#parceiros')
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4" />
              <span>Parceiros</span>
            </motion.a>
            <Link to="/precos">
              <motion.div
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActivePath('/precos')
                    ? 'bg-primary text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <CreditCard className="w-4 h-4" />
                <span>Preços</span>
              </motion.div>
            </Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="mr-2"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-500 hover:text-yellow-400 transition-colors" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700 hover:text-slate-900 transition-colors" />
            )}
          </Button>
          <Link to="/login">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground dark:border-white/10 dark:text-white"
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
