import { Outlet } from "react-router-dom";
import './layout.css'
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { VeryImportantMessage } from "../veryImportantMessage/veryImportantMessage";

export const Layout = () => {

    return (
        <div className="layout">
            <Header />
            <VeryImportantMessage></VeryImportantMessage>
            <Outlet />
            <Footer />
        </div>
    );
};
