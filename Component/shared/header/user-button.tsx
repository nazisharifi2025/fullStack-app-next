"use client"
// import { DropdownMenu , DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button';
import { getUser } from '@/lib/action/auth.action';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
type User = {
    name: string ,
    email: string,
    password:number,
    phone_number: string
}
 function UserButton() {
    function HandelClick(){
        localStorage.removeItem('token');
         window.location.reload();
    }
    const [user , setUser] = useState<User | null>(null);
    useEffect(()=>{
        const token = localStorage.getItem('token') as string ;
        async function getUsers() : Promise<User>{
            return await getUser(token);
        }
        async function getU() {
          setUser (await getUsers())
        }
        getU();
    },[])
if(user && user.email){
    return(
        <div className=' flex space-x-2'>
            <span className=' px-3 text-center flex justify-center items-center py-1 rounded-full bg-gray-400 text-white '>
                {user.name.slice(0,1).toUpperCase()}
            </span>
            <Button onClick={HandelClick}>Sign Out</Button>
        </div>
    )
}
else{
      return(
        <div>
               <Button asChild>
          <Link href="/Sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
           <Button asChild>
          <Link href="/Sign-up">
            <UserIcon /> Sign Up
          </Link>
        </Button>
        </div>
      )
}
}

export default UserButton