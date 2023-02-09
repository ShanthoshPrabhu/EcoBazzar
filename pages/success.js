import { useRouter } from 'next/router'
import React from 'react'

function Success() {
    const router =useRouter();
  return (
    <div className=' w-full h-32 mt-5 flex flex-col justify-center items-center'>
       <div className=' text-3xl font-bold'>Your order has been succesfully placed. Click below to go to your home page</div>
       <div className=' mt-5'><button className=' p-2 font-semibold shadow-lg rounded-lg' onClick={()=>router.push('/')}>Go to home</button></div>
    </div>
  )
}

export default Success