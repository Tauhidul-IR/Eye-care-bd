import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className='text-center my-12'>
                <div className='my-10'>
                    <h1 className='text-info text-5xl font-bold my-6'>Our Services</h1>
                    <h2 className='text-4xl font-bold'>Service We Provide</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                    {
                        services.map(service => <div className="card  bg-base-100 shadow-xl">
                            <div className="card-body items-center text-center">
                                <Link><h2 className="card-title hover:text-info text-3xl">{service?.name}</h2></Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeServices;