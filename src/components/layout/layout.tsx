import { NavLink, Outlet } from "react-router-dom";
import './layout.css'
import { Search } from "../search/search";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";
import { DondeEstoy } from "../dondeEstoy/dondeEstoy";
import { CartProvider } from "../../context/cart.context";

export const Layout = () => {

    return <>
        <Header></Header>
        <Nav></Nav>
        <Search></Search>

        <DondeEstoy></DondeEstoy>
        <CartProvider>
            <Outlet></Outlet>

        </CartProvider>
        <Footer></Footer>
    </>
};
