// import { aboutMe } from '../../models/module';
import { useCart } from '../../hooks/useCart';
import './cart.css'


export const Cart = () => {
    const { cart, getCartLenght, removeFromCart } = useCart()
    return <>
        <div className="">
            <h2>CART</h2>
        </div>

        {getCartLenght() == 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            <ul>
                {cart.map(item => (
                    <li key={item.product.id}>
                        {item.product.title} - Quantity: {item.quantity}
                        <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
                    </li>
                ))}

            </ul>
        )}
    </>
};


