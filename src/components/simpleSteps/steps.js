import React, { Component } from "react";
import "./step.css";
import findJobs from "../../image/stepsImage/Find Jobs.svg";
import bookInterview from "../../image/stepsImage/Book Interview.svg";
import getTheJob from "../../image/stepsImage/Get Thee Job.svg";
import arrow1 from "../../image/stepsImage/arrow1.svg";
import arrow2 from "../../image/stepsImage/arrow2.svg";

class Steps extends Component {
  render() {
    return (
      <div className="steps">
        <div className="steps-title">
          <h1>Simple Steps to Apply</h1>
        </div>
        <div className="steps-content">
          <div className="steps-content-item">
            <div className="steps-content-item-iconText">
              <img src={findJobs} alt="Find jobs icon" loading="lazy" />
              <div className="steps-text">
                <h3>Find Jobs</h3>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Orci odio vitae
                  blandit et semper at ante.
                </p>
              </div>
            </div>
            <img src={arrow1} alt="arrow1" loading="lazy" />
            <div className="steps-content-item-iconText">
              <div className="img-center">
                <img src={bookInterview} alt="Find jobs icon" loading="lazy" />
              </div>
              <div className="steps-text">
                <h3>Book Interview</h3>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Orci odio vitae
                  blandit et semper at ante.
                </p>
              </div>
            </div>
            <img src={arrow2} alt="arrow2" loading="lazy" />
            <div className="steps-content-item-iconText">
              <div className="img-end">
                <img src={getTheJob} alt="Find jobs icon" loading="lazy" />
              </div>
              <div className="steps-text">
                <div className="text-end">
                  <h3>Get The Job</h3>
                  <p>
                    Lorem ipsum dolor sit amet, adipiscing elit. Orci odio vitae
                    blandit et semper at ante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Steps;
