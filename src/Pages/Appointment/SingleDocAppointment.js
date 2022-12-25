import React from 'react';

const SingleDocAppointment = ({ appointmentOption, setSelectedDoctor }) => {
    const { details, img, name, slots } = appointmentOption;
    return (
        <div>
            <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl  h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl text-info">{name}</h2>
                    <p className=' font-bold text-lg'>{details}</p>
                    <p className='font-bold'>{
                        slots.length > 0 ? `Start Slot: ${slots[0]}` : "Try another day"
                    } </p>
                    <p className='font-bold'>Available {slots.length > 1 ? "Slots" : "Slot"}: {slots.length} </p>
                    <div className="card-actions">

                        {/* The button to open modal */}
                        <label
                            disabled={slots.length === 0}
                            htmlFor="appointment-modal"
                            className="btn btn-info text-white"
                            onClick={() => setSelectedDoctor(appointmentOption)}
                        >Make Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDocAppointment;