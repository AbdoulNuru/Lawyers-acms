import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {
  verifyAccount,
  resendOtp,
  closeMessage,
} from "../../redux/actions/auth/signupAction";

const Otp = (props) => {
  let partialEmail, emailDomain;

  const [digit1, setDigit1] = useState(""),
    [digit2, setDigit2] = useState(""),
    [digit3, setDigit3] = useState(""),
    [digit4, setDigit4] = useState(""),
    [, setOpen] = useState(false),
    [email] = useState(localStorage.getItem("verify-email"));

  const onSubmit = async (e) => {
      e.preventDefault();
      const send = {
        otp: digit1 + digit2 + digit3 + digit4,
        email,
      };
      await props.verifyAction(send, props.history);
    },
    onResend = async (e) => {
      e.preventDefault();
      await props.resendOTP({ email });
    },
    handleClose = () => {
      setOpen(false);
    };

  if (email !== null) {
    partialEmail = email.substr(0, 5);
    const atIndex = email.indexOf("@");
    emailDomain = email.substr(atIndex + 1, email.length);
  } else {
    partialEmail = "****";
    emailDomain = "";
  }

  return (
    <>
      <section className="fxt-otp-layout1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-7 col-sm-12 col-12 fxt-bg-color">
              <div className="fxt-content">
                <div className="fxt-header">
                  <a href="/" className="fxt-logo">
                    <img src="img/my-logo.jpeg" alt="Logo" />
                  </a>
                  <a href="/otp" className="fxt-otp-logo">
                    <img src="img/otp-icon.png" alt="Otp Logo" />
                  </a>
                  <h2>Two-Step Verification</h2>
                  <p>
                    We’ve sent a verification code to an email beginning in
                    <span>{partialEmail + "*****" + emailDomain}</span>
                  </p>
                </div>
                <div className="fxt-form">
                  <p>Enter OTP Code Here:</p>
                  <form
                    onSubmit={(e) => onSubmit(e)}
                    method="POST"
                    id="otp-form"
                  >
                    <div className="fxt-transformY-50 fxt-transition-delay-1">
                      <div className="fxt-form-row">
                        <input
                          type="text"
                          className="fxt-form-col otp-input form-control"
                          name="digit1"
                          maxlength="1"
                          required="required"
                          onChange={(e) => setDigit1(e.target.value.trim())}
                        />
                        <input
                          type="text"
                          className="fxt-form-col otp-input form-control"
                          name="digit2"
                          maxlength="1"
                          required="required"
                          onChange={(e) => setDigit2(e.target.value.trim())}
                        />
                        <input
                          type="text"
                          className="fxt-form-col otp-input form-control"
                          name="digit3"
                          maxlength="1"
                          required="required"
                          onChange={(e) => setDigit3(e.target.value.trim())}
                        />
                        <input
                          type="text"
                          className="fxt-form-col otp-input form-control"
                          name="digit4"
                          maxlength="1"
                          required="required"
                          onChange={(e) => setDigit4(e.target.value.trim())}
                        />
                      </div>
                    </div>
                    <div className="fxt-form-btn fxt-transformY-50 fxt-transition-delay-4">
                      <button type="submit" className="fxt-btn-fill">
                        Verify
                      </button>
                    </div>
                  </form>
                </div>
                <div className="fxt-footer">
                  <div className="fxt-transformY-50 fxt-transition-delay-7">
                    <p>
                      Haven't received your code?
                      <button
                        className="fxt-btn-resend"
                        type="submit"
                        onClick={(e) => onResend(e)}
                      >
                        Resend code
                      </button>
                    </p>
                  </div>
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
        open={props.verifyState.open}
        autoHideDuration={200}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{props.verifyState.error}</span>}
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
      verifyState: state.verify,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      verifyAction: (userInfo, history) =>
        dispatch(verifyAccount(userInfo, history)),
      resendOTP: (userInfo, history) => dispatch(resendOtp(userInfo, history)),
      closeMessage: () => dispatch(closeMessage()),
    };
  };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Otp));
