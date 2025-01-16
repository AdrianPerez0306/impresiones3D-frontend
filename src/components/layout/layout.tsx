import { Outlet } from "react-router-dom";
import './layout.css'
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";
import { DondeEstoy } from "../dondeEstoy/dondeEstoy";

export const Layout = () => {

    return <>
        <Header></Header>
        <Nav></Nav>
        <DondeEstoy></DondeEstoy>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
};
