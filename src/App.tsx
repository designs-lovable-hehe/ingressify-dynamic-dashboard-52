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

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GeometricBackground />
        <Header />
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <PopularEvents />
        <ContactSection />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
