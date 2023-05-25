import { createContext } from  'react';
import { useState } from 'react';


const WorkoutContext = createContext();

const WorkoutContextProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);
    const [newWorkout, setNewWorkout] = useState({});

    return (
        <WorkoutContext.Provider value={{ workouts, setWorkouts, newWorkout, setNewWorkout }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export { WorkoutContext };
export default WorkoutContextProvider;
