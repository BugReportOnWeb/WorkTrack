import express from 'express';
import { 
    getAllWorkouts,
    getSingleWorkout,
    postWorkout,
    deleteWorkout,
    updateWorkout
} from '../controllers/workoutController.js';

const router = express.Router();

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
