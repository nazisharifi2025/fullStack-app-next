import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { LayoutDashboardIcon } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div className='w-full p-2 flex'>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle >
                        <span><LayoutDashboardIcon/> Dashboard</span>
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
    </div>
  )
}

export default page