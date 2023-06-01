import { Routes, Route, Navigate } from 'react-router-dom';

import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import WorkoutContextProvider from './context/WorkoutContext.jsx';
import { useAuthUserContext } from './hooks/useAuthUserContext.js';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
    const { authUser } = useAuthUserContext();
    const location = useLocation();

    return (
        <WorkoutContextProvider>
            <div className='App max-w-5xl mx-auto px-5'>
                <Nav />
                <AnimatePresence initial={false}>
                    <Routes key={location.pathname}>
                        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
                        <Route path='/login' element={!authUser ? <Login /> : <Navigate to='/' />} />
                        <Route path='/register' element={!authUser ? <Register /> : <Navigate to='/' />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </WorkoutContextProvider>
    )
}

export default App;
