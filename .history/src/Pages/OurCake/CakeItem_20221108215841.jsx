import React from 'react';
import { Link } from 'react-router-dom';

const CakeItem = ({cakeitem}) => {

    const {_id,name,img}=cakeitem;
    return (
        <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog"/>
          <div class="p-6">

            {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}

            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>


            <h4 class="title-font text-1xl font-medium text-gray-900 mb-3">{name}</h4>
            <div class="btn btn-ghost  ">
              <Link class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>


             
              


            </div>
          </div>
        </div>
      </div>
    );
};

export default CakeItem;