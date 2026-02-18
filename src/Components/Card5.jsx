import React from 'react'
import Card from "../assets/Card8.png"
const Card5 = () => {
  return (
    <div className='w-full   relative'>
            <img src={Card} alt=""  className='object-cover rounded-2xl' />
            <div className='flex flex-col gap-1 absolute top-1/2 -translate-y-1/2 left-1/2'>
                 <p className='font-extrabold  text-[20px] lg:text-[48px] text-[#11A6A1] leading-none'>Save $200</p>
                 <p className='text-[#8F8F8F] font-normal lg:text-[24px]'>On Booking  Via Credit Card</p>
                
                 <button className=' bg-[#11A6A1] rounded-[10px] w-[144px] h-[40px] lg:ml-15
            text-white cursor-pointer mt-4
            '>
                View More
            </button>
               
            </div>
    </div>
  )
}

export default Card5