import React from 'react';

const SingleDoctor = ({ doctors }) => {
    console.log(doctors);
    const { details, img, name } = doctors;
    return (
        <div>
            <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl  h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl text-info">{name}</h2>
                    <p className='font-bold'>{details}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;