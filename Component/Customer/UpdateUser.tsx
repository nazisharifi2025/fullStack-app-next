import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
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
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default UpdateUser