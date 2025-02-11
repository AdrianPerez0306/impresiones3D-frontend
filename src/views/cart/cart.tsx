// import { aboutMe } from '../../models/module';
import { useDispatch, useSelector } from 'react-redux';
import './cart.css'
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import { InterfaceProduct, products } from '../../models/module';

//ESTE IMPORT SE VA VUANDO TENGAMOS BACK 
// import { products } from '../../models/module';

export const Cart = () => {
    const cartState = useSelector((store: RootState) => store.cart)
    const [cart, setCart] = useState<InterfaceProduct[]>([])
    const dispatcher =  useDispatch()


    useEffect(() => {
    }, [])

    return <>
        <div className="carrito">
            <h2>CART</h2>
        {JSON.stringify(cartState)}
        {cart.length === 0 ?
            <p>CARRITO VACIO</p>:
            <ul>
            {cart.map(product=>
                <>
                    <li>Id: {product.id}.</li>
                    <li>Titulo: {product.title}.</li>
                    <li>Precio: {product.price}</li>
                </>
            )}
            </ul>
        }
        
        
        </div>
    </>
};


