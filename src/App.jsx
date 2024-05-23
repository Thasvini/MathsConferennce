import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes component from react-router-dom
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import InsForAuthors from "./components/insForAuthors/InsForAuthors";
import PlanTravel from "./components/planTravel/PlanTravel";
import RegistrationFees from "./components/registrationFees/RegistrationFees";
import Scope from "./components/Scope/Scope";
import Organizers from "./components/Organizers/Organizers";
import Speakers from "./components/speakers/Speakers";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        {/* Wrap your routes inside <Routes> */}
        <Route
          path="/"
          element={
            // Specify 'element' prop instead of rendering Route directly
            <div>
              <Hero />
              <div className="container">
                <Title subtitle="Our Program" title="What We Offer" />
                <Programs />
                <Title subtitle="ICSMT 2025" title="Scope of the Conference" />
                <Scope />
                <Title
                  subtitle="ABOUT THE COLLEGE"
                  title="Sri Eshwar College Of Engineering"
                />
                <About />

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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
