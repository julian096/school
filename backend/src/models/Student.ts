import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    name: String,
    age: Number,
    gender: String,
    birthdate: String,
    urlImage: String
});

interface IStudent extends Document{
    name: string;
    age: number;
    gender: string;
    birthdate: string;
    urlImage: string;
}

export default model<IStudent>('Students', schema);