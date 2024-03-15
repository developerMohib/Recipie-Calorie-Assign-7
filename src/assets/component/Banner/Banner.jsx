
import React from 'react';

const Banner = () => {
    return (
        <div>
            
            <div>
            <div className="hero min-h-screen rounded-3xl" style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://ibb.co/CmKb0Rq)"}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:w-3/5 w-full">
                <h1 className="mb-5 text-2xl lg:text-5xl font-bold"> Discover an exceptional cooking
                    class tailored for you! </h1>
                <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                
                    
                <div className='lg:flex lg:w-1/2 justify-around mx-auto space-y-4 lg:space-y-0 items-center'> 
                <button className="btn bg-[#0be58a] text-black hover:bg-slate-200 border-none rounded-full ">Explore Now</button>
                <button className="btn hover:bg-[#0be58a] text-black bg-slate-200 border-none rounded-full">Our Feedback</button>
                </div>

                </div>
            </div>
            </div>

            </div>
            
        </div>
    );
};

export default Banner;