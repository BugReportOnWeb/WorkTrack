import { useState, useContext } from 'react';
import Error from './Error.jsx';
import { WorkoutContext } from '../context/WorkoutContext.jsx';
import { useAuthUserContext } from '../hooks/useAuthUserContext.js';
import Loading from '../components/Loading.jsx';

const WorkoutForm = () => {
    const { workouts, setWorkouts, setNewWorkout } = useContext(WorkoutContext);
    const { authUser } = useAuthUserContext();
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!authUser) {
            setError('You must be logged in');
            return
        }

        const workout = {title, reps, load};

        const res = await fetch('https://worktrack-server.onrender.com/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authUser.token}`
            }
        })

        const data = await res.json();

        if (!res.ok) {
            setError(data.error);
            setIsLoading(false);
            setEmptyFields(data.emptyFields);
        } 

        if (res.ok) {
            setTitle('');
            setReps('');
            setLoad('');

            setIsLoading(false);
            setError(null);
            setEmptyFields([]);

            setNewWorkout(data);
            setWorkouts([data, ...workouts])
        }

    }

    return (
        <form className={`relative flex flex-col align-items-center ${error ? 'mb-28' : 'mb-10'} p-4 border-2 border-gray-500 rounded-lg w-max mx-auto lg:absolute lg:top-[5.75rem] lg:right-0 lg:my-3`} onSubmit={handleSubmit}>
            <input 
                className={`p-2 my-3 bg-gray-800 border-2 rounded-md
                    ${emptyFields.includes('title') ? 'border-2 border-red-500' : 'border-gray-700'}`}
                type='text'
                onChange={e => setTitle(e.target.value)}
                value={title}
                placeholder='Title'
            />
            <br />

            <input 
                className={`p-2 my-3 bg-gray-800 border-2 rounded-md
                    ${emptyFields.includes('reps') ? 'border-red-500' : 'border-gray-700'}`}
                type='number'
                onChange={e => setReps(e.target.value)}
                value={reps}
                placeholder='Reps'
            />
            <br />

            <input 
                className={`p-2 my-3 bg-gray-800 border-2 rounded-md
                    ${emptyFields.includes('load') ? 'border-2 border-red-500' : 'border-gray-700'}`}
                type='number'
                onChange={e => setLoad(e.target.value)}
                value={load}
                placeholder='Load'
            />
            <br />

            <button type='submit' className='flex items-center mx-auto border-2 border-[#007bff] p-3 my-2 rounded-lg w-max hover:bg-[#007bff] hover:text-white'>
                {isLoading && <Loading />}
                Add Workout
            </button>
            {error && <Error error={error} />}
        </form>
    )
}

export default WorkoutForm;
