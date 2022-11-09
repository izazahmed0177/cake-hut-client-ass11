import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <>

        </>
    }

    if (user) {
        return children;
    }
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;