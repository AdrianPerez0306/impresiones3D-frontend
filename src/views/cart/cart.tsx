import "./cart.css"; // Archivo de estilos
import { useState } from "react";
import { Button } from "../../components/button/button";
import { mailService } from "../../service/mail.service";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useToast } from "../../hooks/useToast";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";

const CartComponent = () => {
    const { items, clear, remove, updateAmmount } = useCart();
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
        <div className="container__cart">
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
                        <h1>Mi carrito de compras</h1>
                        <div className="container__cartItems">
                            {items.map((item) => (
                                <div className="card__cartItem">
                                    <div className="cartItem__main">
                                        <img src={`${item.imagen}`} alt="" />
                                        <div className="label">
                                            <h4 className="">{item.titulo}</h4>
                                            <p className="price">${item.precio_lista}</p>
                                        </div>
                                    </div>

                                    <div className="item__details">
                                        {item.orderDetails.map((detail) => (
                                            <div className="item__detail">
                                                <p className="text-base detail__color">
                                                    Color: <strong>{detail.color.nombre}</strong>
                                                </p>
                                                <p className="text-base detail__dimmension">
                                                    Medida: <strong>
                                                        {detail.dimmension_mm.alto_mm}x
                                                        {detail.dimmension_mm.ancho_mm}x
                                                        {detail.dimmension_mm.profundidad_mm}
                                                    </strong>
                                                </p>
                                                <p className="text-base detail__ammount">
                                                    <Button color="add-remove" onClick={()=>(
                                                        updateAmmount(item.id, detail.dimmension_mm.alto_mm.toString() + 'x' + detail.dimmension_mm.ancho_mm.toString() + 'x' + detail.dimmension_mm.profundidad_mm.toString(), detail.color.nombre, 1))}
                                                    >+</Button>
                                                    <strong>{detail.ammount}</strong>
                                                    <Button color="add-remove" onClick={()=>(
                                                        updateAmmount(item.id, detail.dimmension_mm.alto_mm.toString() + 'x' + detail.dimmension_mm.ancho_mm.toString() + 'x' + detail.dimmension_mm.profundidad_mm.toString(), detail.color.nombre, -1))}
                                                    >-</Button>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cartItems__price">
                            <h3>Total de compra</h3>
                            <p>Subtotal: XXX</p>
                            <p>ENvio: XXX</p>
                            <h4>Total: XXX</h4>
                        </div>

                        <div className="guardarCancelar">
                            <Button color="opaque" onClick={() => vaciarCarro()}>
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
