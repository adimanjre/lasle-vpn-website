import React from 'react'
import Image from 'next/image'
import Button from './button'

const heroSec = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-20 md:gap-10 hero-section '>
      <div className='items-center md:basis-1/2 mt-10 md:mt-0'>
        <h1 className='text-5xl md:text-6xl text-gray-800 font-semibold leading-snug'>Want anything to be easy with <span className='font-bold'>LaslesVPN.</span></h1>
        <p className='mt-5 leading-normal'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
        <Button clickFunc={()=>{return}} params='' classes='bg-red-500 text-white py-3 px-10 mt-10 border border-red-500 rounded-md leading-snug shadow-2xl shadow-red-400 hover:border hover:border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300 ease-in-out' value='Get Started'/>
      </div>
      <div className='flex justify-center items-center md:basis-1/2'>
        <Image src={'/img/hero-img.png'} alt='hero image' width={600} height={400}/>
      </div>
    </div>
  )
}

export default heroSec