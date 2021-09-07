const { check } = require("express-validator");

exports.RegisterValidator = [
  check("email", "E-mail is required").isEmail(),
  check("date", "Date is required").trim().isDate(),
  check("name", "Name is required").not().isEmpty(),
  check("task", "Task is required").not().isEmpty(),
];
