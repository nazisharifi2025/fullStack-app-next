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
    success: false,
    message: ""
  })
  return (
    <div className=" w-full h-screen flex justify-center items-center">
           <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="name"
                placeholder="m@example.com"
                required
              />
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
            </div>
          </div>
      <CardFooter className="flex-col gap-2 my-4">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button type="submit" variant="ghost" className="w-full">
          alredy have acount <Link href="Sign-up">Sign Up</Link>
        </Button>
      </CardFooter>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}
