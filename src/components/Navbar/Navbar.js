import React, { Component } from "react";
import { Link } from "react-router-dom";
import companylogo from "../../image/logoImage/Flance.svg";
// import profile from '../../image/profile-amri-al.jpg'
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img src={companylogo} alt="Flance Logo" />
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "uil uil-multiply" : "uil uil-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <div className='navbar-profile'>
                    <img src={profile} alt='profile amri' />
                </div> */}

        <div className="button-SL">
          <Link to="/login">
            <button className="btn-login">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn-signin">Sign in</button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
