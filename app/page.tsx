"use client"

import Nav from './ui/componant/navbar'
import HeroSec from './ui/componant/heroSec'
import Stats from './ui/componant/stats'
import Featurs from './ui/componant/featurs'
import PriceSection from './ui/componant/priceSection'
import GlobalMap from './ui/componant/globalMap'
import FeedbackSection from './ui/componant/feedbackSection'
import FeedbackSlider from './ui/componant/FeedbackSlider'
import SubscribeCard from './ui/componant/subscribeCard'
import Footer from './ui/componant/Footer'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [isInteracting,setInteracting] = useState(false);
  const priceRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        setInteracting(entry.isIntersecting)
    });
    console.log(isInteracting)
    observer.observe(priceRef.current!);
    return ()=> observer.disconnect();
  },[isInteracting]);

  return (
    <>
      <div className='container mx-auto px-10'>
        <Nav />
        <HeroSec />
        <Stats />
        <Featurs />
      </div>
      <div className='bg-stone-50' ref={priceRef}>
        <div className="container mx-auto px-6">
          <PriceSection />
        </div>
        <div className='container mx-auto px-6'>
          <GlobalMap />
        </div>
        <div className='container mx-auto px-6'>
          <FeedbackSection />
        </div>
        <div>
          <FeedbackSlider />
        </div>
        <div className="bg-stone-200 mt-36">
          <div className='container mx-auto px-10'>
            <Footer />
          </div>
        </div>
      </div>
      
    </>
  )
}
