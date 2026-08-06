import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function UpdateUser() {
  return (
    <div className=' h-screen w-full flex justify-center items-center'>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Update</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Update User</AlertDialogTitle>
          <form action="">
            <Input type='text' placeholder='Update Your User Name' name="name" className=' rounded-md'/>
            <Input type='text' placeholder='Update Your Last Name' name="lastName" className=' rounded-md'/>
            <Input type='text' placeholder='Update Your User Email' name="email" className=' rounded-md'/>
            <Input type='number' placeholder='Update Your Password' name="password" className=' rounded-md'/>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default UpdateUser