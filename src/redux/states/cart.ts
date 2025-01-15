import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type cartPayload = {
    itemId:number,
    itemQuantity:number
}

type Cart = {
    addedIds:Array<number>,
    quantityById:{[key:number]:number}
}

const emptyCart:Cart = {
    addedIds:[],
    quantityById:{}
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: emptyCart,
    reducers:{
        addItem: (state, action:PayloadAction<cartPayload>) => {
            //Si NO existe => Se crea con su cantidad. Si existe, sumo cantidad
            const {itemId, itemQuantity} = action.payload
            const existItem:Boolean = state.addedIds.includes(itemId)
            if(existItem){
                state.quantityById[itemId] += itemQuantity
            }else{
                state.addedIds = state.addedIds.concat([itemId])
                state.quantityById[itemId] = itemQuantity
            }
        },
        // removeItem: (state, action:PayloadAction<cartPayload>) => {
        //     //Si NO existe => ERROR. Si existe, lo borro
        //     const { itemId } = action.payload
        //     if(!state[itemId]){
        //         throw Error("Item not in the cart")
        //     }
        //     delete state[itemId]
        // },
        dumpCart: () =>{
            return emptyCart
        }
    }
})

export const { addItem, dumpCart} = cartSlice.actions 