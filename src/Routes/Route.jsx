import AdminProfile from "../AdminProfile/AdminProfile";
import AdminRoute from "../PrivateRoute/AdminRoute";
import Agreements from "../Pages/Agreements/Agreements";
import Announcements from "../Pages/Announcements/Announcements";
import Apartments from "../Apertments/Apartments";
import Checkout from "../Pages/Checkout/Checkout";
import DashboardLayout from "../Layout/DashboardLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MainLayout from "../Layout/mainLayout";
import MakeAnnouncement from "../Pages/MakeAnnouncement/MakeAnnouncement";
import MakePayment from "../Pages/MakePayment/MakePayment";
import ManageCoupon from "../Pages/ManageCoupon/ManageCoupon";
import ManageMembers from "../Pages/ManageMembers/ManageMembers";
import MemberProfile from "../Pages/MemberProfile/MemberProfile";
import MemberRoute from "../PrivateRoute/MemberRoute";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Signup from "../Pages/Signup/Signup";
import UserProfile from "../UserProfile/UserProfile";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard/profile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },

            // admin
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
            },
            {
                path: "/dashboard/make/announcements",
                element: <AdminRoute><MakeAnnouncement /></AdminRoute>
            },
            {
                path: "/dashboard/manageCoupon",
                element: <AdminRoute><ManageCoupon /></AdminRoute>
            },
            // member
            {
                path: "/dashboard/memberProfile",
                element: <MemberRoute><MemberProfile></MemberProfile></MemberRoute>
            },
            {
                path: "/dashboard/makePayment",
                element: <MemberRoute><MakePayment /></MemberRoute>
            },
            {
                path: "/dashboard/paymentHistory",
                element: <MemberRoute><PaymentHistory /></MemberRoute>
            }

        ]
    },
    {
        path: "/payment",
        element: <MemberRoute><Checkout /></MemberRoute>
    }
])