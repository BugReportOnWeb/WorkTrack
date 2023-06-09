import { FaTimes } from 'react-icons/fa';
import { WorkoutContext } from '../context/WorkoutContext.jsx';
import { useContext } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthUserContext } from '../hooks/useAuthUserContext';
import { motion } from 'framer-motion';

const WorkoutDetails = ({ workout }) => {
    const { workouts, setWorkouts, newWorkout } = useContext(WorkoutContext);
    const { authUser } = useAuthUserContext()

    const deleteWorkout = async () => {
        if (!authUser) return;

        const res = await fetch(`https://worktrack-server.onrender.com/api/workouts/${workout._id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${authUser.token}` }
        });

        const data = await res.json()

        if (res.ok) {
            const filteredWorkouts = workouts.filter(workout => workout._id !== data._id)
            setWorkouts(filteredWorkouts);
        }
    }

    return (
        <motion.div
            initial={workout._id === newWorkout._id
                        ? { scale: 0.5, opacity: 0.5 }
                        : { scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='mx-auto workout p-4 border-2 border-gray-500 rounded-lg w-80'
        >
            <div className='header flex justify-between gap-3'>
                <h1 className='font-semibold mb-2'>{workout.title} <span className='font-extralight mx-1'>{}</span></h1>
                <FaTimes className='hover:text-red-500 cursor-pointer' onClick={deleteWorkout} />
            </div>
            <h2 className='font-light'>Reps: <span className='font-medium'>{workout.reps}</span></h2>
            <h2 className='font-light'>Sets: <span className='font-medium'>{workout.sets}</span></h2>
            <h2 className='font-light'>Load (Kg): <span className='font-medium'>{workout.load}</span></h2>
            <h2 className='font-extralight mt-2'>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</h2>
        </motion.div>
    )
}

export default WorkoutDetails;
