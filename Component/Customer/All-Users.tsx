"use client"

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getAllUser } from "@/lib/action/Customer.action"
import { notFound } from "next/navigation";
import { useEffect, useState } from "react"

function AllUsers() {
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
                            <Button variant="destructive">delete</Button>
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