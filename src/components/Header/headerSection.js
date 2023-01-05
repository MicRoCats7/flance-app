import React, { Component } from "react";
import "./headerSection.css";
import imgHero from '../../image/heroImage/img-hero-section.png'
import start from '../../image/heroImage/start.svg'
import start2 from '../../image/heroImage/start2.svg'
import start3 from '../../image/heroImage/start3.svg'
import line from '../../image/heroImage/line.svg'
import experience from '../../image/heroImage/experience-img.svg'

class Header extends Component {
  render() {
    return (
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-start-top">
            <img src={start}  alt="start" loading="lazy"/>
          </div>
          <div className="hero-start-center">
            <img src={start2}  alt="start" loading="lazy"/>
            <img src={start3}  alt="start" loading="lazy"/>
          </div>
          <div className="hero-text">
            <h1>Hiring the world <img src={line} alt="line" /> <br></br> class freelancer with better experiences</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
            <div className="hero-form-section">
              <form>
                <input type="email" placeholder="Enter Your Email" />
                <button>Get Started</button>
              </form>
          </div>
            <div className="hero-section-experience">
              <div className="experience-text">
                <div className="number">
                  <span className="pagar">#</span>
                  <span className="angka">40</span>
                  <span className="plus">+</span>
                </div>
                <h2>Feel the Best <br></br> Freelance Experience</h2>
                <p>From the Expert</p>
              </div>
              <div className="experience-img">
                <img src={experience} alt="hero" loading="lazy"/>
              </div>
            </div>
        </div>
        <div className="hero-img">
          <img src={imgHero} alt="hero" loading="lazy"/>
        </div>
      </div>
    );
  }
}

export default Header;
