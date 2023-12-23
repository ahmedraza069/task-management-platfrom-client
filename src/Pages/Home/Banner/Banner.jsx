/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/bQYgfwb/photo-1611224923853-80b023f02d71-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content pt-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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