import { createContext, useState, useEffect } from 'react';

const AuthUserContext = createContext();

const AuthUserContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) setAuthUser(user);
    }, [])

    return (
        <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthUserContext.Provider>
    )
}

export { AuthUserContext };
export default AuthUserContextProvider;
