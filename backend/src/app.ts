import Express from 'express';
import cors from 'cors';
import router from "./routes/index";
import path from "path";

const app = Express();

// settings
app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(Express.json());

// routes
app.use('/', router);

// folder to save images
app.use('/uploads', Express.static(path.resolve('uploads')));

export default app;