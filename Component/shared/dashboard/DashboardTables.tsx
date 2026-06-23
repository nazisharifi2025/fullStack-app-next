import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,  } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MarketOrderIcon } from '@hugeicons/core-free-icons'
import { CalendarDays, ListOrdered } from 'lucide-react'
import React from 'react'

function DashboardTables() {
  return (
    <div className=' w-full mx-auto p-5'>
        <div className=' p-3 rounded-lg border-gray-300 bg-white'>
               <div className=' flex justify-between items-center w-full p-4'>
                <div className=' flex items-center space-x-2'>
                <Button variant="outline" className='rounded-md bg-white p-2'><CalendarDays /></Button>
                <span>Recent Orders</span>
                <span  className='rounded-md py-1 px-1   bg-gray-200/50 border text-xs border-gray-300'>20</span>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <Input placeholder='Search Order... (e.g.,' className=' rounded-md bg-white'/>
                    </div>
                </div>
       
        <Table className=' p-4'>
           <TableHeader className='p-4 bg-gray-50'>
    <TableRow>
      <TableHead className="w-[100px]">#</TableHead>
      <TableHead>Order</TableHead>
      <TableHead>Customer</TableHead>
      <TableHead className="text-right">Status</TableHead>
      <TableHead className="text-right">Total</TableHead>
      <TableHead className="text-right">Date</TableHead>
    </TableRow>
  </TableHeader>
   <TableBody>
    <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell className=' flex flex-col'>ORD-2024-001 <span className='text-xs text-gray-300'>2 items</span></TableCell>
      <TableCell>Sarah Johnson </TableCell>
      <TableCell className="text-right">Delivered</TableCell>
      <TableCell className="text-right">$2,499.00</TableCell>
      <TableCell className="text-right">Jan 28, 2024</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell className=' flex flex-col'>OTD-2024-003 <span className='text-xs text-gray-300'>2 items</span></TableCell>
      <TableCell>Sarah Johnson </TableCell>
      <TableCell className="text-right">Delivered</TableCell>
      <TableCell className="text-right">$9,439.00</TableCell>
      <TableCell className="text-right">Jan 25, 2024</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell className=' flex flex-col'>OTW-2024-003 <span className='text-xs text-gray-300'>2 items</span></TableCell>
      <TableCell>Sarah Johnson </TableCell>
      <TableCell className="text-right">Delivered</TableCell>
      <TableCell className="text-right">$2,435.00</TableCell>
      <TableCell className="text-right">Jan 24, 2024</TableCell>
    </TableRow>
  </TableBody>
        </Table>
         </div>
    </div>
  )
}

export default DashboardTables