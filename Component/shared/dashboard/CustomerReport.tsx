import { ArrowUpRight, UserCheck2Icon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function CustomerReport() {
    const [currentCustomer , setCurrentCustomer] = useState<{currentUser:number}>({currentUser:0});
    const [PrevCustomer , setPrevCustomer] = useState<{previousUser:number}>({previousUser:0});
    useEffect(()=>{
        async function GetData(): Promise<void>{
           const data = await fetch('http://localhost:8000/api/dashboard/report-of-current-user');
           const response = await data.json();
           const data2 = await fetch('http://localhost:8000/api/dashboard/report-of-previous-user');
           const response2 = await data2.json();
          setCurrentCustomer(response);
          setPrevCustomer(response2);
        }
        GetData();
    },[])
  return (
    <div className="flex flex-col space-y-3">
             <span className="flex gap-1 items-center dark:text-stone-50 text-gray-500 text-sm">
               <UserCheck2Icon size={18} /> New Customer
             </span>
             <span className="text-gray-400 text-xs dark:text-stone-100">
               {PrevCustomer.previousUser} previous month
             </span>
             <span className="text-2xl font-bold">{currentCustomer.currentUser}</span>
             <span className="flex gap-1 items-center text-xs">
               <ArrowUpRight size={18} className="text-green-600" /> 40.5% vs
               previous month
             </span>
           </div>
  )
}

export default CustomerReport