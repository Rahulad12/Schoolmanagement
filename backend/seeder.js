import dotenv from "dotenv";

import Students from "./Data/Students.js";
import Student from "./models/studentmodel.js";

import Teachers from "./Data/Teachers.js";
import Teacher from "./models/teachermodel.js";

import Users from "./Data/User.js";
import User from "./models/usermodel.js";

dotenv.config();

import ConnectDB from "./config/db.js";
ConnectDB();

const ImportData = async () => {
  try {
    await Teacher.deleteMany();
    await Student.deleteMany();
    await User.deleteMany();

    const CreatedUsers = await User.insertMany(Users);
    const userid = CreatedUsers[0]._id;

    const StudentsSample = Students.map((student) => {
      return { ...student, user: userid };
    });

    const TeachersSample = Teachers.map((teacher) => {
      return { ...teacher, user: userid };
    });

    await Student.insertMany(StudentsSample);
    await Teacher.insertMany(TeachersSample);

    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.error(`Error in importing data: ${error.message}`);
    process.exit(1);
  }
};

const DestroyData = async () => {
  try {
    await Student.deleteMany();
    await Teacher.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed successfully");
  } catch (error) {
    console.error(`Error in destroying data:${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  DestroyData();
} else {
  ImportData();
}
export default ImportData;
