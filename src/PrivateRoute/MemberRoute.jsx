import Loader from "../Loader/Loader";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";

const MemberRoute = ({ children }) => {
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

    if (role === "member") {
        return children;
    }

    console.log('User is not an member');
    return <Navigate state={location.pathname} to={"/"}></Navigate>;
};



export default MemberRoute;