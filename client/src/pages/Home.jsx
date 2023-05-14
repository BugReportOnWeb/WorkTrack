import { useEffect, useContext } from 'react';
import WorkoutDetails from '../components/WorkoutDetails.jsx';
import WorkoutForm from '../components/WorkoutForm.jsx';
import { WorkoutContext } from '../context/WorkoutContext.jsx';

const Home = () => {
    const { workouts, setWorkouts } = useContext(WorkoutContext);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch('http://localhost:4000/api/workouts')
            const data = await res.json();

            if (res.ok) setWorkouts(data);
        }

        fetchWorkouts();
    }, [])

    return (
        <div className='Home relative'>
            <h1 className='font-extrabold text-5xl my-5 mt-10 text-center'>Workouts</h1>
            {/* {workouts.length === 0 && <h1 className='my-3'>Loading...</h1>} */}

            <div className='my-14 ml-2 mr-80 grid grid-cols-1 gap-4 md:grid-cols-2'>
                {workouts && workouts.map(workout => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            
            <WorkoutForm />
        </div>
    )
}

export default Home;
