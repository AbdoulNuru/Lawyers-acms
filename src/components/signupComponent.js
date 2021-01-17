import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import isEmail from "validator/lib/isEmail";
import { signupNow, closeMessage } from "../redux/actions/signupAction";

class SignUpForm extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      preferedLanguage: "",
    },
    errors: {},
    open: false,
    status: false,
  };

  onChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      const send = {
        firstName: this.state.data.firstName,
        lastName: this.state.data.lastName,
        email: this.state.data.email,
        password: this.state.data.password,
        role: this.state.data.role,
        preferedLanguage: this.state.data.preferedLanguage,
      };
      await this.props.signupAction(send, this.props.history);
    }
  };

  validate = (data) => {
    const errors = {};
    if (!data.firstName) {
      errors.firstName = "Please provide your first name";
      errors.firstNameErrorStatus = true;
    }
    if (!data.lastName) {
      errors.lastName = "Please provide your last name";
      errors.lastNameErrorStatus = true;
    }
    if (!data.email) {
      errors.email = "Your email is required";
      errors.emailErrorStatus = true;
    }
    if (!isEmail(data.email)) {
      errors.invalid = "Please provide a valid email";
      errors.emailErrorStatus = true;
    }
    if (!data.password) {
      errors.password = "Please provide your password";
      errors.passwordErrorStatus = true;
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Your passwords don't match, try again!!";
      errors.confirmPasswordErrorStatus = true;
    }
    if (!data.role) {
      errors.role = "Please select your role";
      errors.roleErrorStatus = true;
    }
    if (!data.preferedLanguage) {
      errors.preferedLanguage = "Please select your prefered language";
      errors.preferedLanguageErrorStatus = true;
    }
    return errors;
  };

  render() {
    const { data, errors, open, status } = this.state;
    return (
      <>
        <section className="fxt-template-animation fxt-template-layout4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-12 fxt-bg-wrap">
                <div
                  className="fxt-bg-img"
                  data-bg-image="img/figure/bg4-l.jpg"
                  //   style={{
                  //     backgroundImage: "url ('img/figure/bg4l.jpg)",
                  //   }}
                >
                  <div className="fxt-header">
                    <div class="fxt-transformY-50 fxt-transition-delay-1">
                      <a href="login-4.html" class="fxt-logo">
                        <img src="img/logo-4.png" alt="Logo" />
                      </a>
                    </div>
                    <div className="fxt-transformY-50 fxt-transition-delay-2">
                      <h1>Farmers Investors Connect</h1>
                    </div>
                    <div className="fxt-transformY-50 fxt-transition-delay-3">
                      <p>
                        This is a platform that will help connecting farmers and
                        investors so that we can overcome the funding problem
                        that hinders the improvment of our agricultural sector,
                        taking into account that this sector is crucial to our
                        country's economy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 fxt-bg-color">
                <div className="fxt-content">
                  <div className="fxt-form">
                    <form onSubmit={(e) => this.onSubmit(e)} aria-label="form">
                      <TextField
                        // className={Styles.inputs}
                        style={{ marginBottom: "10px", width: "100%" }}
                        name="firstName"
                        inputProps={{
                          "aria-label": "firstname",
                        }}
                        label="Firstname"
                        variant="standard"
                        error={errors.firstNameErrorStatus}
                        helperText={errors.firstName}
                        value={data.firstName}
                        onChange={this.onChange}
                      />
                      <TextField
                        // className={Styles.inputs}
                        style={{ marginBottom: "10px", width: "100%" }}
                        name="lastName"
                        inputProps={{
                          "aria-label": "lastname",
                        }}
                        label="Lastname"
                        variant="standard"
                        error={errors.lastNameErrorStatus}
                        helperText={errors.lastName}
                        value={data.lastName}
                        onChange={this.onChange}
                      />
                      <TextField
                        // className={Styles.inputs}
                        style={{ marginBottom: "10px", width: "100%" }}
                        name="email"
                        inputProps={{
                          "aria-label": "email",
                        }}
                        label="Email"
                        variant="standard"
                        error={errors.emailErrorStatus}
                        helperText={errors.email}
                        value={data.email}
                        onChange={this.onChange}
                      />
                      <FormControl style={{ width: "100%" }}>
                        <InputLabel htmlFor="role">Role</InputLabel>
                        <Select
                          native
                          value={data.role}
                          name="role"
                          label="Role"
                          inputProps={{
                            "arial-label": "role",
                            name: "role",
                            id: "role",
                          }}
                          error={errors.roleErrorStatus}
                          onChange={this.onChange}
                        >
                          <option value="" />
                          <option value="farmer">Farmer</option>
                          <option value="investor">investor</option>
                        </Select>
                        <FormHelperText
                          style={{
                            color: "#F54336",
                            marginLeft: "0px",
                            marginTop: "-2%",
                          }}
                        >
                          {errors.role}
                        </FormHelperText>
                      </FormControl>
                      <FormControl style={{ width: "100%" }}>
                        <InputLabel htmlFor="preferedlanguage">
                          Prefered Language
                        </InputLabel>
                        <Select
                          native
                          value={data.preferedLanguage}
                          name="preferedLanguage"
                          label="Prefered Language"
                          inputProps={{
                            "arial-label": "preferedlanguage",
                            name: "preferedLanguage",
                            id: "preferedlanguage",
                          }}
                          error={errors.preferedLanguageErrorStatus}
                          onChange={this.onChange}
                        >
                          <option value="" />
                          <option value="eng">English</option>
                          <option value="kiny">Kinyarwanda</option>
                        </Select>
                        <FormHelperText
                          style={{
                            color: "#F54336",
                            marginLeft: "0px",
                            marginTop: "-2%",
                          }}
                        >
                          {errors.preferedLanguage}
                        </FormHelperText>
                      </FormControl>
                      <TextField
                        // className={Styles.inputs}
                        style={{ marginBottom: "10px", width: "100%" }}
                        name="password"
                        inputProps={{
                          "aria-label": "password",
                        }}
                        label="Password"
                        variant="standard"
                        error={errors.passwordErrorStatus}
                        helperText={errors.password}
                        value={data.password}
                        onChange={this.onChange}
                      />
                      <TextField
                        // className={Styles.inputs}
                        style={{ marginBottom: "10px", width: "100%" }}
                        name="confirmPassword"
                        inputProps={{
                          "aria-label": "password",
                        }}
                        label="Confirm Password"
                        variant="standard"
                        error={errors.confirmPasswordErrorStatus}
                        helperText={errors.confirmPassword}
                        value={data.confirmPassword}
                        onChange={this.onChange}
                      />

                      <div class="form-group">
                        <div class="fxt-checkbox-area">
                          <div class="checkbox">
                            <input id="checkbox1" type="checkbox" />
                            <label for="checkbox1">
                              I agree with the terms and condition
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="fxt-btn-fill">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="fxt-footer">
                    <p>
                      Have an account?
                      <a href="#" className="switcher-text2 inline-text">
                        Sign In
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={this.props.signupState.open}
          autoHideDuration={200}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={<span id="message-id">{this.props.signupState.error}</span>}
          action={[
            <IconButton
              key="close"
              color="inherit"
              onClick={this.props.closeMessage}
            >
              <CloseIcon aria-label="Close" />
            </IconButton>,
          ]}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signupState: state.signup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupAction: (userInfo, history) => dispatch(signupNow(userInfo, history)),
    closeMessage: () => dispatch(closeMessage()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
);
