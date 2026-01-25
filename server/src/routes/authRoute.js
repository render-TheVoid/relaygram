import express from 'express';
import { signUp, login, logout } from '../controllers/auth.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/logout', logout);
router.post('/login', login);

export default router;