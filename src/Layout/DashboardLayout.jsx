import "./DashoboardLayout.css";
import DashboardSideBar from "../Shared/DashboardSideBar/DashboardSideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="dashCon">

            <div className="sidebarWrapper">
                <DashboardSideBar></DashboardSideBar>
            </div>


            <div className="outlets">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;