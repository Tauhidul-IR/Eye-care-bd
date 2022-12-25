import React from 'react';
import { Link } from 'react-router-dom';
// allDoctors.json
const HomeDoctors = () => {
    return (
        <div className='my-10'>
            <h1 className='text-5xl font-bold text-info text-center'>Our Eye Specialists</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:pl-6'>
                <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-info">Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-info">Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-info">Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-center font-bold text-2xl my-6 text-success hover:text-info'> <Link>See more</Link></h2>
        </div>
    );
};

export default HomeDoctors;