import "./Nav.css";
import { useContext, useState } from "react";
import { IoMdHome, IoMdLogIn } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdApartment } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { removeItemFromLS } from "../../LocalStorage/localStorage";

const Nav = () => {
    const { user, logOut, role } = useContext(Authcontext)
    const [show, setShow] = useState(false)
    const [profileRoute, setProfileRoute] = useState()
    const handleLogout = async () => {
        try {
            await logOut()
            removeItemFromLS()
        }

        catch (err) {
            console.log(err)
        }

    }



    const showDropDown = () => {
        setShow(!show)

        if (role === "admin") {
            return setProfileRoute("/dashboard/adminProfile")
        }
        if (role === "user") {
            return setProfileRoute("/dashboard/profile")
        }
        if (role === "member") {
            return setProfileRoute("/dashboard/memberProfile")
        }
    }


    return (
        <nav>
            <div className="navWrapper">


                <Link className="logo">
                    <img src="https://i.ibb.co/fFF1qFC/Building-Construction-Logo-template-removebg-preview.png" alt="" />
                    <p>Center <br /> <span>Point</span></p>
                </Link>

                <div className="navLinks">
                    <ul>
                        <li><NavLink to={"/"} className={"navLink"}>
                            <IoMdHome />Home
                        </NavLink></li>
                        <li><NavLink to={"/apartment"} className={"navLink"}>
                            <MdApartment />Apartment
                        </NavLink></li>
                    </ul>

                    {
                        user ?
                            <div className="userBox">
                                <div className="userImg" onClick={() => showDropDown()}>
                                    <img src={user?.photoURL} alt="" />
                                </div>

                                {
                                    show ?
                                        <div className="userModal">
                                            <h3>{user?.displayName}</h3>
                                            <Link to={profileRoute || "/dashboard"}>Dashboard</Link>
                                            <Link to={profileRoute || "/"}>Profile</Link>
                                            <button onClick={() => handleLogout()}>LogOut</button>
                                        </div>

                                        :
                                        ""
                                }
                            </div>
                            :
                            <Link className="logInBtn" to={"/login"}>
                                <IoMdLogIn></IoMdLogIn>
                                <p>LogIn</p>
                            </Link>
                    }
                </div>


            </div>

            <div className="smallDeviceNav">
                <IoMenu></IoMenu>
            </div>
        </nav>
    );
};

export default Nav;