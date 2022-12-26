import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// allDoctors.json
const HomeDoctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/show3Doctors")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    console.log(doctors);




    return (
        <div className='my-10'>
            <h1 className='text-5xl font-bold text-info text-center'>Our Eye Specialists</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:pl-6'>

                {
                    doctors.map(doctor =>
                        <div key={doctor._id} className="card w-full md:w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={doctor?.img} alt="Shoes" className="rounded-xl  h-52" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{doctor?.name}</h2>
                                <p>{doctor?.details}</p>

                            </div>
                        </div>
                    )
                }
            </div>
            <h2 className='text-center font-bold text-2xl my-6 text-success hover:text-info'> <Link to={'/allDoctors'}>See more</Link></h2>
        </div>
    );
};

export default HomeDoctors;