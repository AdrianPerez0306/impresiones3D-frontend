import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticuloUser } from "../../models/ArticuloUser";


// Cargar el carrito desde sessionStorage
const loadCartFromSessionStorage = (): ArticuloUser[] => {
  const savedCart = sessionStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

// Guardar el carrito en sessionStorage
const saveCartToSessionStorage = (cart: ArticuloUser[]) => {
  sessionStorage.setItem("cart", JSON.stringify(cart));
};

// Estado inicial del carrito
const initialState: ArticuloUser[] = loadCartFromSessionStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ArticuloUser>) => {
      const item = action.payload;
      const existingItem = state.find(
        (cartItem: ArticuloUser) =>
          cartItem.titulo === item.titulo &&
          cartItem.color === item.color &&
          cartItem.dimension_mm === item.dimension_mm
      );

      if (existingItem) {
        existingItem.cantidad += 1;
      } else {
        state.push(item);
      }

      saveCartToSessionStorage(state); // Guardar en sessionStorage
    },

    removeFromCart: (state, action: PayloadAction<{ titulo: string; color: string; dimension_mm: string }>) => {
      const { titulo, color, dimension_mm } = action.payload;
      const newState = state.filter(
        (item) => !(item.titulo === titulo && item.color === color && item.dimension_mm === dimension_mm)
      );

      saveCartToSessionStorage(newState); // Guardar en sessionStorage
      return newState;
    },
    
    clearCart: () => {
      saveCartToSessionStorage([]); // Vaciar sessionStorage
      return [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
