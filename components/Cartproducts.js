import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartslice';

function Cartproducts({id,title,price,description,category,image,rating}) {
    const exrate =73.8;
    const rupees = Math.floor(price * exrate).toLocaleString();
    const dispatch = useDispatch();
    function addtoCart () {
        const product = {id,title,price,description,category,image,rating}
       dispatch(addToCart(product))
    }
    function removefromCart () {
        dispatch(removeFromCart({id}))
    }
    // const z =Array(rating).fill().map((_,i)=> (
    //   <StarIcon className=' h-5'/>
    //  ))
  return (
    <div className=' grid grid-cols-5 bg-white p-6'>
       {/* <Image height={200} width={200}/> */}
       <div className=' col-span-3 mx-5'>
          <p>{title}</p>
          {/* <div className='flex'>
           {z}
          </div> */}
          <p className='text-xs my-2 line-clamp-3'>{description}</p>
          <span>₹ {rupees}</span>
       </div>

       <div className='flex flex-col space-y-2 justify-center  my-auto'>
       <button onClick={addtoCart} className=' mt-auto addtocartbtn'>Add to cart</button>
       <button onClick={removefromCart} className=' mt-auto addtocartbtn'>Remove from cart</button>
       </div>
    </div>
  )
}

export default Cartproducts