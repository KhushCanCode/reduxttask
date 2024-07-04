import {createSlice} from '@reduxjs/toolkit';

const initialState={
    items: [],
    total: 0
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) =>{
            const item = action.payload;
            let isItemInCart = state.items.some(cartItem => cartItem.id === item.id);

            if(!isItemInCart){
                state.items.push(item);
                state.total = state.total + item.price;
            }
            else {
                console.log('Item is already in the cart');
            }
        },
        increaseQuantity: (state, action)=>{
            const item = action.payload;
            const iteminCart = state.items.find(cartItem => cartItem.id === item.id);
            if(iteminCart){
                iteminCart.quantity = iteminCart.quantity + 1;
                state.total = state.total + item.price;
            }
        },
        decreaseQuantity: (state, action)=>{
            const item = action.payload;
            const iteminCart = state.items.find(cartItem => cartItem.id === item.id);
            if(iteminCart && iteminCart.quantity >0){
                iteminCart.quantity = iteminCart.quantity - 1;
                state.total = state.total - item.price;
                if(iteminCart.quantity === 0){
                    state.items = state.items.filter(cartItem => cartItem.id !== item.id );
                }
            }
        }
    }
})

export const {addToCart, increaseQuantity, decreaseQuantity} = CartSlice.actions;

export default CartSlice.reducer;