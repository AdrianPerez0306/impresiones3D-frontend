import { NavLink } from 'react-router-dom'
import './nav.css'

export const Nav = () => {
    return (
        <nav>
            <div className='padre'>
                <div className='container'>
                    <div className='links'>
                        <NavLink to={`/productos`}>
                            <p>Productos</p>
                        </NavLink>
                        <NavLink to={`/quienSoy`}>
                            <p>Quien Soy</p>
                        </NavLink>
                        <NavLink to={`/carrito`}>
                            <p>Carrito</p>
                        </NavLink>
                        <NavLink to={`/login`}>
                            <p>Login</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}