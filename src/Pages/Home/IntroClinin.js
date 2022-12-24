import React from 'react';
import { TiTick } from 'react-icons/ti';

const IntroClinin = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src="https://cdn.shopify.com/s/files/1/0583/8721/articles/500x400_1200x1200.png?v=1666261874" className="rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Introducing The High Quality Optometrist Clinic</h1>
                        <p className="py-6">There are many different eye conditions; some are minor and easily treated but others can cause serious problems or lead to permanent loss of vision. We offer varying specialties, covering all aspects of the medical and surgical eye care, including cataract surgery.</p>
                        <div className='flex  items-center text-info font-bold'>
                            <TiTick></TiTick><p>Drawing up an individual treatment program for patient.</p>
                        </div>
                        <div className='flex  items-center text-info font-bold'>
                            <TiTick></TiTick><p>Performing all operations and proceds highest professional level.</p>
                        </div>
                        <div className='flex  items-center text-info font-bold'>
                            <TiTick></TiTick><p>Compliance of materials equipment international standards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroClinin;