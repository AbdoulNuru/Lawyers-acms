import isEmail from "validator/lib/isEmail";

const validate = (
  firstName,
  lastName,
  email,
  role,
  password,
  password2,
  preferedLanguage
) => {
  const errors = {};

  if (!firstName) {
    errors.firstName = "Please provide your first name";
    errors.firstNameErrorStatus = true;
  }
  if (!lastName) {
    errors.lastName = "Please provide your last name";
    errors.lastNameErrorStatus = true;
  }
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
  if (password !== password2) {
    errors.confirmPassword = "Your passwords don't match, try again!!";
    errors.confirmPasswordErrorStatus = true;
  }
  if (!role) {
    errors.role = "Please select your role";
    errors.roleErrorStatus = true;
  }
  if (!preferedLanguage) {
    errors.preferedLanguage = "Please select your prefered language";
    errors.preferedLanguageErrorStatus = true;
  }
  return errors;
};

export default validate;
