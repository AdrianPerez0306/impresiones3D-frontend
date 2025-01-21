import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const userEmpty = {estado:'false'}

export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('admin') ? {estado:JSON.parse(localStorage.getItem('admin')!)} : userEmpty,
    reducers:{
        createUser: (state, action) => {
            return action.payload
        },
        updateUser: (state, action:PayloadAction<string>) => {
            localStorage.setItem('admin', action.payload)
            console.log('aaaa ', action.payload)
            state.estado = action.payload
        },
        resetUser: () =>{
            return userEmpty
        }
    }
})

export const { createUser, updateUser, resetUser } = userSlice.actions 