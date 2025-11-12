import React from "react";
import "./Portofolio.css";
import port1 from "../../assets/jpeg-optimizer_w4.jpg";
import port2 from "../../assets/jpeg-optimizer_b6.jpg";
import port3 from "../../assets/jpeg-optimizer_g2.jpg";
import port4 from "../../assets/jpeg-optimizer_e14.jpg";
import port5 from "../../assets/jpeg-optimizer_p4.jpg";
import port6 from "../../assets/jpeg-optimizer_i1.jpg";
import port7 from "../../assets/jpeg-optimizer_s1.jpg";
import port8 from "../../assets/jpeg-optimizer_f3.jpg";

const Portofolio = () => {
  return <section className="container portfolio-container" id="portfolio">
      <h2 className="section-header">~ Portfolio ~</h2>
      <div className="portfolio-grid">
        <div className="portfolio-card">
          <img src={port1} alt="port" loading="lazy"/>
          <div className="portfolio-content">
            <h1>Weddings</h1>
            <a href="#gallery">
              <button className="btn" >VIEW ALL</button>
            </a>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={port2} alt="port" loading="lazy"/>
          <div className="portfolio-content">
            <h1>Birthdays</h1>
            <a href="#gallery">
              <button className="btn">VIEW ALL</button>
            </a>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={port3} alt="port" loading="lazy"/>
          <div className="portfolio-content">
            <h1>Graduations</h1>
            <a href="#gallery">
              <button className="btn">VIEW ALL</button>
            </a>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={port4} alt="port" loading="lazy"/>
          <div className="portfolio-content">
            <h1>Events</h1>
            <a href="#gallery">
              <button className="btn">VIEW ALL</button>
            </a>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={port5} alt="port" loading="lazy"/>
          <div className="portfolio-content">
            <h1>Portraits</h1>
            <a href="#gallery">
              <button className="btn">VIEW ALL</button>
            </a>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={port6} alt="port" loading="lazy"/>
          <div className="portfolio-content">
            <h1>Infants</h1>
            <a href="#gallery">
              <button className="btn">VIEW ALL</button>
            </a>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={port7} alt="port" loading="lazy"/>
          <div className="portfolio-content">
            <h1>Studio</h1>
            <a href="#gallery">
              <button className="btn">VIEW ALL</button>
            </a>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={port8} alt="port" loading="lazy"/>
          <div className="portfolio-content">
            <h1>Flyers</h1>
            <a href="#gallery">
              <button className="btn">VIEW ALL</button>
            </a>
          </div>
        </div>
      </div>
    </section>
};

export default Portofolio;
