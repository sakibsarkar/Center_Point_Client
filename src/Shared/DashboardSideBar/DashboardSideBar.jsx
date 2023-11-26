import "./DashboardSideBar.css";
import { useContext } from "react";
import { BsClockHistory } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaUsersCog } from "react-icons/fa";
import { FaRegNewspaper, FaUserLock } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const DashboardSideBar = () => {
    const { role } = useContext(Authcontext)

    return (

        <div className="sideBarContent">
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
                            <NavLink className={"dashLink"} to={"/dashboard/manageCoupon"}><RiCoupon2Line />Manage Coupons</NavLink>
                            <NavLink className={"dashLink"} to={"/dashboard/make/announcements"}><GrAnnounce />Make Announcement</NavLink>
                        </>
                        : ""
                }
                {
                    role === "member" ?
                        <>
                            <NavLink className={"dashLink"} to={"/dashboard/memberProfile"}><FaUserLock />My profile</NavLink>
                            <NavLink className={"dashLink"} to={"/dashboard/makePayment"}><MdOutlinePayments />Make Payment</NavLink>
                            <NavLink className={"dashLink"} to={"/dashboard/paymentHistory"}><BsClockHistory />Payment History</NavLink>

                        </>
                        : ""
                }





            </div>
        </div>






    );
};

export default DashboardSideBar;