import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import WorkoutContextProvider from './context/WorkoutContext.jsx';
import { useAuthUserContext } from './hooks/useAuthUserContext.js';

const App = () => {
    const { authUser } = useAuthUserContext();

    return (
        <WorkoutContextProvider>
            <div className='App max-w-5xl mx-auto px-5'>
                <Nav />
                <Routes>
                    <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={!authUser ? <Login /> : <Navigate to='/' />} />
                    <Route path='/register' element={!authUser ? <Register /> : <Navigate to='/' />} />
                </Routes>
            </div>
        </WorkoutContextProvider>
    )
}

export default App;
