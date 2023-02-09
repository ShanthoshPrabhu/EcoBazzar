import { StarIcon } from '@heroicons/react/24/solid';
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
    function removefromCart (){
        dispatch(removeFromCart({id}))
    }
    // const z =Array(rating).fill().map((_,i)=> (
    //   <StarIcon className=' h-5'/>
    //  ))
  return (
    <div className=' grid grid-cols-5 bg-white p-6 shadow-lg rounded-lg cursor-pointer'>
       {/* <Image height={200} width={200}/> */}
       <Image src={image} width={140} height={140} alt="" className=' xl:max-h-[140px] xl:min-h-[140px] lg:max-h-[140px] lg:min-h-[140px] md:max-h-[120px] md:min-h-[120px]  object-contain'/>
       <div className=' col-span-3 mr-5 '>
          <p className='font-semibold lg:text-lg'>{title}</p>
          <div className='flex my-2'>
          {new Array(rating)
            .fill()
            .map((_, i) => (
              <div className='flex' key={i}>
                <StarIcon className="w-5 h-5 text-yellow-400" key={i} />
              </div>
            ))}
        </div>
          {/* <div className='flex'>
           {z}
          </div> */}
          <p className='text-xs lg:text-base  my-2 line-clamp-3'>{description}</p>
          <span  className='font-semibold'>₹ {rupees}</span>
       </div>

       <div className='flex flex-col space-y-2 justify-center  my-auto'>
       <button onClick={addtoCart} className=' mt-auto addtocartbtn'>Add to cart</button>
       <button onClick={removefromCart} className=' mt-auto removecart'>Remove from cart</button>
       </div>
    </div>
  )
}

export default Cartproducts