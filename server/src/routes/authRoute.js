import { protectRoute } from '../middleware/authMiddleware.js';
import express from 'express';
import { 
    signUp, 
    login, 
    logout, 
    updateProfile, 
    checkUser 
} from '../controllers/auth.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/logout', logout);
router.post('/login', login);
router.put('/update-profile', protectRoute, updateProfile);
router.get('/check', protectRoute, checkUser);

export default router;