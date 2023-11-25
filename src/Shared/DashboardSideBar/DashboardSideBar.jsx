import "./DashboardSideBar.css";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FaUsersCog } from "react-icons/fa";
import { FaRegNewspaper, FaUserLock } from "react-icons/fa6";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const DashboardSideBar = () => {
    const { role } = useContext(Authcontext)
    console.log(role);
    return (
        <div>
            <Link className="logo dashLogo">
                <img src="https://i.ibb.co/fFF1qFC/Building-Construction-Logo-template-removebg-preview.png" alt="" />
                <p>Center <br /> <span>Point</span></p>
            </Link>

            <h1>Dashboard</h1>

            <div className="dashBoardLinks">

                {/* user links */}
                {
                    role === "user" ?
                        <>
                            <NavLink className={"dashLink"} to={"/dashboard/profile"}><CgProfile />Profile</NavLink>
                            <NavLink className={"dashLink"} to={"/dashboard/announcements"}><MdOutlineNotificationImportant />Announcements</NavLink>
                        </>
                        : ""
                }


                {/* admin Links*/}

                {
                    role === "admin" ?
                        <>
                            <NavLink className={"dashLink"} to={"/dashboard/adminProfile"}><FaUserLock />Admin profile</NavLink>
                            <NavLink className={"dashLink"} to={"/dashboard/manageMembers"}><FaUsersCog />Manage Members</NavLink>
                            <NavLink className={"dashLink"} to={"/dashboard/agreementsReq"}><FaRegNewspaper />Agreement request</NavLink>
                            <NavLink className={"dashLink"} to={"/dashboard/announcements"}><RiCoupon2Line />Manage Coupons</NavLink>
                        </>
                        : ""
                }





            </div>
        </div>
    );
};

export default DashboardSideBar;