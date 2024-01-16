"use client"

import Button from "./button"

const subscribeCard = () => {
  return (
    <div className='bg-white p-16 rounded-xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5 shadow-2xl shadow-zinc-300'>
        <div className="subscribe-content">
            <h1 className="text-4xl text-gray-800 font-semibold mb-3">Subscribe Now for <br></br> Get Special Features!</h1>
            <p className="text-base font-normal text-gray-600">Let&apos;s subscribe with us and find the fun.</p>
        </div>
        <div className="subscribe-button">
            <Button 
            classes="bg-red-500 border px-6 py-3 border-red-500 rounded-lg text-white text-base text-bold hover:bg-transparent hover:text-red-500 shadow shadow-2xl shadow-red-300 "
            value="Subscribe Now"
            clickFunc={()=>{return null}}
            params = ''
            />
        </div>
    </div>
  )
}

export default subscribeCard