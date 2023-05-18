import { useState, useContext } from 'react';
import Error from './Error.jsx';
import { WorkoutContext } from '../context/WorkoutContext.jsx';
import { useAuthUserContext } from '../hooks/useAuthUserContext.js';

const WorkoutForm = () => {
    const { workouts, setWorkouts } = useContext(WorkoutContext);
    const { authUser } = useAuthUserContext();
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!authUser) {
            setError('You must be logged in');
            return
        }

        const workout = {title, reps, load};

        const res = await fetch('http://localhost:4000/api/workouts', {
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
            setEmptyFields(data.emptyFields);
        } 

        if (res.ok) {
            setTitle('');
            setReps('');
            setLoad('');

            setError(null);
            setEmptyFields([]);

            setWorkouts([data, ...workouts])
        }
    }

    // 

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

            <button type='submit' className='mx-auto border-2 border-[#007bff] p-3 my-2 rounded-lg w-max hover:bg-[#007bff] hover:text-white'>Add Workout</button>
            {error && <Error error={error} width='w-[17.3rem]' />}
        </form>
    )
}

export default WorkoutForm;
