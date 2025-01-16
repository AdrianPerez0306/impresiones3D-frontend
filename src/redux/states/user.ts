import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userEmpty = {estado:false}

export const userSlice = createSlice({
    name: 'user',
    initialState: userEmpty,
    reducers:{
        createUser: (state, action) => {
            return action.payload
        },
        updateUser: (state, action:PayloadAction<boolean>) => {
            state.estado = action.payload
        },
        resetUser: () =>{
            return userEmpty
        }
    }
})

export const { createUser, updateUser, resetUser } = userSlice.actions 