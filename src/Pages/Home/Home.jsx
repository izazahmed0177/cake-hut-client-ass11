import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Countdown from './Countdown';
import OurCakeHeader from './OurCakeHeader';
import SliderHome from './SliderHome';

const Home = () => {
    return (
        <div>
            

      <SliderHome></SliderHome>
      <Banner></Banner>
      <Countdown></Countdown>
      <OurCakeHeader></OurCakeHeader>
      <div className='text-center mb-3'>

      <Link to='/ourcake' className="btn btn-outline btn-info">See All</Link>
      </div>



        </div>
    );
};

export default Home;