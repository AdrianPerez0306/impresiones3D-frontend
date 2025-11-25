import "./cart.css"; // Archivo de estilos
import { useEffect, useState } from "react";
import { Button } from "../../components/button/button";
import { mailService } from "../../service/mail.service";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useToast } from "../../hooks/useToast";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";

const CartComponent = () => {
    const { items, clear, remove } = useCart();
    const [precioTotal, setprecioTotal] = useState(0);
    const [mail, setMail] = useState("");

    const toast = useToast();

    const eliminarArticulo = (index: number) => {
        remove([index]);
        toast.open("Artículo eliminado del carrito", "error");
    };

    function emptyCart(): boolean {
        return items.length == 0;
    }
    const isValid = (email: string) => {
        return /^[a-zA-Z0-9]{2,}@[^\s@]+\.com$/.test(email);
    }


    useEffect(() => {

    }, []);

    function vaciarCarro() {
        clear();
        toast.open("Carrito vaciado!", "info");
    };


    // const comprar = () => {
    //     if (isValid(mail)) {
    //         mailService.sendMail(mail, articuloUser, precioTotal);
    //         vaciarCarro(true);
    //     }
    //     else {
    //         toast.open("Mail inválido", "error");
    //     }
    //     return;
    // };

    return (
        <div className="cartContainer">
            {emptyCart() ? (
                <div className="vacio">
                        <p>El carrito se encuentra vacío, te invito a navegar la pagina y agregar aquellos articulos de tu interes.</p>
                        <NavLink to={`/productos`}>
                            <p>Ver productos</p>
                        </NavLink>
                </div>
            ) :
                (
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
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td >
                                            <div className="articulo">
                                                <div><p>{item.titulo}</p></div>
                                                <div><img src={item.imagen_1} alt={item.titulo} /></div>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="precio"><p>${item.precio_lista}</p></div>
                                        </td>
                                        <td >
                                            <div className="eliminar">
                                                <Button color="red" onClick={() => eliminarArticulo(item.id)}>
                                                    <DeleteForeverIcon style={{ color: 'red', fontSize: '3rem' }}></DeleteForeverIcon>
                                                </Button>


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
                                            <p>Introduce tu e-Mail y nos contactaremos para continuar la compra</p>
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
                            <Button color="red" onClick={() => vaciarCarro()}>
                                Vaciar carrito
                            </Button>

                            {/* <Button color="green" onClick={() => ()}>
                                Comprar
                            </Button> */}
                        </div>

                    </>
                )}
        </div>
    );
};

export default CartComponent;
