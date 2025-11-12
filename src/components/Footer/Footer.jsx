import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import Logo from "../../assets/jpeg-optimizer_logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
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

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="blur footer-b-1"></div>
      <div className="blur footer-b-2"></div>
    </div>
  );
};

export default Footer;
