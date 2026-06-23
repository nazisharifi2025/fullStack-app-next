import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboardIcon, Package, ShoppingCart, SquareUserRound } from "lucide-react";
import Image from "next/image";
import  { useState } from "react";
function DashboardSidbar({showText}: {showText:boolean}) {
  return (
    <Card className={`rounded-none transition-all duration-700 ${showText? "w-3xs" : "w-fit"}   flex flex-col justify-between dark:bg-black bg-stone-50 py-1 h-full min-h-screen`}>
          <div className="">
            <CardHeader className="px-2 py-2">
              <CardTitle className="flex w-fit gap-2 items-center">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  height={30}
                  width={30}
                />
                <span
                  className={`${showText ? "block" : "hidden"} text-xl font-bold`}
                >
                  Prostore
                </span>
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-0 px-2 mt-4">
              <ScrollArea>
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-2 items-center w-fit">
                    <LayoutDashboardIcon />
                    <span className={`${showText ? "block" : "hidden"}`}>
                      Dashboard
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center w-fit">
                    <Package />
                    <span className={`${showText ? "block" : "hidden"}`}>
                      Products
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center w-fit">
                    <SquareUserRound />
                    <span className={`${showText ? "block" : "hidden"}`}>
                      Customers
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center w-fit">
                    <ShoppingCart />
                    <span className={`${showText ? "block" : "hidden"}`}>
                      Cart
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center w-fit">
                    <LayoutDashboardIcon />
                    <span className={`${showText ? "block" : "hidden"}`}>
                      Reviws
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center w-fit">
                    <LayoutDashboardIcon />
                    <span className={`${showText ? "block" : "hidden"}`}></span>
                  </div>
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </CardContent>
          </div>
          <div>
            <CardDescription></CardDescription>

            <CardFooter className={`px-1  py-2 hidden md:block `}>
              <span className={` text-xs ${showText? "block" : "hidden "}`}>{ new Date().getFullYear()} &copy; sharifi Programming Acadmic</span>
            </CardFooter>
          </div>
        </Card>
  )
}

export default DashboardSidbar