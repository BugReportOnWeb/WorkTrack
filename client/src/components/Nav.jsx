import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout.js';
import { useAuthUserContext } from '../hooks/useAuthUserContext.js';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const Nav = () => {
    const { logout } = useLogout();
    const { authUser } = useAuthUserContext();
    const [showNavLinks, setShowNavLinks] = useState(false)

    const toggleNavLinks = () => {
        setShowNavLinks(prevState => {
            return !prevState
        })
    }

    return (
        <div className={`relative z-10 flex justify-between items-center ${authUser ? 'py-5' : 'py-7'}`}>
            <Link to='/'>
                <h1 className='font-bold text-xl'>Work<span className='text-[#007bff]'>Track</span></h1>
            </Link>

            {!showNavLinks && <RxHamburgerMenu className='text-2xl cursor-pointer sm:hidden' onClick={toggleNavLinks} />}
            {showNavLinks && <IoMdClose className='text-2xl cursor-pointer sm:hidden' onClick={toggleNavLinks} />}

            <div className={`absolute bg-gray-800 top-[80%] right-1 flex flex-col p-5 gap-3 rounded-md border-2 border-gray-800 ${!showNavLinks ? 'hidden' : ''} sm:flex sm:flex-row sm:items-center sm:static sm:bg-transparent sm:gap-7 sm:border-none sm:p-0`}>
                {!authUser && (
                    <>
                        <Link className='underline-offset-8 decoration-2 decoration-[#007bff] hover:underline' to='/about' onClick={toggleNavLinks}>About</Link>
                        <Link className='underline-offset-8 decoration-2 decoration-[#007bff] hover:underline' to='/login' onClick={toggleNavLinks}>Login</Link>
                        <Link className='underline-offset-8 decoration-2 decoration-[#007bff] hover:underline' to='/register' onClick={toggleNavLinks}>SignUp</Link>
                    </>
                )}
                {authUser && (
                    <>
                        <p>{authUser.email}</p> 
                        <button className="relative py-2 px-3 rounded-md overflow-hidden bg-blue-500 border-2 border-blue-500 text-white transition duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600" onClick={logout}>
                          <span className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 transition duration-300 ease-in-out" onClick={toggleNavLinks}></span>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Nav;
