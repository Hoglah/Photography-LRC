import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Portofolio from "../../components/Portofolio/Portofolio";
import Services from "../../components/Services/Services";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Portofolio />
      <Services />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
