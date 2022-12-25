import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Consultant from './Consultant';
import Doctors from './Doctors';
import HomeLocation from './HomeLocation';
import IntroClinin from './IntroClinin';
import Services from './Services';
import Suggestion from './Suggestion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeLocation></HomeLocation>
            <Services></Services>
            <Consultant></Consultant>
            <IntroClinin></IntroClinin>
            <Appointment></Appointment>
            <Doctors></Doctors>
            <Suggestion></Suggestion>
        </div>
    );
};

export default Home;