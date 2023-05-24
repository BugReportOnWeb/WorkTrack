import express from 'express';
import * as dotenv from 'dotenv';
import { workoutRoutes } from './routes/workoutRoutes.js';
import { userRoutes } from './routes/userRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors({ origin: 'https://worktrack.onrender.com' }));

app.use((req, _res, next) => {
    console.log(req.method, req.path);
    next();
})

app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        })
    })
    .catch(error => console.log(error));
