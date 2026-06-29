import { ArrowUpRight, CircleDollarSign, ShoppingBasket, Star, User } from 'lucide-react'
import React from 'react'
import MonthlyPreviewReport from './MonthlyPreviewReport'

function OverAllReport() {
  return (
    <div className=' w-full mx-auto p-5'>
        <div className=' max-w-6xl w-full dark:bg-stone-400/60 grid md:grid-cols-4 grid-cols-1 bg-white rounded-md border border-gray-200 p-4'>
            <div className=' flex flex-col gap-3 border-r px-2'>
                <span className=' text-xs text-gray-300 flex space-x-3 items-center gap-1.5'><CircleDollarSign size={15}/> Monthly Revenume</span>
                <span className=' text-gray-400 text-md'>4000 Previws monthly</span>
                <span className=' text-2xl font-bold'>8000</span>
                <span className=' flex space-x-2 text-sm items-center text-gray-300'><span className=' text-green-400 flex'><ArrowUpRight size={18}  />45.5% </span> vs Previous month</span>
            </div>
          {/*  */}
          <MonthlyPreviewReport/>
            <div className=' flex flex-col gap-3 border-r px-2'>
                <span className=' text-xs text-gray-300 flex space-x-3 items-center gap-1.5'><User size={15}/> New Customer</span>
                <span className=' text-gray-400 text-md'>3200 Previws monthly</span>
                <span className=' text-2xl font-bold'>8500</span>
                <span className=' flex space-x-2 text-sm items-center text-gray-300'><span className=' text-green-400 flex'><ArrowUpRight size={18}  />45.5% </span> vs Previous month</span>
            </div>
            <div className=' flex flex-col gap-3 px-2'>
                <span className=' text-xs text-gray-300 flex space-x-3 items-center gap-1.5 '><ShoppingBasket size={15}/> Total Product</span>
                <span className=' text-gray-400 text-md'>500 Previws monthly</span>
                <span className=' text-2xl font-bold'>600</span>
                <span className=' flex space-x-2 text-sm items-center text-gray-300'><span className=' text-green-400 flex'><ArrowUpRight size={18}  />45.5% </span> vs Previous month</span>
            </div>
           
        </div> 
    </div>
  )
}

export default OverAllReport