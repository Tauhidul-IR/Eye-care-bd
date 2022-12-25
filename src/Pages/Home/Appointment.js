import React from 'react';
import doctor from '../../images/doctor.png'
import appointment from '../../images/appointment.png'

const Appointment = () => {
    return (
        <section className='mt-10' style={{ background: `url(${appointment})` }}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-40 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-xl font-bold text-info">Appointment</h1>
                        <h2 className='text-4xl text-white'>Make an appointment Today</h2>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;