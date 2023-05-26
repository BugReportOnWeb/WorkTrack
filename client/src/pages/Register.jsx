import { useState } from 'react';
import Error from '../components/Error.jsx';
import Loading from '../components/Loading.jsx';
import { useSignup } from '../hooks/useSignup.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// sm:-right-[570%] md:-right-[580%]

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const registerUser = async (e) => {
        e.preventDefault();
        await signup(email, password, confirmPassword)

        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-zinc-800 pt-8 pb-7 px-8 flex flex-col justify-center items-center gap-5 w-fit border border-zinc-700 rounded-lg' onSubmit={registerUser}
        >
            <h1 className='text-3xl font-bold'>Sign Up</h1>

            <input
                className='p-2 bg-zinc-700 border border-zinc-600 rounded-md outline-none'
                type='email'
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder='Email'
            />

            <div className='relative w-min'>
                <input
                    className='p-2 bg-zinc-700 border border-zinc-600 rounded-md outline-none'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    placeholder='Password'
                />
                <div className='group text-sm md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:mr-3'>
                    <span className='hidden cursor-pointer md:block'>&#10068;</span> 
                    <div className='font-light bg-zinc-800 border border-zinc-600 p-3 rounded-sm text-xs mt-5 md:hidden md:absolute md:w-48 lg:w-80 md:top-1/2 md:right-auto md:-translate-y-1/2 md:ml-20 md:mt-0 group-hover:block'>
                        <p>Password must contain: Uppercase letter, Lowercase letter, Numeric digit, Special symbol, Minimum 8 characters</p>
                    </div>
                </div>
            </div>

            <input
                className='p-2 bg-zinc-700 border border-zinc-600 rounded-md outline-none'
                type='password'
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder='Confirm Password'
            />

            <button type='submit' disabled={isLoading} className='flex justify-center items-center min-w-[6rem] border-2 border-[#007bff] p-3 rounded-lg outline-none hover:bg-[#007bff] hover:text-white'>
                {isLoading && <Loading />}
                Sign Up
            </button>

            <h1 className='font-extralight text-sm mt-1'>Already a member? <Link to='/login' className='underline decoration-blue-500 underline-offset-8 hover:text-blue-500 hover:decoration-blue-900'>Login</Link></h1>

            {error && <Error error={error} />}
        </motion.form>
    )
}

export default Register;
