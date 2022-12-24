import React from 'react';
import Banner from './Banner';
import Consultant from './Consultant';
import HomeLocation from './HomeLocation';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeLocation></HomeLocation>
            <Services></Services>
            <Consultant></Consultant>
        </div>
    );
};

export default Home;