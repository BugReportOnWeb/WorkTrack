import { useEffect, useContext, useState } from 'react';
import WorkoutDetails from '../components/WorkoutDetails.jsx';
import WorkoutForm from '../components/WorkoutForm.jsx';
import WorkoutSkeleton from '../components/WorkoutSkeleton.jsx';
import { WorkoutContext } from '../context/WorkoutContext.jsx';
import { useAuthUserContext } from '../hooks/useAuthUserContext.js';
import { motion } from 'framer-motion';

const Home = () => {
    const { workouts, setWorkouts } = useContext(WorkoutContext);
    const { authUser } = useAuthUserContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWorkouts = async () => {
            setIsLoading(true);

            const res = await fetch('http://worktrack-server.onrender.com/api/workouts', {
                headers: { 'Authorization': `Bearer ${authUser.token}` }
            })

            const data = await res.json();

            setIsLoading(false);
            if (res.ok) setWorkouts(data);
        }

        if (authUser) fetchWorkouts();
        else setWorkouts([]); // Check on this later (maybe of no use?)

    }, [authUser]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className='Home relative'
        >
            <h1 className='font-extrabold text-5xl my-5 mt-10 text-center'>Workouts</h1>
            <div className='my-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mr-80'>
                {isLoading ? <WorkoutSkeleton count={4} /> : (
                    <>
                        {workouts.length !== 0 ? workouts.map(workout => (
                            <WorkoutDetails key={workout._id} workout={workout} />
                        )) : <h1 className='text-xl text-center text-red-300 md:translate-x-1/2 lg:translate-x-0'>No workouts found</h1>}
                    </>
                )}
            </div>
            <WorkoutForm />
        </motion.div>
    )
}

export default Home;
