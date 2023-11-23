import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;