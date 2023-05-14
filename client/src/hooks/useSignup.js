import { useState, useContext } from 'react';
import { AuthUserContext } from '../context/AuthUserContext';

const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { setAuthUser } = useContext(AuthUserContext);

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const res = await fetch('http://localhost:4000/api/user/register', {
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
            setAuthUser({ user: data })
        }
    }
    
    return { signup, error, isLoading }
}

export { useSignup };