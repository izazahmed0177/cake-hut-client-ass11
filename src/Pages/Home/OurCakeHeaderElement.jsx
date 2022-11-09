import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const OurCakeHeaderElement = ({cakeService}) => {
    const {_id,name,img,price,rating,details}=cakeService;
    return (
        <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

      

                        <PhotoProvider>
                        <PhotoView src={img}>
                        <img src={img} class="lg:h-48 md:h-36 w-full object-cover object-center" style={{ objectFit: 'cover' }} alt="" />
                        </PhotoView>

                        </PhotoProvider>

                                    

         
           
          {/* <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog"/> */}
          <div class="p-6">

            {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}

            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
            {/* <p class="leading-relaxed mb-3">{details}</p> */}
            <p class="leading-relaxed mb-3">{details.length > 100 ? details.slice(0,100) + '...' : details}</p>


            <h4 class="title-font text-1xl font-medium text-gray-900 mb-3">Price: ${price}</h4>
            <h4 class="title-font  font-medium text-gray-900 mb-3"> Rating: {rating}</h4>


           

          </div>
          <div class="btn btn-ghost text-center flex">
              <Link to={`/cakeservices/${_id}`} class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">More Details
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>

            </div>
        </div>
      </div>
    );
};

export default OurCakeHeaderElement;