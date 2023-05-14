import { createContext } from  'react';
import { useState } from 'react';


const WorkoutContext = createContext();

const WorkoutContextProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);

    return (
        <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export { WorkoutContext };
export default WorkoutContextProvider;
