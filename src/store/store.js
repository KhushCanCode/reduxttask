import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../features/CartSlice';
import shoeReducer from '../features/ShoeSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        shoes: shoeReducer
    }
});