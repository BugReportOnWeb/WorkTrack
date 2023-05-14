import { createContext, useState } from 'react';

const AuthUserContext = createContext();

const AuthUserContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    console.log(authUser);

    return (
        <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthUserContext.Provider>
    )
}

export { AuthUserContext };
export default AuthUserContextProvider;
