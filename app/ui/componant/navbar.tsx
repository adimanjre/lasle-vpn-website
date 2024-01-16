"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'

const Navbar = () => {
    const [isClicked,changeState] = useState(false)
    return (
        <>
            <div className='my-4 antialiased text-gray-800 hidden md:block'>
                <nav className='flex justify-between'>
                    <div className="logo-container flex items-center gap-3">
                        <Image src={'/img/logo.png'} alt='logo-icon' width={50} height={50} />
                        <p className='text-xl antialiased font-medium'>LaslesVPN</p>
                    </div>
                    <div className="navLink-Container flex items-center gap-6">
                        <Link href={'/About'} className='text-base text-gray-600 hover:text-red-500'>About</Link>
                        <Link href={'/About'} className='text-base text-gray-600 hover:text-red-500'>Features</Link>
                        <Link href={'/About'} className='text-base text-gray-600 hover:text-red-500'>Pricing</Link>
                        <Link href={'/About'} className='text-base text-gray-600 hover:text-red-500'>Testimonials</Link>
                        <Link href={'/About'} className='text-base text-gray-600 hover:text-red-500'>Help</Link>
                    </div>
                    <div className="cta-container">
                        <Button clickFunc={()=>{return}} params='' classes=' text-base text-gray-800 font-medium px-7 py-2' value='Sign Up' />
                        <Button clickFunc={()=>{return}} params='' classes='rounded-full text-base text-red-500 border border-red-500 px-7 py-2 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out' value='Sign Up' />
                    </div>
                </nav>
            </div>
            <div className='my-4 antialiased text-gray-800 block md:hidden'>
                <nav className='flex justify-between'>
                    <div className="logo-container flex items-center gap-3">
                        <Image src={'/img/logo.png'} alt='logo-icon' width={50} height={50} />
                        <p className='text-xl antialiased font-medium'>LaslesVPN</p>
                    </div>
                    <div className='hamburger-menu flex items-center justify-center '>
                        <div className='hamIcon cursor-pointer' onClick={()=>changeState(prev => !prev)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </div>
                        <div className={`menu-container bg-white absolute w-screen transition-all left-0 right-0 duration-300 ${isClicked?'top-0':'-top-full opacity-0'}  shadow-xl `}>
                            <div className="navLink-Container flex p-8  flex-col items-center gap-6">
                                <button aria-label='close menu' className='text-base text-gray-600 hover:text-red-500' onClick={()=>changeState(prev => !prev)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                </button>
                                <Link href={'/About'} className='text-base text-gray-600 hover:text-red-500'>About</Link>
                                <Link href={'/About'} className='text-base text-gray-600 hover:text-red-500'>Features</Link>
                                <Link href={'/About'} className='text-base text-gray-600 hover:text-red-500'>Pricing</Link>
                                <Link href={'/About'} className='text-base text-gray-600 hover:text-red-500'>Testimonials</Link>
                                <Link href={'/About'} className='text-base text-gray-600 hover:text-red-500'>Help</Link>
                            </div>
                            <div className="cta-container text-center p-5 border-t">
                                <Button clickFunc={()=>{return}} params='' classes=' text-base text-gray-800 font-medium px-7 py-2' value='Sign Up' />
                                <Button clickFunc={()=>{return}} params='' classes='rounded-full text-base text-red-500 border border-red-500 px-7 py-2 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out' value='Sign Up' />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar