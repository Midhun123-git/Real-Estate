import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Card1 from '../Components/Card1'
import Card2 from '../Components/Card2'
import Card3 from '../Components/Card3'
import Card5 from '../Components/Card5'
import Card4 from '../Components/Card4'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div className='flex flex-col items-center bg-[#F1F1F1]'>
        <div className='fixed too-0 left-0 right-0 z-50 bg-white'>
        <Header/>
        </div>

        <div className='mt-35 flex items-center justify-center w-[90%]  pt-0'>
            <Banner/>
        </div>


        {/* Card 1  Starts */}
        {/* Text Div Bef Card Starts */}
        <div className='flex items-center justify-between w-[90%] mt-9'>
          <p className='font-medium text-[15px] lg:text-[24px]'>Find Your Ideal Pay Guest Stay</p>
          <button className='text-[#11A6A1] p-3  border rounded-xl cursor-pointer'>
              View All
          </button>
        </div>
        {/* Text Div Bef Card Ends */}
        <div className='flex items-center justify-center w-[90%] mt-3 flex-wrap'>
        <Card1/>
        </div>
        {/* Card 1  Ends */}

        {/* Card2 Starts */}
        <div  className="bg-linear-to-b from-[#DBF8F7] via-[#EDFBFB] to-[#FFFFFF] w-full pt-6 pr-0 pl-0
        mt-9
        ">
          {/* Trending Text And Btn Starts*/}
              <div className='flex items-center justify-between w-[90%] mx-auto'>
                  <p className='font-medium text-[15px] lg:text-[24px]'>Trending Properties Near You</p>
                  <button className='text-white p-3  bg-[#11A6A1] rounded-xl cursor-pointer'>
              View All
          </button>
              </div>
          {/* Trending Text And Btn Ends*/}
              <div className='flex items-center justify-center w-[90%] mx-auto mt-4 flex-wrap'> 
              <Card2/>
              </div>
        </div>
        {/* Card2 Ends */}

   {/* Card3 Starts */}

   <div className='w-full  bg-linear-to-b from-[#FCFEFE] to-[#F1F1F1]'>
{/* Text And Starts */}
<div className='flex items-center justify-between w-[90%] mx-auto mt-4'>
                  <p className='font-medium text-[15px] lg:text-[24px]'>Best Properties For Rent</p>
                  <button className='text-white p-3  bg-[#11A6A1] rounded-xl cursor-pointer'>
              View All
          </button>
              </div>
{/* Text And Ends */}
   {/* Card Starts */}
          <div className='w-[90%] mx-auto flex items-center justify-center mt-4 pb-8'>
              <Card3/>
          </div>
      {/* Card Starts */}
   </div>
    {/* Card3 Starts */}

   {/* Card 4 & 5 Starts */}
   <div className='bg-white'>
        <div className='flex  
        lg:flex-row flex-col
        gap-3 w-[90%] items-center justify-center mt-9 mx-auto pb-5 lg:pb-45'>
          <Card4/>
          <Card5/>
        </div>
   </div>
   {/* Card 4 & 5 Ends */}

   {/* Footer Starts */}
   <div className='w-full '>
<Footer/>
   </div> 
    {/* Footer Ends */}
    </div>
  )
}

export default Home