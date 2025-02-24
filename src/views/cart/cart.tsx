import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // Ajusta según tu configuración
import "./cart.css"; // Archivo de estilos
import { removeFromCart, updateCantidad } from "../../redux/states/cart";
import { useEffect, useState } from "react";

const CartComponent = () => {
    const articuloUser = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const [precioTotal, setprecioTotal] = useState(0);
    const [mail, setMail] = useState("");


    const eliminarArticulo = (index: number) => {
        dispatch(removeFromCart(index));
    };

    const sumar = (index: number) => {
        dispatch(updateCantidad({ index, cantidad: articuloUser[index].cantidad + 1 }));
    };
    const restar = (index: number) => {
        dispatch(updateCantidad({ index, cantidad: articuloUser[index].cantidad - 1 }));

    }


    useEffect(() => {
        var total = 0;
        articuloUser.forEach((item) => {
            total += item.precio_lista * item.cantidad;
        });
        setprecioTotal(total);
    }, [articuloUser]);

    return (
        <div className="cartContainer">
            {articuloUser.length === 0 ? (
                <div className="vacio">
                    <p>El carrito se encuentra vacío, te invito a navegar la pagina y agregar aquellos articulos de tu interes.</p>
                    <a href="/productos">Ver Productos</a>
                </div>
            ) : (
                <>
                    <div>
                        <table className="cartTable">
                            <thead>
                                <tr className="cartTableHeader">
                                    <th>Articulo</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articuloUser.map((item, index) => (
                                    <tr key={index}>
                                        <td className="imgCart">
                                            <div className="articulo">
                                                <div>{item.titulo}</div>
                                                <div><img src={item.imagen} alt={item.titulo} /></div>
                                                <div>{item.color}</div>
                                                <div>{item.dimension_mm}</div>
                                            </div>
                                        </td>
                                        <td className="cantidad">
                                            <div className="contador">
                                                <button className="contadorRestar" onClick={() => restar(index)}>-</button>
                                                {item.cantidad}
                                                <button className="contadorSumar" onClick={() => sumar(index)}>+</button>
                                            </div>
                                        </td>
                                        <td className="precio">${item.precio_lista}</td>
                                        <td className="eliminar">
                                            <button className="eliminarProducto" onClick={() => eliminarArticulo(index)}>X</button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className="precioFinal" colSpan={3}>Precio Final</td>
                                    <td className="precioFinal">${precioTotal}</td>
                                </tr>
                                <tr>
                                    <td className="datosMail"colSpan={4}>
                                        <p>Introduce un e-Mail y nos contactaremos a la brevedad</p>
                                        <input className="inputMail" type="email" placeholder="Introduce tu e-Mail" />
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>


                </>
            )}
        </div>
    );
};

export default CartComponent;
