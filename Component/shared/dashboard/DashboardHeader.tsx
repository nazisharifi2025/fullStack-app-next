import { PanelRightOpen } from 'lucide-react'
import React from 'react'

function DashboardHeader() {
  return (
    <div  className='w-full'>
    <div className='w-full py-2 flex justify-between px-3' >
        <div className='flex items-center space-x-2.5'>
            <PanelRightOpen/>
            <span>Ecommerce App</span>
        </div>
        <div></div>
    </div>
    </div>
  )
}

export default DashboardHeader