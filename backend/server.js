import express from "express";
import dotenv from "dotenv";
dotenv.config();

import teacherRoute from "./routes/TeachersRoute.js";
import studentRoute from "./routes/StudentRoutes.js";
import userRoute from "./routes/UserRoute.js";

import ConnectDB from "./config/db.js";
ConnectDB();

const app = express();

// Middleware to parse json bodues
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/teachers", teacherRoute);
app.use("/api/students",studentRoute);
app.use("/api/users",userRoute);

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
