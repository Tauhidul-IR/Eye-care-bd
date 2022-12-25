import React, { useState } from 'react';
import img from '../../images/appoint.jpg'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="w-full max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;