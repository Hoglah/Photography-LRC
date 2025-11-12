import React from "react";
import "./Header.css";
import Me from "../../assets/jpeg-optimizer_me7 (1).jpeg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Header = () => {
  return (
    <section id="home">
      <div className="home-img">
        <img src={Me} alt="mine image" loading="lazy" />
        <h1>I'm Legend Ray</h1>
      </div>
      <div className="home-content">
        <h2 className="typing">
          Photographer | Videographer | Graphics Designer
        </h2>
        <p>
          Chasing the light, finding magic in the ordinary. Every photo tells a
          story, what tale does this one unfold?. Ghana's soul, revealed through
          my lens. A moment frozen in time, forever etched in memory
        </p>
      </div>

      <div className="socials">
        <a href="https://www.facebook.com/share/1A1JEcR6eP/">
          <FaFacebookF />
        </a>
        <a href="https://www.tiktok.com/@legend_ray.s_consult?_t=8nd96KwRVkU&_r=1">
          <AiOutlineTikTok />
        </a>
        <a href="https://www.instagram.com/legendray.s_inscribed_memories?igsh=Mmhsb3dvcDhpMHdi">
          <FaInstagram />
        </a>
        <a href="https://www.threads.net/@legend_ray.s_consult">
          <FaThreads />
        </a>
      </div>
    </section>
  );
};

export default Header;
