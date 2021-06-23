import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { signupNow, closeMessage } from "../../redux/actions/auth/signupAction";
import validate from "../../utils/validate.register";

const Register = (props) => {
  const [firstName, setFirstName] = useState(""),
    [lastName, setLastName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [password2, setpassword2] = useState(""),
    [role, setRole] = useState(""),
    [preferedLanguage, setPreferedLanguage] = useState(""),
    [errors, setErrors] = useState({}),
    [, setOpen] = useState(false);

  const onSubmit = async (e) => {
      e.preventDefault();
      const errors = validate(
        firstName,
        lastName,
        email,
        role,
        password,
        password2,
        preferedLanguage
      );
      setErrors(errors);
      console.log(errors);
      if (Object.keys(errors).length === 0) {
        const send = {
          firstName,
          lastName,
          email,
          password,
          role,
          preferedLanguage,
        };
        localStorage.setItem("verify-email", email);
        await props.registerAction(send, props.history);
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
            <form onSubmit={(e) => onSubmit(e)} method="POST">
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    name="firstName"
                    placeholder="Firstname"
                    onChange={(e) => setFirstName(e.target.value.trim())}
                  />
                  {errors.firstNameErrorStatus === true ? (
                    <label className="errorLabel">
                      Please provide your first name
                    </label>
                  ) : (
                    ""
                  )}
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
                    onChange={(e) => setLastName(e.target.value.trim())}
                  />
                  {errors.lastNameErrorStatus === true ? (
                    <label className="errorLabel">
                      Please provide your last name
                    </label>
                  ) : (
                    ""
                  )}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <select
                    name="role"
                    // required="required"
                    className="form-control"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Role</option>
                    <option value="farmer">Farmer</option>
                    <option value="investor">Investor</option>
                  </select>
                  {errors.roleErrorStatus === true ? (
                    <label className="errorLabel">
                      Please select your role
                    </label>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <select
                    name="preferedLanguage"
                    // required="required"
                    className="form-control"
                    onChange={(e) => setPreferedLanguage(e.target.value)}
                  >
                    <option value="">Prefered Language</option>
                    <option value="kin">Kinyarwanda</option>
                    <option value="en">English</option>
                  </select>
                  {errors.preferedLanguageErrorStatus === true ? (
                    <label className="errorLabel">
                      Please select your prefered language
                    </label>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value.trim())}
                  />
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
                <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <input
                    type="password"
                    id="password2"
                    className="form-control"
                    name="password2"
                    placeholder="Confirm Your Password"
                    onChange={(e) => setpassword2(e.target.value)}
                  />
                  {errors.confirmPasswordErrorStatus === true ? (
                    <label className="errorLabel">
                      Your passwords don't match, try again!!
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
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={props.registerState.open}
        autoHideDuration={200}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{props.registerState.error}</span>}
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
      registerState: state.signup,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      registerAction: (userInfo, history) =>
        dispatch(signupNow(userInfo, history)),
      closeMessage: () => dispatch(closeMessage()),
    };
  };
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
