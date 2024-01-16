'use client'
import Image from 'next/image'
import { ReactNode, useEffect, useRef, useState } from 'react';


interface props {
    children: React.ReactNode
}


const Stats = () => {
    const [isIntersecting, setIntersecting] = useState(false);
    const [interactionTime, setInteractionTime] = useState(0);
    const userRef = useRef<HTMLDivElement>(null);
    
    
    function updateCounter(el:HTMLElement){
        let counter = 0;
        const maxValue = parseInt(el.getAttribute('data-max')!)
        const counterInterval = setInterval(function(){
            el.innerText = counter + '+';
            counter++
            if(counter > maxValue){
                clearInterval(counterInterval)
            }           
        },30)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(([entry])=>{
            setIntersecting(entry.isIntersecting);
            if(entry.isIntersecting){
                if(interactionTime <= 1){
                    setInteractionTime(interactionTime + 1);
                }
            }
            
        });
        observer.observe(userRef.current!);
        return () => observer.disconnect();
    }, [isIntersecting, interactionTime]);

    useEffect(()=>{
        if(isIntersecting && interactionTime <=1 ){
            userRef.current?.querySelectorAll('.stat-points').forEach((el)=>{
                updateCounter(el as HTMLElement)
            })
        }
    },[isIntersecting, interactionTime])

    return (
        <div className='bg-white container mt-10 md:mt-0 mx-auto px-5 md:px-20 mb-10 statisticCard'>
            <div ref={userRef} className='bg-white py-10 px-10 rounded-xl shadow-2xl shadow-gray-300 flex flex-col md:flex-row md:items-center justify-evenly'>
                <div className="stat-container gap-5 flex items-center">
                    <div className="stat-image  bg-red-100 p-5 rounded-full">
                        <Image src={'/img/user_stat_img.png'} alt="stat icons" height={30} width={30} />
                    </div>
                    <div className="stat-content">
                        <h1  className='stat-points text-2xl font-bold text-gray-800' data-max="90">0+</h1>
                        <p className='text-xl font-normal text-gray-600'>Users</p>
                    </div>
                </div>
                <div className='hline md:h-20 h-px md:w-px w-full my-5 md:my-0 bg-gray-200 '></div>
                <div className="stat-container gap-5 flex items-center">
                    <div className="stat-image  bg-red-100 p-5 rounded-full">
                        <Image src={'/img/location_stat_img.png'} alt="stat icons" height={30} width={30} />
                    </div>
                    <div className="stat-content">
                        <h1 className='stat-points text-2xl font-bold text-gray-800' data-max="30">0+</h1>
                        <p className='text-xl font-normal text-gray-600'>Location</p>
                    </div>
                </div>
                <div className='hline md:h-20 h-px md:w-px w-full my-5 md:my-0 bg-gray-200 '></div>
                <div className="stat-container gap-5 flex items-center">
                    <div className="stat-image  bg-red-100 p-5 rounded-full">
                        <Image src={'/img/server_stat_img.png'} alt="stat icons" height={30} width={30} />
                    </div>
                    <div className="stat-content">
                        <h1 className='stat-points text-2xl font-bold text-gray-800' data-max="150">0+</h1>
                        <p className='text-xl font-normal text-gray-600'>Servers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats