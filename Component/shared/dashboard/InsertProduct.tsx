"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { StoreProduct } from '@/lib/action/product.action'
import { useActionState } from 'react'

function InsertProduct() {
    const [data , action] = useActionState(StoreProduct,{
        data : "",
        status: false
    })
  return (
    <div className=' w-full max-w-6xl items-center p-5 flex justify-center  flex-col'>
        <h1 className=' text-3xl w-10/12 mx-auto font-bold  my-3'>Insert Product</h1>
        <form action={action} className='w-10/12 mx-auto grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='name' >Name</Label>
            <Input type='text' className=' rounded-md' name='product_name' id='name' placeholder='Name' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='name' >Price</Label>
            <Input type='text' className=' rounded-md' name='product_price' id='price' placeholder='Name' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='stock' >Stock</Label>
            <Input type='text' className=' rounded-md' name='product_stock' id='stock' placeholder='stock' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='brand' >Brand</Label>
            <Input type='text' className=' rounded-md' name='product_brand' id='brand' placeholder='brand' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='expire_date' >Expire Date</Label>
            <Input type='date' className=' rounded-md' name='product_expire_date' id='expire_date' placeholder='Expire_date' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='man_date' >Man Date</Label>
            <Input type='date' className=' rounded-md' name='product_man_date' id='mane_Date' placeholder='Man Date' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='category' >Category</Label>
            <Input type='text' className=' rounded-md' name='product_category' id='category' placeholder='Product Category' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='images' >Images</Label>
            <Input type='file' className=' rounded-md' name='product_image_url1' id='images' />
            <Input type='file' className=' rounded-md' name='product_image_url2' id='images' />
            <Input type='file' className=' rounded-md' name='product_image_url2' id='images' />
        </div>
        <div className='flex flex-col gap-2'>
            <Label htmlFor='description' >Description</Label>
            <Textarea className=' rounded-md resize-none w-full h-32' name='product_description' id='description' placeholder='Product description' />
        </div>
        <div className=' w-full flex justify-center my-4 col-span-2 items-center'>
            <Button type='submit' className=' rounded-md w-fit  mx-auto'>Add Product</Button>
        </div>
        </form>
    </div>
  )
}

export default InsertProduct