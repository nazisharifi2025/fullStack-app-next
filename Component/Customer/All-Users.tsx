"use client"

import { getAllUser } from "@/lib/action/Customer.action"
import { useEffect, useState } from "react"

function AllUsers() {
    const [users , setUsers] = useState();
    useEffect(()=>{
        async function getUser(){
           const data = await getAllUser();
           setUsers(data);
        }
        getUser();
    },[])
  return (
    <div className=" w-full flex mx-auto flex-col">
        <h1>All User</h1>
    </div>
  )
}

export default AllUsers