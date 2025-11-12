import React from "react";
import "./About.css";
import Logo from "../../assets/jpeg-optimizer_logo.png";
import { Link } from "react-router";

const About = () => {
  setTimeout(() => {
    document.querySelector(".content1").classList.add("visible");
  }, 2000);

  setTimeout(() => {
    document.querySelector(".content2").classList.add("visible");
  }, 3000);

  setTimeout(() => {
    document.querySelector(".main").classList.add("visible");
  }, 1000);

  return (
    <section className="container about-container" id="about">
      <h2 className="main">We Capture the moments</h2>
      <p className="content1">
        At Legend Ray's Consult, we specialise in freezing those fleeting
        moments in time that hold immense significance for you. With our passion
        for photography and keen eye for detail, we transform ordinary moments
        into extraordinary memories.
      </p>

      <p className="content2">
        Whether it's a milestone event, a candid portrait, or the breathtaking
        beauty of nature, we strive to encapsulate the essence of every moment,
        ensuring that your cherished memories last a lifetime. Trust us to
        capture the magic of your life's journey, one frame at a time.
      </p>
      <img src={Logo} alt="logo" loading="lazy" />
      <Link to="/creative" className="creative">
        ~~About the creative~~
      </Link>
    </section>
  );
};

export default About;
