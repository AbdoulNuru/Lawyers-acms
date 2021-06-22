import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="fxt-template-layout27">
        <div className="fxt-content">
          <div className="fxt-header">
            <a href="login-27.html" className="fxt-logo">
              <img src="img/my-logo.jpeg" alt="Logo" />
            </a>
            <ul className="fxt-switcher-wrap">
              <li>
                <Link to="/login" className="switcher-text">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="switcher-text active">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/forgot-password" className="switcher-text">
                  Forgot Password
                </Link>
              </li>
            </ul>
          </div>
          <div className="fxt-form">
            <div className="fxt-transformY-50 fxt-transition-delay-1">
              <p>Register</p>
            </div>
            <form method="POST">
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    name="firstName"
                    placeholder="Firstname"
                    required="required"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    name="lastName"
                    placeholder="Lastname"
                    required="required"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required="required"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <select
                    name="role"
                    required="required"
                    className="form-control"
                  >
                    <option value="">Role</option>
                    <option value="farmer">Farmer</option>
                    <option value="investor">Investor</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <select
                    name="preferedLanguage"
                    required="required"
                    className="form-control"
                  >
                    <option value="">Prefered Language</option>
                    <option value="kin">Kinyarwanda</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div
                  className="fxt-transformY-50 fxt-transition-delay-4"
                  style={{ float: "right" }}
                >
                  <div className="fxt-checkbox-area">
                    <button type="submit" className="fxt-btn-fill">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
