# Redux Tool-Kit


In this project instead of using context api i used Redux Toolkit which is used for state management.

First of all created a folder named store and in it created a file named store.js.
We are forming our store or say configuring. We will have two reducers in it. 
cartReducer and shoeReducer.

## Netifly Link
https://task25-redux.netlify.app/


## store.js

    import {configureStore} from '@reduxjs/toolkit';
    import cartReducer from '../features/CartSlice';
    import shoeReducer from '../features/ShoeSlice'

    export const store = configureStore({
        reducer: {
            cart: cartReducer,
            shoes: shoeReducer
        }
    });

Then I created a features folder where i created two files CartSlice.jsx and ShoeSlice.jsx.

In the CartSlice i created the initial state for cart and then made some reducers to manipulate this cart.
The reducers are addToCart, increaseQuantity and decreaseQuantity.
We are creating a Slice. From my understanding slice is like an instance that represents the cart at some moment of time.
We are defining an intial state and this slice will keep track of changes happening in the initial state, like checkpoints in a journey.

## CartSlice.jsx

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

In the ShoeSlice i have stored all the shoes.

## ShoeSlice.jsx


    import {createSlice} from '@reduxjs/toolkit';

    import img1 from '../assets/img1.jpeg';
    import img2 from '../assets/img2.webp';
    import img3 from '../assets/img3.jpg';
    import img4 from '../assets/img4.jpg';
    import img5 from '../assets/img5.jpeg';
    import img6 from '../assets/img6.jpg';
    import img7 from '../assets/img7.jpg';
    import img8 from '../assets/img8.jpeg';

    const initialState={
        shoeList: [
            { id: 1, img: img1, name: 'Adidas Court80s Men Casual Sneakers', price: 620, quantity: 1 },
            { id: 2, img: img2, name: "New Balance 574 Legacy 'Angora Crimson' ", price: 670, quantity: 1 },
            { id: 3, img: img3, name: "Red Tape Men's Rover Comfortable Clogs", price: 890, quantity: 1 },
            { id: 4, img: img4, name: 'Centrino 7956 Classic Derby Formal Shoes', price: 799, quantity: 1 },
            { id: 5, img: img5, name: "Men's Italian Leather Dress Shoes", price: 950, quantity: 1 },
            { id: 6, img: img6, name: "ASIAN Men's TARZAN-04 Casual Sneaker Shoes", price: 320, quantity: 1 },
            { id: 7, img: img7, name: "Classic Oxford Leather Shoes", price: 750, quantity: 1 },
            { id: 8, img: img8, name: "Reebok Men Zig Kinetica 2 5 Edge Running Shoes ", price: 750, quantity: 1 }
        ]
    };

    export const ShoeSlice = createSlice({
        name: 'shoes',
        initialState,
        reducers:{
            
        }
    })

    export default ShoeSlice.reducer;

And then i just used these reducers in my Cart component and Shop component

## Cart.jsx

    import React from "react";
    import { useDispatch, useSelector } from 'react-redux';
    import { increaseQuantity, decreaseQuantity } from '../features/CartSlice';


    function Cart(){

        const dispatch = useDispatch();
        const items = useSelector((state) => state.cart.items);
        const total = useSelector((state) => state.cart.total);

        const handleAddToCart = (shoeItem)=>{
            dispatch(addToCart(shoeItem));
        };
        const handleIncreaseQuantity = (shoeItem)=>{
            dispatch(increaseQuantity(shoeItem));
        };
        const handleDecreaseQuantity = (shoeItem)=>{
            dispatch(decreaseQuantity(shoeItem));
        };

        return(
            <>
            
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Cart</h2>

                {items.map((shoe) => (

                <div className="items  w-full flex items-center gap-4
                p-2 border-b-2 border-gray-400 "  key={shoe.id}>

                <div className="itemimg h-20 w-20">
                    <img src={shoe.img} alt="..." className='h-full w-full rounded-lg'/>
                </div>
                <div className="itemdetail w-2/3">
                    <h2 className='font-bold'>{shoe.name}</h2>
                    <p>${shoe.price}</p>
                </div>
                <div className="itemcounter flex flex-col items-center justify-center ">
                    <button className='bg-slate-700 px-2 pb-1 rounded-sm hover:bg-orange-500 text-gray-100' 
                    onClick={() => handleIncreaseQuantity(shoe)}>+</button>
                    <p>{shoe.quantity}</p>
                    <button className='bg-slate-700 px-2 rounded-sm hover:bg-orange-500 text-gray-100' 
                    onClick={() => handleDecreaseQuantity(shoe)}>-</button>
                
                </div>
                
                </div>
            ))}

                <div className="details  flex justify-between items-center px-3 mt-2 font-bold text-xl rounded-xl h-12 w-full">
                        <h2>Total</h2>
                        <h2 id='total'>${total}</h2>
                </div>
            
            
            </>
        )
    }

    export default Cart;

