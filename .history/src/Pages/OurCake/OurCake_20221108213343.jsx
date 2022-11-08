import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OurCake = () => {
    const allCake=useLoaderData();
    return (
        <div>
            <h1>cake list</h1>
        </div>
    );
};

export default OurCake;