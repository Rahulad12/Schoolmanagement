import express from 'express';

const router = express.Router();

import { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent,studentRegister } from "../controllers/studentcontrollers.js";


router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent,studentRegister);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;