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
                <div>
                    <table className="cartTable">
                        <thead >
                            <tr  className="cartTableHeader">
                                <th>Articulo</th>
                                <th>Color</th>
                                <th>Dimensión</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articuloUser.map((item, index) => (
                                <tr key={index}>
                                    <td className="imgCart">
                                        <div className="articulo">
                                        <p>{item.titulo}</p>
                                        <img src={item.imagen} alt={item.titulo}/>
                                        </div>
                                    </td>
                                    <td className="standar">{item.color}</td>
                                    <td className="standar">{item.dimension_mm}</td>
                                    <td >${item.precio_lista}</td>
                                    <td>
                                        <div className="contador">
                                            <button>-</button>
                                            {item.cantidad}
                                            <button>+</button>
                                        </div>
                                    </td>
                                    <td className="eliminar" >x</td>
                                </tr>
                            ))}
                            <tr >
                                <td className="precio" colSpan={5}>Precio Final</td>
                                <td className="precio">.....</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default CartComponent;
