import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ selectedDoctor, selectedDate, setSelectedDoctor }) => {
    console.log(selectedDoctor);
    const user = {
        displayName: "abc"
    }
    const date = format(selectedDate, 'PP');



    const handleAppointment = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.patientName.value;
        const email = form.email.value;
        const phone = form.phone.value;



        const appointment = {
            appointmentDate: date,
            doctorName: selectedDoctor?.name,
            treatment: selectedDoctor?.details,
            patient: patientName,
            email,
            slot,
            phone

        }
        console.log(appointment);
        setSelectedDoctor(null);
    }


    return (
        <>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle bg-primary absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold text-info">{selectedDoctor?.name}</h3>
                    <h3 className="text-lg font-bold ">{selectedDoctor?.details}</h3>
                    <form onSubmit={handleAppointment} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                selectedDoctor?.slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='patientName' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full  btn btn-info' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;