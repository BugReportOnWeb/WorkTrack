import { useAuthUserContext } from '../hooks/useAuthUserContext.js';

const useLogout = () => {
    const { setAuthUser } = useAuthUserContext();

    const logout = () => {
        localStorage.removeItem('user');
        setAuthUser(null);
    }

    return { logout }
}

export { useLogout };
