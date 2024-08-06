import asyncHandler from "express-async-handler";

import Teacher from "../models/TeacherModel.js";

// @desc Fetch all teachers
// @route GET /api/teachers
// @access Public

const GetTeachers = asyncHandler(async (req, res) => {
  const teachers = await Teacher.find({});

  try {
    res.status(201).json(teachers);
  } catch (error) {
    res.status(404).json({ message: "Teachers not found" });
  }
});

// @desc Fetch single teacher
// @route GET /api/teachers/:id
// @access Public

const getTeachersById = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  try {
    if (teacher) {
      res.status(201).json(teacher);
    }
  } catch (error) {
    res.status(404).json({ message: "Teacher not found" });
  }
});

// @desc Add a teacher
// @route POST /api/teachers
// @access Public
const AddTeachers = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      address,
      dob,
      age,
      image,
      faculty,
      department,
      level,
      role,
      subject,
    } = req.body;

    const teacher = new Teacher({
      name,
      email,
      password,
      phone,
      address,
      dob,
      age,
      image,
      faculty,
      department,
      level,
      role,
      subject,
    });

    const createdTeacher = await teacher.save();
    res.status(201).json(createdTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Update a teacher
// @route PUT /api/teachers/:id
// @access Public

const UpdateTeachers = asyncHandler(async (req, res) => {
  console.log("Request body:", req.body);

  const {
    name,
    email,
    password,
    phone,
    address,
    dob,
    age,
    image,
    faculty,
    department,
    level,
    role,
    subject,
  } = req.body;

  const teacher = await Teacher.findById(req.params.id);
  try {
    if (teacher) {
      teacher.name = name || teacher.name;
      teacher.email = email || teacher.email;
      teacher.password = password || teacher.password;
      teacher.phone = phone || teacher.phone;
      teacher.address = address || teacher.address;
      teacher.dob = dob || teacher.dob;
      teacher.age = age || teacher.age;
      teacher.image = image || teacher.image;
      teacher.faculty = faculty || teacher.faculty;
      teacher.department = department || teacher.department;
      teacher.level = level || teacher.level;
      teacher.role = role || teacher.role;
      teacher.subject = subject || teacher.subject;

      const updatedTeacher = await teacher.save();
      res.status(201).json(updatedTeacher);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Delete a teacher
// @route DELETE /api/teachers/:id
// @access Public

const DeleteTeachers = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  try {
    if (teacher) {
      await teacher.deleteOne();
      res.json({ message: "Teacher removed" });
    } else {
      res.status(404);
      throw new Error("Teacher not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export {
  GetTeachers,
  getTeachersById,
  AddTeachers,
  UpdateTeachers,
  DeleteTeachers,
};
