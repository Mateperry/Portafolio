import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import Inicio from "./Seccion/Inicio/Inicio";
import Sobremi from "./Seccion/Sobremi/Sobremi";
import Proyectos from "./Seccion/Proyectos/Proyectos";
import ProyectoIndividual from "./Seccion/Proyectos/Detallesproyectos";
import ContactSection from "./Seccion/Contacto/Contacto";
import Creando from "./Seccion/Creando";

// Importa los modales si los tienes
import PrivacyPolicyModal from "./Components/PrivacyPolicyModal";
import TermsAndConditionsModal from "./Components/Terms";
import ContactUsModal from "./Components/Contact";

function App() {
  // Estados para los modales
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremi" element={<Sobremi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyecto/:id" element={<ProyectoIndividual />} />
          <Route path="/contacto" element={<ContactSection />} />
          <Route path="/creando" element={<Creando />} />
        </Routes>
      </main>

      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Modales */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <TermsAndConditionsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />

      <ContactUsModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </BrowserRouter>
  );
}

export default App;

