import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function InsertProduct() {
  return (
    <div className=' w-full p-5 flex justify-center  flex-col'>
        <h1 className=' text-3xl w-10/12 mx-auto font-bold  my-3'>Insert Product</h1>
        <form action="" className='w-10/12 mx-auto grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='name' >Name</Label>
            <Input type='text' className=' rounded-md' placeholder='Name' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='name' >Price</Label>
            <Input type='text' className=' rounded-md' placeholder='Name' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='stock' >Stock</Label>
            <Input type='text' className=' rounded-md' placeholder='stock' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='brand' >Brand</Label>
            <Input type='text' className=' rounded-md' placeholder='brand' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='name' >Expire Date</Label>
            <Input type='text' className=' rounded-md' placeholder='Name' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='name' >Man Date</Label>
            <Input type='text' className=' rounded-md' placeholder='Name' />
        </div>
        <Button className=' rounded-md w-fit'>Add Product</Button>
        </form>
    </div>
  )
}

export default InsertProduct