const User = require("../models/user");

exports.createUser = async (userData) => {
  try {
    const user = new User(userData);
    var createdUser = await user.save();
    return createdUser;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

exports.updateUser = async (userData) => {
  try {
    // console.log("userData", userData);
    const filter = { email: userData.email };
    const update = {
      name: userData.name,
      email: userData.email,
      date: userData.date,
      task: userData.task,
    };
    let user = await User.findOneAndUpdate(filter, update, {
      new: true,
      useFindAndModify: false,
    });
    if (!user) {
      throw "User Not Found";
    }

    return user;
  } catch (error) {
    throw error;
  }
};
