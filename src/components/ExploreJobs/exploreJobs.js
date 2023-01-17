import React, { Component } from "react";
import "./exploreJobs.css";
import logoJobs from '../../image/logoImage/company-logo.svg'

class Explore extends Component {
  render() {
    return (
      <div className="explore">
        <div className="explore-container">
          <div className="explore-title">
            <h1>What We Do</h1>
            <p>
              Seemless skill and knowledge evaluation solution, serving lots of
              business and educational users wordwide.
            </p>
          </div>
          <div className="explore-column">
            <div className="explore-column-item">
              <div className="header-item">
                <i class="uil uil-map-marker"></i>
                <h4>Semarang, Indonesia</h4>
                <div className="fulltime-item">
                  <p>Full Time</p>
                </div>
              </div>
              <div className="body-item">
                <h3>User Experience Designer at PT Formulatrix Indonesia</h3>
              </div>
              <div className="company-logo">
                <img src={logoJobs} alt='' />
                <div className="text-company">
                  <h4>PT Formulatrix Indonesia</h4>
                  <p>1 week ago</p>
                </div>
              </div> 
            </div>
            <div className="explore-column-item">
              <div className="header-item">
                <i class="uil uil-map-marker"></i>
                <h4>Semarang, Indonesia</h4>
                <div className="fulltime-item">
                  <p>Full Time</p>
                </div>
              </div>
              <div className="body-item">
                <h3>User Experience Designer at PT Formulatrix Indonesia</h3>
              </div>
              <div className="company-logo">
                <img src={logoJobs} alt='' />
                <div className="text-company">
                  <h4>PT Formulatrix Indonesia</h4>
                  <p>1 week ago</p>
                </div>
              </div> 
            </div>
            <div className="explore-column-item">
              <div className="header-item">
                <i class="uil uil-map-marker"></i>
                <h4>Semarang, Indonesia</h4>
                <div className="fulltime-item">
                  <p>Full Time</p>
                </div>
              </div>
              <div className="body-item">
                <h3>User Experience Designer at PT Formulatrix Indonesia</h3>
              </div>
              <div className="company-logo">
                <img src={logoJobs} alt='' />
                <div className="text-company">
                  <h4>PT Formulatrix Indonesia</h4>
                  <p>1 week ago</p>
                </div>
              </div> 
            </div>
            <div className="explore-column-item">
              <div className="header-item">
                <i class="uil uil-map-marker"></i>
                <h4>Semarang, Indonesia</h4>
                <div className="fulltime-item">
                  <p>Full Time</p>
                </div>
              </div>
              <div className="body-item">
                <h3>User Experience Designer at PT Formulatrix Indonesia</h3>
              </div>
              <div className="company-logo">
                <img src={logoJobs} alt='' />
                <div className="text-company">
                  <h4>PT Formulatrix Indonesia</h4>
                  <p>1 week ago</p>
                </div>
              </div> 
            </div>
            <div className="explore-column-item">
              <div className="header-item">
                <i class="uil uil-map-marker"></i>
                <h4>Semarang, Indonesia</h4>
                <div className="fulltime-item">
                  <p>Full Time</p>
                </div>
              </div>
              <div className="body-item">
                <h3>User Experience Designer at PT Formulatrix Indonesia</h3>
              </div>
              <div className="company-logo">
                <img src={logoJobs} alt='' />
                <div className="text-company">
                  <h4>PT Formulatrix Indonesia</h4>
                  <p>1 week ago</p>
                </div>
              </div> 
            </div>
            <div className="explore-column-item">
              <div className="header-item">
                <i class="uil uil-map-marker"></i>
                <h4>Semarang, Indonesia</h4>
                <div className="fulltime-item">
                  <p>Full Time</p>
                </div>
              </div>
              <div className="body-item">
                <h3>User Experience Designer at PT Formulatrix Indonesia</h3>
              </div>
              <div className="company-logo">
                <img src={logoJobs} alt='' />
                <div className="text-company">
                  <h4>PT Formulatrix Indonesia</h4>
                  <p>1 week ago</p>
                </div>
              </div> 
            </div>
          </div>
          <div className="btn-exploreMore">
            <button>Explore More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
