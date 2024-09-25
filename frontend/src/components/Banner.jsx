import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-16 my-20 md:mx-10 items-center relative '>
      {/* Left side */}
      <div className='flex-1 py-10 md:py-16 lg:py-24 text-white'>
        <div className='space-y-4'>
          <p className='text-sm md:text-base uppercase font-medium tracking-wide'>Book Appointment</p>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            With 100+ Trusted Doctors
          </h1>
        </div>
        <button className='mt-6 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition duration-300'>
          Create Account
        </button>
      </div>

      {/* Right side */}
      <div className='hidden md:flex md:w-1/2 lg:w-[370px] relative'>
        <img
          className='w-full h-auto rounded absolute -right-10 md:-right-16 bottom-[-161px]'
          src={assets.appointment_img}
          alt='Doctor appointment'
        />
      </div>
    </div>
  )
}

export default Banner
