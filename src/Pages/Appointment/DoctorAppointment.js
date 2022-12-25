import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import SingleDocAppointment from './SingleDocAppointment';

const DoctorAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOption] = useState([])
    const [selectedDoctor, setSelectedDoctor] = useState(null)

    useEffect(() => {
        fetch("allDoctors.json")
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
    }, [])
    return (
        <div className='mb-10'>
            <h3 className='text-center text-4xl font-bold text-info'>You have selected date : <span className='text-blue-700'>{format(selectedDate, 'PP')}</span></h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:pl-6'>
                {
                    appointmentOptions.map(option => <SingleDocAppointment key={option.id} appointmentOption={option} setSelectedDoctor={setSelectedDoctor}></SingleDocAppointment>)
                }


            </div>
            {
                selectedDoctor && <AppointmentModal selectedDoctor={selectedDoctor} selectedDate={selectedDate} setSelectedDoctor={setSelectedDoctor}></AppointmentModal>
            }

        </div>
    );
};

export default DoctorAppointment;