import "./DashoboardLayout.css";
import DashboardSideBar from "../Shared/DashboardSideBar/DashboardSideBar";
import { useContext, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Outlet } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";

const DashboardLayout = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const { setWaitForUser, waitForUser } = useContext(Authcontext)
    setWaitForUser(!waitForUser)
    return (
        <div className="dashCon">

            <div className="sidebarWrapper">
                <DashboardSideBar></DashboardSideBar>
            </div>


            <div className="dashBoardNav">
                {
                    showSidebar ?
                        <RxCross2 className="dashboardMenuBarIcon" onClick={() => setShowSidebar(false)}></RxCross2>
                        :
                        <IoMenuSharp className="dashboardMenuBarIcon" onClick={() => setShowSidebar(true)}></IoMenuSharp>
                }
            </div>


            {
                showSidebar ?
                    <div className="drawerSidebar" onClick={() => setShowSidebar(false)}>
                        <DashboardSideBar></DashboardSideBar>
                    </div>
                    : ""
            }


            <div className="outlets">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;