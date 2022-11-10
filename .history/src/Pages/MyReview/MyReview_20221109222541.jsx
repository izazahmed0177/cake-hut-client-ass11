import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import NoReview from './NoReview';
import ReviewItem from './ReviewItem';

const MyReview = () => {
    const {user}=useContext(AuthContext);

    const  customerId=user?.uid || 'unregistered'

    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        // fetch('https://cake-hut-server-ass11.vercel.app/allreviews')
        fetch(`https://cake-hut-server-ass11.vercel.app/customer/${customerId}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);

    console.log(reviews)


    return (
        <div>
            {/* <h1>review  {reviews.length}</h1> */}



            {
                reviews.length==0 ?
                <>
              
                <NoReview></NoReview>
                </>
                :
                <>
               
                {
                reviews.map(review=><ReviewItem key={review._id} review={review}></ReviewItem>)
                }
                </>
               
            }
            
          


        </div>
    );
};

export default MyReview;