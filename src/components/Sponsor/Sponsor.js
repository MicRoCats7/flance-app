import React, { Component } from "react";
import "./Sponsor.css";
import sponsorLogoMC from "../../image/sponsorImage/microsoft.png";
import sponsorLogoGH from "../../image/sponsorImage/github.png";
import sponsorLogoGO from "../../image/sponsorImage/google.png";
import sponsorLogoIBM from "../../image/sponsorImage/IBM.png";
import sponsorLogo1000 from "../../image/sponsorImage/1000.png";
import sponsorLogoES from "../../image/sponsorImage/ericsson.png";
import sponsorLogoOE from "../../image/sponsorImage/oracle.png";
import sponsorLogoHI from "../../image/sponsorImage/huawei.png";
import sponsorLogoKI from "../../image/sponsorImage/kominfo.png";
import sponsorLogoBK from "../../image/sponsorImage/bangkit.png";

class Sponsor extends Component {
  render() {
    return (
      <div className="sponsor">
        <div className="sponsor-title">
          <h2>Trusted by</h2>
        </div>
        <div className="sponsor-logo">
          <div className="sponsor-logo-img">
            <img src={sponsorLogoMC} alt="Microsoft Logo" loading="lazy"/>
            <img src={sponsorLogoGH} alt="Microsoft Logo" loading="lazy"/>
            <img src={sponsorLogoGO} alt="Microsoft Logo" loading="lazy"/>
            <img src={sponsorLogoIBM} alt="Microsoft Logo" loading="lazy"/>
            <img src={sponsorLogo1000} alt="Microsoft Logo" loading="lazy"/>
            <img src={sponsorLogoES} alt="Microsoft Logo" loading="lazy"/>
            <img src={sponsorLogoOE} alt="Microsoft Logo" loading="lazy"/>
            <img src={sponsorLogoHI} alt="Microsoft Logo" loading="lazy"/>
            <img src={sponsorLogoKI} alt="Microsoft Logo" loading="lazy"/>
            <img src={sponsorLogoBK} alt="Microsoft Logo" loading="lazy"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsor;
