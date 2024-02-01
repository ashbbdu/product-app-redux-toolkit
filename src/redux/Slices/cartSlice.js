const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cartData : []
}

export const cartSlice = createSlice({
    name : "cart",
    initialState: initialState,
    reducers : {
        addToCart : (state , action) => {
           state.cartData = [...state.cartData , action.payload]
        },
        removeFromCard : (state , action ) => {
        state.cartData = state.cartData.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {addToCart ,  removeFromCard} = cartSlice.actions;
export default cartSlice.reducer;
