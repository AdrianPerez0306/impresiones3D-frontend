import { SetStateAction, useEffect, useState } from 'react';
import './header.css'
import { getCategoriaNav } from '../../service/categoria.service';
import { CategoriaType } from '../../models/category';
import { NavLink } from 'react-router-dom';
import { CategoriaNav } from '../categoriaNav/categoriaNav';
import { Search } from '../search/search';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../hooks/useCart';
import { useSearchFilter } from '../../hooks/useSearchFilter';

export const Header = () => {
    const [categorias, setCategorias] = useState<CategoriaType[]>([]);
    const { reset } = useSearchFilter();
    const cart = useCart();

    const fetchDataNav = async () => {
        try {
            const res = await getCategoriaNav();
            setCategorias(res);
        } catch (error: unknown) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDataNav();
    }, []);
    return <>
        <header>
            <div className='banner fade'>
                <p className='banner__title message1'>Productos de vanguardia</p>
                <p className='banner__title message2'>V Laboratory - Automotive Design</p>
            </div>
            <nav className='header__nav'>
                <div className="enlaces">
                    <NavLink to={`/productos`} className="hover-underline" onClick={()=>(reset())}>
                        <img src="/src/assets/home.svg" alt="" />
                        <p className='enlace__label'>Productos</p>
                    </NavLink>
                    <NavLink to={`/productos`} className="hover-underline">
                        <CategoriaNav listCategoria={categorias}></CategoriaNav>
                    </NavLink>
                    <NavLink to={`/quienSoy`} className="hover-underline">
                        <img src="/src/assets/info.svg" alt="" />
                        <p className='enlace__label'>Info</p>
                    </NavLink>
                </div>


                <div className="carrito">
                    <Search/>
                    <div className="chango">
                        <IconButton aria-label="cart" >
                            <NavLink to={`/carrito`}>
                                <Badge anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }} badgeContent={cart.items.length} color="error">
                                    <ShoppingCartIcon sx={{ color: 'white' }} />
                                </Badge>
                            </NavLink>
                        </IconButton>
                    </div>
                </div>
            </nav>
        </header>

    </>


}