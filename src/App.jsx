import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import ServicesPage from "./components/ServicesPage";
import CarRepair from "./components/CarRepair";
import CarDetailing from "./components/CarDetailing";
import Inspection from "./components/Inspection";
import SpareParts from "./components/SpareParts";
import RoadsideHelp from "./components/RoadsideHelp";
import PageWrapper from "./components/PageWrapper";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Homepage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contacts" element={<PageWrapper><Contacts /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/services/car-repair" element={<PageWrapper><CarRepair /></PageWrapper>} />
        <Route path="/services/car-detailing" element={<PageWrapper><CarDetailing /></PageWrapper>} />
        <Route path="/services/inspection" element={<PageWrapper><Inspection /></PageWrapper>} />
        <Route path="/services/spare-parts" element={<PageWrapper><SpareParts /></PageWrapper>} />
        <Route path="/services/roadside-help" element={<PageWrapper><RoadsideHelp /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <div className="app-shell">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
