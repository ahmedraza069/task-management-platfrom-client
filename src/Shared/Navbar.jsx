import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import '../index.css'


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext) || {};
  const handleLogout = () => {
    logOut().then().catch();
  };
  return (
    <div className="bg-base-100 shadow-lg fixed z-10 w-full">
      <div className="navbar  py-6 container mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content border border-blue mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue" : ""
                  }
                  style={{
                    transition: "border-bottom-color 0.3s, color 0.3s",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue" : ""
                  }
                  style={{
                    transition: "border-bottom-color 0.3s, color 0.3s",
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="w-36"
              src="https://i.ibb.co/TcgH9jw/logo-image.png"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-semibold text-base">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-blue text-blue"
                  : ""
              }
              style={{
                transition: "border-bottom-color 0.3s, color 0.3s",
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-blue text-blue"
                  : ""
              }
              style={{
                transition: "border-bottom-color 0.3s, color 0.3s",
              }}
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center ">
              <div className="dropdown dropdown-end flex justify-center items-center gap-1">
                <div className="hidden md:block lg:block">
                  <p className="text-blue font-medium pl-3 text-sm ">
                    {user.email}
                  </p>
                </div>
                <div>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow flex justify-center items-center bg-base-100 rounded-box w-36"
                  >
                    <li>
                      <Link to={"/profile"}>
                        <p className="text-center text-black py-3 uppercase">
                          Profile
                        </p>
                      </Link>
                    </li>
                    <li>
                      <p className="text-center text-black py-3">
                        {user.displayName}
                      </p>
                    </li>

                    <li>
                      <Link onClick={handleLogout}>Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
          <div className="links">
              <Link to="/login">
             <button className=" btn-main font-medium md:font-semibold tracking-wide text-sm md:text-normal text-white bg-blue px-4 py-2 md:py-4 md:px-6 rounded-lg flex justify-center items-center gap-1">
              Login
            </button>
            </Link>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
