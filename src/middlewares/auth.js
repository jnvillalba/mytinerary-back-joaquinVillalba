const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const userSchema = Joi.object({
  name: Joi.string().required().min(2).max(50).messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name should have at least {#limit} characters",
    "string.max": "Name should not exceed {#limit} characters",
  }),
  lastName: Joi.string().required().min(2).max(50).messages({
    "string.base": "Last name must be a string",
    "string.empty": "Last name is required",
    "string.min": "Last name should have at least {#limit} characters",
    "string.max": "Last name should not exceed {#limit} characters",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email must be a valid string",
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  password: Joi.string().alphanum().min(8).required().messages({
    "string.base": "Password must be a valid string",
    "string.empty": "Password is required",
    "string.alphanum": "Password must only contain alphanumeric characters",
    "string.min": "Password should have at least {#limit} characters",
  }),
  photo: Joi.string().required().messages({
    "string.base": "Photo must be a string",
    "string.empty": "Photo is required",
  }),
  country: Joi.string().required().messages({
    "string.base": "Country must be a string",
    "string.empty": "Country is required",
  }),
});

const userAuthSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email must be a valid string",
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  password: Joi.string().alphanum().min(8).required().messages({
    "string.base": "Password must be a valid string",
    "string.empty": "Password is required",
    "string.alphanum": "Password must only contain alphanumeric characters",
    "string.min": "Password should have at least {#limit} characters",
  }),
});

const verifyRegisterData = (req, res, next) => {
  const payload = req.body;
  const userValidate = userSchema.validate(payload, {
    abortEarly: false,
  });
  if (userValidate.error) {
    return res.status(400).json({
      message: userValidate.error.details.map((detail) => detail.message),
    });
  }
  next();
};

const verifyAuthData = (req, res, next) => {
  const payload = req.body;
  const userValidate = userAuthSchema.validate(payload, {
    abortEarly: false,
  });
  if (userValidate.error) {
    return res.status(400).json({
      message: userValidate.error.details.map((detail) => detail.message),
    });
  }
  next();
};

const hashPassword = (req, res, next) => {
  try {
    const payload = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(payload.password, salt);
    req.body.password = hash;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyPassword = (req, res, next) => {
  const passwordPlain = req.body.password;
  const passwordHash = req.user.password;
  const isValid = bcrypt.compareSync(passwordPlain, passwordHash);

  if (isValid) {
    next();
  } else {
    res.status(400).json({ message: "Invalid password" });
  }
};

const verifyUserExists = async (req, res, next) => {
  const { email } = req.body;

  const userFound = await User.findOne({ email: email });

  if (userFound) {
    req.user = userFound;

    next();
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const generateToken = (req, res, next) => {
  try {
    let token = jwt.sign({ email: req.user.email }, "secret");
    req.token = token;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const passportVerify = passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "secret",
    },
    async (payload, done) => {
      try {
        let userFound = await User.findOne({ email: payload.email });

        if (userFound) {
          return done(null, userFound);
        } else {
          return done(null, false, { message: "User not found" });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);


module.exports = {
  verifyRegisterData,
  hashPassword,
  verifyPassword,
  verifyUserExists,
  generateToken,
  verifyAuthData,
  passportVerify,
};
