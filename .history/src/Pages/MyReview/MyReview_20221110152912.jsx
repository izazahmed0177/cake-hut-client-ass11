import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import NoReview from './NoReview';
import ReviewItem from './ReviewItem';

const MyReview = () => {
    const {user}=useContext(AuthContext);
    // const [allReview,setAllReview]=useState();

    const  customerId=user?.uid || 'unregistered'

    const [reviews,setReviews]=useState([]);



    useEffect(()=>{
        // fetch('http://localhost:5000/allreviews')
        fetch(`http://localhost:5000/customer/${customerId}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[reviews]);

    console.log(reviews)




    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure,Delete this Review');
        if (proceed) {
            fetch(`http://localhost:5000/userreview/${id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount>0) {
                    alert('Review Delete successfully')
                    toast.error('Review Delete successfully')
                    const newReview=reviews.filter(review=>review._id !==id)
                    setReviews(newReview);
                }
            })
            
            

        }

    }

    useEffect(()=>{
        document.title='Cake Hut My Review';
    })


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