import { Routes, Route } from 'react-router-dom';

// Components
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

import WorkoutContextProvider from './context/WorkoutContext.jsx';
import AuthUserContextProvider from './context/AuthUserContext.jsx';

const App = () => {
    return (
        <AuthUserContextProvider>
            <WorkoutContextProvider>
                <div className='App max-w-5xl mx-auto px-5'>
                    <Nav />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </div>
            </WorkoutContextProvider>
        </AuthUserContextProvider>
    )
}

export default App;
