import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReviewItem = () => {

    const reviewEditData=useLoaderData();

    const {_id,cakeName,customerEmail,customerRating,message}=reviewEditData;

    const handlePlaceCakeReview=event=>{

    }
    return (
        <div>
            <div>
                        <section className="bg-gray-100">
                        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                            <div className='text-center m-3 font-bold text-6xl'>Edit Review</div>
                            <div className="grid  gap-x-16 gap-y-8 lg:">

                            

                            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                                <div>
                                    <h1 className='mb-2'>Cake Name : {cakeName} </h1>
                                </div>
                                <form onSubmit={handlePlaceCakeReview} action=""className="space-y-4">

                                

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                    <label className="">Email</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        defaultValue={customerEmail}
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
                                        defaultValue={customerRating}
                                        
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
                                    defaultValue={message}
                                    rows="8"
                                    name='message'
                                    
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                    type="submit"
                                    class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                    >
                                    <span class="font-medium"> Save  Review </span>

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
            
        </div>
    );
};

export default EditReviewItem;