import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

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
        <li><Link to={'/login'} className='text-xl font-bold text-black'>Login</Link></li>
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
                    <Link className="btn hidden sm:flex btn-info  text-xl text-white">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;