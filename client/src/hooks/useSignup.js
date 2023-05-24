import { useState } from 'react';
import { useAuthUserContext } from './useAuthUserContext.js';

const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { setAuthUser } = useAuthUserContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const res = await fetch('https://worktrack-server.onrender.com/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const data = await res.json();

        if (!res.ok) {
            setIsLoading(false);
            setError(data.error);
        }

        if (res.ok) {
            localStorage.setItem('user', JSON.stringify(data));
            setIsLoading(false);
            setAuthUser(data);
        }
    }
    
    return { signup, error, isLoading };
}

export { useSignup };
