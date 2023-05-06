import { Workout } from '../models/workoutModel.js';
import mongoose from 'mongoose';

// GET all workouts data
const getAllWorkouts = async (_req, res) => {
    const workouts = await Workout.find().sort({ createdAt: -1 });

    // OPTIONAL check
    if (workouts.length === 0) {
        res.status(404).json({ error: 'No workouts found' });
    }

    res.status(200).json(workouts);
}

// GET a single workout data
const getSingleWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No workout found' });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({ error: 'No workout found' });
    }

    res.status(200).json(workout);
}

// POST a new workout
const postWorkout = async (req, res) => {
    let emptyFields = [];
    const {title, reps, load} = req.body;

    if (!title) emptyFields.push('title');
    if (!reps) emptyFields.push('reps');
    if (!load) emptyFields.push('load');

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields  });
    } 

    try {
        const new_workout = await Workout.create(req.body);
        res.status(200).json(new_workout);
    } catch (error) {
        const errorMessage = { error: error.message };
        res.status(400).json(errorMessage);
    }
}

// DELETE a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No workout found' });
    }

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
        return res.status(404).json({ error: 'No workout found' });
    }

    res.status(200).json(workout);
}

// Update a workout data
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No workout found' });
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, req.body);

    if (!workout) {
        return res.status(404).json({ error: 'No workout found' });
    }

    res.status(200).json(workout);
}

export {
    getAllWorkouts,
    getSingleWorkout,
    postWorkout,
    deleteWorkout,
    updateWorkout
};
