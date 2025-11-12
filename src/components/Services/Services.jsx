import React from "react";
import "./Services.css";

const Services = () => {
  setTimeout(() => {
    document.querySelector(".lead").classList.add("visible");
  }, 1000);

  setTimeout(() => {
    document.querySelector(".desc").classList.add("visible");
  }, 2000);

  setTimeout(() => {
    document.querySelector(".services-grid").classList.add("visible");
  }, 3000);

  return (
    <section className="container services-container" id="services">
      <h2 className="lead">~ Services ~</h2>
      <p className="desc">
        At Legend Ray Consult, we offer a range of professional photography
        services tailored to meet your unique needs. With a commitment to
        excellent and creativity, we strive to exceed your expectations,
        delivering captivating visuals that tell your story with passion
      </p>
      <div className="services-grid">
        <div className="services-card">
          <h3>Photography</h3>
          <h3 className="hh">~</h3>
          <p>
            Our portrait sessions are designed to showcase your pesonality and
            style in stunning imagery capturing your personality, mood, and
            beatiful moments.
          </p>
        </div>

        <div className="services-card">
          <h3>Videography</h3>
          <h3 className="hh">~</h3>
          <p>
            We capture moments that move. Through cinematic storytelling, crisp
            visuals, and seamless editing, our videography turns ideas into
            captivating motion that inspires, engages, and lasts.
          </p>
        </div>

        <div className="services-card">
          <h3>Video Animation</h3>
          <h3 className="hh">~</h3>
          <p>
            We bring your ideas to life with dynamic animations. From 2D and 3D
            to whiteboard and text, we transform concepts into visually striking
            stories that simplify, engage, and captivate, turning imagination
            into motions that leaves a lasting impact.
          </p>
        </div>

        <div className="services-card">
          <h3>Graphics Design</h3>
          <h3 className="hh">~</h3>
          <p>
            Our graphic design blends creativity and strategy to deliver visuals
            that stand out. From stunning brand identities to impactful layouts,
            we craft designs that communicate, inspire, and leave a memorable
            mark.
          </p>
        </div>

        <div className="services-card">
          <h3>Picture Frames</h3>
          <h3 className="hh">~</h3>
          <p>
            We design picture frames that go beyond preservation; turning your photos and artworks into timeless displays. Crafted with style and precision, our frames add elegance, character, and a lasting touch to every memory. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services