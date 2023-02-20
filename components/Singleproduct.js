import React, { useEffect, useState } from 'react'
// import {StarIcon} from '@heroicons/react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartslice';
import { StarIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'


function Singleproduct({id,title,price,description,category,image}) {
    const dispatch = useDispatch();
    
    const maxrating = 5;
    const minrating = 2;
    const exrate =73.8;
    const rupees = Math.floor(price * exrate).toFixed(2);

    const rating = Math.floor(Math.random() * (maxrating - minrating + 1)) + minrating

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    function showPopup () {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1000); // 3000 milliseconds = 3 seconds
    };
  function addProduct(){
    //  setIsOpen(true)
     const product = {id,title,price,description,category,image,rating};
     console.log('mm')
     dispatch(addToCart(product))
     console.log('mm')
     setIsOpen(false)
  }
  // const z =Array(rating).fill().map((_,i)=> (
  //   <div className='h-4 text-yellow-300'>
  //       <svg width="16" height="20" fill="currentColor">
  //         <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
  //       </svg>
  //   </div>
  //  ))
   
 

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsOpen(false);
  //   }, 2000); // 5000 milliseconds = 5 seconds

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);
  return (
    <div className=' relative flex flex-col justify-evenly m-5 bg-white p-10 rounded-lg hover:scale-105 hover:shadow-lg transition ease-in-out duration-300 cursor-pointer' key={id}>
        <p className=' absolute top-2  right-2 text-xs italic text-gray-400'>{category}</p>
     
      <div className=' flex justify-center my-5'>
      <Image src={image} alt='' width={150} height={150}  className=' xl:max-h-[140px] xl:min-h-[140px] lg:max-h-[140px] lg:min-h-[140px] md:max-h-[120px] md:min-h-[120px]  object-contain'/>
     </div>    
       <h4 className='my-3 mb-1 font-semibold'>{title}</h4>
    
       <p className=' my-2 text-sm line-clamp-2'>{description}</p>
    
       <div className=' text-sm mt-2 mb-3 font-semibold'>₹ {rupees}</div>

       <button onClick={()=>{
                        addProduct()
                        showPopup()
                        }} 
        className=' mt-auto addtocartbtn'>Add to cart</button>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-[50%] max-w-md transform rounded-lg overflow-hidden bg-white py-4 text-left align-middle shadow-xl transition-all">
                 <div className=' flex justify-center items-center'>
                  Added to cart successfully!
                 </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Singleproduct




