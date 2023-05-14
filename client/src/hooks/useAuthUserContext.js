import { AuthUserContext } from '../context/AuthUserContext.jsx';
import { useContext } from 'react';

const useAuthUserContext = () => {
    const { authUser, setAuthUser } = useContext(AuthUserContext);
    return { authUser, setAuthUser };
}

export { useAuthUserContext };
