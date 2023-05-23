import { useState } from 'react';
import Error from '../components/Error.jsx';
import Loading from '../components/Loading.jsx';
import { useSignup } from '../hooks/useSignup.js';
import { motion } from 'framer-motion';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const registerUser = async (e) => {
        e.preventDefault();
        await signup(email, password)

        setEmail('');
        setPassword('');
    }

    return (
        <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-8 flex flex-col justify-center items-center gap-5 w-fit border-2 border-gray-700 rounded-lg' onSubmit={registerUser}
        >
            <h1 className='text-3xl font-bold'>Sign Up</h1>

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

            <button type='submit' disabled={isLoading} className='flex items-center w-20 border-2 border-[#007bff] p-3 rounded-lg w-max outline-none hover:bg-[#007bff] hover:text-white'>
                {isLoading && <Loading />}
                Sign Up
            </button>

            {error && <Error error={error} width='w-[17.9rem]' />}
        </motion.form>
    )
}

export default Register;
