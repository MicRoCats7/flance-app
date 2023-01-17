import React from "react";
import "./testimonial.css";
import profilTesti from "../../image/testiImage/profil.svg";
import starTesti from "../../image/testiImage/star-testi.svg";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <div className="testimonial-text">
          <h2>What our clients say</h2>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Orci odio vitae blandit
            et semper at ante.
          </p>
        </div>
        <div className="testimonial-column">
          <div className="testimonial-card">
            <div className="header-card">
              <img src={profilTesti} alt="" />
              <p>John Doe</p>
            </div>
            <div className="body-card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                odio vitae blandit et semper at ante.
              </p>
            </div>
            <div className="footer-card">
              <div className="star-testi">
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
              </div>
              <p>15 November</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="header-card">
              <img src={profilTesti} alt="" />
              <p>John Doe</p>
            </div>
            <div className="body-card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                odio vitae blandit et semper at ante.
              </p>
            </div>
            <div className="footer-card">
              <div className="star-testi">
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
              </div>
              <p>15 November</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="header-card">
              <img src={profilTesti} alt="" />
              <p>John Doe</p>
            </div>
            <div className="body-card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                odio vitae blandit et semper at ante.
              </p>
            </div>
            <div className="footer-card">
              <div className="star-testi">
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
                <img src={starTesti} alt="" />
              </div>
              <p>15 November</p>
            </div>
          </div>
        </div>
        <div className="arrow">
          <div className="arrow-left">
            <i class="uil uil-angle-left"></i>
          </div>
          <div className="arrow-right">
            <i class="uil uil-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
