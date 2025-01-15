import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";
import { cartSlice } from "./states/cart";

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

export type RootState = ReturnType<typeof appStore.getState>