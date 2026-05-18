"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Star } from 'lucide-react'
import React, { useState } from 'react'

function Comment() {
  return (
    <div className=' flex flex-col gap-3'>
        <h2  className=' text-xl  text-gray-600 font-medium'>Share Your Review about recently purchased product!</h2>
       <div className=' flex gap-2.5'>
         {Array.from({length: 5} , (_ , index)=>(
          <Star key={index} />
        ))}
       </div>
        <form className=' w-full flex flex-col gap-3' action="">
        <Textarea placeholder='Write Your Comment...' className=' h-56' />
        <Button className=' rounded-md w-fit px-6 py-5'>Send</Button>
        </form>
    </div>
  )
}

export default Comment