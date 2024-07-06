import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/AboutPage";
import Hero from "./components/Hero";
import SectionCard from "./components/SectionCard";
import Footer from "./components/Footer";
import Catagory from "./components/Catagory";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Hero />
      <SectionCard />
      <Catagory />
      <Footer />
    </div>
  );
};

export default App;
