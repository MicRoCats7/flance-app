import React from "react";
import "./style/login.css";
import logoImg from '../image/logoImage/Flance.svg'
import imgRegister from '../image/logoImage/img-login.png'
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div>
        <div className="logo-form">
          <img src={logoImg} alt="" />
        </div>
        <div className="form-login">
          <div className="form-kiri">
            <img src={imgRegister} alt="" className="gambar-form" />
          </div>
          <div className="con-form-kanan">
            <p className="title-form">Log in</p>
            <p className="text-form">
              Don't Have an Accout yet?{" "}
              <Link to="/login" className="link-text-form">
                Create Account
              </Link>
            </p>
            <form action="test.php" method="post" className="form-kanan">
              <p className="ket1">Email</p>
              <input
                type="text"
                name="email"
                placeholder="Masukan Email"
                className="form-email"
                pattern="[^ @]*@[^ @]*"
                required
              />
              <p className="ket2">Password</p>
              <input
                type="password"
                name="password"
                placeholder="Masukan Password"
                className="form-password"
                required
              />
              <a type="submit" name="submit" value="Login" className="btn-form">
                Log In
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
