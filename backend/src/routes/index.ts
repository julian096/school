import { Router } from "express";
import multer from "../libs/multer";
import { getAllStudents, newStudent, findStudent, deleteStudent, updateStudent } from "../controllers/student.controller";

const router: Router = Router();

router.get("/students", getAllStudents);
router.get("/students/:id", findStudent);
router.post("/students", multer.single('image'), newStudent);
router.delete("/students/:id", deleteStudent);
router.put("/students/:id", multer.single('image'), updateStudent);

export default router;