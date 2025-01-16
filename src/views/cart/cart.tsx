// import { aboutMe } from '../../models/module';
import { useDispatch, useSelector } from 'react-redux';
import './cart.css'
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import { InterfaceProduct, products } from '../../models/module';
import { dumpCart } from '../../redux/states/cart';

//ESTE IMPORT SE VA VUANDO TENGAMOS BACK 
// import { products } from '../../models/module';

export const Cart = () => {
    const cartState = useSelector((store: RootState) => store.cart);
    const [cart, setCart] = useState<InterfaceProduct[]>([])
    const dispatcher =  useDispatch()

    function mockVisual(){
        const newCart:typeof cart = [] 
        cartState.addedIds.forEach((id:number)=>{
            const prod = products.find((product:InterfaceProduct)=>
                product.id === id
            )
            if(prod != undefined) newCart.push(prod)
        })
        setCart(newCart)
    }

    async function fetchCartItems(){
        //AXIOS
        mockVisual()
    }
    
    function handleClick(){
        dispatcher(dumpCart())
        setCart([])
    }

    useEffect(() => {
        fetchCartItems()
    }, [])

    return <>
        <div className="">
            <h2>CART</h2>
        </div>
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
        
        
        <button onClick={handleClick}>VACIAR</button>
    </>
};


