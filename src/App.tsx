
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import TicketCheckout from "./pages/TicketCheckout";
import Partners from "./pages/Partners";
import About from "./pages/About";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerRegister from "./pages/PartnerRegister";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import AccountRecovery from "./pages/AccountRecovery";
import CompanyBasicInfo from "./pages/company/CompanyBasicInfo";
import CompanyAddress from "./pages/company/CompanyAddress";
import CompanyDocuments from "./pages/company/CompanyDocuments";
import CompanyReview from "./pages/company/CompanyReview";
import PartnerDashboard from "./pages/PartnerDashboard";
import NotFound from "./pages/NotFound";
import ListLogo from "./pages/ListLogo";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/eventos/:id" element={<EventDetails />} />
          <Route path="/eventos/:id/checkout" element={<TicketCheckout />} />
          <Route path="/parceiros" element={<Partners />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/parceiros/login" element={<PartnerLogin />} />
          <Route path="/parceiros/cadastro" element={<PartnerRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/cadastro" element={<UserRegister />} />
          <Route path="/recuperar-acesso" element={<AccountRecovery />} />
          <Route path="/empresa/informacoes-basicas" element={<CompanyBasicInfo />} />
          <Route path="/empresa/endereco" element={<CompanyAddress />} />
          <Route path="/empresa/documentos" element={<CompanyDocuments />} />
          <Route path="/empresa/revisao" element={<CompanyReview />} />
          <Route path="/parceiros/dashboard" element={<PartnerDashboard />} />
          <Route path="/listLogo" element={<ListLogo />} />
          <Route path="/precos" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
