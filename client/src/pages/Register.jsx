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
        await signup(email, password)

        setEmail('');
        setPassword('');
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

            <div className='relative'>
                <input
                    className='p-2 bg-zinc-700 border border-zinc-600 rounded-md outline-none'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    placeholder='Password'
                />
                <div className='group absolute top-1/2 right-0 -translate-y-1/2 mr-3 text-sm cursor-pointer'>
                    <span>&#10068;</span> 
                    <div className='absolute top-[200%] -right-[600%] bg-zinc-800 w-96 border border-zinc-600 p-5 text-sm hidden lg:top-1/2 lg:right-auto lg:-translate-y-1/2 lg:ml-20 group-hover:block'>
                        <p>Please note that the password you choose must meet the following criteria:</p>

                        <ul className='list-disc list-inside my-2'>
                            <li>It should contain at least one uppercase letter (A-Z).</li>
                            <li>It should contain at least one lowercase letter (a-z).</li>
                            <li>It should include at least one numeric digit (0-9).</li>
                            <li>It should contain at least one special symbol (e.g., !, @, #, $, %, etc.).</li>
                            <li>The password must be at least 8 characters long.</li>
                        </ul>

                        <p>Please ensure that your password meets these requirements to ensure the security of your account.</p>
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

            <h1 className='font-extralight text-sm mt-1'>Already a member? <Link to='/login' className='underline decoration-blue-500 underline-offset-8'>Login</Link></h1>

            {error && <Error error={error} />}
        </motion.form>
    )
}

export default Register;
