import isEmail from "validator/lib/isEmail";

const validate = (email, password) => {
  const errors = {};

  if (!email) {
    errors.email = "Your email is required";
    errors.emailErrorStatus = true;
  }
  if (!isEmail(email)) {
    errors.invalid = "Please provide a valid email";
    errors.emailErrorStatus2 = true;
  }
  if (!password) {
    errors.password = "Please provide your password";
    errors.passwordErrorStatus = true;
  }

  return errors;
};

export default validate;
