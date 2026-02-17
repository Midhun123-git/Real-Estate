import React from 'react'
import Bannner from "../assets/Banner.png"
const Banner = () => {
  return (
    <div className='w-full h-[302px]   relative'>
         <img src={Bannner} alt="" className='w-full h-full object-cover object-[85%_20%]'
         />

         <div className='flex flex-col gap-2 absolute top-1/2 -translate-y-1/2 left-9'>
                    <p  className='font-extrabold text-[48px] leading-none text-black'>10% off</p>
                    <p className='font-medium text-[24px] text-black'>On first-month rent for bookings</p>
                    <button className='cursor-pointer bg-black text-white rounded-4xl w-[167px] h-[42px]'>
                            Explore
                    </button>
         </div>
    </div>
  )
}

export default Banner