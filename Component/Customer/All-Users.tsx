"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { deleteUser, getAllUser } from "@/lib/action/Customer.action"
import { useActionState, useEffect, useState } from "react"

function AllUsers() {
    const [data , action] = useActionState(deleteUser , {
        message: "",
        state: false
    })
    const [users , setUsers] = useState<{id:number , name:string , email:string , role:string}[] | null>();
    useEffect(()=>{
        async function getUser(){
           const data = await getAllUser();
           setUsers(data.data);
        }
        getUser();
    },[])
    if(!users) return ;
  return (
    <div className=" w-full flex mx-auto flex-col">
        <h1 className="text-gray-300">All User</h1>
        <Table className="w-full border">
            <TableHeader>
                <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Delete</TableHead>
                <TableHead>Update</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user:any)=>(
                    <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                            {/* <form action={action}  >
                                <Input type="text" defaultValue={user.id} name="id" className="hidden"/>
                                <Button variant="destructive" type="submit">Delete</Button>
                            </form> */}
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant='destructive'>Delete</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                   <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Item</AlertDialogTitle>
                                    <AlertDialogDescription>Are you sure you want to delete {user.name}</AlertDialogDescription>
                                   </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </TableCell>
                        <TableCell>
                            <Button variant="default">Update</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default AllUsers