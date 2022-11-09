import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewBlog from './ReviewBlog';

const CakeDetails = () => {

    const {user}=useContext(AuthContext)
    const cakaDetails=useLoaderData();
    const {_id,name,img,price,rating,details,cakeService}=cakaDetails;

    ////////////

    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        // fetch('http://localhost:5000/allreviews')
        fetch(`http://localhost:5000/allreviewscake/${_id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);


    // /////////////

    const handlePlaceCakeReview=event=>{
        event.preventDefault();
        const form=event.target;
        const customerEmail=user?.email || 'unregistered'
        const customerRating=form.rating.value;
        const message=form.message.value;
        const  customerName=user?.displayName || 'unregistered'
        const  customerId=user?.uid || 'unregistered'
        const  customerImg=user?.photoURL || 'unregistered'

        const review={
            cakeService:_id,
            cakeName:name,
            cakePrice:price,
            cakeRating:rating,
            cakeImg:img,
            customerEmail,
            customerRating,
            message,
            customerName,
            customerId,
            customerImg

        }

        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.acknowledged) {
                alert('Review placed successfully')
                form.reset();
            }
        })

        .catch(err=>console.error(err));




    }







    return (
        <div>
            {/* <h1>det</h1>
            <h1>{name}</h1> */}

            <div>

            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={img}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
      <p className="mb-8 leading-relaxed">{details}</p>
      <div className="flex justify-center">
        <span className="inline-flex   border-0 py-2 px-6  rounded text-lg">Price: ${price}</span>
        <button className="ml-4 inline-flex   border-0 py-2 px-6  rounded text-lg">Rating: {rating}</button>
      </div>
    </div>
  </div>
</section>





            </div>



            <div className='m-3'>
                {/* ////////////////// */}


                                {
                                    reviews.map(review=><ReviewBlog key={review._id} review={review}></ReviewBlog>)
                                }
                                        



{/* /////////////// */}

            </div>


            {/*  */}


            {
                    user?.uid ?
                    <>



                       <div>
                        <section className="bg-gray-100">
                        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                            <div className="grid  gap-x-16 gap-y-8 lg:">

                            

                            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                                <form onSubmit={handlePlaceCakeReview} action=""className="space-y-4">
                                

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                    <label className="">Email</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        defaultValue={user?.email}
                                        readOnly
                                        type="email"
                                        name='email'
                                    />
                                    </div>

                                
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                    <label className="">Rating</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Your Rating"
                                        
                                        type="text"
                                        name='rating'
                                    />
                                    </div>

                                
                                </div>

                                

                                <div>
                                    <label class="" for="message">Message</label>
                                    <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Message"
                                    rows="8"
                                    name='message'
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                    type="submit"
                                    class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                    >
                                    <span class="font-medium"> Send  Review </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ml-3 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                    </button>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </section>

                      </div>

                       


                    
                    </>
                    :
                    <>




                        <div className='container flex flex-col w-full max-w-lg p-6 mx-auto'>
                            <h3>Please  <Link to='/login' className="font-medium text-teal-300 dark:text-gray-200 hover:underline">Login</Link> to add a review</h3>
                        </div>
                     





                    </>
                }




            {/*  */}









            


{/*  */}

            





        </div>
    );
};

export default CakeDetails;