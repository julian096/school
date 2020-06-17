import { Request, Response } from "express";
import Student from "../models/Student";

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const allStudents = await Student.find();
        return res.json(allStudents);
    } catch (error) { }
};

export const findStudent = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const student = await Student.findById(id);

        return res.json(student);
    } catch (error) { }
};

export const newStudent = async (req: Request, res: Response) => {
    try {
        const { name, age, gender, birthdate } = req.body;
        const studentData = { name , age, gender, birthdate, urlImage: ""};
        
        const student = new Student(studentData);
        await student.save();

        res.json({
            message: "Foto subida con éxito"
        })
    } catch (error) { }
};

export const deleteStudent = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Student.findByIdAndDelete(id);

        return res.json({ message: "Estudiante eliminado" })
    } catch (error) { }
};

export const updateStudent = async (req: Request, res: Response) => {
    try {
        const { name, age, gender, birthdate } = req.body;

        const id = req.params.id;
        const student: any = await Student.findById(id);
        student.name = name;
        student.age = age;
        student.gender = gender;
        student.birthdate = birthdate;
        student.urlImage = req.file.path;

        const toSave = new Student(student);
        toSave.save();

        return res.json({ message: "Estudiante actualizado correctamente"});
    } catch (error) { }
};