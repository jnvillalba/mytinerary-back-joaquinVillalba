const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");
const { verifyAuthData, hashPassword,verifyPassword } = require("../middlewares/auth");

const authRouter = express.Router();

authRouter.post("/register", verifyAuthData, hashPassword, registerUser);
authRouter.post("/login", authUser);

module.exports = authRouter;
