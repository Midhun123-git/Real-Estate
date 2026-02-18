import React from 'react'
import img1 from "../assets/Card1/Img1.jpg"
import img2 from "../assets/Card1/Img2.jpg"
import img3 from "../assets/Card1/Img3.jpg"
import img4 from "../assets/Card1/Img4.jpg"
import { FaStar } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
const Card1 = () => {
const Cards=[
{
  id:"1",
  img:img1,
  price:"₹4,000 ",
  p2:"/ Single Share",
  btn:"For Men",
  place:"Kakkand, Kochi",
  review:"Kakkand, Kochi",
  wifi:"Free Wifi",
  food:"Free Wifi"
},
{
  id:"1",
  img:img2,
  price:"₹4,000 ",
  p2:"/ Single Share",
  btn:"For Men",
  place:"Kakkand, Kochi",
  review:"Kakkand, Kochi",
  wifi:"Free Wifi",
  food:"Free Wifi"
},
{
  id:"1",
  img:img3,
  price:"₹4,000 ",
  p2:"/ Single Share",
  btn:"For Men",
  place:"Kakkand, Kochi",
  review:"Kakkand, Kochi",
  wifi:"Free Wifi",
  food:"Free Wifi"
},
{
  id:"1",
  img:img4,
  price:"₹4,000 ",
  p2:"/ Single Share",
  btn:"For Men",
  place:"Kakkand, Kochi",
  review:"Kakkand, Kochi",
  wifi:"Free Wifi",
  food:"Free Wifi"
},
]
  return (
    <div className='flex gap-4 lg:flex-row flex-col'>
      {Cards.map((items)=>(
 <div className='w-full h-auto
 bg-[#FFFFFF] rounded-2xl   flex flex-col gap-2  
 '>  
 {/* top Img  Starts */}
   <div className='w-full h-[246px] p-2 relative'>
     <img src={items.img} alt="" className='w-full h-full object-cover rounded-2xl'/>
     {/* Share Icon Starts */}
     <div className='w-[34px] h-[34px] bg-[#FFFFFF]/60
     cursor-pointer
     rounded-full flex items-center justify-center absolute top-4 left-[70%]
     '>
           <IoShareSocialOutline size={16} className='text-[#11A6A1]'/>
     </div>
     {/* Share Icon Ends */}
     {/* Favorite Icon Starts */}
     <div className='w-[34px] h-[34px] bg-[#FFFFFF]/60
     rounded-full flex items-center justify-center absolute top-4 left-[85%]
     cursor-pointer
     '>
           <MdFavorite size={16} className='text-[#11A6A1]'/>
     </div>
     {/* Favorite Icon Ends */}
   </div>
    {/* top Img  Starts */}
   <div className='flex flex-col gap-1'>
     {/* Price Section Starts*/}
       <div  className='flex justify-between  items-center
           
       '>
             <p className='p-2 pb-0 font-bold text-[22px]'>{items.price}
               <span className='text-[#7D7F88] font-normal text-[20px]'>{items.p2}</span>
               </p>
               <div className='w-[59px] h-[22px] bg-[#4499FF] rounded-[2px] mr-2
               flex items-center justify-center text-white 
               '>
                   <p className='text-[12px]'>{items.btn}</p>
               </div>
       </div>
        {/* Price Section Ends*/}
           {/* Place And  Review  Starts*/}
            <div  className='flex justify-between'>
               <p className='text-[#7D7F88] font-normal text-[18px] pl-2'> {items.place}</p>

               <div className='flex gap-1 items-center mr-2'>
               <FaStar size={16} className='text-[#FFBF75]'/>
                     <p>{items.review}</p>
               </div>
            </div>
           {/* Place And  Review  Endss*/}
            {/* Wifi And Food endss */}
            <div className='flex gap-6 items-center pb-3'>
               <div className='w-[20px] h-[20px] bg-[#7D7F88]
               rounded-[5px] flex items-center justify-center ml-2
               '> 
                <FaWifi size={15} className='text-white'/>

               </div>
               <p className='text-[#858585] text-[16px] font-normal'>{items.wifi}</p>
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3636 2.90909V0H10.9091V2.90909H7.27273L7.44 4.58909C10.1091 5.20727 12.3636 7.10545 12.3636 10.1818L12.3782 16H14.6909L16 2.90909H12.3636ZM0 14.5455H10.9091V16H0V14.5455ZM5.45455 5.81091C2.72727 5.81091 0 7.27273 0 10.1818H10.9091C10.9091 7.27273 8.18182 5.81091 5.45455 5.81091ZM0 11.6364H10.9091V13.0909H0V11.6364Z" fill="#858585"/>
</svg>
<p className='text-[#858585] text-[16px] font-normal'>{items.food}</p>

            </div>
            {/* Wifi And Food  endss */}
   </div>

 </div>
      ))}
   
    </div>
  )
}

export default Card1