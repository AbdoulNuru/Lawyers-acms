import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
                <a href="login-27.html" className="switcher-text active">
                  Login
                </a>
              </li>
              <li>
                <Link to="/register" className="switcher-text">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/forgot-password" className="switcher-text">
                  Forgot password
                </Link>
                {/* <a href="forgot-password-27.html" className="switcher-text">
                  Forgot Password
                </a> */}
              </li>
            </ul>
          </div>
          <div className="fxt-form">
            <div className="fxt-transformY-50 fxt-transition-delay-1">
              <p>Login into your account</p>
            </div>
            <form method="POST">
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
                <div className="fxt-transformY-50 fxt-transition-delay-3">
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="********"
                    required="required"
                  />
                  <i
                    toggle="#password"
                    className="fa fa-fw fa-eye toggle-password field-icon"
                  ></i>
                </div>
              </div>
              <div className="form-group">
                <div
                  className="fxt-transformY-50 fxt-transition-delay-4"
                  style={{ float: "right" }}
                >
                  <div className="fxt-checkbox-area">
                    <button type="submit" className="fxt-btn-fill">
                      Log in
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

export default Login;
