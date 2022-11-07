import React from 'react';

const { createContext, useState } = require("react");

export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const authInfo = {
        user,
        loading,


    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;