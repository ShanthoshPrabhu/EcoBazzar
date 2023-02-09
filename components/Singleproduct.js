import React, { useState } from 'react'
// import {StarIcon} from '@heroicons/react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartslice';
// import StarIcon from '../public/star.svg'
import { StarIcon } from "@heroicons/react/24/solid";




function Singleproduct({id,title,price,description,category,image}) {
    const dispatch = useDispatch();
    const maxrating = 5;
    const minrating = 2;
    const exrate =73.8;
    const rupees = Math.floor(price * exrate).toFixed(2);

    const rating = Math.floor(Math.random() * (maxrating - minrating + 1)) + minrating

  function addProduct(){
     const product = {id,title,price,description,category,image,rating};
     console.log('mm')
     dispatch(addToCart(product))
     console.log('mm')
  }
  // const z =Array(rating).fill().map((_,i)=> (
  //   <div className='h-4 text-yellow-300'>
  //       <svg width="16" height="20" fill="currentColor">
  //         <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
  //       </svg>
  //   </div>
  //  ))
   
  
  return (
    <div className=' relative flex flex-col justify-evenly m-5 bg-white p-10 rounded-lg hover:scale-105 hover:shadow-lg transition ease-in-out duration-300 cursor-pointer' key={id}>
        <p className=' absolute top-2  right-2 text-xs italic text-gray-400'>{category}</p>
     
      <div className=' flex justify-center my-5'>
      <Image src={image} alt='' width={150} height={150}  className=' xl:max-h-[140px] xl:min-h-[140px] lg:max-h-[140px] lg:min-h-[140px] md:max-h-[120px] md:min-h-[120px]  object-contain'/>
     </div>    
       <h4 className='my-3 mb-1 font-semibold'>{title}</h4>
    
       <p className=' my-2 text-sm line-clamp-2'>{description}</p>

       <div className='flex mb-2'>
          {new Array(rating)
            .fill()
            .map((_, i) => (
              <div className='flex' key={i}>
                <StarIcon className="w-6 h-6 text-yellow-400" key={i} />
              </div>
            ))}
        </div>
       <div className=' text-sm mt-2 mb-3 font-semibold'>₹ {rupees}</div>

       <button onClick={addProduct} className=' mt-auto addtocartbtn'>Add to cart</button>

    </div>
  )
}

export default Singleproduct