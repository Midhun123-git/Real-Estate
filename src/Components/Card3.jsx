import React from 'react'
import img1 from "../assets/Card3/img1.jpg"
import img2 from "../assets/Card3/img2.jpg"
import img3 from "../assets/Card3/img3.jpg"
import img4 from "../assets/Card3/img4.jpg"
import { FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
const Card3 = () => {
    const cards=[
        {
            id:"1",
            img:img1,
            price:"₹10,000",
            month:"/Month",
            house:"3BHK House",
            place:" Kakkand, Kochi",
            review:" Kakkand, Kochi"
        },
        {
            id:"1",
            img:img2,
            price:"₹10,000",
            month:"/Month",
            house:"3BHK House",
            place:" Kakkand, Kochi",
            review:" Kakkand, Kochi"
        },
        {
            id:"1",
            img:img3,
            price:"₹10,000",
            month:"/Month",
            house:"3BHK House",
            place:" Kakkand, Kochi",
            review:" Kakkand, Kochi"
        },
        {
            id:"1",
            img:img4,
            price:"₹10,000",
            month:"/Month",
            house:"3BHK House",
            place:" Kakkand, Kochi",
            review:" Kakkand, Kochi"
        },
    ]
  return (

    <div className='flex gap-2'>
        {
            cards.map((items)=>(
                <div className='w-full lg:w-[392px] h-auto
                bg-[#FFFFFF] rounded-2xl  border flex flex-col gap-2  
                '>  
                {/* top Img  Starts */}
                  <div className='w-full h-[246px] p-2 relative'>
                    <img src={items.img} alt="" className='w-full h-full object-cover rounded-2xl'/>
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
                      
                    <p className='p-2 pb-0 font-bold text-[22px]'>{items.price}
                              <span className='text-[#7D7F88] font-normal text-[20px]'>{items.month}</span>
                              </p>
                            <p className='pl-2  font-bold text-[22px]'>{items.house}</p>
                             
                      </div>
                       {/* Price Section Ends*/}
                          {/* Place And  Review  Starts*/}
                           <div  className='flex justify-between pb-2'>
                              <p className='text-[#7D7F88] font-normal text-[18px] pl-2'>{items.place}</p>
            
                              <div className='flex gap-1 items-center mr-2'>
                              <FaStar size={16} className='text-[#FFBF75]'/>
                                    <p>{items.review}</p>
                              </div>
                           </div>
                          {/* Place And  Review  Endss*/}
                           
                  </div>
            ))
        }
 
    </div>
  )
}

export default Card3