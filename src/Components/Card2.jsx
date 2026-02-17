import React from 'react'
import Card from "../assets/Card5.jpg"
import { FaStar } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
const Card2 = () => {
  return (
    <div className='w-full lg:w-[392px] h-auto
    bg-[#FFFFFF] rounded-2xl  border flex flex-col gap-2  
    '>  
    {/* top Img  Starts */}
      <div className='w-full h-[246px] p-2 relative'>
        <img src={Card} alt="" className='w-full h-full object-cover rounded-2xl'/>
        {/* Share Icon Starts */}
        <div className='w-[34px] h-[34px] bg-[#FFFFFF]/60
        cursor-pointer
        rounded-full flex items-center justify-center absolute top-4 left-[75%]
        '>
              <IoShareSocialOutline size={16} className='text-[#11A6A1]'/>
        </div>
        {/* Share Icon Ends */}
        {/* Favorite Icon Starts */}
        <div className='w-[34px] h-[34px] bg-[#FFFFFF]/60
        rounded-full flex items-center justify-center absolute top-4 left-[88%]
        cursor-pointer
        '>
              <MdFavorite size={16} className='text-[#11A6A1]'/>
        </div>
        {/* Favorite Icon Ends */}
      </div>
       {/* top Img  Starts */}
      <div className='flex flex-col gap-1'>
        {/* Price Section Starts*/}
          
                <p className='pl-2  font-bold text-[22px]'>₹50 Lac</p>
                <p className='pl-2  font-bold text-[22px]'>3BHK House</p>
                 
          </div>
           {/* Price Section Ends*/}
              {/* Place And  Review  Starts*/}
               <div  className='flex justify-between pb-2'>
                  <p className='text-[#7D7F88] font-normal text-[18px] pl-2'> Kakkand, Kochi</p>

                  <div className='flex gap-1 items-center mr-2'>
                  <FaStar size={16} className='text-[#FFBF75]'/>
                        <p>4.8 (73)</p>
                  </div>
               </div>
              {/* Place And  Review  Endss*/}
               
      </div>

    
  )
}

export default Card2