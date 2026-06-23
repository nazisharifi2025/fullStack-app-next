import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Bell, PanelRightOpen } from 'lucide-react'
import React from 'react'
import ToggleTheme from '../header/Toggel-Theme'

function DashboardHeader({setShowText , showText}: {setShowText:any , showText: boolean}) {
  return (
    <div  className='w-full'>
    <div className='w-full py-1.75  px-3 flex justify-between' >
        <div className='flex items-center space-x-2.5'>
            <PanelRightOpen onClick={()=> setShowText(!showText)}/>
            <span>Ecommerce App</span>
        </div>
        <div className='flex gap-3 '>
            <Input placeholder='Search...' type='search'/>
            <Button variant="outline" className=' relative rounded-md'>
                <Bell />
                <span className='px-1.5 rounded-full bg-red-500 text-white absolute -top-2 -right-2'>2</span>
            </Button>
            <ToggleTheme />
        </div>
    </div>
    <Separator />
    </div>
  )
}

export default DashboardHeader