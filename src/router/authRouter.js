const express = require("express");
const { registerUser, authUser,logout } = require("../controllers/userController");
const {
  verifyRegisterData,
  verifyAuthData,
  hashPassword,
  verifyPassword,
  verifyUserExists,
  generateToken,
  passportVerify,

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
authRouter.post(
  "/authenticated",
  passportVerify.authenticate("jwt",{session:false}),
  generateToken,
  authUser,
);

authRouter.post("/logout", passportVerify.authenticate("jwt",{session:false}),logout );

module.exports = authRouter;
