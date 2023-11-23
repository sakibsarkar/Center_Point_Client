import Apartments from "../Apertments/Apartments";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/mainLayout";
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
            }
        ]
    }
])