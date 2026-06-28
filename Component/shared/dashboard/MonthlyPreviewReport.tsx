"use client"
import { ArrowUpRight, CircleDollarSign, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'


 function MonthlyPreviewReport() {
const [getcurrentMonthReport , setgetcurrentMonthReport] = useState<{reviews: number}>({reviews: 0});
const [previewsMonthReviewsCount, setpreviewsMonthReviewsCount] = useState<{allReviewsCounte: number}>();
useEffect(()=>{
    async function getpreviewsMonthReport(){
        const data = await fetch('http://localhost:8000/api/dashboard/previews-months');
        const respose = await data.json();
        setpreviewsMonthReviewsCount(respose);
    }
    // async function currentMonthReport(){
    //     const data = await getpreviewsMonthReport()
    // }
    // 
        async function getReportOfReview(){
        const data = await fetch('http://localhost:8000/api/dashboard/all-reviews')
        const response = await data.json();
        return response;     
     }
     async function currentReports() {
        const data  = await getReportOfReview()
        setgetcurrentMonthReport(data);
     }
     currentReports()
     getpreviewsMonthReport()
    },[])
  return (
       <div className=' flex flex-col gap-3 border-r px-2'>
         <span className=' text-xs text-gray-300 flex space-x-3 items-center gap-1.5'><Star size={15}/>Reviwed Product</span>
         <span className=' text-gray-400 text-md'>{previewsMonthReviewsCount?.allReviewsCounte} Previws monthly</span>
         <span className=' text-2xl font-bold'>{getcurrentMonthReport.reviews}</span>
         <span className=' flex space-x-2 text-sm items-center text-gray-300'><span className=' text-green-400 flex'><ArrowUpRight size={18}  />45.5% </span> vs Previous month</span>
       </div>
  )
}

export default MonthlyPreviewReport