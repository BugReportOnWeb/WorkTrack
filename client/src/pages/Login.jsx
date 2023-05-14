import { useState } from 'react';
import Error from '../components/Error.jsx';
import { useLogin } from '../hooks/useLogin.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const loginUser = async (e)=> {
        e.preventDefault();
        await login(email, password);

        setEmail('');
        setPassword('');
    }

    return (
        <form className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-7 flex flex-col justify-center items-center gap-5 w-fit border-2 border-gray-700 rounded-lg' onSubmit={loginUser}>
            <h1 className='text-3xl font-bold'>Login</h1>

            <input
                className='p-2 bg-gray-800 border-2 border-gray-700 rounded-md outline-none'
                type='email'
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder='Email'
            />

            <input
                className='p-2 bg-gray-800 border-2 border-gray-700 rounded-md outline-none'
                type='password'
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder='Password'
            />

            <button type='submit' disabled={isLoading} className='w-20 border-2 border-[#007bff] p-3 rounded-lg w-max outline-none hover:bg-[#007bff] hover:text-white'>Login</button>

            {error && <Error error={error} width='w-[17.9rem]' />}
        </form>
    )
}

export default Login;
