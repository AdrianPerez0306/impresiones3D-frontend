import { NavLink, Outlet } from "react-router-dom";
import './layout.css'
import { Search } from "../search/search";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";
import { CartProvider } from "../../context/cart.context";

export const Layout = () => {

    return <>
        <Header></Header>
        <Nav></Nav>
        <Search></Search>
        
        <div className="renderContent">
            <CartProvider>
                <Outlet></Outlet>
            </CartProvider>
        </div>
        <Footer></Footer>
    </>
};
