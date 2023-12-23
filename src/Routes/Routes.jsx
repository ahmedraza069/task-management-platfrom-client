import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";

import Dashboard from "../Layouts/Dashboard";
import Summary from "../Pages/ManagementDashboard/Summary";
import NewTasks from "../Pages/ManagementDashboard/NewTasks";

import OnGoingTasks from "../Pages/ManagementDashboard/OnGoingTasks";
import CompletedTask from "../Pages/ManagementDashboard/CompletedTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      { path: "/login", element: <Login></Login> },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "summary",
        element: <Summary></Summary>,
      },
      {
        path: "new-tasks",
        element: <NewTasks></NewTasks>,
      },
      {
        path: "on-going",
        element: <OnGoingTasks></OnGoingTasks>,
      },
      {
        path: "complete-tasks",
        element: <CompletedTask></CompletedTask>,
      },
    ],
  },
]);

export default router;
