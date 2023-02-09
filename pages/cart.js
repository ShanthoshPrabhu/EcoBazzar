import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react'
import { useSelector } from 'react-redux';
import Cartproducts from '../components/Cartproducts';
import { selectItems, selectTotal } from '../redux/cartslice';

const stripePromise = loadStripe('pk_test_51LQsMQSEZbNosnclAMiT76ev3dATx7wFX0yJc3iiULElyZQ35AQHFNrs8EbzfOagqsEja45l2Y6nQkDCughqgzOC00Hk8mCCrn');

function Cart() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal).toFixed(2);;
  const {data:session} =useSession();

 async function createStripeSession () {
   const stripe = await stripePromise;

   const stripeSession = await axios.post(`/api/create-stripe-session`, {
    items:items,
    email:session?.user.email
   })
   console.log('stripesession',stripeSession)
   const result = await stripe.redirectToCheckout({
    sessionId:stripeSession.data.id
   })
   if(result.error) {
    alert(result.error.message)
   }
  }
  return (
    <div>
        <main className=' xl:flex max-w-screen-2xl mx-auto min-h-screen bg-gray-100'>
            <div className=' flex flex-col p-5 space-y-10 xl:w-3/4 lg:3/4'>
               {items?.length === 0 ? (
                <h1 className=' text-3xl border-b pb-4'>Your cart is empty</h1>
               ):(
                <h1 className=' text-3xl border-b pb-4'>Your shopping cart</h1>
               )}

            {items?.map((item,i)=>(
               <Cartproducts 
               key={i} 
               id={item.id}
               title={item.title}
               price={item.price}
               description={item.description}
               category={item.category}
               image={item.image}
               rating={item.rating}
               />
            ))}
            </div>
            

            <div className=' bg-white m-3 p-4 xl:w-1/4 xl:h-40 rounded-lg mt-8'>
               {items.length > 0 ? (
                <div className='flex flex-col my-2'>
                  <h2 className='font-semibold'>Total no of item : {items.length}</h2>
                  <div className=' font-semibold my-2'>
                  Total amount : Rs {total}
                  </div>
                  <button  onClick={createStripeSession} disabled={!session} className={` font-bold p-2 my-2 rounded-md bg-black hover:bg-opacity-9.0000000 active:bg-opacity-100 text-white ${!session ? 'cursor-auto bg-opacity-70':null}`}>Proceed to buy</button>
                  {!session ? <div className=' text-sm flex justify-center font-semibold text-red-500'>Login in order to proceed to checkout</div>:null}
                </div>
               ):(
                <>
                </>
               )}
            </div>
        </main>
    </div>
  )
}

export default Cart

