import React from 'react'
import Card from "../assets/Card7.png"
const Card4 = () => {
  return (
    <div className='w-full relative'>
        <img src={Card} alt="" className='object-cover rounded-2xl lg:h-[328px] ' />
        <div className='flex flex-col gap-1 absolute top-1/2 -translate-y-1/2 left-15'>
            <p className='font-extrabold  text-[20px] lg:text-[48px]  text-[white] leading-none'>Affordable PG</p>
            <p className='font-extrabold text-[20px] lg:text-[48px]  text-[white] leading-none'>Extra <br />10% off</p>
            <button className=' bg-[#11A6A1] rounded-[10px] w-[144px] h-[40px]
            text-white cursor-pointer mt-4
            '>
                View Details
            </button>
        </div>
    </div>
  )
}

export default Card4