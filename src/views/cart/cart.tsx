import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // Ajusta según tu configuración
import "./cart.css"; // Archivo de estilos

const CartComponent = () => {
    const articuloUser = useSelector((state: RootState) => state.cart);
    

    return (
        <div className="cartContainer">
            {articuloUser.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <div>
                        <table className="cartTable">
                            <thead>
                                <tr className="cartTableHeader">
                                    <th>Articulo</th>
                                    <th>Cantidad</th>
                                    <th>Eliminar</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articuloUser.map((item, index) => (
                                    <tr key={index}>
                                        <td className="imgCart">
                                            <div className="articulo">
                                                {item.titulo}
                                                <img src={item.imagen} alt={item.titulo} />
                                                {item.color}
                                                {item.dimension_mm}
                                            </div>
                                        </td>
                                        <td className="cantidad">
                                            <div className="contador">
                                                <button>-</button>
                                                {item.cantidad}
                                                <button>+</button>
                                            </div>
                                        </td>
                                        <td className="eliminar">
                                            <button>X</button>
                                        </td>
                                        <td className="precio">${item.precio_lista}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className="precioFinal" colSpan={3}>Precio Final</td>
                                    <td className="precioFinal">.....</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="confirmacion">
                        <h3>Introduce un numero de celular y nos contactaremos a la brevedad</h3>
                        <input type="number" />
                    </div>
                </>
            )}
        </div>
    );
};

export default CartComponent;
