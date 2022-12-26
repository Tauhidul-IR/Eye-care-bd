import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import AppointmentModal from './AppointmentModal';
import SingleDocAppointment from './SingleDocAppointment';

const DoctorAppointment = ({ selectedDate }) => {
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const date = format(selectedDate, 'PP')

    const { data: appointmentOptions = [], isLoading, refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allDoctors?date=${date}`)
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-10'>
            <h3 className='text-center text-4xl font-bold text-info'>You have selected date : <span className='text-blue-700'>{format(selectedDate, 'PP')}</span></h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:pl-6'>
                {
                    appointmentOptions.map(option => <SingleDocAppointment key={option.id} appointmentOption={option} setSelectedDoctor={setSelectedDoctor}></SingleDocAppointment>)
                }


            </div>
            {
                selectedDoctor && <AppointmentModal selectedDoctor={selectedDoctor} selectedDate={selectedDate} setSelectedDoctor={setSelectedDoctor} refetch={refetch}></AppointmentModal>
            }

        </div>
    );
};

export default DoctorAppointment;