import {  signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/cartslice';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


function Header() {
   const { data: session } = useSession();
   const router = useRouter();
   const items = useSelector(selectItems);
   let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
   console.log(items)
  return (
   <div className=' max-w-screen-2xl pl-2 xl:text-lg text-xs sm:text-base md:text-base   flex h-[70px] items-center  xl:justify-between pt-6 xl:pl-12 xl:pr-8 text-[#1d9bf0] font-medium shadow-lg pb-6 bg-black'>
      <div className=' w-[30%] ml-5 md:ml-0 md:w-[17%]  xl:text-lg font-bold '>ECOM-BAZZAR</div>
      {/* <div className="bg-white items-center  w-1/2 flex rounded-full shadow-md  mb-5 sticky" > */}
         {/* <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
         </svg> */}
          <input className="rounded-full w-[43%] md:w-[50%] ml-1  xl:w-1/2 h-8 xl:h-10 py-4 pl-6  text-gray-700  border-2 border-black border-opacity-10 bg-white focus:outline-none focus:transform focus:scale-105 focus:shadow-lg lg:text-base xl:text-lg text-xs" type="text" />
       {/* </div> */}
       <div className='flex  w-[33%] xl:pl-16 text-sm lg:text-base justify-evenly items-center font-semibold'>
         <div className=' flex '>
            {session?(<div className=' cursor-pointer' onClick={openModal}>Signout</div>):(<div className=' cursor-pointer' onClick={()=>router.push('/login')}>Signin</div>)}
         </div>
         <div className=' cursor-pointer hidden md:inline'>Orders</div>
         <div onClick={()=>router.push('/cart')} className=' cursor-pointer'>
            <span>Cart {items?.length}</span>
         </div>
       </div>
       <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-[#5b7083] bg-opacity-25 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <div className='  w-[300px] space-y-4 bg-white rounded-lg border-gray-100 h-[120px] p-3 py-4 '>
                          <div className=' text-black font-medium text-lg mt-[10px] text-opacity-90 '>
                             Logout from your account?
                          </div>
                          <div className='flex justify-around mt-5'>
                          <div><button className=' px-2 py-1 text-blue-400 outline-none rounded-lg text-opacity-70 hover:bg-blue-100 font-semibold' onClick={(e)=>{
                                e.stopPropagation();
                                closeModal()
                              }}>Cancel</button></div>
                              <div><button className='px-2 py-1 rounded-lg outline-none text-red-400 text-opacity-80 hover:bg-red-100 font-medium' onClick={(e) => {
                              e.stopPropagation();
                              signOut()
                              closeModal()
                              }}>Confirm</button></div>
                          </div>
                         </div>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
      </Transition>
   </div>
  )
}

export default Header