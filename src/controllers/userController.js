const { verifyPassword } = require("../middlewares/auth");
const User = require("../models/User");
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const payload = req.body;
    const createdUser = await User.create(payload);

    res.status(201).json({
      message: "User added",
      createdUser: createdUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted", deletedUser: deletedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated", updatedUser: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const payload = req.body;
    const userExists = await User.findOne({ email: payload.email });

    if (userExists) {
      return res.status(403).json({ message: "User already exists" });
    }

    const userCreated = await User.create(payload);

    console.log("User created: ", userCreated);

    res.status(200).json({
      message: "User created",
      userCreated,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email: email });

    if (userFound) {
      if (verifyPassword(password, userFound.password)) {
        res.status(200).json({ message: "User authenticated" });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
  registerUser,
  authUser,
};
