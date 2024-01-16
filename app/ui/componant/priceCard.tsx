import React from 'react'
import Image from 'next/image'
import Button from './button'

const priceCard = ({ params,planName, planPoints, planPrice,selected, selectPlan }: { params:string | number, planName: string, planPoints: Array<string>, planPrice: string, selected:boolean, selectPlan:Function }) => {
    return (
        <div className={`border ${selected?'border-red-300':'border-gray-300'} grid gap-7 rounded-lg bg-white p-14`}>
            <div className='flex flex-col gap-7'>
                <div className="img-container flex justify-center">
                    <Image alt='price-image' src={'/img/price_img.png'} height={200} width={100} />
                </div>
                <div className="price-name text-center">
                    <h1 className='text-lg font-medium text-gray-900'>{planName}</h1>
                </div>
                <div className="price-point-container grid gap-2">
                    {planPoints.map((points,index) => {
                        return <div key={index} className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                        </svg><p className='text-sm font-medium text-gray-600 '>{points}</p></div>
                    })}
                </div>
            </div>
            <div className='self-end text-center mt-10'>
                <div className="price-amount mb-5">
                    {
                        planPrice == 'free' ? <h1 className='font-semibold text-2xl text-gray-800'>Free</h1> : <h1 className='font-semibold text-2xl text-gray-500'><span className='text-gray-800'>${planPrice}</span> / mo</h1>
                    }
                </div>
                <div className="price-selection">
                    <Button classes={`rounded-full border-red-500 font-bold text-base border px-16 py-2 ${selected?'text-white shadow-xl shadow-red-200 bg-red-500 ':'text-red-500 hover:bg-red-500 hover:text-white'}`} value='Select' clickFunc={selectPlan} params={params}/>
                </div>
            </div>
        </div>
    )
}

export default priceCard