import { useState, useContext } from 'react';
import Error from './Error.jsx';
import { WorkoutContext } from '../context/WorkoutContext.jsx';

const WorkoutForm = () => {
    const { workouts, setWorkouts } = useContext(WorkoutContext);
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = {title, reps, load};

        const res = await fetch('http://localhost:4000/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        if (!res.ok) setError(data.error);

        if (res.ok) {
            setTitle('');
            setReps('');
            setLoad('');
            setError(null);
            console.log('New worout added', data);
            setWorkouts([data, ...workouts])
        }
    }

    return (
        <form className='absolute top-[5.75rem] right-0 flex flex-col align-items-center my-3 p-4 border-2 border-gray-500 rounded-md w-max mx-auto' onSubmit={handleSubmit}>
            <input 
                className='p-2 my-3 bg-gray-800 rounded-md'
                type='text'
                onChange={e => setTitle(e.target.value)}
                value={title}
                placeholder='Title'
            />
            <br />

            <input 
                className='p-2 my-3 bg-gray-800 rounded-md'
                type='number'
                onChange={e => setReps(e.target.value)}
                value={reps}
                placeholder='Reps'
            />
            <br />

            <input 
                className='p-2 my-3 bg-gray-800 rounded-md'
                type='number'
                onChange={e => setLoad(e.target.value)}
                value={load}
                placeholder='Load'
            />
            <br />

            <button type='submit' className='mx-auto border-2 border-[#007bff] p-3 my-2 rounded-lg w-max hover:bg-[#007bff] hover:text-white'>Add Workout</button>
            {error && <Error error={error} />}
        </form>
    )
}

export default WorkoutForm;
