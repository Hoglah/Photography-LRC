import React from "react";
import "./Creative.css";
import { useState } from "react";
import me from "../../assets/jpeg-optimizer_me6.jpg";

const Creative = () => {
  return (
    <section className="create" id="create">
      <div className="about-me">
        <div className="about-all">
          <div className="me-left">
            <img src={me} alt="" />
          </div>
          <div className="me-right">
            <p className="details">
              Legend Ray who happens to be the creative is a scholar with
              Bachelor's Degree In Education. Nonetheless, his prowess is
              diversified in many field of arts as a genius. He is a
              multifaceted creative with years of experiences.
            </p>
            <p className="details">
              As a result, he titles his brand as <b>Legend Ray's Consult</b>{" "}
              coupled with the mesmerising mantra, <b>Creativity Or Nothing!</b>
            </p>
            <p className="details">
              Legend Ray is an awarded photogenic and a pundit in professional
              photography, videography, video animation, graphics design,
              picture framing, T-shirt printing and in creative writing. He is
              certified and endorsed by facilitators of the respective field of
              arts as well as Registration of Business Names Act, 1962 (Act 151)
              In the Republic of Ghana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
