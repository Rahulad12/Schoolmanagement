import express from 'express' 

import {GetTeachers,getTeachersById,AddTeachers,UpdateTeachers,DeleteTeachers} from '../controllers/teachercontrollers.js'

const router = express.Router();



router.get('/', GetTeachers);
router.get('/:id',getTeachersById);
router. post('/',AddTeachers);
router.put('/:id',UpdateTeachers);
router.delete('/:id',DeleteTeachers);

export default router;