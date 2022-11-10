import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import NoReview from './NoReview';
import ReviewItem from './ReviewItem';

const MyReview = () => {
    const {user,logOut}=useContext(AuthContext);
    // const [allReview,setAllReview]=useState();

    const  customerId=user?.uid || 'unregistered'

    const [reviews,setReviews]=useState([]);



    useEffect(()=>{
        // fetch('https://cake-hut-server-ass11.vercel.app/allreviews')
        fetch(`https://cake-hut-server-ass11.vercel.app/customer/${customerId}?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('cake-Token')}`
            }
        })
        .then(res=>{
            if (res.status===401 || res.status===403) {
                return logOut()
             }
            return res.json()
        })
        .then(data=>setReviews(data))
    // },[reviews]);
    },[user?.email,logOut]);

    // console.log(reviews)




    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure,Delete this Review');
        if (proceed) {
            fetch(`https://cake-hut-server-ass11.vercel.app/userreview/${id}`,{
                method:'DELETE',
                headers:{
                    authorization:`Bearer ${localStorage.getItem('cake-Token')}`
                }
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