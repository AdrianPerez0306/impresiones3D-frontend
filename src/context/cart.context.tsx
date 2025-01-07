import { createContext, ReactNode, useState } from "react";
import { product } from "../models/module";

export type CartItem = {
    product:product,
    quantity:number
}


interface CartContextType {
    cart: CartItem[];
    addToCart: (product: product) => void;
    removeFromCart: (productId: number) => void;
    getCartLenght: () => number;
}


// Create the context

export const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) =>{

    const [cart, setCart] = useState<CartItem[]>([]);
  
    const addToCart = (product: product) => {
        const existingItem = cart.find(item => item.product.id === product.id);
        // existingItem ? setCart([]) : setCart([])
        if(existingItem){
            const newCart = cart.map(item=>
                item.product.id == product.id ?
                {...item, quantity: item.quantity+1} :
                item
            )
            setCart(newCart)
        }else{
            setCart([
                ...cart,
                {product: product, quantity: 1}
            ])
        }
    };
  
    const removeFromCart = (productId: number) => {
      setCart((prevCart) => prevCart.filter(item => item.product.id !== productId));
  
    };

    const getCartLenght = () => {
        return cart.length
    };
  
  
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartLenght}}>
        {children}
      </CartContext.Provider>
    );
  
  };