"use client"
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { LayoutDashboardIcon } from 'lucide-react'
import React, { useState } from 'react'

function page() {
    const [showText , setShowText] = useState(true)
  return (
    <div className='w-full p-2 flex'>
        <div className='max-w-3xl w-0'>
            <Card className='rounded-none'>
                <CardHeader>
                    <CardTitle className='flex items-center w-fit space-x-2' >
                        <LayoutDashboardIcon size={24} />
                        <span className={`${showText? "block" : "hidden"}`}> Dashboard</span>
                    </CardTitle>

                </CardHeader>
            </Card>
        </div>
    </div>
  )
}

export default page