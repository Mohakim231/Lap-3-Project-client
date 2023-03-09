import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(0);
    const [user_name, setUser_name] = useState("")

    return (
        <AuthContext.Provider value={{ user, setUser, user_name, setUser_name }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);


