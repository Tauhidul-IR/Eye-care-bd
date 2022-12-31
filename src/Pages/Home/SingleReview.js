import React from 'react';

const SingleReview = ({ review }) => {
    console.log(review);
    return (
        <section className='my-10'>
            <div className="card h-72  bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{review?.details}</p>
                    <div className="card-actions justify-start">
                        <div className='flex justify-center items-center mt-4'>
                            <div className="avatar mr-4">
                                <div className="w-10 md:w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img alt='' src={review?.img} />
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl'>{review?.name}</h2>
                                <h4>{review?.location}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SingleReview;