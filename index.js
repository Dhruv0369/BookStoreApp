import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import bookRoutes from './route/Book.route.js';
import userRoute from './route/user.route.js';

const app = express();

app.use(cors());

dotenv.config();

mongoose.connect(process.env.MongoDBURI)
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());


app.use('/books', bookRoutes);
app.use('/user', userRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
