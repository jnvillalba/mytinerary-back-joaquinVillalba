const express = require("express");
const { registerUser } = require("../controllers/userController");
const { verifyAuthData, hashPassword } = require("../middlewares/auth");

const authRouter = express.Router();

authRouter.post('/register',verifyAuthData,hashPassword,registerUser)

module.exports = authRouter