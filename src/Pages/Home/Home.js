import React from 'react';
import Banner from './Banner';
import Consultant from './Consultant';
import HomeLocation from './HomeLocation';
import IntroClinin from './IntroClinin';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeLocation></HomeLocation>
            <Services></Services>
            <Consultant></Consultant>
            <IntroClinin></IntroClinin>
        </div>
    );
};

export default Home;