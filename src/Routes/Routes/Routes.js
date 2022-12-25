import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Appointment from '../../Pages/Appointment/Appointment';
import Doctors from '../../Pages/Doctors/Doctors';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/Login/SignUp';
import Services from '../../Pages/Services/Services';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/allDoctors',
                element: <Doctors></Doctors>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
        ]
    }
])
export default router;