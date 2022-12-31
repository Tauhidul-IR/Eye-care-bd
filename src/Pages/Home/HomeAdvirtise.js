import React from 'react';
import img1 from '../../images/doctorBatch/H1.png';
import img2 from '../../images/doctorBatch/H2.png';
import img3 from '../../images/doctorBatch/H3.png';
import img4 from '../../images/doctorBatch/H4.png';
import img5 from '../../images/doctorBatch/H5.png';

const HomeAdvirtise = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  justify-center my-10'>
                <div className="flex justify-center">
                    <figure><img src={img1} alt="" /></figure>
                </div>
                <div className="flex justify-center">
                    <figure><img src={img2} alt="" /></figure>
                </div>
                <div className="flex justify-center">
                    <figure><img src={img3} alt="" /></figure>
                </div>
                <div className="flex justify-center">
                    <figure><img src={img4} alt="" /></figure>
                </div>
                <div className="flex justify-center">
                    <figure><img src={img5} alt="" /></figure>
                </div>
                <div className="flex justify-center">
                    <figure><img src={img1} alt="" /></figure>
                </div>

            </div>
            <div className="divider"></div>
        </div>
    );
};

export default HomeAdvirtise;