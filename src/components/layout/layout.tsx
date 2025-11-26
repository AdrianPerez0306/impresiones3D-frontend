import { Outlet } from "react-router-dom";
import './layout.css'
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const Layout = () => {

    return (
        <div className="layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
