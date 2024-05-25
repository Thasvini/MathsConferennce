import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./ScrollToTop"; 
import Loading from "./components/loading/Loading"; // Ensure this path is correct

const Hero = lazy(() => import("./components/hero/Hero"));
const Programs = lazy(() => import("./components/programs/Programs"));
const Title = lazy(() => import("./components/title/Title"));
const About = lazy(() => import("./components/about/About"));
const Department = lazy(() => import("./components/dept/Department"));
const Campus = lazy(() => import("./components/campus/Campus"));
const Contact = lazy(() => import("./components/Downloads/Contact"));
const InsForAuthors = lazy(() => import("./components/insForAuthors/InsForAuthors"));
const PlanTravel = lazy(() => import("./components/planTravel/PlanTravel"));
const RegistrationFees = lazy(() => import("./components/registrationFees/RegistrationFees"));
const Scope = lazy(() => import("./components/Scope/Scope"));
const Organizers = lazy(() => import("./components/Organizers/Organizers"));
const Speakers = lazy(() => import("./components/speakers/Speakers"));
const Iabc = lazy(() => import("./components/iabc/Iabc"));
const Nabc = lazy(() => import("./components/nabc/Nabc"));
const ImportantDatesTable = lazy(() => import("./components/ImportatDatesTable/ImportantDatesTable"));

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component */}
      <Navbar />
      <Suspense fallback={<Loading />}>
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
                  <Title title="Important Dates" />
                  <ImportantDatesTable/>
                  <Title
                    subtitle="ABOUT THE COLLEGE"
                    title="Sri Eshwar College of Engineering"
                  />
                  <About />
                  <Title
                    subtitle="ABOUT THE DEPARTMENT"
                    title="Department of Mathematics"
                  />
                  <Department />
                  <Title subtitle="Gallery" title="Campus Photos" />
                  <Campus />
                  <Title title="Downloads" />
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
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
