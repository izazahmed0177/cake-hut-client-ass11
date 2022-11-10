import React from 'react';

const ReviewItem = ({review}) => {

    const {_id,customerImg,customerRating,customerName,message,cakeName }=review
    return (
        <div>
              <div className='m-3'>


                        <div className="p-6 sm:p-12 bg-gray-900 text-gray-100">
                            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                            <img src={customerImg} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                            <div>
                            {/* <h1>name:icccc</h1>
                            <h1>name:icccc</h1> */}
                            </div>
                            <div className="flex flex-col">
                            <h4 className="text-lg font-semibold text-center md:text-left">Name: {customerName}</h4>
                            <h4 className="text-lg font-semibold text-center md:text-left">Cake Name: {cakeName}</h4>
                            <h4 className="text-lg font-semibold text-center md:text-left">My Rating: {customerRating}</h4>
                            <p className="text-gray-400">Review: {message}</p>
                            </div>
                            </div>
                            <div className="flex justify-center pt-4 space-x-4 align-center">

                            <button className="btn btn-primary">Button</button>
                            <button className="btn btn-secondary">Button</button>



                            </div>
                        </div>





</div>
            
        </div>
    );
};

export default ReviewItem;