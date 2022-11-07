import React, { Children } from 'react';

const { createContext, useState } = require("react");

export const AuthContext = createContext();



const AuthProvider = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const authInfo = {
        user,
        loading,


    }
    return (
        <AuthContext.Provider>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;