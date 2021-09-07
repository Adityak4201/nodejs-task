const { createUser, updateUser } = require("../services/userService");
const { validationResult } = require("express-validator");
const User = require("../models/user");

exports.Register = async function (req, res) {
  //console.log(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, date, name, task } = req.body;
  try {
    const createdUser = await createUser({
      email,
      date,
      name,
      task,
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
  const { email, date, name, task } = req.body;

  try {
    const updatedUser = await updateUser({
      email,
      date,
      name,
      task,
    });
    // console.log(updatedUser);
    return res.send({ user: updatedUser });
  } catch (error) {
    res.status(402).json({ error });
  }
};
