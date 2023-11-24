import "./DashboardSideBar.css";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const DashboardSideBar = () => {
    return (
        <div>
            <Link className="logo dashLogo">
                <img src="https://i.ibb.co/fFF1qFC/Building-Construction-Logo-template-removebg-preview.png" alt="" />
                <p>Center <br /> <span>Point</span></p>
            </Link>

            <h1>Dashboard</h1>

            <div className="dashBoardLinks">
                <NavLink className={"dashLink"} to={"/dashboard/profile"}><CgProfile />Profile</NavLink>
                <NavLink className={"dashLink"} to={"/dashboard/announcements"}><MdOutlineNotificationImportant />Announcements</NavLink>



            </div>
        </div>
    );
};

export default DashboardSideBar;