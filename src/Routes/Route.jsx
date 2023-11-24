import AdminProfile from "../AdminProfile/AdminProfile";
import AdminRoute from "../PrivateRoute/AdminRoute";
import Agreements from "../Pages/Agreements/Agreements";
import Announcements from "../Pages/Announcements/Announcements";
import Apartments from "../Apertments/Apartments";
import DashboardLayout from "../Layout/DashboardLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MainLayout from "../Layout/mainLayout";
import ManageMembers from "../Pages/ManageMembers/ManageMembers";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Signup from "../Pages/Signup/Signup";
import UserProfile from "../UserProfile/UserProfile";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/apartment",
                element: <Apartments></Apartments>
            },

        ],

    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    }, {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard/profile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: "/dashboard/announcements",
                element: <PrivateRoute><Announcements></Announcements></PrivateRoute>
            },
            {
                path: "/dashboard/adminProfile",
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },
            {
                path: "/dashboard/manageMembers",
                element: <AdminRoute><ManageMembers></ManageMembers></AdminRoute>
            },
            {
                path: "/dashboard/agreementsReq",
                element: <AdminRoute><Agreements></Agreements></AdminRoute>
            }
        ]
    }
])