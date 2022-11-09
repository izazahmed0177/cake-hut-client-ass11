import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <>

            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            </div>

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