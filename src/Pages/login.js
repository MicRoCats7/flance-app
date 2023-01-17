import React from "react";
import flanceLogo from "../image/logoImage/Flance.svg";
import "./style/login.css";
import imgLogin from "../image/logoImage/img-login.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="logo-form">
        <img src={flanceLogo} alt="" />
      </div>
      <div className="form-login">
        <div className="form-kiri">
          <img src={imgLogin} alt="" className="gambar-form" />
        </div>
        <div className="con-form-kanan">
          <p className="title-form">Sign Up</p>
          <p className="text-form">
            Have an Account Already?{" "}
            <Link to="/register" className="link-text-form">
              Login
            </Link>
          </p>
          <form action="test.php" method="post" className="form-kanan">
            <p className="ket1">Account Use</p>
            <div className="con-radio">
              <label className="radio1" htmlFor="Seller">
                <input type="radio" id="Seller" name="cok" />
                <p className="ket-radio1">Seller</p>
              </label>
              <label className="radio2" htmlFor="Freelancer">
                <input type="radio" id="Freelancer" name="cok" />
                <p className="ket-radio2">Freelancer</p>
              </label>
            </div>
            <p className="ket2">Email</p>
            <input
              type="text"
              name="email"
              placeholder="Masukan Email"
              className="form-email"
              pattern="[^ @]*@[^ @]*"
              required
            />
            <p className="ket3">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Masukan Password"
              className="form-password"
              required
            />
            <p className="ket4">Select Needs</p>
            <select name id className="form-needs">
              <option value={1}>Web Developer</option>
              <option value={2}>Mobile Developer</option>
              <option value={3}>UI/UX Designer</option>
              <option value={4}>Content Writer</option>
              <option value={5}>Digital Marketing</option>
            </select>
            <a type="submit" name="submit" value="Login" className="btn-form">
              Create Account
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
