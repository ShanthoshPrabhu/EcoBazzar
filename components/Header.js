import {  signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/cartslice';


function Header() {
   const { data: session } = useSession();
   const router = useRouter();
   const items = useSelector(selectItems);
  
   console.log(items)
  return (
   <div className=' max-w-screen-2xl pl-2 xl:text-lg text-xs sm:text-base md:text-base  bg-green-200 flex h-8 items-center  xl:justify-between mt-6 xl:pl-12 xl:pr-8 text-[#1d9bf0] font-medium '>
      <div className=' w-[17%] xl:text-lg font-bold '>ECO-BAZZAR</div>
      {/* <div className="bg-white items-center  w-1/2 flex rounded-full shadow-md  mb-5 sticky" > */}
          <input className="rounded-full w-[50%] ml-1  xl:w-1/2 h-9 xl:h-12 py-4 pl-6  text-gray-700  shadow-xl bg-white focus:outline-none focus:shadow-2xl lg:text-base text-xs" type="text" />
       {/* </div> */}
       <div className='flex  w-[33%] xl:pl-16  justify-evenly items-center font-semibold'>
         <div className=' flex '>
            {session?(<div className=' cursor-pointer' onClick={signOut}>Signout</div>):(<div className=' cursor-pointer' onClick={()=>router.push('/login')}>Signin</div>)}
         </div>
         <div className=' cursor-pointer'>Orders</div>
         <div onClick={()=>router.push('/cart')} className=' cursor-pointer'>
            <span>Cart {items?.length}</span>
         </div>
       </div>
   </div>
  )
}

export default Header