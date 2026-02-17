import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import Rent from "../assets/Rent.png"
import Buy from "../assets/Buy.png"
import Bed from "../assets/Bed.png"
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const Header = () => {
    const [Open,setOpen]=useState(false)
    const NavBar=[
        {id:"1",icon:(
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_1_456)">
            <path d="M18.6768 20.1555C19.1515 19.411 19.4213 18.5154 19.4213 17.566C19.4213 14.8686 17.2634 12.7106 14.566 12.7106C11.8686 12.7106 9.71064 14.8686 9.71064 17.566C9.71064 20.2634 11.8686 22.4213 14.566 22.4213C15.5047 22.4213 16.3894 22.1515 17.1339 21.6876L20.5002 25L22 23.5002L18.6768 20.1555ZM14.566 20.2634C13.8506 20.2634 13.1645 19.9792 12.6586 19.4733C12.1528 18.9675 11.8686 18.2814 11.8686 17.566C11.8686 16.8506 12.1528 16.1645 12.6586 15.6586C13.1645 15.1528 13.8506 14.8686 14.566 14.8686C15.2814 14.8686 15.9675 15.1528 16.4733 15.6586C16.9792 16.1645 17.2634 16.8506 17.2634 17.566C17.2634 18.2814 16.9792 18.9675 16.4733 19.4733C15.9675 19.9792 15.2814 20.2634 14.566 20.2634ZM3.23688 21.3423V12.7106H0L10.7896 3L21.5792 12.7106H19.6155C18.3423 11.3835 16.5513 10.5527 14.566 10.5527C10.7033 10.5527 7.55272 13.7033 7.55272 17.566C7.55272 18.9578 7.96273 20.2634 8.66405 21.3423H3.23688Z" fill="#292D32"/>
            </g>
            <defs>
            <filter id="filter0_dd_1_456" x="-4" y="0" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_456"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_456"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_1_456" result="effect2_dropShadow_1_456"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_456" result="shape"/>
            </filter>
            </defs>
                                        </svg>
        ),text:"Home",textcolor:"Black",weight:"600"},
        {id:"2",icon:<img src={Rent} className='h-[20px] w-[20px]'/>,text:"Rent",textcolor:"#858585",weight:"400"},
        {id:"3",icon:<img src={Buy} className='h-[20px] w-[20px]'/>,text:"Buy",textcolor:"#858585",weight:"400"},
        {id:"4",icon:<img src={Bed} className='h-[20px] w-[20px]'/>,text:"Paying Guest",textcolor:"#858585",weight:"400"}

    ]
  return (
    <>
    {/* Mobile Side Bar Starts */}
        <div  className={`fixed top-0 left-0 h-full w-[260px]
          bg-white z-50   transform transition-transform  duration-300

          ${Open  ?  "translate-x-0 " : "-translate-x-full"}  md:hidden
            `}>
                    <div className='flex justify-between items-center p-4 '>
                        <img src={Logo} alt=""  className='w-[150px]'/>
                        <FaTimes size={20} onClick={()=>setOpen(false)}/>
                    </div>
                    <div className=' flex gap-2 mt-5 ml-8 items-center'>
                            < FaLocationDot size={16}/>
                            <div className='flex gap-2 items-center'>
                            <p className='font-medium text-[20px]'>Kochi</p>
                            <MdOutlineKeyboardArrowDown />
                            </div>
                            
                            </div>
                    <div className='flex flex-col gap-6 p-6'>
                            {
                                NavBar.map((items)=>(
                                    <div className=' flex gap-3 items-center' key={items.id}>
                                            {items.icon}
                                            <p className='text-[18px]'
                                            style={{
                                                color:items.textcolor,
                                                weight:items.weight
                                            }}
                                            >
                                                {items.text}
                                            </p>
                                    </div>
                                ))
                            }
                    </div>
        </div>
    {/* Mobile Side Bar Ends */}
    <div className='w-full  h-[125px] 
 flex items-center justify-center p-2 lg:p-5 shadow-md
    '>
        <div className='flex justify-between w-full items-center'>
            {/* Left And Middle Starts */}
        <div className='flex gap-3  p-2 lg:p-6 items-center'>
                {/* Left Logo */}
                    <img src={Logo} alt="" className='w-[100px]  lg:w-[217px] lg:h-[57px]'/>
                     {/* Left Logo */}
                     {/* Middle Section Starts */}
                     
                     <div className='flex gap-3 ml-8'>
                        {NavBar.map((items)=>(
                                     <div className='md:flex gap-2 hidden ml-6'>
                                     <div className='flex gap-2 items-center'>
                                         {/* Home Icon Svg Starts*/}
                                           {items.icon}
                                          {/* Home Icon Svg Starts*/}
                                          <p className='font-semibold text-[20px]' style={{color:items.textcolor,

                                            fontWeight:items.weight
                                          }}>{items.text}</p>
                                     </div>
                             </div>
                        ))}
                    
                    
                     </div>
                   
                    
                     {/* Middle Section Starts */}
            </div>
                {/* Left And Middle Ends */}
                {/* Right Section Starts */}
            <div className='flex gap-3'>
                            <div className='md:flex hidden gap-2 items-center'>
                            < FaLocationDot size={16}/>
                            <div className='flex gap-2 items-center'>
                            <p className='font-medium text-[20px]'>Kochi</p>
                            <MdOutlineKeyboardArrowDown />
                            </div>
                            
                            </div>
                            {/* search bar Starts*/}
                                <div className='w-full lg:w-[295px] relative'>
                                <input type="text" 
                            placeholder='Search'
                            className='p-2 pl-8
                            
                            focus:outline-none
                            border border-[#11A6A1]  rounded-2xl
                            h-[40px]
                            w-full
                            '
                            />
                            <CiSearch  size={15} className='absolute top-1/2 -translate-y-1/2 left-2'/>
                                </div>
                            
                            
                            {/* search bar Starts*/}

                            {/* right Section Starts */}
                            <div className='md:flex w-[97px] h-[40px]  gap-6 hidden 
                            border border-[#11A6A1] rounded-2xl items-center p-3 pr-0
                            '>
                                        <FaBars size={18} className='text-[#11A6A1]'/>
                                        <div className='w-[48px]  h-[40px] flex items-center justify-center :
                                        rounded-2xl bg-[#11A6A1]
                                        '>
                                             <FaUser size={22} className='text-white'/>
                                        </div>
                            </div>
                             {/* right Section Ends */}
                             <div className='md:hidden '>
                                    <FaBars size={20} onClick={()=>setOpen(true)}/>
                             </div>
            </div>
              {/* Right Section Starts */}
        </div>
            
    </div>
    </>
  )
}

export default Header