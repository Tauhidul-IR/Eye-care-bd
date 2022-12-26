import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';


const Navbar = ({ setDark, dark }) => {
    const { user, userSignOut } = useContext(AuthContext);




    const handleSignOut = () => {
        userSignOut()
            .then(result => {

            })
            .catch(error => console.log(error))
    }






    const menuItems = <>
        <li><Link to={'/'} className='text-xl font-bold text-black'>Home</Link></li>
        <li tabIndex={0}>
            <Link className="justify-between text-lg font-bold text-black">
                Pages
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-blue-100">
                <li><Link to={'/services'} className='text-xl font-bold text-black'>Services</Link></li>
                <li><Link to={'/allDoctors'} className='text-xl font-bold text-black'>Doctors</Link></li>
            </ul>
        </li>
        <li><Link to={'/appointment'} className='text-xl font-bold text-black'>Appointment</Link></li>

        {
            user?.uid ? <>
                <li><Link to={'/dashBoard'} className='text-xl font-bold text-black'>DashBoard</Link></li>
                <li><Link onClick={handleSignOut} className='text-xl font-bold text-black'>SignOut</Link></li>
            </> : <li><Link to={'/login'} className='text-xl font-bold text-black'>Login</Link></li>
        }
    </>



    return (
        <div>
            <div className="navbar bg-slate-100 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <Link className="btn btn-ghost normal-case text-3xl font-bold text-info">Eye Care BD</Link>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div>
                        <label className="swap swap-rotate text-black">

                            <input type="checkbox" onClick={() => setDark(!dark)} />


                            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                    <Link className="btn btn-outline hidden sm:flex btn-info  text-xl text-white ml-2">Appointment</Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;