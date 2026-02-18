import React from 'react'
import img1 from "../assets/Card2/img1.jpg"
import img2 from "../assets/Card2/img2.jpg"
import img3 from "../assets/Card2/img3.jpg"
import img4 from "../assets/Card2/img4.jpg"
import img5 from "../assets/Card2/img5.jpg"
import img6 from "../assets/Card2/img6.jpg"
import img7 from "../assets/Card2/img7.jpg"
import img8 from "../assets/Card2/img8.jpg"
import { FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
const Card2 = () => {
    const rowdet=[
    {
  id:"1",
  img:img1,
  price:"₹50 Lac",
  house:"3BHK House",
  place:"Kakkand, Kochi",
  review:"4.8 (73)"
    },
    {
        id:"2",
        img:img2,
        price:"₹50 Lac",
        house:"3BHK House",
        place:"Kakkand, Kochi",
        review:"4.8 (73)"
          },
          {
            id:"3",
            img:img3,
            price:"₹50 Lac",
            house:"3BHK House",
            place:"Kakkand, Kochi",
            review:"4.8 (73)"
              },
              {
                id:"4",
                img:img4,
                price:"₹50 Lac",
                house:"3BHK House",
                place:"Kakkand, Kochi",
                review:"4.8 (73)"
                  },
    ]
    const coldet=[
        {
      id:"5",
      img:img5,
      price:"₹50 Lac",
      house:"3BHK House",
      place:"Kakkand, Kochi",
      review:"4.8 (73)"
        },
        {
            id:"6",
            img:img6,
            price:"₹50 Lac",
            house:"3BHK House",
            place:"Kakkand, Kochi",
            review:"4.8 (73)"
              },
              {
                id:"7",
                img:img7,
                price:"₹50 Lac",
                house:"3BHK House",
                place:"Kakkand, Kochi",
                review:"4.8 (73)"
                  },
                  {
                    id:"8",
                    img:img8,
                    price:"₹50 Lac",
                    house:"3BHK House",
                    place:"Kakkand, Kochi",
                    review:"4.8 (73)"
                      },
    ]
  return (
    <div className='flex flex-col gap-4  '>
        
   <div className='flex gap-3 w-full flex-col lg:flex-row'>
   {rowdet.map((items)=>(
    <div className='w-full  h-auto
    bg-[#FFFFFF] rounded-2xl flex flex-col gap-2  
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
          
                <p className='pl-2  font-bold text-[22px]'>{items.price}</p>
                <p className='pl-2  font-bold text-[22px]'>{items.house}</p>
                 
          </div>
           {/* Price Section Ends*/}
              {/* Place And  Review  Starts*/}
               <div  className='flex justify-between pb-2'>
                  <p className='text-[#7D7F88] font-normal text-[18px] pl-2'> {items.place}</p>

                  <div className='flex gap-1 items-center mr-2'>
                  <FaStar size={16} className='text-[#FFBF75]'/>
                        <p>{items.review}</p>
                  </div>
               </div>
              {/* Place And  Review  Endss*/}
               
      </div>
))}
        
      
</div>
<div className='flex gap-3 flex-col lg:flex-row'>
   {coldet.map((items)=>(
    <div className='w-full  h-auto
    bg-[#FFFFFF] rounded-2xl  flex flex-col gap-2  
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
          
                <p className='pl-2  font-bold text-[22px]'>{items.price}</p>
                <p className='pl-2  font-bold text-[22px]'>{items.house}</p>
                 
          </div>
           {/* Price Section Ends*/}
              {/* Place And  Review  Starts*/}
               <div  className='flex justify-between pb-2'>
                  <p className='text-[#7D7F88] font-normal text-[18px] pl-2'> {items.place}</p>

                  <div className='flex gap-1 items-center mr-2'>
                  <FaStar size={16} className='text-[#FFBF75]'/>
                        <p>{items.review}</p>
                  </div>
               </div>
              {/* Place And  Review  Endss*/}
               
      </div>
))}
        
      
</div>
    </div>
  )
}

export default Card2