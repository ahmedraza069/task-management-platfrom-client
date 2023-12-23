/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";

import { NavLink, Outlet } from "react-router-dom";

import { MdPending, MdSpaceDashboard } from "react-icons/md";

import { MdPublishedWithChanges } from "react-icons/md";

import PageTitle from "../Shared/PageTitle";
import { GrStatusGood } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Navbar></Navbar>
      <Helmet>
        <title>Express Times | Dashboard</title>
      </Helmet>
      <PageTitle
      ></PageTitle>
      <div className="pt-8 container mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div
            className="drawer-content flex flex-col  rounded-r-lg text-black bg-gray-100"
           
          >
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden "
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side rounded-l-lg bg-[#2628ad]">
                <p className=""></p>
            <div className="flex items-center space-x-4  bg-blue text-white rounded-l-lg shadow-lg p-6" >
              <img
                src={user?.photoURL}
                alt=""
                className="w-12 h-12 rounded-full dark:bg-gray-500"
              />
              <div>
                <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                <span className="flex items-center space-x-1">
                  <a 
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    View profile
                  </a>
                </span>
              </div>
            </div>
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
             
            ></label>
            <ul className="menu p-6 text-white rounded-l-lg w-80 min-h-full space-y-3 text-lg font-medium ">
              {/* Sidebar content here */}
              <li>
                <NavLink to="/summary"><MdSpaceDashboard /> Dashboard</NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/all-users"><FaUsers /> All Users</NavLink>
              </li> */}
             
              <li>
                <NavLink to="/new-tasks"><MdPublishedWithChanges /> Let's Tasks</NavLink>
              </li>
             
              <li>
                <NavLink to="/on-going"><MdPending /> Ongoing Tasks</NavLink>
              </li>
              <li>
                <NavLink to="/complete-tasks"><GrStatusGood/> Completed Task</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;