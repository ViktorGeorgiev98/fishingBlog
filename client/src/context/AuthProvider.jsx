import { createContext, useContext, useState } from "react"
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ( {children }) => {
    const [user, setUser] = useState({});


    const login = (userData) => {
       
        setUser(previousUser => ({
            username: userData.username,
            email: userData.email,
            password: userData.password,
            accessToken: userData.accessToken,
            _id: userData._id
        }));
        console.log({user: user})

        localStorage.setItem('token', userData.accessToken)
    }

    const logout = () => {
        setUser(previousUser => ({}));
        localStorage.removeItem("token");
    }

    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        console.log({token: token}); // Check what value is retrieved from localStorage
        return !!token;
        // return !!user.accessToken;
    }

    const getAccessToken = () => {
        return localStorage.getItem("token");
    }

    const authContextValue = {
        user,
        login,
        logout,
        isAuthenticated,
        getAccessToken
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )

}