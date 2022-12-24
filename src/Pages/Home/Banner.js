import React from 'react';

const Banner = () => {
    const bannerTexts = <React.Fragment>

    </React.Fragment>
    return (
        <div>
            <div className="hero min-h-screen bg-opacity-20" style={{ backgroundImage: `url("https://www.sezza.com/wp-content/uploads/2013/05/unnamed-2.jpg")` }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold text-info">Welcome Eye Care BD</h1>
                        <p className="mb-5 text-3xl font-bold text-white">Your vision is our passion</p>
                        <button className="btn btn-info text-white bg-gradient-to-r from-primary to info">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;