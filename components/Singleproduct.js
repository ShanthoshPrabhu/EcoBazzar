import React, { useState } from 'react'
// import {StarIcon} from '@heroicons/react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartslice';
import { StarIcon } from "@heroicons/react/solid";
// import StarIcon from '../public/star.svg'

const maxrating = 5;
const minrating = 2;
const exrate =73.8;
function Singleproduct({id,title,price,description,category,image}) {
    const dispatch = useDispatch();
    const rupees = Math.floor(price * exrate).toLocaleString();
    const [rating] =useState( Math.floor(Math.random() * (maxrating - minrating + 1)) + 1);

  function addProduct(){
     const product = {id,title,price,description,category,image,rating};
     console.log('mm')
     dispatch(addToCart(product))
     console.log('mm')
  }
  // const z =Array(rating).fill().map((_,i)=> (
  //   <StarIcon className=' h-5'/>
  //  ))
  
  return (
    <div className=' relative flex flex-col justify-evenly m-5 bg-white p-10' key={id}>
        <p className=' absolute top-2  right-2 text-xs italic text-gray-400'>{category}</p>
     
      <div className=' bg-orange-700 flex justify-center'>
      <Image src={image} alt='' width={150} height={150}  className=' xl:max-h-[140px] xl:min-h-[140px] lg:max-h-[140px] lg:min-h-[140px] md:max-h-[120px] md:min-h-[120px]  object-contain'/>
     </div>    
       <h4 className='my-3'>{title}</h4>
      

       <div className='flex'>
        
       </div>

       <p className=' my-2 text-xs line-clamp-2'>{description}</p>

       <div className=' text-sm mb-2'>{rupees}</div>

       <button onClick={addProduct} className=' mt-auto addtocartbtn'>Add to cart</button>

    </div>
  )
}

export default Singleproduct