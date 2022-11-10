import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import NoReview from './NoReview';
import ReviewItem from './ReviewItem';

const MyReview = () => {
    const {user}=useContext(AuthContext);
    const [allReview,setAllReview]=useState();

    const  customerId=user?.uid || 'unregistered'

    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        // fetch('https://cake-hut-server-ass11.vercel.app/allreviews')
        fetch(`https://cake-hut-server-ass11.vercel.app/customer/${customerId}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);

    console.log(reviews)




    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure,delete this');
        if (proceed) {
            fetch(`https://cake-hut-server-ass11.vercel.app/userreview/${_id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount>0) {
                    alert('deleted complite')
                    // const newReview=allReview.filter(review=>review._id !==id)
                    // setAllReview(newReview);
                }
            })
            
            

        }

    }


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
                reviews.map(review=><ReviewItem key={review._id} review={review} handleDelete={handleDelete}></ReviewItem>)
                }
                </>
               
            }
            
          


        </div>
    );
};

export default MyReview;