import React from "react";
import "./Navbar.css";
import Logo from "../../assets/jpeg-optimizer_logo.png";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entrie) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeNav, setActiveNav] = useState("#");
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 1);
  });

  return (
    <nav className="nav-bar">
      <Link to="/" href="#">
        <img src={Logo} alt="" />
      </Link>
      <div className="menu" onClick={toggleMenu}>
        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>
      <li className={`nav-items ${isOpen ? "open" : ""}`}>
        <Link to="/"
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          Portfolio
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          Services
        </a>
        <a
          href="#gallery"
          onClick={() => setActiveNav("#gallery")}
          className={activeNav === "#gallery" ? "active" : ""}
        >
          Gallery
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          Contact
        </a>
      </li>
    </nav>
  );
};

export default Navbar;
