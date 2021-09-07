const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");

const { RegisterValidator } = require("../middleware/validators");

router.post("/register", RegisterValidator, AuthController.Register);
router.get("/getUsers", AuthController.getUsers);
router.post(
  "/updateProfile",
  RegisterValidator,
  AuthController.UpdateUserProfile
);

module.exports = router;
