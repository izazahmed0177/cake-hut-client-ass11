import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewItem from './ReviewItem';

const MyReview = () => {
    const {user}=useContext(AuthContext);

    const  customerId=user?.uid || 'unregistered'

    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        // fetch('http://localhost:5000/allreviews')
        fetch(`http://localhost:5000/customer/${customerId}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);

    console.log(reviews)


    return (
        <div>
            <h1>review  {reviews.length}</h1>



            {
                reviews.length==0 ?
                <>
                <h1>000000000</h1>
                </>
                :
                <>
                <h1>sone ttttt</h1>
                </>
               
            }
            {
                reviews.map(review=><ReviewItem key={review._id} review={review}></ReviewItem>)
            }
          


        </div>
    );
};

export default MyReview;