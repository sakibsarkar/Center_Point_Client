import "./Nav.css";
import { useContext, useState } from "react";
import { IoMdHome, IoMdLogIn } from "react-icons/io";
import { MdApartment } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const Nav = () => {
    const { user } = useContext(Authcontext)
    const [show, setShow] = useState(false)
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
                                <div className="userImg" onClick={() => setShow(!show)}>
                                    <img src={user?.photoURL} alt="" />
                                </div>

                                {
                                    show ?
                                        <div className="userModal">
                                            <h3>{user?.displayName}</h3>
                                            <Link to={"/dashboard"}>Dashboard</Link>
                                            <Link to={"/profile"}>Profile</Link>
                                            <button>LogOut</button>
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
        </nav>
    );
};

export default Nav;