import React from 'react';
import Banner from './Banner';
import Consultant from './Consultant';
import Doctors from './Doctors';
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
            <Doctors></Doctors>
        </div>
    );
};

export default Home;