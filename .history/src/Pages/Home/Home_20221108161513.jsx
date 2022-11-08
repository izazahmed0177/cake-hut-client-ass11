import React from 'react';
import Banner from './Banner';
import SliderHome from './SliderHome';

const Home = () => {
    return (
        <div>
            <h1>home page</h1>
            <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button class="btn btn-primary">Button</button>

      <SliderHome></SliderHome>
      <Banner></Banner>



        </div>
    );
};

export default Home;