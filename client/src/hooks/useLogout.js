import { useContext } from 'react';
import { useAuthUserContext } from '../hooks/useAuthUserContext.js';
import { WorkoutContext } from '../context/WorkoutContext.jsx';

const useLogout = () => {
    const { setAuthUser } = useAuthUserContext();
    const { setWorkouts } = useContext(WorkoutContext);

    const logout = () => {
        localStorage.removeItem('user');
        setAuthUser(null);
        setWorkouts([]);
    }

    return { logout }
}

export { useLogout };
