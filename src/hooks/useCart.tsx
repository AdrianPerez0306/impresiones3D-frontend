import { useContext } from "react";
import { CartContext } from "../context/cart.context";

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
      throw new Error('userCartSize() must be used within a CartSizeProvider');
    }
    return context;
};