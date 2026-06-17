"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SignUpForm } from "@/lib/action/auth.action"
import Link from "next/link"
import { useActionState } from "react"

export default function CardDemo() {
  const [data , func] = useActionState(SignUpForm, {
    message: "" ,
    status: false
  })
  return (
    <div className=" w-full min-h-screen flex justify-center items-center">
           <Card className="w-full max-w-md ">
      <CardHeader>
        <CardTitle className="text-2xl font-bolde" >Create an acount</CardTitle>
        {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <form action={func}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                required
                name="name"
              />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {/* <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a> */}
              </div>
              <Input id="password" type="password" name="password" required />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="ConfirmPassword">Confirm Password</Label>
              <Input id="ConfirmPassword" type="password" name="confirmPassword" required />
              {!data.status && data.message === "not mutched" &&(
                <div>
                  <span className=" text-sm font-bolde text-red-500">The password not mutched</span>
                </div>
              )}
            </div>
            <div className="grid gap-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" type="text" name="phoneNumber" required />
            </div>
          </div>
        <Button type="submit" className="w-full my-4">
          Sign Up
        </Button>
        </form>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2">
       <Button variant="ghost" className="w-full">
          alredy have acount <Link href="Sign-up">Sign In</Link>
        </Button> 
      </CardFooter> */}
    </Card>
    </div>
  )
}
