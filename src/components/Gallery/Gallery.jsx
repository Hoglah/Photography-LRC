import React, { useState } from "react";
import "./Gallery.css";
import "./gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import images
import w1 from "../../assets/jpeg-optimizer_w1.jpg";
import w2 from "../../assets/jpeg-optimizer_w2.jpg";
import w3 from "../../assets/jpeg-optimizer_w6.jpg";
import w4 from "../../assets/jpeg-optimizer_w3.jpg";
import b4 from "../../assets/jpeg-optimizer_b4.jpg";
import b2 from "../../assets/jpeg-optimizer_b2.jpg";
import b7 from "../../assets/jpeg-optimizer_b7.jpg";
import b8 from "../../assets/jpeg-optimizer_b8.jpg";
import g1 from "../../assets/jpeg-optimizer_g1.jpg";
import g6 from "../../assets/jpeg-optimizer_g6.jpg";
import g5 from "../../assets/jpeg-optimizer_g5.jpg";
import g4 from "../../assets/jpeg-optimizer_g4.jpg";
import e15 from "../../assets/jpeg-optimizer_e15.jpg";
import e8 from "../../assets/jpeg-optimizer_e8.jpg";
import e6 from "../../assets/jpeg-optimizer_e6.jpg";
import e13 from "../../assets/jpeg-optimizer_e13.jpg";
import p1 from "../../assets/jpeg-optimizer_p1.jpg";
import p7 from "../../assets/jpeg-optimizer_p7.jpg";
import p3 from "../../assets/jpeg-optimizer_p3.jpg";
import p6 from "../../assets/jpeg-optimizer_p6.jpg";
import i2 from "../../assets/jpeg-optimizer_i2.jpg";
import i3 from "../../assets/jpeg-optimizer_i3.jpg";
import i4 from "../../assets/jpeg-optimizer_i4.jpg";
import i5 from "../../assets/jpeg-optimizer_i5.jpg";
import s2 from "../../assets/jpeg-optimizer_s2.jpg";
import s3 from "../../assets/jpeg-optimizer_s3.jpg";
import s4 from "../../assets/jpeg-optimizer_s4.jpg";
import s5 from "../../assets/jpeg-optimizer_s5.jpg";
import f4 from "../../assets/jpeg-optimizer_f4.jpg";
import f6 from "../../assets/jpeg-optimizer_f6.jpg";
import f3 from "../../assets/jpeg-optimizer_f3.jpg";
import f2 from "../../assets/jpeg-optimizer_f2.jpg";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    w1,
    w2,
    w3,
    w4,
    b7,
    b4,
    b2,
    b8,
    g1,
    g4,
    g6,
    g5,
    e13,
    e15,
    e6,
    e8,
    p1,
    p3,
    p7,
    p6,
    i2,
    i3,
    i4,
    i5,
    s2,
    s3,
    s4,
    s5,
    f2,
    f3,
    f4,
    f6,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="container gallery-container" id="gallery">
      <h2>~ Gallery ~</h2>
      <div className="general">
        <Slider {...settings}>
          {[
            { title: "Wedding Shoots", images: [w1, w2, w3, w4] },
            { title: "Birthday Shoots", images: [b7, b4, b2, b8] },
            { title: "Graduation Shoots", images: [g1, g4, g6, g5] },
            { title: "Event Shoots", images: [e13, e15, e6, e8] },
            { title: "Portrait Shoots", images: [p1, p3, p7, p6] },
            { title: "Infant Shoots", images: [i2, i3, i4, i5] },
            { title: "Studio Shoots", images: [s2, s3, s4, s5] },
            { title: "Flyers", images: [f2, f3, f4, f6] },
          ].map((group, groupIndex) => (
            <div className="card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="gen-img">
                {group.images.map((img, imgIndex) => {
                  const globalIndex = groupIndex * 4 + imgIndex;
                  return (
                    
                      <img
                        src={img}
                        alt={group.title}
                        loading="lazy"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleImageClick(globalIndex)}
                      />
                    
                  );
                })}
              </div>
              <div className="line"></div>
            </div>
          ))}
        </Slider>
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={allImages.map((img) => ({ src: img }))}
          index={lightboxIndex}
        />
      )}
    </section>
  );
};

export default Gallery;
