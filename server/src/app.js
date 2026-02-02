import express from "express";
import 'dotenv/config';
import authRoutes from './routes/authRoute.js'
import cookieParser from 'cookie-parser';
import { connectWithDB } from "./lib/db.js";
import messageRoutes from "./routes/messageRoute.js"
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 6767;

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

app.get('/', (req, res) => {
    res.send("Hi and welcome to Relaygram!");
});

app.listen(PORT, () => {
    console.log(`relaygram's server is currently running on: http://localhost:${PORT}`);
    connectWithDB();
});