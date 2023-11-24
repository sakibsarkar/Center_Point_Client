import Loader from "../Loader/Loader";
import UseAxios from "../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { getItemFromLS } from "../LocalStorage/localStorage";
import { userRole } from "../userRole";

const AdminRoute = ({ children }) => {
    const { loading, user, role, roleLoading } = useContext(Authcontext);
    console.log(role); // output: admin

    if (loading) {
        return <Loader></Loader>;
    }

    if (!user) {
        console.log('User not logged in');
        return <Navigate state={location.pathname} to={"/login"}></Navigate>;
    }
    if (roleLoading) {
        return <Loader></Loader>
    }

    if (role === "admin") {
        return children;
    }

    console.log('User is not an admin');
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default AdminRoute;