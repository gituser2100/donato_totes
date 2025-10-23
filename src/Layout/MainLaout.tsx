import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
    return(
        <>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
};

export default MainLayout;