
import { Home, CalendarDays, Users, DollarSign, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Início",
    icon: Home,
    path: "/parceiros/dashboard",
  },
  {
    title: "Eventos",
    icon: CalendarDays,
    path: "/eventos",
  },
  {
    title: "Agenda",
    icon: CalendarDays,
    path: "/agenda",
  },
  {
    title: "Participantes",
    icon: Users,
    path: "/participantes",
  },
  {
    title: "Financeiro",
    icon: DollarSign,
    path: "/financeiro",
  },
];

const configItems = [
  {
    title: "Configurações",
    icon: Settings,
    path: "/configuracoes",
  },
  {
    title: "Sair",
    icon: LogOut,
    path: "/logout",
  },
];

export function Sidebar() {
  const location = useLocation();

  const MenuItem = ({ item }: { item: typeof menuItems[0] }) => {
    const isActive = location.pathname === item.path;
    return (
      <Link
        to={item.path}
        className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? "bg-[#9b87f5]/10 text-[#9b87f5]"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <item.icon className="w-5 h-5" />
        <span className="font-medium">{item.title}</span>
      </Link>
    );
  };

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="bg-[#9b87f5] text-white font-bold text-xl px-2 py-1 rounded">
            IN
          </div>
          <span className="font-semibold text-xl">Ingreso Nitro</span>
        </div>
      </div>

      <div className="flex-1 px-3">
        <div className="mb-2">
          <p className="text-xs font-semibold text-gray-400 px-4 py-2">
            MENU PRINCIPAL
          </p>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <MenuItem key={item.title} item={item} />
            ))}
          </nav>
        </div>

        <div className="mb-2">
          <p className="text-xs font-semibold text-gray-400 px-4 py-2">
            CONFIGURAÇÕES
          </p>
          <nav className="space-y-1">
            {configItems.map((item) => (
              <MenuItem key={item.title} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
