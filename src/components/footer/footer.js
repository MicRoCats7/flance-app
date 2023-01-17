import React from "react";
import "./footer.css";
import companyLogo from "../../image/logoImage/logo-footer.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content__left">
          <div className="footer-content__left__logo">
            <img src={companyLogo} alt="" />
          </div>
          <div className="text-footer">
            <h3>Let You’r Freelance Journey</h3>
            <h4>Starts Here!</h4>
            <div className="underline"></div>
          </div>
          <div className="footer-form-section">
            <form>
              <input type="email" placeholder="Enter You'r Email Here" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-content__right">
          <div className="container-column-footer">
            <div className="column-footer">
              <h3>Contact</h3>
              <ul>
                <li>Email Us</li>
                <li>Company</li>
                <li>Careers</li>
                <li>How it Works</li>
              </ul>
            </div>
            <div className="column-footer">
              <h3>Support</h3>
              <ul>
                <li>FAQs</li>
                <li>Help Center</li>
                <li>Consult</li>
              </ul>
            </div>
            <div className="column-footer">
              <h3>Get in touch</h3>
              <ul>
                <li>Flance@gmail.com</li>
                <li>+62 834 8756 1110</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      <div className="underline-bottom"></div>
    </div>
  );
}

export default Footer;
