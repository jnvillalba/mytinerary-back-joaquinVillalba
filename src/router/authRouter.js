const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");
const {
  verifyRegisterData,
  verifyAuthData,
  hashPassword,
  verifyPassword,
  verifyUserExists,
  generateToken,
} = require("../middlewares/auth");

const authRouter = express.Router();

authRouter.post("/register", verifyRegisterData, hashPassword, registerUser);
authRouter.post(
  "/login",
  verifyAuthData,
  verifyUserExists,
  verifyPassword,
  generateToken,
  authUser
);

module.exports = authRouter;
