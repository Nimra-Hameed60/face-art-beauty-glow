import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Bridal from "./components/Bridal";
import Gallery from "./components/Gallery";
// import InstagramSection from "./components/InstagramSection";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [presetService, setPresetService] = useState("");

  const handleBookBridal = () => {
    setPresetService("Bridal Makeup");

    document
      .querySelector("#appointment")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-cream-50">
      <Navbar />
      <Hero />
      <About />
      <Services onSelectService={setPresetService} />
      <Bridal onBookBridal={handleBookBridal} />
      <Gallery />
      {/* <InstagramSection /> */}
      <Appointment presetService={presetService} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;