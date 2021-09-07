const { check } = require("express-validator");

exports.LoginValidator = [
  check("email", "E-mail is required").not().isEmpty(),
  check("password", "Password is required").not().isEmpty(),
];

exports.RegisterValidator = [
  check("email", "E-mail is required").isEmail(),
  check("password", "Password is required").isLength({ min: 5 }),
  check("firstName", "First Name is required").not().isEmpty(),
  check("lastName", "Last Name is required").not().isEmpty(),
  check("phone", "Phone Number is required").not().isEmpty(),
];

exports.UpdateProfileValidator = [
  check("email", "E-mail is required").isEmail(),
  check("password", "Password is required").isLength({ min: 5 }),
  check("firstName", "First Name is required").not().isEmpty(),
  check("lastName", "Last Name is required").not().isEmpty(),
  check("phone", "Phone Number is required").not().isEmpty(),
];
