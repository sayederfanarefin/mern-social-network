const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (Validator.isEmpty(data.status)) {
    errors.status = "Status is required";
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Handle is required";
  }

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle must be between 2 and 40 characters";
  }

  return {
    errors,
    isValid: errors
  };
};
