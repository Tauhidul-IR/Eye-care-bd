import React from 'react';
import HomeAppointment from './HomeAppointment';
import Banner from './Banner';
import Consultant from './Consultant';
import HomeDoctors from './HomeDoctors';
import HomeLocation from './HomeLocation';
import IntroClinin from './IntroClinin';
import HomeServices from './HomeServices';
import Suggestion from './Suggestion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeLocation></HomeLocation>
            <HomeServices></HomeServices>
            <Consultant></Consultant>
            <IntroClinin></IntroClinin>
            <HomeAppointment></HomeAppointment>
            <HomeDoctors></HomeDoctors>
            <Suggestion></Suggestion>
        </div>
    );
};

export default Home;