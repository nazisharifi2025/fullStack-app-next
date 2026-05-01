// import { DropdownMenu , DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';
async function UserButton() {
  return (
    <div className='flex gap-2 items-center '>
         <Button asChild>
              <Link href="/sign-in">
                <UserIcon /> Sign In
              </Link>
            </Button>
        {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='flex justify-center items-center'>
                    <Button variant="ghost" className='flex justify-center items-center relative h-8 w-8  rounded-full bg-gray-200'>{firstLetterOfName}</Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount >
                <DropdownMenuLabel className='font-normal'>
                    <div className='font-medium  text-sm leading-none'>
                        {session.user?.name}
                    </div>
                    <div className='text-sm text-muted-foreground leading-none border-b w-full pb-4'>
                        {session.user?.email}
                    </div>
                   {user?.role === "Admin" && (
                    <div className='flex-col flex space-y-1 py-2'>
                        <span>Admin</span>
                            <Link className='px-3' href="/Admin/InsertProduct">Add Product</Link>
                            <Link className='px-3' href="/Admin/All-product">All Product</Link>
                    </div>
                   )}
                </DropdownMenuLabel>
                <DropdownMenuItem  className='p-0 my-1'>
                     <form action={signOutuser} className='w-full'>
                        <Button type='submit' variant="ghost" className='w-full py-4 px-2 h-4 justify-start'>Sign Out</Button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu> */}
    </div>
  )
}

export default UserButton