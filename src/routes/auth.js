const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");

const {
  RegisterValidator,
  LoginValidator,
  UpdateProfileValidator,
} = require("../middleware/validators");

router.post("/login", LoginValidator, AuthController.Login);
router.post("/register", RegisterValidator, AuthController.Register);
router.get("/getUsers", AuthController.getUsers);
router.post(
  "/updateProfile",
  UpdateProfileValidator,
  AuthController.UpdateUserProfile
);

module.exports = router;
