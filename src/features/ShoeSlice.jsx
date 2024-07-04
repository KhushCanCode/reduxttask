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