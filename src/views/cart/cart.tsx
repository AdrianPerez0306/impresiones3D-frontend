import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // Ajusta según tu configuración
import "./cart.css"; // Archivo de estilos
import { clearCart, removeFromCart, updateCantidad } from "../../redux/states/cart";
import { useEffect, useState } from "react";
import ButtonRed from "../../components/buttonRed/buttonRed";
import ButtonGreen from "../../components/buttonGreen/buttonGreen";
import { CarritoVacio } from "../../components/carritoVacio/carritoVacio";
import { mailService } from "../../service/mail.service";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
    const articuloUser = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const [precioTotal, setprecioTotal] = useState(0);
    const [mail, setMail] = useState("");

    const navigate = useNavigate();


    const eliminarArticulo = (index: number) => {
        dispatch(removeFromCart(index));
    };

    const sumar = (index: number) => {
        dispatch(updateCantidad({ index, cantidad: articuloUser[index].cantidad + 1 }));
    };
    const restar = (index: number) => {
        dispatch(updateCantidad({ index, cantidad: articuloUser[index].cantidad - 1 }));

    }

    const isValid = (email: string) => {
        return /^[a-zA-Z0-9]{2,}@[^\s@]+\.com$/.test(email);
    }


    useEffect(() => {
        var total = 0;
        articuloUser.forEach((item) => {
            total += item.precio_lista * item.cantidad;
        });
        setprecioTotal(total);
    }, [articuloUser]);

    const vaciarCarro = () => {
        dispatch(clearCart());
    };

    const comprar = () => {
        if (isValid(mail)) {
            mailService.sendMail(mail, articuloUser, precioTotal);
            vaciarCarro();
            // navigate("/productos");


        }
        else {
            alert("Por favor, introduce un e-Mail válido.");

        }
        return;

    };

    return (
        <div className="cartContainer">
            {articuloUser.length === 0 ? (
                <CarritoVacio></CarritoVacio>

            ) : (
                <>
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
                                    <td >
                                        <div className="articulo">
                                            <div><p>{item.titulo}</p></div>
                                            <div><img src={item.imagen} alt={item.titulo} /></div>
                                            <div><p>{item.color}</p></div>
                                            <div><p>{item.dimension_mm}</p></div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="contador">
                                            <button className="contadorRestar" onClick={() => restar(index)}>-</button>
                                            <p>{item.cantidad}</p>
                                            <button className="contadorSumar" onClick={() => sumar(index)}>+</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="precio"><p>${item.precio_lista}</p></div>
                                    </td>
                                    <td >
                                        <div className="eliminar">
                                            <button className="eliminarProducto" onClick={() => eliminarArticulo(index)}>X</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><div className="precioFinal"><p>PrecioFinalPrecio Final</p></div></td>
                                <td ><div className="precioFinal"><p>${precioTotal}</p></div></td>
                            </tr>
                            <tr>
                                <td colSpan={4}>
                                    <div className="datosMail">
                                        <p>Introduce un e-Mail y nos contactaremos a la brevedad</p>
                                        <input
                                            className="inputMail"
                                            type="email"
                                            placeholder="Introduce tu e-Mail"
                                            onChange={(e) => setMail(e.target.value)}
                                            value={mail}
                                        />
                                    </div>
                                </td>

                            </tr>

                        </tbody>
                    </table>


                    <div className="guardarCancelar">
                        <ButtonRed label="Volver" onClick={vaciarCarro} />
                        <ButtonGreen label="Añadir" onClick={comprar} />
                    </div>

                </>
            )}
        </div>
    );
};

export default CartComponent;
