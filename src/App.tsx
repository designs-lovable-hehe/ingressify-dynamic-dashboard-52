
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PartnersSection } from "./components/PartnersSection";
import { PopularEvents } from "./components/PopularEvents";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GeometricBackground } from "./components/GeometricBackground";
import { Routes, Route } from "react-router-dom";
import PricingPage from "./pages/Pricing";

const HomePage = () => {
  return (
    <>
      <GeometricBackground />
      <Header />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <PopularEvents />
      <ContactSection />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/precos" element={<PricingPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
