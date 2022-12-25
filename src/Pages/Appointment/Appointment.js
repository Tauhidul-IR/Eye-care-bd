import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import DoctorAppointment from './DoctorAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner setSelectedDate={setSelectedDate} selectedDate={selectedDate}></AppointmentBanner>
            <DoctorAppointment selectedDate={selectedDate}></DoctorAppointment>
        </div>
    );
};

export default Appointment;