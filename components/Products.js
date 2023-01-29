import React from 'react'
import Singleproduct from './Singleproduct'
function Products({products}) {
    // console.log('products',products)
    {/* 
      <img alt='' className='w-screen md:col-span-full' src='https://rukminim1.flixcart.com/fk-p-flap/50/50/image/da81e47212d1f0f5.jpeg?q=50'/>
    
      <div className=' md:col-span-2 '>
      {products?.slice(4,5).map(({id,title,price,description,category,image})=>(
            <Singleproduct key={id} id={id} price={price} title={title} description={description} category={category} image={image}/>
        ))}
      </div>
      
       */}
  return (
    <div className=' bg-gray-100 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3  mx-auto'>
        {products?.slice(0,4).map(({id,title,price,description,category,image})=>(
            <Singleproduct key={id} id={id} price={price} title={title} description={description} category={category} image={image}/>
        ))}
       
      {products?.slice(5,products?.length).map(({id,title,price,description,category,image})=>(
          <Singleproduct key={id} id={id} price={price} title={title} description={description} category={category} image={image}/>
        ))}
     

    </div>
  )
}

export default Products