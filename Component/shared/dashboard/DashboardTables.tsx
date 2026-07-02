import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,  } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { fetchAllProduct } from '@/lib/action/product.action'
import { MarketOrderIcon } from '@hugeicons/core-free-icons'
import { CalendarDays, ListOrdered } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'

function DashboardTables() {
  const [products , setProducts] = useState<any>(null)
  const [link , setLink] = useState<any>("http://localhost:8000/api/dashboard/all-product?page=1")
  useEffect(()=>{
    async function getProduct(){
      const data = await fetchAllProduct(link);
      setProducts(data);      
    }
    getProduct()
  },[link]);
  if(!products){
    return(
      <div> Loding.... </div>
    )
  }
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
      <TableHead>name</TableHead>
      <TableHead>Price</TableHead>
      <TableHead >Manefacturer Date</TableHead>
      <TableHead >Expire Date</TableHead>
    </TableRow>
  </TableHeader>
   <TableBody>
    {products.data.map((x:any)=>{
      return(
      <TableRow key={x.id}>
        <TableCell>{x.id}</TableCell>
        <TableCell>{x.name}</TableCell>
        <TableCell>{x.price}</TableCell>
        <TableCell>{x.man_date}</TableCell>
        <TableCell>{x.expire_date}</TableCell>
      </TableRow>
      )
    })}
  </TableBody>
        </Table>
         </div>
       <div className=' w-full flex justify-between items-center p-2'>
            {products.links?.map((x:any)=>(
            <Button onClick={()=> setLink(x.url? x.url : `http://localhost:8000/api/product?page=${products.current_page}`)} key={x.label} className=" rounded-md" variant={x.active ?  "default" : "outline"} dangerouslySetInnerHTML={{ __html: x.label}} ></Button>
        ))}
       </div>
    </div>
  )
}

export default DashboardTables