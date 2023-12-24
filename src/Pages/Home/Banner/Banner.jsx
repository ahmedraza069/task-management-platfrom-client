/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
    return (
        <div className="hero h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/bQYgfwb/photo-1611224923853-80b023f02d71-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg)'}}>
        <div className="hero-overlay bg-blue bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content pt-28">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold text-white"> 
            {'Seamlessly Manage Your To-Do List, From'}{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Start to Finish!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
            </h1>
            <p className="mb-5 text-white py-2">Effortless Task Mastery Awaits! Dive into Task Management Excellence with Intuitive Design, Collaborative Tools, and Seamless Integration. Stay Organized, Stay Ahead!</p>
            <div className="flex justify-center items-center links">
                <Link to={'/summary'}>
                <button className=" btn-main font-medium md:font-semibold tracking-wide text-sm md:text-normal text-white bg-blue px-4 py-2 md:py-4 md:px-6 rounded-lg flex justify-center items-center gap-1">
              Let's Explore
            </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;