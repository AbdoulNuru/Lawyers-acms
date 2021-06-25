import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { resendOtp, closeMessage } from "../../redux/actions/auth/signupAction";

const RequestVerification = (props) => {
  const [email, setEmail] = useState(""),
    [, setOpen] = useState(false);

  const onSubmit = async (e) => {
      e.preventDefault();
      localStorage.setItem("verify-email", email);
      localStorage.setItem("from-login", true);
      await props.resendOTP({ email }, props.history);
    },
    handleClose = () => {
      setOpen(false);
    };

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
                  <h2>Request Account Verification</h2>
                  <p>
                    The otp will be sent to your email address
                    <span>use it to verify your account</span>
                  </p>
                </div>
                <div className="fxt-form">
                  <p>Enter Your Email Here:</p>
                  <form
                    onSubmit={(e) => onSubmit(e)}
                    method="POST"
                    id="otp-form"
                  >
                    <div className="fxt-transformY-50 fxt-transition-delay-1">
                      <div className="fxt-form-row">
                        <input
                          type="email"
                          className="fxt-form-col otp-input form-control"
                          name="email"
                          onChange={(e) => setEmail(e.target.value.trim())}
                        />
                      </div>
                    </div>
                    <div className="fxt-form-btn fxt-transformY-50 fxt-transition-delay-4">
                      <button type="submit" className="fxt-btn-fill">
                        Send Request
                      </button>
                    </div>
                  </form>
                </div>
                <div className="fxt-footer"></div>
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
        open={props.resendState.open}
        autoHideDuration={200}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{props.resendState.error}</span>}
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
      resendState: state.resend,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      resendOTP: (userInfo, history) => dispatch(resendOtp(userInfo, history)),
      closeMessage: () => dispatch(closeMessage()),
    };
  };
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RequestVerification)
);
