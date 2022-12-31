import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';

const DashBoardLayOut = () => {
    const [dark, setDark] = useState(false);
    return (
        <div data-theme={dark ? "dark" : "light"}>
            <Navbar setDark={setDark} dark={dark}></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashBoard-brawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content items-center">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashBoard-brawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default DashBoardLayOut;