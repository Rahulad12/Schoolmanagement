import asyncHandler from "express-async-handler";

import User from "../models/usermodel.js";
import Student from "../models/studentmodel.js";
import Teacher from "../models/teachermodel.js";

const Login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  try {
    if (username && password) {
      const user = await User.findOne({ username });

      if (user && (await user.matchPassword(password))) {
        res.json({
          _id: user._id,
          username: user.username,
          role: user.role,
        });
      } else {
        res.status(401);
        throw new Error("Invalid username or password");
      }
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

const Logout = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  res.json({ message: "Logged out" });
});

const userProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  try {
    if (user.role === "student") {
      const student = await Student.findOne({ user: user._id });
      res.json(student);
    } else if (user.role === "teacher") {
      const teacher = await Teacher.findOne({ user: user._id });
      res.json(teacher);
    } else if (user.role === "admin") {
      res.json(user);
    } else {
      res.status(401);
      throw new Error("Invalid user role");
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

export { Login, Logout, userProfile };