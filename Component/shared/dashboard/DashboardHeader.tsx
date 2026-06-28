"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Bell, LayoutDashboardIcon, Menu, Package, PanelRightOpen, ShoppingCart, SquareUserRound, X } from 'lucide-react'
import React, { useState } from 'react'
import ToggleTheme from '../header/Toggel-Theme'
import Image from 'next/image'
import Link from 'next/link'

function DashboardHeader({setShowText , showText}: {setShowText:any , showText: boolean}) {
    const [navOpin , setNavOpin] = useState(false);
  return (
    <div  className='w-full px-4 md:px-0'>
    <div className='w-full py-1.75  px-3 flex justify-between' >
        <div className='flex items-center space-x-2.5'>
            <PanelRightOpen onClick={()=> setShowText(!showText)}/>
            <span>Ecommerce App</span>
        </div>
        <div className='md:flex hidden gap-3 w-full '>
            <Input placeholder='Search...' type='search'/>
            <Button variant="outline" className=' relative rounded-md'>
                <Bell />
                <span className='px-1.5 rounded-full bg-red-500 text-white absolute -top-2 -right-2'>2</span>
            </Button>
            <ToggleTheme />
        </div>
        <div>
            <Menu onClick={()=> setNavOpin(true)} className=" block md:hidden" />
        </div>
    </div>
    <Separator />
    <div className={` ${navOpin? "block " : "hidden"} absolute top-0 bg-white/50 backdrop-blur-md  left-0 w-full min-h-screen`}>
    <div className=' flex items-center justify-between w-full '>
        <Image src="/logo.svg" alt='somting' className=' h-12 w-12 m-4' height={100} width={100} />
        <div className='flex items-center space-x-2'>
            <ToggleTheme />
            <X onClick={()=>setNavOpin(false)} />
        </div>
    </div>
        <Separator />
          <div className="flex flex-col my-4
           space-y-4">
                  <Link href='Dashbord' className="flex space-x-2 hover:text-black/50 items-center w-fit">
                    <LayoutDashboardIcon />
                    <span className={`${showText ? "block " : "hidden"}`}>
                      Dashboard
                    </span>
                  </Link>
                  <Link href='Product' className="flex space-x-2 hover:text-black/50 items-center w-fit">
                    <Package />
                    <span className={`${showText ? "block " : "hidden"}`}>
                      Products
                    </span>
                  </Link>
                  <Link href='Customer' className="flex space-x-2 hover:text-black/50 items-center w-fit">
                    <SquareUserRound />
                    <span className={`${showText ? "block " : "hidden"}`}>
                      Customers
                    </span>
                  </Link>
                  <Link href='Cart' className="flex space-x-2 hover:text-black/50 items-center w-fit">
                    <ShoppingCart />
                    <span className={`${showText ? "block " : "hidden"}`}>
                      Cart
                    </span>
                  </Link >
                  <Link href='Reviews' className="flex space-x-2 hover:text-black/50 items-center w-fit">
                    <LayoutDashboardIcon />
                    <span className={`${showText ? "block " : "hidden"}`}>
                      Reviews
                    </span>
                  </Link>
                </div>
    </div>
    </div>
  )
}

export default DashboardHeader