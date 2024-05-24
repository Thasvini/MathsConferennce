import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Department from "./components/dept/Department";
import Campus from "./components/campus/Campus";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import InsForAuthors from "./components/insForAuthors/InsForAuthors";
import PlanTravel from "./components/planTravel/PlanTravel";
import RegistrationFees from "./components/registrationFees/RegistrationFees";
import Scope from "./components/Scope/Scope";
import Organizers from "./components/Organizers/Organizers";
import Speakers from "./components/speakers/Speakers";
import Iabc from "./components/iabc/Iabc";
import Nabc from "./components/nabc/Nabc";
import ScrollToTop from "./ScrollToTop"; 

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <div className="container">
                <Title title="About The Conference" />
                <Programs />
                <Title subtitle="ICMST 2025" title="Scope of the Conference" />
                <Scope />
                <Title
                  subtitle="ABOUT THE COLLEGE"
                  title="Sri Eshwar College Of Engineering"
                />
                <About />
                <Title
                  subtitle="ABOUT THE DEPARTMENT"
                  title="Department of Mathematics"
                />
                <Department />
                <Title subtitle="Gallery" title="Campus Photos" />
                <Campus />
                <Title subtitle="Contact Us" title="Get in Touch" />
                <Contact />
              </div>
            </div>
          }
        />
        <Route path="/instructions" element={<InsForAuthors />} />
        <Route path="/registrationfees" element={<RegistrationFees />} />
        <Route path="/plantravel" element={<PlanTravel />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/iabc" element={<Iabc />} />
        <Route path="/nabc" element={<Nabc />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
