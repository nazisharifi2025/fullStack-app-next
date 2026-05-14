import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function Comment() {
  return (
    <div className=' flex flex-col gap-3'>
        <h2  className=' text-xl  text-gray-600 font-medium'>Share Your Review about recently purchased product!</h2>
        <Textarea placeholder='Write Your Comment...' className=' h-56' />
        <Button className=' rounded-md w-fit px-6 py-5'>Send</Button>
    </div>
  )
}

export default Comment