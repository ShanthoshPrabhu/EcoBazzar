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
   <div className=' max-w-screen-2xl pl-2 xl:text-lg text-xs sm:text-base md:text-base   flex h-[70px] items-center  xl:justify-between pt-6 xl:pl-12 xl:pr-8 text-[#1d9bf0] font-medium shadow-lg pb-6 bg-black'>
      <div className=' w-[17%] xl:text-lg font-bold '>ECOM-BAZZAR</div>
      {/* <div className="bg-white items-center  w-1/2 flex rounded-full shadow-md  mb-5 sticky" > */}
         {/* <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
         </svg> */}
          <input className="rounded-full w-[50%] ml-1  xl:w-1/2 h-8 xl:h-10 py-4 pl-6  text-gray-700  border-2 border-black border-opacity-10 bg-white focus:outline-none focus:transform focus:scale-105 focus:shadow-lg lg:text-base xl:text-lg text-xs" type="text" />
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