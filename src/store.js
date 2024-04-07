import {configureStore, createSlice} from "@reduxjs/toolkit";
import user from "./store/UserSlice";

const cart = createSlice({
    name: "cart",
    initialState: [
        {id: 0, name: "White And Black", count: 2},
        {id: 2, name: "Grey Yordan", count: 1}
    ],
    reducers: {
        addCount(state, action){
            const i = state.findIndex((a) => {return a.id === action.payload});
            state[i].count++;
        },
        addItem(state, action){
            state.push((action.payload));
        }
    }
})

export const {addCount, addItem} = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
});