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
import { Login } from "@/lib/action/auth.action"
import Link from "next/link"
import { useActionState } from "react"

export default function CardDemo() {
  const [state , action] = useActionState(Login, {
    data: "",
    success: false,
  })
  if(state.data !== "somting went wrong"){
    localStorage.setItem("token", state.data);
  }
  return (
    <div className=" w-full h-screen flex justify-center items-center">
           <Card className="w-full max-w-sm">
        <form action={action}>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
              {state.errors && 
              <div className=" text-red-500 text-sm">
                {state.errors?.email.map((x:string)=>(
                  <span>{x}</span>
                ))}
              </div>
                }
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" name="password" type="password" required />
               {state.errors && 
              <div className=" text-red-500 text-sm">
                {state.errors?.password.map((y:string )=>(
                  <span>{y}</span>
                ))}
              </div>
                }
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 my-4">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button type="submit" variant="ghost" className="w-full">
          alredy have acount <Link href="Sign-up">Sign Up</Link>
        </Button>
      </CardFooter>
        </form>
    </Card>
    </div>
  )
}
