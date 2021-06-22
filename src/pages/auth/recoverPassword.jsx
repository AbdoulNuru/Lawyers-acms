import React from "react";
import { Link } from "react-router-dom";

const RecoverPassword = () => {
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
                <Link to="/register" className="switcher-text">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/forgot-password" className="switcher-text active">
                  Forgot Password
                </Link>
              </li>
            </ul>
          </div>
          <div className="fxt-form">
            <div className="fxt-transformY-50 fxt-transition-delay-1">
              <p>Recover Your Password</p>
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
                <div
                  className="fxt-transformY-50 fxt-transition-delay-4"
                  style={{ float: "right" }}
                >
                  <div className="fxt-checkbox-area">
                    <button type="submit" className="fxt-btn-fill">
                      Recover Password
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

export default RecoverPassword;
