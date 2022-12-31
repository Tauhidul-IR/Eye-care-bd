import React from 'react';
import img1 from '../../images/service/Icon-1.png'
import img2 from '../../images/service/Icon-3.png'
import img3 from '../../images/service/Icon-4.png'

const HomeDiagnostics = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  justify-center my-10 '>
                <div className="">
                    <div className='flex flex-col justify-center items-center px-3 w-full lg:w-96 mx-auto'>
                        <img src={img1} alt="" />
                        <h2 className='text-xl font-bold mt-5'>Diagnostics</h2>
                        <h4 className='mt-5'>A careful physical exam can help a clinician refine the next steps in the diagnostic process</h4>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col justify-center items-center px-3 w-full lg:w-96 mx-auto">
                        <img src={img2} alt="" />
                        <h2 className='text-xl font-bold mt-5'>Diagnosis of Heart</h2>
                        <h4 className='mt-5'>Besides blood tests and a chest X-ray, tests to diagnose heart disease can include</h4>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col justify-center items-center px-3 w-full lg:w-96 mx-auto">
                        <img src={img3} alt="" />
                        <h2 className='text-xl font-bold mt-5'>Timely Treatment</h2>
                        <h4 className='mt-5'>The importance of timely treatment for quality of life and survival in patients with symptomatic spinal metastases</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeDiagnostics;