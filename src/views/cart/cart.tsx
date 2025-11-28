import "./cart.css"; // Archivo de estilos
import { useState } from "react";
import { Button } from "../../components/button/button";
import { sendMailMock } from "../../service/mail.service";
import { useToast } from "../../hooks/useToast";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";
import { CartItemForMailService, CartProduct } from "../../models/product";

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

    const isValid = (_: string) => {
        return true
        // return /^[a-zA-Z0-9]{2,}@[^\s@]+\.com$/.test(email);
    }


    function vaciarCarro() {
        clear();
        toast.open("Carrito vaciado!", "info");
    };
    
    function cartItemToArticuloUser(item: CartProduct): CartItemForMailService {
        return {
                id: item.id,
                titulo: item.titulo,
                precio_lista: item.precio_lista,
                imagen: item.imagen,
                colores: item.orderDetails.map(detail => detail.color.nombre),
                dimensiones_mm: item.orderDetails.map(detail => detail.dimmension_mm.alto_mm.toString() + 'x' + detail.dimmension_mm.ancho_mm.toString() + 'x' + detail.dimmension_mm.profundidad_mm.toString()),
                cantidades:item.orderDetails.map((detail)=>detail.ammount)
            }
    }
    function _parseCartItemsForMailService(items: CartProduct[]): CartItemForMailService[] {
        return items.map((item)=>cartItemToArticuloUser(item));
    }

    async function buyCart(mail: string, cartItems: CartProduct[], precioTotal: number) {
        if (!isValid(mail)) {
            toast.open("Mail inválido", "error");
            return;
        }
        try {
            // await sendMail(mail, _parseCartItemsForMailService(cartItems), precioTotal);
            await sendMailMock(mail, _parseCartItemsForMailService(cartItems), precioTotal);
            toast.open("Gracias por tu compra!", "info");
        }
        catch(e){
            toast.open("Ocurrio un error inesperado", "error");
        }
    };

    return (
        <div className="container__cartLayout">
            {emptyCart() ? (
                <div className="vacio">

                    <svg xmlns="http://www.w3.org/2000/svg" height="10rem" viewBox="0 -960 960 960" width="10rem" fill="var(--color-primary-bright)"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" /></svg>

                    <p className="text-xxl">El carrito se encuentra vacío</p>

                    <p className="text-md">Explora nuestras producciones y agrega algo a tu carrito para realizar una compra!</p>

                    <NavLink to={`/productos`}>
                        <Button color="lighted" onClick={() => { }}>
                            Ver productos
                        </Button>
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

                                        <Button color="action__delete" onClick={() => (eliminarArticulo(item.id))}>
                                            <img src="/src/assets/delete.svg" alt="" className="icon__delete" />
                                        </Button>
                                        <div className="cartItem__main">
                                            <img src={`src/assets/${item.imagen}`} alt="" />
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

                                <Button color="action__confirm" onClick={() => buyCart(mail,items, price())}>
                                    Comprar
                                </Button>
                                <Button color="lighted" onClick={() => {}}>
                                    <NavLink to='/products'>Seguir comprando</NavLink>
                                </Button>
                                <Button color="action__emptyCart" onClick={() => vaciarCarro()}>
                                    Vaciar carrito
                                </Button>

                            </div>

                        </div>

                        <div className="container__mailInput">

                            <input id="mail" type="text" className="mail" value={mail} onChange={(event)=>(setMail(event.target.value))}/>
                            <p className="text-base placeholder">Introduce un email</p>

                        </div>


                    </>
                )}
        </div>
    );
};

export default CartComponent;
