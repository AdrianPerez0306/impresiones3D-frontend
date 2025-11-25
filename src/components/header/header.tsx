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
import { ProductBasicType } from '../../models/product';

export const Header = () => {
    const [categorias, setCategorias] = useState<CategoriaType[]>([]);

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
                <p className='banner__title'>Productos de vanguardia</p>
            </div>
            <nav className='header__nav'>
                <div className="enlaces">
                        <NavLink to={`/productos`}>
                            <p>Productos</p>
                        </NavLink>
                        <NavLink to={`/productos`}>
                            <CategoriaNav listCategoria={categorias}></CategoriaNav>
                        </NavLink>
                        <NavLink to={`/quienSoy`}>
                            <p>Quien soy</p>
                        </NavLink>
                    </div>
                    <div className="burger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
                    </div>
                    <NavLink to={`/productos`} className="shortcut-home">
                        <img className="logo__name" src="../src/assets/title.jpeg" alt="" />
                    </NavLink>

                    <div className="carrito">
                        <div className='searchResponsive'>
                            <Search setParentProducts={function (value: SetStateAction<ProductBasicType[]>): void {
                                throw new Error('Function not implemented.')
                            }}></Search>
                        </div>
                        <div className="chango">
                            <IconButton aria-label="cart" >
                                <NavLink to={`/carrito`}>
                                    <Badge anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }} badgeContent={cart.items.length} color="error">
                                        <ShoppingCartIcon sx={{ color: 'black' }} />
                                    </Badge>
                                </NavLink>
                            </IconButton>
                        </div>
                    </div>
            </nav>
        </header>

    </>


}