'use client'

import React, { useRef, useState } from 'react'
import PriceCard from './priceCard'

interface PriceDetails {
    id : number
    planName : string
    planPoints : Array<string>
    planPrice : string
    selected : boolean
}

const priceDetails : PriceDetails[] = [
    {
        id:0,
        planName:'Free Plan',
        planPoints:['Unlimited Bandwitch','Encrypted Connection','No Traffic Logs','Works on All Devices'],
        planPrice:'free',
        selected:false,
    },
    {
        id:1,
        planName:'Standard Plan',
        planPoints:['Unlimited Bandwitch','Encrypted Connection','Yes Traffic Logs','Works on All Devices','Connect Anyware'],
        planPrice:'9',
        selected:true,
    },
    {
        id:2,
        planName:'Premium Plan',
        planPoints:['Unlimited Bandwitch','Encrypted Connection','Yes Traffic Logs','Works on All Devices','Connect Anyware','Get New Features'],
        planPrice:'12',
        selected:false,
    }
]

const PriceSection = () => {
    const[isSelect, selectPlan] = useState(priceDetails[1].id);
    
    function planSelection(id:number){
        selectPlan(id)
    }
  return (
    <div className='pt-16'>
        <h1 className='text-4xl font-semibold text-gray-800 text-center mb-5'>Choose Your Plan</h1>
        <p className='text-base font-normal text-gray-600 text-center mb-16'>Let&apos;s choose the package that is best for you and explore it happily and cheerfully.</p>
        <div className='flex flex-col md:flex-row gap-10 align-items-center justify-center mx-0 md:mx-20'>
            {
                priceDetails.map((details,index)=>{
                    return <PriceCard key={details.id} params={details.id} planName={details.planName} planPoints={details.planPoints} planPrice={details.planPrice} selected={details.id == isSelect ? true : false} selectPlan={planSelection}/>
                })
            }
        </div>
    </div>
  )
}

export default PriceSection