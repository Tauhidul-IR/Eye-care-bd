import React from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const reviewerPeoples = [
        {
            name: 'Winson Herry',
            details: "We always prefer Eye Care BD. Both my husband Anwar Hossain Khan (Freedom Fighter) and I underwent eye surgery here. I am fascinated by their treatment and service.",
            img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
            location: "California"
        },
        {
            name: 'Winson Herry',
            details: "Eye Care BD is a very dependable Eye Hospital with its experience Doctor, Staff and latest technologies.",
            img: "https://t4.ftcdn.net/jpg/02/97/24/51/360_F_297245133_gBPfK0h10UM3y7vfoEiBC3ZXt559KZar.jpg",
            location: "California"
        },
        {
            name: 'Winson Herry',
            details: "Very well trained, well-mannered and precisely dressed workforce. Please keep this up and continue the great job you guys are doing.",
            img: "https://t3.ftcdn.net/jpg/02/15/63/42/360_F_215634201_6MHT39zdmOmAmbbWLth2z7KMvpiZnMak.jpg",
            location: "California"
        },
    ]
    return (
        <section className='my-20'>
            <div className=''>
                <div>
                    <h2 className='text-4xl font-bold text-info text-center'>What Our Patients Says</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                {
                    reviewerPeoples.map(review => <SingleReview review={review}></SingleReview>)
                }
            </div>
            <h2 className='flex justify-center btn btn-link font-bold text-md my-10 text-success hover:text-info'>See All</h2>

        </section>
    );
};

export default Reviews;