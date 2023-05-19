import { useEffect, useContext } from 'react';
import WorkoutDetails from '../components/WorkoutDetails.jsx';
import WorkoutForm from '../components/WorkoutForm.jsx';
import { WorkoutContext } from '../context/WorkoutContext.jsx';
import { useAuthUserContext } from '../hooks/useAuthUserContext.js';

const Home = () => {
    const { workouts, setWorkouts } = useContext(WorkoutContext);
    const { authUser } = useAuthUserContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch('https://worktrack-server.onrender.com/api/workouts', {
                headers: { 'Authorization': `Bearer ${authUser.token}` }
            })

            const data = await res.json();

            if (res.ok) setWorkouts(data);
        }

        if (authUser) fetchWorkouts();
        else setWorkouts([]); // Check on this later (maybe of no use?)

    }, [authUser]);

    return (
        <div className='Home relative'>
            <h1 className='font-extrabold text-5xl my-5 mt-10 text-center'>Workouts</h1>
            {/* {workouts.length === 0 && <h1 className='my-3'>Loading...</h1>} */}

            <div className='my-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mr-80'>
                {workouts && workouts.map(workout => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            
            <WorkoutForm />
        </div>
    )
}

export default Home;
