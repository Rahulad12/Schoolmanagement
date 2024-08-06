import asyncHandler from "express-async-handler";
import Student from "../models/studentModel.js";
import RegisterStudent from "../models/registerstudentmodel.js";

// @desc Fetch all students
// @route GET /api/students
// @access Public
const getAllStudents = asyncHandler(async (req, res) => {
  const student = await Student.find({});
  try {
    if (student) {
      res.status(201).json(student);
    }
  } catch (error) {
    res.status(404).json({ message: "Student not found" });
  }
});

// @desc Fetch student by id
// @route GET /api/students/:id
// @access Public
const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  try {
    if (student) {
      res.status(201).json(student);
    }
  } catch (error) {
    res.status(404).json({ message: "Student not found" });
  }
});

// @desc Create a student
// @route POST /api/students
// @access Public

const createStudent = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    dob,
    age,
    grade,
    section,
    rollno,
    busno,
    busstop,
    gurdainname,
    gurdainphone,
  } = req.body;

  const student = new Student({
    name,
    email,
    phone,
    address,
    dob,
    age,
    grade,
    section,
    rollno,
    bus: {
      busno,
      busstop,
    },
    gurdain: {
      name: gurdainname,
      phone: gurdainphone,
    },
  });

  try {
    const createdStudent = await student.save();
    res.status(201).json(createdStudent);
  } catch (error) {
    res.json({message:error.message});
    res.status(404).json({ message: "Student not found" });
  }
});

// @desc Update a student
// @route PUT /api/students/:id
// @access Public

const updateStudent = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    dob,
    age,
    grade,
    section,
    rollno,
    busno,
    busstop,
    gurdainname,
    gurdainphone,
  } = req.body;

  const student = await Student.findById(req.params.id);
  try {
    if (student) {
      student.name = name || student.name;
      student.email = email || student.email;
      student.phone = phone || student.phone;
      student.address = address || student.address;
      student.dob = dob || student.dob;
      student.age = age || student.age;
      student.grade = grade || student.grade;
      student.section = section || student.section;
      student.rollno = rollno || student.rollno;
      student.bus.busno = busno || student.bus.busno;
      student.bus.busstop = busstop || student.bus.busstop;
      student.gurdain.name = gurdainname || student.gurdain.name;
      student.gurdain.phone = gurdainphone || student.gurdain.phone;

      const updatedStudent = await student.save();
      res.status(201).json(updatedStudent);
    }
  } catch (error) {}
});

// @desc Delete a student
// @route DELETE /api/students/:id
// @access Public

const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  try {
    if (student) {
      await student.deleteOne();
      res.status(201).json({ message: "Student removed" });
    }
  } catch (error) {
    res.status(404).json({ message: "Student not found" });
  }
});

const studentRegister = asyncHandler(async (req,res) => {
  const {
    firstname,
    lastname,
    address,
    dateofbirth,
    age,
    grade,
    fathername,
    mothername,
    phonenumber,
    message
  } = req.body;
  
  const student = new RegisterStudent({
    firstname,
    lastname,
    address,
    dateofbirth,
    age,
    grade,
    fathername,
    mothername,
    phonenumber,
    message
  });

  try {
    const createdStudent = await student.save();
    res.status(201).json(createdStudent);
  } catch (error) {
    res.json({message:error.message});
    res.status(404).json({ message: "Student registration fail!" });
  }
  

})

export { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent, studentRegister }; 