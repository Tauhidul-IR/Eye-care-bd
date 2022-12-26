import React, { useEffect, useState } from 'react';
import SingleDoctor from './SingleDoctor';

const Doctors = () => {
    const [allDoctors, setAllDoctors] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allDoctors")
            .then(res => res.json())
            .then(data => setAllDoctors(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-5xl font-bold text-info text-center'>All Our Eye Specialists</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:pl-6'>
                {
                    allDoctors.map(doctors => <SingleDoctor key={doctors.id} doctors={doctors}></SingleDoctor>)
                }


            </div>
        </div>
    );
};

export default Doctors;