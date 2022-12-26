import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';

const Main = () => {
    const [dark, setDark] = useState(false);

    return (
        <div data-theme={dark ? "dark" : "light"}>
            <Navbar setDark={setDark} dark={dark}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;