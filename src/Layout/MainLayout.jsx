import Nav from "../Shared/Nav/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;