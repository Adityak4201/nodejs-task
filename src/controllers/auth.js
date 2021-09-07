const { authenticateUser, signJWT } = require("../services/authService");
const { createUser, updateUser } = require("../services/userService");
const { validationResult } = require("express-validator");
const User = require("../models/user");
// const sharp = require("sharp");

exports.Login = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await authenticateUser({ email, password });
    // console.log(user);
    const token = await signJWT(user.email);
    //console.log(token);
    return res.json({ user, token });
  } catch (error) {
    return res.status(401).json({ errors: error });
  }
};

exports.Register = async function (req, res) {
  //console.log(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password, firstName, lastName, phone } = req.body;
  try {
    const createdUser = await createUser({
      email,
      password,
      firstName,
      lastName,
      phone,
    });
    // console.log(createdUser);
    delete createdUser.password;
    return res.send(createdUser);
  } catch (error) {
    res.status(402).json({ errors: error });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    // console.log(users);
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

exports.UpdateUserProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password, firstName, lastName, phone } = req.body;
  // console.log(email, password, firstName, lastName, phone);
  try {
    const updatedUser = await updateUser({
      email,
      password,
      phone,
      firstName,
      lastName,
    });
    // console.log(updatedUser);
    return res.send({ user: updatedUser });
  } catch (error) {
    res.status(402).json({ error });
  }
};
