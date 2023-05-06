import { FaTimes } from 'react-icons/fa';
import { WorkoutContext } from '../context/WorkoutContext.jsx';
import { useContext } from 'react';

const WorkoutDetails = ({ workout }) => {
    const { workouts, setWorkouts } = useContext(WorkoutContext);

    const deleteWorkout = async () => {
        const res = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
            method: 'DELETE',
        });

        const data = await res.json()

        if (res.ok) {
            const filteredWorkouts = workouts.filter(workout => workout._id !== data._id)
            setWorkouts(filteredWorkouts);
        }
    }

    return (
        <div className='workout p-4 border-2 border-gray-500 rounded-lg w-80'>
            <div className='header flex justify-between gap-3'>
                <h1 className='font-semibold mb-2'>{workout.title} <span className='font-extralight mx-1'>({workout.createdAt})</span></h1>
                <FaTimes className='hover:text-red-500 cursor-pointer' onClick={deleteWorkout} />
            </div>
            <h2 className='font-light'>Reps: <span className='font-medium'>{workout.reps}</span></h2>
            <h2 className='font-light'>Load (Kg): <span className='font-medium'>{workout.load}</span></h2>
        </div>
    )
}

export default WorkoutDetails;
