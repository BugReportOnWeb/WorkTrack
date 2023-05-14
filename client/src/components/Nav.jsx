import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout.js';
import { useAuthUserContext } from '../hooks/useAuthUserContext.js';

const Nav = () => {
    const { logout } = useLogout();
    const { authUser } = useAuthUserContext();

    return (
        <div className='Nav flex justify-between items-center py-5'>
            <Link to='/'>
                <h1 className='font-bold text-xl'>Work<span className='text-[#007bff]'>Track</span></h1>
            </Link>
            <div className='flex items-center gap-7 font-semibold'>
                <Link className='underline-offset-8 decoration-2 decoration-[#007bff] hover:underline' to='/about'>About</Link>
                <Link className={`underline-offset-8 decoration-2 decoration-[#007bff] hover:underline ${authUser ? 'hidden' : ''}`} to='/login'>Login</Link>
                <Link className={`underline-offset-8 decoration-2 decoration-[#007bff] hover:underline ${authUser ? 'hidden' : ''}`} to='/register'>SignUp</Link>
                <button className={`py-2 px-3 border-2 border-[#007bff] rounded-md hover:bg-[#007bff] ${!authUser ? 'hidden' : ''}`} onClick={logout} to='/logout'>Logout</button>
            </div>
        </div>
    )
}

export default Nav;
