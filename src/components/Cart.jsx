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