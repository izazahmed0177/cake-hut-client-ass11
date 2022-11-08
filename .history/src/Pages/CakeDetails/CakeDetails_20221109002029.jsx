import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CakeDetails = () => {
    const cakaDetails=useLoaderData();
    const {_id,name,img,price,rating,details}=cakaDetails;
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
        <button className="ml-4 inline-flex   border-0 py-2 px-6 focus:outline-none rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>





            </div>





        </div>
    );
};

export default CakeDetails;