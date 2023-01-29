import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Carousal() {
  return (
    <div className=' relative bg-black items-center max-w-screen-2xl mt-8'>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
            <div className=' cursor-pointer bg-black flex-shrink'>
            <img className=' max-w-[1100px] object-contain ' loading='lazy' alt='' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/834b0d93-50b6-40a4-8ff0-50cb375f0e8e/nike-just-do-it.png" />
            </div>
            <div className=' mt-8 xl:mt-4 sm:mt-12 cursor-pointer bg-black'>
                <img loading='lazy' alt='' src="https://www.wildcraft.com/media/wysiwyg/GEAR_DESKTOP.jpg?auto=webp&format=pjpg&quality=85" />
            </div>
            <div className='mt-8 xl:mt-0 sm:mt-12 cursor-pointer bg-black flex flex-col items-center justify-end'>
                <img loading='lazy' alt='' src="https://www.wildcraft.com/media/wysiwyg/GEAR_DESKTOP.jpg?auto=webp&format=pjpg&quality=85" />
                 <div className=' max-w-[180px]'>
                  <img loading='lazy' alt='' className=' w-18 h-8' src='https://seeklogo.com/images/T/the-wildcraft-logo-221AFC99F7-seeklogo.com.png'/>
                </div>  
            </div>
            </Carousel>
    </div>
  )
}

export default Carousal

//"https://www.wildcraft.com/media/wysiwyg/GEAR_DESKTOP.jpg?auto=webp&format=pjpg&quality=85"
//https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/834b0d93-50b6-40a4-8ff0-50cb375f0e8e/nike-just-do-it.png

