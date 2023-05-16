import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout.js';
import { useAuthUserContext } from '../hooks/useAuthUserContext.js';

const Nav = () => {
    const { logout } = useLogout();
    const { authUser } = useAuthUserContext();

    return (
        <div className={`Nav flex justify-between items-center ${authUser ? 'py-5' : 'py-7'}`}>
            <Link to='/'>
                <h1 className='font-bold text-xl'>Work<span className='text-[#007bff]'>Track</span></h1>
            </Link>
            <div className='flex items-center gap-7 font-semibold'>
                {!authUser && (
                    <>
                        <Link className='underline-offset-8 decoration-2 decoration-[#007bff] hover:underline' to='/about'>About</Link>
                        <Link className='underline-offset-8 decoration-2 decoration-[#007bff] hover:underline' to='/login'>Login</Link>
                        <Link className='underline-offset-8 decoration-2 decoration-[#007bff] hover:underline' to='/register'>SignUp</Link>
                    </>
                )}
                {authUser && (
                    <>
                        <p>{authUser.email}</p>
                        {/* <button className='py-2 px-3 border-2 border-[#007bff] rounded-md hover:bg-[#007bff]' onClick={logout}>Logout</button> */}

                        <button className="relative py-2 px-3 rounded-md overflow-hidden bg-blue-500 border-2 border-blue-500 text-white transition duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600" onClick={logout}>
                          <span className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 transition duration-300 ease-in-out"></span>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Nav;
