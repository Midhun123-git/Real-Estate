import React from 'react'
import footer from "../assets/FooterLogo.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <div className='w-full bg-[#11A6A1] flex flex-col items-center px-4 py-8 gap-8'>

    
     
      <div className='w-full flex flex-row justify-between lg:hidden gap-6'> {/* ✅ MOBILE ROW 1 */}

        {/* Logo Section */}
        <div className='flex flex-col gap-4'>
          <img 
            src={footer} 
            alt="" 
            className='w-[140px]'
          />

          <div className='flex gap-4'>
            <FaInstagram size={22} className='text-white'/>
            <FaFacebookF size={22} className='text-white'/>
            <FaXTwitter size={22} className='text-white'/>
            <TiSocialLinkedin size={22} className='text-white'/>
          </div>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-2'>
          <p className='text-white font-semibold text-[22px]'>Quick Links</p>
          <p className='text-white text-[18px]'>Home</p>
          <p className='text-white text-[18px]'>Rental</p>
          <p className='text-white text-[18px]'>Paying Guest</p>
          <p className='text-white text-[18px]'>Buying</p>
          <p className='text-white text-[18px]'>Offer</p>
          <p className='text-white text-[18px]'>Booking</p>
        </div>
      </div>


     
      <div className='w-full flex flex-row justify-between lg:hidden gap-6'> {/* ✅ MOBILE ROW 2 */}

        {/* Customer Care */}
        <div className='flex flex-col gap-2'>
          <p className='text-white font-semibold text-[22px]'>Customer Care</p>
          <p className='text-white text-[18px]'>Help Center</p>
          <p className='text-white text-[18px]'>Faq</p>
          <p className='text-white text-[18px]'>Contact Support</p>
          <p className='text-white text-[18px]'>
            Cancelationn and Refund Policies
          </p>
          <p className='text-white text-[18px]'>Terms And Conditions</p>
          <p className='text-white text-[18px]'>Privacy And Policies</p>
        </div>

        {/* Stay Connected */}
        <div className='flex flex-col gap-3'>
          <p className='text-white font-semibold text-[22px]'>Stay Connected</p>
          <p className='text-white text-[18px]'>
            Subscribe To Our News Letters
          </p>

          <input
            type="email"
            placeholder='Enter Your Email'
            className='w-[180px] h-[44px] border border-white 
            focus:outline-none p-2 placeholder:text-white 
            bg-transparent text-white text-sm'
          />

          <button className='w-[180px] h-[44px] bg-white'>
            <p className='text-[#11A6A1] font-semibold text-sm'>
              Subscribe
            </p>
          </button>
        </div>
      </div>



     
      <div className='hidden lg:flex justify-evenly w-full'>

        {/* Left */}
        <div className='flex gap-17'>
          <div className='flex flex-col gap-4'>
            <img src={footer} alt="" className='w-[372px] h-[100px]' />
            <div className='flex gap-5'>
              <FaInstagram size={25} className='text-white'/>
              <FaFacebookF size={25} className='text-white'/>
              <FaXTwitter size={25} className='text-white'/>
              <TiSocialLinkedin size={25} className='text-white'/>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='text-white font-semibold text-[24px]'>Quick Links</p>
            <p className='text-white text-[20px]'>Home</p>
            <p className='text-white text-[20px]'>Rental</p>
            <p className='text-white text-[20px]'>Paying Guest</p>
            <p className='text-white text-[20px]'>Buying</p>
            <p className='text-white text-[20px]'>Offer</p>
            <p className='text-white text-[20px]'>Booking</p>
          </div>
        </div>

        {/* Right */}
        <div className='flex gap-14'>
          <div className='flex flex-col gap-2'>
            <p className='text-white font-semibold text-[24px]'>Customer Care</p>
            <p className='text-white text-[20px]'>Help Center</p>
            <p className='text-white text-[20px]'>Faq</p>
            <p className='text-white text-[20px]'>Contact Support</p>
            <p className='text-white text-[20px]'>
              Cancelationn and Refund Policies
            </p>
            <p className='text-white text-[20px]'>Terms And Conditions</p>
            <p className='text-white text-[20px]'>Privacy And Policies</p>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='text-white font-semibold text-[24px]'>Stay Connected</p>
            <p className='text-white text-[20px]'>
              Subscribe To Our News Letters
            </p>

            <input
              type="email"
              placeholder='Enter Your Email'
              className='w-[301px] h-[48px] border border-white 
              focus:outline-none p-2 placeholder:text-white 
              bg-transparent text-white mt-4'
            />

            <button className='w-[308px] h-[48px] bg-white mt-4'>
              <p className='text-[#11A6A1] font-semibold text-[16px]'>
                Subscribe
              </p>
            </button>
          </div>
        </div>
      </div>


      {/* Bottom */}
      <div className='flex flex-col lg:flex-row justify-between w-full lg:w-[90%] gap-4 text-center'>
        <p className='text-white text-[18px]'>
          © 2025 Pokak Technologies Pvt Ltd
        </p>
        <p className='text-white text-[18px]'>
          Language: [ EN ▼ ]
        </p>
      </div>

    </div>
  )
}

export default Footer
