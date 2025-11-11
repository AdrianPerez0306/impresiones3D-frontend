import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";
import { cartSlice } from "./states/cart";

// el del userStore se podria sacar? 
export const userStore = configureStore({
    reducer : {
        user: userSlice.reducer
    }
})

export const appStore = configureStore({
    reducer : {
        user: userSlice.reducer,
        cart: cartSlice.reducer
    }
})

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;