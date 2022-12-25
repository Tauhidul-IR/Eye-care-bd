import React from 'react';
import bgImg from '../../images/contactBG.jpeg'

const Suggestion = () => {
    return (
        <div>
            <section style={{ background: `url(${bgImg})` }} className='py-10 bg-contain'>
                <div>
                    <div className='text-center'>
                        <h1 className="text-5xl  text-info font-bold">Connect with us</h1>
                        <h2 className='text-4xl text-black'>Send your valuable Message</h2>
                    </div>

                    <div className='flex justify-center items-center mt-10'>
                        <form className=''>
                            <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 '>
                                <input type="text" name='name' placeholder="Email Address" className="input input-bordered    sm:w-[450px] " />
                                <input type="text" name='name' placeholder="Subject" className="input input-bordered     sm:w-[450px] " />

                                <textarea name='message' className="textarea sm:w-[450px] my-4 h-60" placeholder="Your Message"></textarea>
                                <input className='btn btn-info w-full mb-5' type="submit" value={'Send Message'} />
                            </div>
                        </form>
                    </div>


                    {/* style={{ background: `url(${bgImg})` }} */}

                </div >

            </section >
        </div>
    );
};

export default Suggestion;