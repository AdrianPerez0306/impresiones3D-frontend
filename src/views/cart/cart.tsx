import "./cart.css"; // Archivo de estilos
import { useEffect, useState } from "react";
import { Button } from "../../components/button/button";
import { mailService } from "../../service/mail.service";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useToast } from "../../hooks/useToast";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";

const CartComponent = () => {
    const { items, clear, remove, updateAmmount, price } = useCart();
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
        <div className="container__cartLayout">
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

                        <div className="container__cart">
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

                                            <hr />
                                            {item.orderDetails.map((detail) => (<>

                                                <div className="item__detail">
                                                    <div className="color__wrapper" key={detail.color.id}>
                                                        <p className="text-md detail__color">Color:</p>
                                                        <div style={{ backgroundColor: `#${detail.color.hexValue}` }} className='color__option--circle'></div>
                                                        <div className='color__option--hoverHexValue'>{detail.color.nombre[0].toUpperCase() + detail.color.nombre.slice(1)} | #{detail.color.hexValue}</div>
                                                    </div>
                                                    <p className="text-md detail__dimmension">
                                                        Medida: <strong>
                                                            {detail.dimmension_mm.alto_mm}x
                                                            {detail.dimmension_mm.ancho_mm}x
                                                            {detail.dimmension_mm.profundidad_mm}
                                                        </strong>
                                                    </p>
                                                    <p className="text-md detail__ammount">
                                                        <Button color="add-remove" onClick={() => (
                                                            updateAmmount(item.id, detail.dimmension_mm.alto_mm.toString() + 'x' + detail.dimmension_mm.ancho_mm.toString() + 'x' + detail.dimmension_mm.profundidad_mm.toString(), detail.color.nombre, 1))}
                                                        >+</Button>
                                                        <strong>{detail.ammount}</strong>
                                                        <Button color="add-remove" onClick={() => (
                                                            updateAmmount(item.id, detail.dimmension_mm.alto_mm.toString() + 'x' + detail.dimmension_mm.ancho_mm.toString() + 'x' + detail.dimmension_mm.profundidad_mm.toString(), detail.color.nombre, -1))}
                                                        >-</Button>
                                                    </p>
                                                </div>
                                                <hr />
                                                
                                            </>))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="container__cartItems--price">
                                <h3>Resumen de compra</h3>
                                <hr />
                                <p className="text-md price__details">
                                    Subtotal: <strong>${price()}</strong>
                                </p>
                                <p className="text-md price__details">
                                    Envio: <strong>$0.0</strong>
                                </p>
                                <hr />
                                <h3 className="price__details">
                                    Total: <strong>${price()}</strong>
                                </h3>
                            </div>
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
