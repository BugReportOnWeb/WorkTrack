import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='Nav flex justify-between items-center py-5'>
            <Link to='/'>
                <h1 className='font-bold text-xl'>Work<span className='text-[#007bff]'>Track</span></h1>
            </Link>
            <div className='flex items-center gap-7 font-semibold'>
                <Link className='underline-offset-8 decoration-2 decoration-[#007bff] hover:underline' to='/about'>About</Link>
                <Link className='underline-offset-8 decoration-2 decoration-[#007bff] hover:underline' to='/login'>Login</Link>
                <Link className='underline-offset-8 decoration-2 decoration-[#007bff] hover:underline' to='/register'>SignUp</Link>
            </div>
        </div>
    )
}

export default Nav;
