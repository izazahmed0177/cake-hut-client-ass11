import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Countdown from './Countdown';
import ExtaSection1 from './ExtaSection1';
import ExtaSection3 from './ExtaSection3';
import OurCakeHeader from './OurCakeHeader';
import SliderHome from './SliderHome';

const Home = () => {
  useEffect(()=>{
    document.title='Cake Hut Home';
})
    return (
        <div>
            

      <SliderHome></SliderHome>
      <Banner></Banner>
      <Countdown></Countdown>
      <OurCakeHeader></OurCakeHeader>
      <div className='text-center mb-3'>

      <Link to='/ourcake' className="btn btn-outline btn-info">See All</Link>


      <ExtaSection1></ExtaSection1>
      <ExtaSection3></ExtaSection3>
      </div>



        </div>
    );
};

export default Home;