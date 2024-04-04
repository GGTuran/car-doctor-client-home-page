// import React from 'react';

import About from "./About";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <h1 className="text-center text-5xl">Home Sweet Home!!!</h1>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;