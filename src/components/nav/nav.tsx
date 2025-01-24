import { NavLink } from 'react-router-dom'
import './nav.css'

export const Nav = () => {
    return (
        <nav>
            <div className="links">
                <div className="enlaces">
                <NavLink to={`/productos`}>
                    <p>Productos</p>
                </NavLink>
                <NavLink to={`/productos`}>
                    <p>Categorias</p>
                </NavLink>
                <NavLink to={`/quienSoy`}>
                    <p>¿Quien Soy?</p>
                </NavLink>
                </div>
                <div className='containerNombre'>
                    <img className="nombreEmprendimiento" src="./src/assets/title.jpeg" alt="" />
                </div>

                <div className="carrito">
                    <NavLink to={`/carrito`}>
                        <p>Carrito</p>
                    </NavLink>
                </div>
            </div>

            <div className="animacionImagenes">
                <div className="vacioIzquierda"></div>

                <div className="izquierda">
                    <img src="./src/assets/logo.jpeg" alt="" />
                </div>
                <div className="derecha">
                    <img src="./src/assets/logo.jpeg" alt="" />
                </div>
                
                <div className="vacioDerecha"></div>
            </div>
        </nav>
    )
}