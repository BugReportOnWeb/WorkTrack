import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

// Login user
router.post('/login', loginUser);

// Register user
router.post('/register', registerUser);

export { router as userRoutes };
