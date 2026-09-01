import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AcademicPartners from "./components/AcademicPartners";
import WelcomeSection from "./components/WelcomeSection";
import Services from "./components/Services";
import PopularPrograms from "./components/PopularPrograms";
import Consultants from "./components/Consultants";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ServicesPage from "./components/ServicesPage";
import CoursesPage from "./components/CoursesPage";
import ContactUs from "./components/ContactUs";
import TenthStandardEducation from "./components/TenthStandardEducation";
import TwelfthStandardEducation from "./components/TwelfthStandardEducation";
import BBAEducation from "./components/BBAEducation";
import BCAEducation from "./components/BCAEducation";
import BAEducation from "./components/BAEducation";
import BScEducation from "./components/BScEducation";
import BComEducation from "./components/BComEducation";
import BEdEducation from "./components/BEdEducation";
import MBAEducation from "./components/MBAEducation";
import MCAEducation from "./components/MCAEducation";
import MAEducation from "./components/MAEducation";
import MScEducation from "./components/MScEducation";
import MComEducation from "./components/MComEducation";
import MEdEducation from "./components/MEdEducation";
import DistanceEducation from "./components/DistanceEducation";
import CertificateAttestation from "./components/CertificateAttestation";
import CreditTransfer from "./components/CreditTransfer";
import EquivalencyCertificate from "./components/EquivalencyCertificate";
import InternationalUniversities from "./components/InternationalUniversities";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AcademicPartners />
      <WelcomeSection />
      <Services />
      <PopularPrograms />
      <Consultants />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/courses/10th-grade"
              element={<TenthStandardEducation />}
            />
            <Route
              path="/courses/12th-grade"
              element={<TwelfthStandardEducation />}
            />
            <Route path="/courses/bba" element={<BBAEducation />} />
            <Route path="/courses/bca" element={<BCAEducation />} />
            <Route path="/courses/ba" element={<BAEducation />} />
            <Route path="/courses/bsc" element={<BScEducation />} />
            <Route path="/courses/bcom" element={<BComEducation />} />
            <Route path="/courses/bed" element={<BEdEducation />} />
            <Route path="/courses/mba" element={<MBAEducation />} />
            <Route path="/courses/mca" element={<MCAEducation />} />
            <Route path="/courses/ma" element={<MAEducation />} />
            <Route path="/courses/msc" element={<MScEducation />} />
            <Route path="/courses/mcom" element={<MComEducation />} />
            <Route path="/courses/med" element={<MEdEducation />} />
            <Route
              path="/services/distance-education"
              element={<DistanceEducation />}
            />
            <Route
              path="/services/certificate-attestation"
              element={<CertificateAttestation />}
            />
            <Route
              path="/services/credit-transfer"
              element={<CreditTransfer />}
            />
            <Route
              path="/services/equivalency-certificate"
              element={<EquivalencyCertificate />}
            />
            <Route
              path="/services/international-universities"
              element={<InternationalUniversities />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
