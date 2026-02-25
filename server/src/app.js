import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors'

import authRoutes from './routes/authRoute.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();

const url = 'mongodb://localhost:27017';

dotenv.config();

app.use(express.json());

try {
    await mongoose.connect(url, {
        dbName: 'fade-district-varna',
    });

    console.log('Successfully connected to DB!');
} catch (error) {
    console.error('Cannot connetct to DB', error.message);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(cors({
    origin: '*',
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.use('/users', authRoutes);
app.use('/bookings', bookingRoutes);

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'));
