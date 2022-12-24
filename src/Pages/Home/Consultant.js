import React from 'react';
import img from '../../images/banner3.jpg'

const Consultant = () => {
    return (

        // <div className='bg-info' style={{ backgroundImage: `url(${img})` }}>
        //     <div className="hero-overlay bg-opacity-60 bg-info"></div>
        //     <div className="hero-content justify-center text-center text-neutral-content">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //             <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
        <div className="hero max-h-80 my-10" style={{ backgroundImage: `url("https://www.essilorindia.com/sites/default/files/2022-02/how%20to%20choose%20your%20eye%20care%20specialist%20banner.jpg")` }}>
            <div className="hero-overlay bg-info bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 items-center'>
                    <div>
                        <h2 className='font-bold text-xl text-black'>Looking for consultant.</h2>
                        <h2 className='font-bold text-xl text-white'>8943759874356897</h2>
                    </div>
                    <div>
                        <h2 className='font-bold text-xl text-black'>It is long established fact that reader will distracted by the reable content of a page at its layout.

                        </h2>
                    </div>
                    <div>
                        <button className='btn btn-primary font-bold text-xl'>get consultant</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Consultant;