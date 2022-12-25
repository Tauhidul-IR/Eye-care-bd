import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div>
            <div className='text-center my-12'>
                <div className='my-10'>
                    <h1 className='text-info text-5xl font-bold my-6'>Our Services</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                    {
                        allServices.map(service => <div className="card  bg-base-100 shadow-xl">
                            <div className="card-body items-center text-center">
                                <Link><h2 className="card-title text-info hover:text-primary text-3xl">{service?.name}</h2></Link>
                                <p className='text-left font-bold'>{service?.details}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;