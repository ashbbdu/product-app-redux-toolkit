const { createSlice } = require("@reduxjs/toolkit");


export const cartSlice = createSlice({
    name : "cart",
    initialState: [],
    reducers : {
        addToCart : (state , action) => {
            state.push(action.payload)
        },
        removeFromCard : (state , action ) => {
           return  state.filter(item => item.id !== action.payload )
        }
    }
})

export const {addToCart ,  removeFromCard} = cartSlice.actions;
export default cartSlice.reducer;
