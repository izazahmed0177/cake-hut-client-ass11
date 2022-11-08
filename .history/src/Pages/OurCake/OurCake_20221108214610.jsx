import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CakeItem from './CakeItem';

const OurCake = () => {
    const allCake=useLoaderData();
    return (
        <div>
            {/* <h1>cake list {allCake.length}</h1> */}



            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">


      
{
    allCake.map(cakeitem => <CakeItem key={cakeitem._id} cakeitem={cakeitem}></CakeItem>)
}


     


     

    </div>
  </div>
</section>








        </div>
    );
};

export default OurCake;