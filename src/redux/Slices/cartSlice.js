const { createSlice } = require("@reduxjs/toolkit");


export const cartSlice = createSlice({
    name : "cart",
    initialState: [],
    reducers : {
        addToCart : (state , action) => {
            state.push(action.payload)
        },
        removeFromCard : (state , action ) => {
            // meaans state k andr , jo id select hoke aai hai usko chod k baki sari id retain krna
           return  state.filter(item => item.id !== action.payload )
        }
    }
})

export const {addToCart ,  removeFromCard} = cartSlice.actions;
export default cartSlice.reducer;