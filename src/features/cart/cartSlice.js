import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    cart: [{
        pizzaId: 12, 
        name: 'Mediterranean',
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    }],
}
const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {
        addItem(state, action){
            state.cart.push(action.payload)
        },
        deleteItem(state, action){
            state.cart = state.cart.filter((each) => each.pizzaId !== action.payload)
        },
        increaseItemQuantity(state, action){
            const item = state.cart.find((item) => item.pizzaId === action.payload)
            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action){
            const item = state.cart.find((item) => item.pizzaId === action.payload)
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
            if(item.quantity===0) cartSlice.caseReducers.deleteItem(state, action)
        },
        clearCart(state){
            state.cart = []
        }
    }
})
export const {addItem , deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer

export const getTotalQuantity =(state) => 
    state.cart.cart.reduce((sum, item) => sum + item.quantity,0)

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

export const getCart = (state) => state.cart.cart
export const getCurrentQuantity = (id) => (state) => state.cart.cart.find(each => each.pizzaId === id) ?. quantity ?? 0