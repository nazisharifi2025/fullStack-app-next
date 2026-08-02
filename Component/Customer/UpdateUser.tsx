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
            <Input type='text' placeholder='Update Your User Name' className=' rounded-md'/>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default UpdateUser