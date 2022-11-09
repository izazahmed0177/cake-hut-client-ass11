import React, { useEffect, useState } from 'react';

const OurCakeHeader = () => {

  const [cakeServices,setCakeServices]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/cakeservicehome')
    .then(res=>res.json())
    .then(data=>setCakeServices(data))
  },[])



    return (
        <div>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">



     


      

     




    </div>
  </div>
</section>
            
        </div>
    );
};

export default OurCakeHeader;