import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='Nav flex justify-between items-center my-5'>
            <Link to='/'>
                <h1 className='font-bold text-xl'>Work<span className='text-[#007bff]'>Track</span></h1>
            </Link>
            <div className='flex items-center gap-7 font-semibold'>
                <Link className='underline-offset-4 decoration-2 decoration-[#007bff] hover:underline' to='/about'>About</Link>
                <Link className='underline-offset-4 decoration-2 decoration-[#007bff] hover:underline' to='/login'>Login</Link>
                <Link className='underline-offset-4 decoration-2 decoration-[#007bff] hover:underline' to='/sign-up'>SignUp</Link>
            </div>
        </div>
    )
}

export default Nav;
