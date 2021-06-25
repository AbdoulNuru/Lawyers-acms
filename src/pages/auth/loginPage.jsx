import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { login, closeMessage } from "../../redux/actions/auth/loginAction";
import validate from "../../utils/validate.login";

const Login = (props) => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [errors, setErrors] = useState({}),
    [, setOpen] = useState(false);

  const onSubmit = async (e) => {
      e.preventDefault();
      const errors = validate(email, password);
      setErrors(errors);
      if (Object.keys(errors).length === 0) {
        const send = {
          email,
          password,
        };
        await props.loginAction(send, props.history);
      }
    },
    handleClose = () => {
      setOpen(false);
    };

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
              </li>
            </ul>
          </div>
          <div className="fxt-form">
            <div className="fxt-transformY-50 fxt-transition-delay-1">
              <p>Login into your account</p>
            </div>
            <form method="POST" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value.trim())}
                  />
                  {errors.emailErrorStatus === true ? (
                    <label className="errorLabel">
                      Please provide your email
                    </label>
                  ) : errors.emailErrorStatus2 === true ? (
                    <label className="errorLabel">
                      Please provide a valid email
                    </label>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-3">
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value.trim())}
                  />
                  <i
                    toggle="#password"
                    className="fa fa-fw fa-eye toggle-password field-icon"
                  ></i>
                  {errors.passwordErrorStatus === true ? (
                    <label className="errorLabel">
                      Please provide your password
                    </label>
                  ) : (
                    ""
                  )}
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
          <div className="fxt-footer">
            <div className="fxt-transformY-50 fxt-transition-delay-7">
              <p>
                Haven't verified your account? <span></span>
                <Link to="/request-verification" style={{ color: "#80B500" }}>
                  Verify
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={props.loginState.open}
        autoHideDuration={200}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{props.loginState.error}</span>}
        action={[
          <IconButton key="close" color="inherit" onClick={props.closeMessage}>
            <CloseIcon aria-label="Close" />
          </IconButton>,
        ]}
      />
    </>
  );
};

const mapStateToProps = (state) => {
    return {
      loginState: state.login,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      loginAction: (userInfo, history) => dispatch(login(userInfo, history)),
      closeMessage: () => dispatch(closeMessage()),
    };
  };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
