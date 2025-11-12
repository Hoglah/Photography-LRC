import React, { useRef } from "react";
import "./Contact.css";
import { MdAddIcCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tqn0new", "template_9efnynj", form.current, {
        publicKey: "gAe-ivAPKwV0AbwM6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="container contact-container" id="contact">
      <h2>~ Get in Touch ~</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <i>
              <MdAddIcCall />
            </i>
            <h3>Call Me</h3>
            <a href="tel:+233547351937">+233 54 735 19 37</a>
          </div>
          <div className="contact-card">
            <i>
              <SiMinutemailer />
            </i>
            <h3>Email Me</h3>
            <a href="mailto:legendray@gmail">legendraysconsult@gmail.com</a>
          </div>
          <div className="contact-card">
            <i>
              <IoLogoWhatsapp />
            </i>
            <h3>Whatsapp Me</h3>
            <a
              href="https://wa.me/c/233547351937
"
            >
              +233 54 735 19 37
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form ref={form} id="contactForm" onSubmit={sendEmail}>
            <div className="form-group">
              <div>
                <label for="name">Your First Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label for="lastname">Your Last Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <label for="email">Your Email</label>
                <input
                  type="email"
                  name=""
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label for="subject">Your Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  id="subject"
                  placeholder="Enter Your Subject"
                />
              </div>
            </div>
            <div>
              <label for="message">Your Message</label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                placeholder="Write Your Message Here..."
              ></textarea>
            </div>
            <button className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
