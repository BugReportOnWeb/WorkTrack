import express from 'express';
import { 
    getAllWorkouts,
    getSingleWorkout,
    postWorkout,
    deleteWorkout,
    updateWorkout
} from '../controllers/workoutController.js';
import { requireAuth } from '../middleware/requireAuth.js';

const router = express.Router();

// Require auth for all workout routes
router.use(requireAuth);

// GET all workouts data
router.get('/', getAllWorkouts);

// GET a single workout data
router.get('/:id', getSingleWorkout);

// POST a new workout
router.post('/', postWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// Update a workout data
router.patch('/:id', updateWorkout);

export { router as workoutRoutes };
