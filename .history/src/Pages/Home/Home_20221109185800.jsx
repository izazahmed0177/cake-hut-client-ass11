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
      <div>

      <Link to='/ourcake' className="btn btn-outline btn-success">See All</Link>
      </div>



        </div>
    );
};

export default Home;