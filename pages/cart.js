import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react'
import { useSelector } from 'react-redux';
import Cartproducts from '../components/Cartproducts';
import { selectItems, selectTotal } from '../redux/cartslice';

const stripePromise = loadStripe('pk_test_51LQsMQSEZbNosnclAMiT76ev3dATx7wFX0yJc3iiULElyZQ35AQHFNrs8EbzfOagqsEja45l2Y6nQkDCughqgzOC00Hk8mCCrn');

function cart() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
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
        <main className=' xl:flex max-w-screen-2xl mx-auto '>
            <div className=' flex flex-col p-5 space-y-10 bg-gray-200 xl:w-3/4 lg:3/4'>
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
            

            <div className=' bg-gray-300 m-3 p-4 xl:w-1/4 xl:h-28'>
               {items.length > 0 ? (
                <div className='flex flex-col'>
                  <h2>Total no of item : {items.length}</h2>
                  <div className=' font-bold'>
                  Total amount : Rs {total}
                  </div>
                  <button  onClick={createStripeSession} className=' font-bold p-2 rounded-sm bg-black text-white'>Proceed to buy</button>
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

export default cart
