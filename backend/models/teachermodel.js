import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "teacher",
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

const modelName = "Teacher";

const Teacher = mongoose.models[modelName] || mongoose.model(modelName, TeacherSchema);

export default Teacher;