import { Link } from "react-router-dom";

const PageTitle = ({heading}) => {
    return (
        <div
        className="hero h-96 relative "
        style={{
          backgroundImage: "url(https://i.ibb.co/NSbNTWf/single.jpg)",
        }}
      >
        <div className="hero-overlay bg-blue bg-opacity-80 absolute inset-0"></div>
        <div className="hero-content  text-center pt-36 text-neutral-content relative">
          <div className="max-w-md z-10">
            <h1 className="mb-5 text-5xl font-bold text-white">{heading}</h1>
            <p className="mb-5">
              <Link>Home</Link><span className="mx-4">/</span>{heading}            </p>
          </div>
        </div>
      </div>
    );
};

export default PageTitle;