import { connect } from "mongoose";

export const startConnection = async () => {
    await connect("mongodb://localhost/school", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Database connected!");
};