import "./Nav.css";
import { IoMdHome, IoMdLogIn } from "react-icons/io";
import { MdApartment } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
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

                    <Link className="logInBtn">
                        <IoMdLogIn></IoMdLogIn>
                        <p>LogIn</p>
                    </Link>
                </div>


            </div>
        </nav>
    );
};

export default Nav;