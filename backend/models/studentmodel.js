import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  rollno: {
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
  address: {
    type: String,
    required: true,
  },
  bus: {
    busno: {
      type: String,
      required: true,
    },
    busstop: {
      type: String,
      required: true,
    },
  },

  gurdain: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
});

const modelName = "Student";

const Student = mongoose.models[modelName] || mongoose.model(modelName, StudentSchema);

export default Student;
