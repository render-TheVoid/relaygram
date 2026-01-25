import express from "express";
import { connectWithDB } from "./lib/db.js";
import 'dotenv/config';
import authRoutes from './routes/authRoute.js'

const app = express();
const PORT = process.env.PORT || 6767;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("Hi and welcome to Relaygram!");
});

app.listen(PORT, () => {
    console.log(`Relaygram's server is currently running on: http://localhost:${PORT}`);
    connectWithDB();
});