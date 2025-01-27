import { Outlet, useLocation } from "react-router-dom";
import './layout.css'
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";
import { DondeEstoy } from "../dondeEstoy/dondeEstoy";
import { Search } from "../search/search";
import { useEffect, useState } from "react";

export const Layout = () => {

    const [titulo, setTitulo] = useState<string>('');
    const { pathname: pat } = useLocation();
    const pathNames: { [key: string]: string } = {
        'productos': 'Productos',
        '/productos/:id': 'Detalle de Producto',
        '/productos/': 'Detalle de Producto',
        '/quienSoy': 'Quien Soy',
        '/carrito': 'Carrito',
        // Add more paths as needed
    };

    const convertirPat = () => {
        for (const key in pathNames) {
            if (pat.includes(key)) {
                setTitulo(pathNames[key]);
            }
        }
    }


    useEffect(() => {
        convertirPat();
    }, [pat]);
    return <>
        <div className="layout">
            <Header></Header>
            <Nav></Nav>
            {pat === '/productos' && <Search></Search>}
            <DondeEstoy titulo={titulo}></DondeEstoy>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* 
            
             */}

        </div>
    </>
};
