import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CakeDetails = () => {
    const cakaDetails=useLoaderData();
    const {_id,name,img,price,rating,details}=cakaDetails;
    return (
        <div>
            <h1>det</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default CakeDetails;