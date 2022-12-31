import React from 'react';
import HomeAppointment from './HomeAppointment';
import Banner from './Banner';
import Consultant from './Consultant';
import HomeDoctors from './HomeDoctors';
import HomeLocation from './HomeLocation';
import IntroClinin from './IntroClinin';
import HomeServices from './HomeServices';
import Suggestion from './Suggestion';
import HomeAdvirtise from './HomeAdvirtise';
import HomeDiagnostics from './HomeDiagnostics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeLocation></HomeLocation>
            <HomeServices></HomeServices>
            <Consultant></Consultant>
            <IntroClinin></IntroClinin>
            <HomeAppointment></HomeAppointment>
            <HomeDiagnostics></HomeDiagnostics>
            <HomeDoctors></HomeDoctors>
            <HomeAdvirtise></HomeAdvirtise>
            <Suggestion></Suggestion>
        </div>
    );
};

export default Home;